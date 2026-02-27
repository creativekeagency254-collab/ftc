/*
  # Create email subscriptions table

  1. New Tables
    - `email_subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique email address)
      - `subscribed_at` (timestamp, subscription time)
      - `is_active` (boolean, subscription status)
      - `source` (text, subscription source)

  2. Security
    - Enable RLS on `email_subscriptions` table
    - Add policy for public insert (anyone can subscribe)
    - Add policy for authenticated users to read subscriptions (for admin access)
*/

CREATE TABLE IF NOT EXISTS email_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  source text DEFAULT 'website'
);

ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert email subscriptions
CREATE POLICY "Anyone can subscribe to newsletter"
  ON email_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to read all subscriptions (for admin access)
CREATE POLICY "Authenticated users can read subscriptions"
  ON email_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);