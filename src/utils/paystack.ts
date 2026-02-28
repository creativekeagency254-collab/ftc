declare global {
  interface Window {
    PaystackPop?: {
      setup: (config: {
        key: string;
        email: string;
        amount: number;
        currency?: string;
        ref?: string;
        metadata?: Record<string, unknown>;
        callback?: (response: { reference: string; [key: string]: unknown }) => void;
        onClose?: () => void;
      }) => {
        openIframe: () => void;
      };
    };
  }
}

const PAYSTACK_SCRIPT_URL = 'https://js.paystack.co/v1/inline.js';

export const PAYSTACK_PUBLIC_KEY =
  import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_69283fe06fedab5b485efdae233a92be25d77c6b';

const loadPaystackScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.PaystackPop) {
      resolve();
      return;
    }

    const existing = document.querySelector(`script[src="${PAYSTACK_SCRIPT_URL}"]`) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Failed to load Paystack script.')));
      return;
    }

    const script = document.createElement('script');
    script.src = PAYSTACK_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Paystack script.'));
    document.body.appendChild(script);
  });
};

interface PaystackCheckoutParams {
  email: string;
  amountKsh: number;
  customerName: string;
  customerPhone: string;
  productName: string;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
}

interface PaystackInvoiceRequestParams {
  email: string;
  customerName: string;
  customerPhone: string;
  productName: string;
  amountKsh: number;
}

interface PaystackInvoiceResponse {
  status: boolean;
  message: string;
  requestCode?: string;
  customerEmailSent?: boolean;
  dealerNotified?: boolean;
}

export const PAYSTACK_FIXED_AMOUNT_KSH = 2;
const configuredInvoiceEndpoint = String(import.meta.env.VITE_PAYSTACK_INVOICE_ENDPOINT || '').trim();
const PAYSTACK_INVOICE_ENDPOINT_CANDIDATES = Array.from(
  new Set([configuredInvoiceEndpoint, '/api/paystack-invoice', '/.netlify/functions/paystack-invoice'].filter(Boolean))
);
export const PAYSTACK_INVOICE_ENDPOINT = PAYSTACK_INVOICE_ENDPOINT_CANDIDATES[0] || '';

export const startPaystackCheckout = async ({
  email,
  amountKsh,
  customerName,
  customerPhone,
  productName,
  onSuccess,
  onClose,
}: PaystackCheckoutParams): Promise<void> => {
  await loadPaystackScript();

  if (!window.PaystackPop) {
    throw new Error('Paystack is not available.');
  }

  const amountInKobo = Math.round(amountKsh * 100);
  const reference = `FT-${Date.now()}`;

  const handler = window.PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email,
    amount: amountInKobo,
    currency: 'KES',
    ref: reference,
    metadata: {
      custom_fields: [
        { display_name: 'Customer Name', variable_name: 'customer_name', value: customerName },
        { display_name: 'Customer Phone', variable_name: 'customer_phone', value: customerPhone },
        { display_name: 'Product', variable_name: 'product_name', value: productName },
      ],
    },
    callback: (response) => {
      onSuccess(response.reference);
    },
    onClose: () => {
      onClose?.();
    },
  });

  handler.openIframe();
};

export const requestPaystackInvoice = async ({
  email,
  customerName,
  customerPhone,
  productName,
  amountKsh,
}: PaystackInvoiceRequestParams): Promise<PaystackInvoiceResponse> => {
  if (!PAYSTACK_INVOICE_ENDPOINT_CANDIDATES.length) {
    throw new Error('Paystack invoice endpoint is not configured.');
  }
  const requestBody = JSON.stringify({
    email,
    customerName,
    customerPhone,
    productName,
    amountKsh,
  });

  let lastError: Error | null = null;

  for (let index = 0; index < PAYSTACK_INVOICE_ENDPOINT_CANDIDATES.length; index += 1) {
    const endpoint = PAYSTACK_INVOICE_ENDPOINT_CANDIDATES[index];
    const hasNextEndpoint = index < PAYSTACK_INVOICE_ENDPOINT_CANDIDATES.length - 1;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });

      const contentType = response.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');

      if (!response.ok) {
        let errorMessage = 'Failed to request invoice.';
        if (isJson) {
          const payload = (await response.json().catch(() => null)) as PaystackInvoiceResponse | null;
          errorMessage = payload?.message || errorMessage;
        } else {
          const message = await response.text().catch(() => '');
          errorMessage = message || errorMessage;
        }

        const endpointError = new Error(errorMessage);
        if (response.status === 404 && hasNextEndpoint) {
          lastError = endpointError;
          continue;
        }

        throw endpointError;
      }

      if (isJson) {
        const payload = (await response.json().catch(() => null)) as PaystackInvoiceResponse | null;
        if (payload && payload.status === false) {
          throw new Error(payload.message || 'Failed to request invoice.');
        }
        if (payload) {
          return payload;
        }
      }

      return {
        status: true,
        message: 'Invoice sent successfully.',
      };
    } catch (error) {
      const endpointError =
        error instanceof Error ? error : new Error('Failed to request invoice.');

      if (hasNextEndpoint) {
        const message = endpointError.message.toLowerCase();
        const isMissingEndpoint =
          message.includes('not found') ||
          message.includes('not_found') ||
          message.includes('page could not be found') ||
          message.includes('failed to fetch');
        if (isMissingEndpoint) {
          lastError = endpointError;
          continue;
        }
      }

      throw endpointError;
    }
  }

  throw lastError || new Error('Failed to request invoice.');
};
