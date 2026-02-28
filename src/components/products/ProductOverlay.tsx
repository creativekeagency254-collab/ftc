import React, { useEffect, useState } from 'react';
import { X, CheckCircle, PhoneCall, MessageCircle, Loader2 } from 'lucide-react';
import { Product } from './ProductCard';
import { startPaystackCheckout, requestPaystackInvoice, PAYSTACK_FIXED_AMOUNT_KSH } from '../../utils/paystack';
import { supabase, InvoiceRequestData } from '../../lib/supabase';

interface ProductOverlayProps {
  product: Product | null;
  onClose: () => void;
}

const ProductOverlay: React.FC<ProductOverlayProps> = ({ product, onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState<string | null>(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [invoiceLoading, setInvoiceLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentReference, setPaymentReference] = useState<string | null>(null);

  const [paymentForm, setPaymentForm] = useState({
    customerName: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (product) {
      const timer = setTimeout(() => setIsActive(true), 10);
      return () => clearTimeout(timer);
    }
    setIsActive(false);
    return undefined;
  }, [product]);

  const handleClose = () => {
    setIsActive(false);
    setPaymentMessage(null);
    setPaymentSuccess(false);
    setPaymentReference(null);
    setTimeout(() => onClose(), 250);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentForm((prev) => ({ ...prev, [name]: value }));
  };

  const hasValidForm = () => {
    return Boolean(paymentForm.customerName.trim() && paymentForm.email.trim() && paymentForm.phone.trim());
  };

  const handlePayNow = async () => {
    if (!product) return;
    if (!hasValidForm()) {
      setPaymentMessage('Please enter your name, email, and phone number.');
      return;
    }

    setPaymentLoading(true);
    setPaymentMessage(null);
    setPaymentSuccess(false);
    setPaymentReference(null);
    let completed = false;

    try {
      await startPaystackCheckout({
        email: paymentForm.email,
        amountKsh: PAYSTACK_FIXED_AMOUNT_KSH,
        customerName: paymentForm.customerName,
        customerPhone: paymentForm.phone,
        productName: product.name,
        onSuccess: (reference) => {
          completed = true;
          setPaymentSuccess(true);
          setPaymentReference(reference);
          setPaymentMessage('Payment successful. You can now contact the dealer directly.');
        },
        onClose: () => {
          if (!completed) {
            setPaymentMessage('Payment window was closed before completion.');
          }
        },
      });
    } catch (error) {
      setPaymentMessage(error instanceof Error ? error.message : 'Failed to initialize payment.');
    } finally {
      setPaymentLoading(false);
    }
  };

  const persistInvoiceRequest = async () => {
    if (!product) return;

    const invoicePayload: InvoiceRequestData = {
      customer_name: paymentForm.customerName.trim(),
      email: paymentForm.email.trim(),
      phone: paymentForm.phone.trim(),
      product_name: product.name,
      amount_ksh: PAYSTACK_FIXED_AMOUNT_KSH,
      channel: 'paystack',
      status: 'pending',
    };

    await supabase.from('invoice_requests').insert([invoicePayload]);
  };

  const handleSendInvoice = async () => {
    if (!product) return;
    if (!hasValidForm()) {
      setPaymentMessage('Please enter your name, email, and phone number.');
      return;
    }

    setInvoiceLoading(true);
    setPaymentMessage(null);

    try {
      await requestPaystackInvoice({
        email: paymentForm.email.trim(),
        customerName: paymentForm.customerName.trim(),
        customerPhone: paymentForm.phone.trim(),
        productName: product.name,
        amountKsh: PAYSTACK_FIXED_AMOUNT_KSH,
      });
      await persistInvoiceRequest();
      setPaymentMessage('Invoice sent to your email successfully.');
    } catch {
      try {
        await persistInvoiceRequest();
        setPaymentMessage('Invoice request received. Dealer will send your Paystack invoice to your email shortly.');
      } catch (dbError) {
        setPaymentMessage(dbError instanceof Error ? dbError.message : 'Failed to request invoice. Please try again.');
      }
    } finally {
      setInvoiceLoading(false);
    }
  };

  if (!product) return null;

  return (
    <>
      <div className={`product-overlay ${isActive ? 'active' : ''}`} onClick={handleBackdropClick}>
        <div className={`overlay-content max-w-5xl ${isActive ? 'active' : ''}`}>
          <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700" onClick={handleClose}>
            <X size={24} />
          </button>

          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:w-2/5">
              <div className="h-auto w-full overflow-hidden rounded-xl bg-gray-50">
                <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
              </div>
            </div>

            <div className="md:w-3/5">
              <h2 className="mb-2 text-2xl font-bold text-gray-800">{product.name}</h2>
              <p className="mb-6 text-gray-600">{product.description}</p>

              <div className="mb-6 rounded-lg bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-gray-800">Key Advantages</h3>
                <ul className="space-y-3">
                  {product.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mt-1 mr-2 shrink-0 text-primary" size={18} />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {paymentSuccess ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="mb-3 text-sm font-semibold text-emerald-800">Success{paymentReference ? ` | Ref: ${paymentReference}` : ''}</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href="tel:+254711495522"
                      className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
                    >
                      <PhoneCall size={16} className="mr-2" />
                      Success - Make the Call
                    </a>
                    <a
                      href={`https://wa.me/254711495522?text=${encodeURIComponent(`Payment successful for ${product.name}. Name: ${paymentForm.customerName}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-black"
                    >
                      <MessageCircle size={16} className="mr-2" />
                      Success - WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <h3 className="mb-3 text-lg font-bold text-slate-800">Checkout</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      name="customerName"
                      value={paymentForm.customerName}
                      onChange={handlePaymentChange}
                      placeholder="Full name"
                      required
                      className="w-full rounded-lg border border-slate-300 px-3 py-2"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={paymentForm.phone}
                      onChange={handlePaymentChange}
                      placeholder="Phone number"
                      required
                      className="w-full rounded-lg border border-slate-300 px-3 py-2"
                    />
                    <div className="sm:col-span-2">
                      <input
                        type="email"
                        name="email"
                        value={paymentForm.email}
                        onChange={handlePaymentChange}
                        placeholder="Email address"
                        required
                        className="w-full rounded-lg border border-slate-300 px-3 py-2"
                      />
                    </div>
                  </div>

                  {paymentMessage && <p className="mt-3 rounded-lg bg-slate-50 p-2 text-sm text-slate-700">{paymentMessage}</p>}

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={handlePayNow}
                      disabled={paymentLoading || invoiceLoading}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {paymentLoading ? <Loader2 size={16} className="mr-2 animate-spin" /> : null}
                      Pay Now
                    </button>
                    <button
                      type="button"
                      onClick={handleSendInvoice}
                      disabled={paymentLoading || invoiceLoading}
                      className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {invoiceLoading ? <Loader2 size={16} className="mr-2 animate-spin" /> : null}
                      Send Invoice
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverlay;
