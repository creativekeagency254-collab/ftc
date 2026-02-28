const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const jsonResponse = (res, statusCode, payload) => {
  res.status(statusCode);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.send(JSON.stringify(payload));
};

const createHeaders = (serviceRoleKey) => ({
  apikey: serviceRoleKey,
  Authorization: `Bearer ${serviceRoleKey}`,
  'Content-Type': 'application/json',
});

const insertEmailSubscription = async ({ supabaseUrl, serviceRoleKey, email, source }) => {
  const response = await fetch(`${supabaseUrl}/rest/v1/email_subscriptions?on_conflict=email`, {
    method: 'POST',
    headers: {
      ...createHeaders(serviceRoleKey),
      Prefer: 'resolution=ignore-duplicates,return=minimal',
    },
    body: JSON.stringify([{ email, source }]),
  });

  return response.ok || response.status === 409;
};

const insertInvoiceFallback = async ({ supabaseUrl, serviceRoleKey, email }) => {
  const response = await fetch(`${supabaseUrl}/rest/v1/invoice_requests`, {
    method: 'POST',
    headers: {
      ...createHeaders(serviceRoleKey),
      Prefer: 'return=minimal',
    },
    body: JSON.stringify([
      {
        customer_name: 'Newsletter Subscriber',
        email,
        phone: 'N/A',
        product_name: 'Newsletter Signup',
        channel: 'newsletter',
        status: 'email_captured',
      },
    ]),
  });

  return response.ok;
};

const parseBody = async (req) => {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string' && req.body.trim()) {
    return JSON.parse(req.body);
  }

  return {};
};

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return jsonResponse(res, 200, { ok: true });
  }

  if (req.method !== 'POST') {
    return jsonResponse(res, 405, { status: false, message: 'Method not allowed' });
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse(res, 500, {
      status: false,
      message: 'Supabase backend configuration is missing.',
    });
  }

  let body;
  try {
    body = await parseBody(req);
  } catch {
    return jsonResponse(res, 400, { status: false, message: 'Invalid JSON payload.' });
  }

  const email = String(body.email || '').trim().toLowerCase();
  const source = String(body.source || 'footer').trim();

  if (!email || !EMAIL_REGEX.test(email)) {
    return jsonResponse(res, 400, { status: false, message: 'Please provide a valid email address.' });
  }

  try {
    const savedToNewsletter = await insertEmailSubscription({
      supabaseUrl,
      serviceRoleKey,
      email,
      source,
    });

    if (savedToNewsletter) {
      return jsonResponse(res, 200, {
        status: true,
        message: 'Subscription received successfully.',
        storedIn: 'email_subscriptions',
      });
    }

    const savedToInvoiceFallback = await insertInvoiceFallback({
      supabaseUrl,
      serviceRoleKey,
      email,
    });

    if (savedToInvoiceFallback) {
      return jsonResponse(res, 200, {
        status: true,
        message: 'Subscription received successfully.',
        storedIn: 'invoice_requests',
      });
    }

    return jsonResponse(res, 500, {
      status: false,
      message: 'Could not store email in Supabase. Confirm required tables exist.',
    });
  } catch (error) {
    return jsonResponse(res, 500, {
      status: false,
      message: error instanceof Error ? error.message : 'Failed to subscribe email.',
    });
  }
}
