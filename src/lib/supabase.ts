// supabase.ts
import { createClient } from '@supabase/supabase-js';

/**
 * FARMTRACK BIOSCIENCES SUPABASE CONFIGURATION
 * ============================================
 * This file configures the Supabase client for database operations.
 * 
 * FEATURES USED:
 * - Real-time database operations
 * - Row Level Security (RLS)
 * - Public access for orders and email subscriptions
 * - Authenticated access for admin operations
 */

// ✅ DIRECT VALUES FOR DEPLOYMENT
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://zrkwppmicazkvdtzobzh.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpya3dwcG1pY2F6a3ZkdHpvYnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNTA5NTIsImV4cCI6MjA2NTgyNjk1Mn0.xvbm6bnVVyafN6umCjnSNcyW7VCdcjwBnYUUBhgMWdM';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// OPTIONAL: TypeScript types (you can skip this section if not using TS)
export type OrderFormData = {
  id?: string;
  name: string;
  phone: string;
  location: string;
  product_name: string;
  additional_info?: string;
  created_at?: string;
};

export type EmailSubscriptionData = {
  id?: string;
  email: string;
  subscribed_at?: string;
  is_active?: boolean;
  source?: string;
};

export type InvoiceRequestData = {
  id?: string;
  customer_name: string;
  email: string;
  phone: string;
  product_name: string;
  amount_ksh?: number;
  channel?: string;
  status?: string;
  requested_at?: string;
};
