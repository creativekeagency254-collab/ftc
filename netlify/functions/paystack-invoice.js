const PAYSTACK_API_BASE = 'https://api.paystack.co';
const DEFAULT_AMOUNT_KSH = 2;

const jsonResponse = (statusCode, payload) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  },
  body: JSON.stringify(payload),
});

const paystackRequest = async (secretKey, path, method = 'GET', body) => {
  const response = await fetch(`${PAYSTACK_API_BASE}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok || payload.status === false) {
    const message = payload.message || `Paystack request failed at ${path}`;
    throw new Error(message);
  }

  return payload;
};

const splitName = (fullName) => {
  const tokens = String(fullName || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!tokens.length) {
    return { firstName: 'FarmTrack', lastName: 'Customer' };
  }
  const firstName = tokens[0];
  const lastName = tokens.slice(1).join(' ') || 'Customer';
  return { firstName, lastName };
};

const getOrCreateCustomerCode = async (secretKey, email, customerName, customerPhone) => {
  const listResult = await paystackRequest(
    secretKey,
    `/customer?email=${encodeURIComponent(email)}&perPage=1&page=1`
  );

  const existingCustomer = Array.isArray(listResult.data) ? listResult.data[0] : null;
  if (existingCustomer && existingCustomer.customer_code) {
    return existingCustomer.customer_code;
  }

  const { firstName, lastName } = splitName(customerName);
  const createdCustomer = await paystackRequest(secretKey, '/customer', 'POST', {
    email,
    first_name: firstName,
    last_name: lastName,
    phone: customerPhone,
  });

  return createdCustomer.data.customer_code;
};

const notifyDealerBySupabase = async ({ payload, supabaseUrl, supabaseServiceRoleKey }) => {
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

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse(200, { ok: true });
  }

  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { status: false, message: 'Method not allowed' });
  }

  const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY || process.env.VITE_PAYSTACK_SECRET_KEY;
  if (!paystackSecretKey) {
    return jsonResponse(500, { status: false, message: 'PAYSTACK_SECRET_KEY is not configured.' });
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return jsonResponse(400, { status: false, message: 'Invalid JSON payload.' });
  }

  const email = String(body.email || '').trim();
  const customerName = String(body.customerName || '').trim();
  const customerPhone = String(body.customerPhone || '').trim();
  const productName = String(body.productName || 'FarmTrack Product').trim();
  const amountKsh = Number(body.amountKsh || DEFAULT_AMOUNT_KSH);

  if (!email || !customerName || !customerPhone) {
    return jsonResponse(400, {
      status: false,
      message: 'Missing required fields: email, customerName, customerPhone.',
    });
  }

  if (!Number.isFinite(amountKsh) || amountKsh <= 0) {
    return jsonResponse(400, { status: false, message: 'Invalid amount supplied.' });
  }

  try {
    const customerCode = await getOrCreateCustomerCode(paystackSecretKey, email, customerName, customerPhone);
    const amountInKobo = Math.round(amountKsh * 100);
    const paymentRequest = await paystackRequest(paystackSecretKey, '/paymentrequest', 'POST', {
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
      payload: {
        customer_name: customerName,
        email,
        phone: customerPhone,
        product_name: productName,
        amount_ksh: Math.round(amountKsh),
        channel: 'paystack',
        status: 'invoice_sent',
      },
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    });

    return jsonResponse(200, {
      status: true,
      message: 'Paystack invoice sent directly to customer email.',
      requestCode: paymentRequest.data?.request_code,
      customerEmailSent: true,
      dealerNotified,
    });
  } catch (error) {
    return jsonResponse(500, {
      status: false,
      message: error instanceof Error ? error.message : 'Failed to send invoice via Paystack.',
    });
  }
};
