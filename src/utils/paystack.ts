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

export const PAYSTACK_FIXED_AMOUNT_KSH = 200;
export const PAYSTACK_INVOICE_ENDPOINT = import.meta.env.VITE_PAYSTACK_INVOICE_ENDPOINT || '';

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
}: PaystackInvoiceRequestParams): Promise<void> => {
  if (!PAYSTACK_INVOICE_ENDPOINT) {
    throw new Error('Paystack invoice endpoint is not configured.');
  }

  const response = await fetch(PAYSTACK_INVOICE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      customerName,
      customerPhone,
      productName,
      amountKsh,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Failed to request invoice.');
  }
};
