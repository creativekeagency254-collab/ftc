import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const PAYSTACK_API_BASE = 'https://api.paystack.co';
const DEV_DEFAULT_AMOUNT_KSH = 2;

const paystackInvoiceDevPlugin = ({
  paystackSecretKey,
  supabaseUrl,
  supabaseServiceRoleKey,
}: {
  paystackSecretKey: string;
  supabaseUrl?: string;
  supabaseServiceRoleKey?: string;
}) => ({
  name: 'paystack-invoice-dev-endpoint',
  apply: 'serve' as const,
  configureServer(server: any) {
    const jsonResponse = (res: any, statusCode: number, payload: Record<string, unknown>) => {
      res.statusCode = statusCode;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.end(JSON.stringify(payload));
    };

    const readJsonBody = async (req: any): Promise<Record<string, unknown>> =>
      new Promise((resolve, reject) => {
        let raw = '';
        req.on('data', (chunk: Buffer | string) => {
          raw += chunk.toString();
        });
        req.on('end', () => {
          if (!raw.trim()) {
            resolve({});
            return;
          }
          try {
            resolve(JSON.parse(raw) as Record<string, unknown>);
          } catch {
            reject(new Error('Invalid JSON payload.'));
          }
        });
        req.on('error', reject);
      });

    const paystackRequest = async (
      path: string,
      method: 'GET' | 'POST' = 'GET',
      body?: Record<string, unknown>
    ) => {
      const response = await fetch(`${PAYSTACK_API_BASE}${path}`, {
        method,
        headers: {
          Authorization: `Bearer ${paystackSecretKey}`,
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      const payload = (await response.json().catch(() => ({}))) as { status?: boolean; message?: string; data?: any[] };
      if (!response.ok || payload.status === false) {
        throw new Error(payload.message || `Paystack request failed at ${path}`);
      }

      return payload;
    };

    const getOrCreateCustomerCode = async (email: string, customerName: string, customerPhone: string) => {
      const listResult = await paystackRequest(
        `/customer?email=${encodeURIComponent(email)}&perPage=1&page=1`
      );

      const existingCustomer = Array.isArray(listResult.data) ? listResult.data[0] : null;
      if (existingCustomer && existingCustomer.customer_code) {
        return existingCustomer.customer_code as string;
      }

      const parts = customerName.trim().split(/\s+/).filter(Boolean);
      const firstName = parts[0] || 'FarmTrack';
      const lastName = parts.slice(1).join(' ') || 'Customer';

      const createdCustomer = await paystackRequest('/customer', 'POST', {
        email,
        first_name: firstName,
        last_name: lastName,
        phone: customerPhone,
      });

      return createdCustomer.data.customer_code as string;
    };

    const notifyDealerBySupabase = async (payload: Record<string, unknown>): Promise<boolean> => {
      if (!supabaseUrl || !supabaseServiceRoleKey) return false;

      const response = await fetch(`${supabaseUrl}/rest/v1/invoice_requests`, {
        method: 'POST',
        headers: {
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify([payload]),
      });

      return response.ok;
    };

    server.middlewares.use('/.netlify/functions/paystack-invoice', async (req: any, res: any) => {
      if (req.method === 'OPTIONS') {
        jsonResponse(res, 200, { ok: true });
        return;
      }

      if (req.method !== 'POST') {
        jsonResponse(res, 405, { status: false, message: 'Method not allowed' });
        return;
      }

      if (!paystackSecretKey) {
        jsonResponse(res, 500, {
          status: false,
          message: 'PAYSTACK_SECRET_KEY is not configured for local dev.',
        });
        return;
      }

      let body: Record<string, unknown>;
      try {
        body = await readJsonBody(req);
      } catch (error) {
        jsonResponse(res, 400, {
          status: false,
          message: error instanceof Error ? error.message : 'Invalid JSON payload.',
        });
        return;
      }

      const email = String(body.email || '').trim();
      const customerName = String(body.customerName || '').trim();
      const customerPhone = String(body.customerPhone || '').trim();
      const productName = String(body.productName || 'FarmTrack Product').trim();
      const amountKsh = Number(body.amountKsh || DEV_DEFAULT_AMOUNT_KSH);

      if (!email || !customerName || !customerPhone) {
        jsonResponse(res, 400, {
          status: false,
          message: 'Missing required fields: email, customerName, customerPhone.',
        });
        return;
      }

      if (!Number.isFinite(amountKsh) || amountKsh <= 0) {
        jsonResponse(res, 400, { status: false, message: 'Invalid amount supplied.' });
        return;
      }

      try {
        const customerCode = await getOrCreateCustomerCode(email, customerName, customerPhone);
        const amountInKobo = Math.round(amountKsh * 100);

        const paymentRequest = await paystackRequest('/paymentrequest', 'POST', {
          customer: customerCode,
          amount: amountInKobo,
          currency: 'KES',
          description: `FarmTrack invoice for ${productName}`,
          send_notification: true,
          has_invoice: true,
          draft: false,
          metadata: {
            customer_name: customerName,
            customer_phone: customerPhone,
            product_name: productName,
          },
        });

        const dealerNotified = await notifyDealerBySupabase({
          customer_name: customerName,
          email,
          phone: customerPhone,
          product_name: productName,
          amount_ksh: Math.round(amountKsh),
          channel: 'paystack',
          status: 'invoice_sent',
        });

        jsonResponse(res, 200, {
          status: true,
          message: 'Paystack invoice sent directly to customer email.',
          requestCode: paymentRequest.data?.request_code,
          customerEmailSent: true,
          dealerNotified,
        });
      } catch (error) {
        jsonResponse(res, 500, {
          status: false,
          message: error instanceof Error ? error.message : 'Failed to send invoice via Paystack.',
        });
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const paystackSecretKey = env.PAYSTACK_SECRET_KEY || env.VITE_PAYSTACK_SECRET_KEY || '';

  return {
    plugins: [
      react(),
      paystackInvoiceDevPlugin({
        paystackSecretKey,
        supabaseUrl: env.SUPABASE_URL || env.VITE_SUPABASE_URL,
        supabaseServiceRoleKey: env.SUPABASE_SERVICE_ROLE_KEY,
      }),
    ],
    base: './',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
