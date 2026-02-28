/*
  # Create invoice_requests table

  1. New Tables
    - `invoice_requests`
      - `id` (uuid, primary key)
      - `customer_name` (text)
      - `email` (text)
      - `phone` (text)
      - `product_name` (text)
      - `amount_ksh` (integer)
      - `channel` (text)
      - `status` (text)
      - `requested_at` (timestamp)

  2. Security
    - Enable RLS on `invoice_requests` table
    - Public insert policy for anon and authenticated users
    - Read policy for authenticated users
*/

CREATE TABLE IF NOT EXISTS invoice_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  product_name text NOT NULL,
  amount_ksh integer NOT NULL DEFAULT 200,
  channel text NOT NULL DEFAULT 'paystack',
  status text NOT NULL DEFAULT 'pending',
  requested_at timestamptz DEFAULT now()
);

ALTER TABLE invoice_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create invoice requests"
  ON invoice_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read invoice requests"
  ON invoice_requests
  FOR SELECT
  TO authenticated
  USING (true);
