/*
  # Create orders table for FarmTrack product orders

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `name` (text, customer name)
      - `phone` (text, customer phone number)
      - `location` (text, customer location)
      - `product_name` (text, ordered product name)
      - `additional_info` (text, optional additional information)
      - `created_at` (timestamp, order creation time)

  2. Security
    - Enable RLS on `orders` table
    - Add policy for public insert (anyone can place orders)
    - Add policy for authenticated users to read orders (for admin access)
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  product_name text NOT NULL,
  additional_info text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert orders (place orders)
CREATE POLICY "Anyone can place orders"
  ON orders
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read all orders (for admin access)
CREATE POLICY "Authenticated users can read orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (true);