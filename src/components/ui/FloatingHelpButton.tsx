import React, { useState } from 'react';
import { HelpCircle, X, Phone, MessageCircle, Package, Truck, Wrench } from 'lucide-react';

const FloatingHelpButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappGreeting =
    'Hello FarmTrack Team, I need support with ordering, shipping, and product guidance. Please assist me.';
  const whatsappSupportUrl = `https://wa.me/254711495522?text=${encodeURIComponent(whatsappGreeting)}`;

  const options = [
    {
      label: 'Product Information',
      icon: Package,
      action: () => window.open('tel:+254726819687', '_self'),
    },
    {
      label: 'Ordering & Shipping',
      icon: Truck,
      action: () => window.open('tel:+254711495522', '_self'),
    },
    {
      label: 'Technical Support',
      icon: Wrench,
      action: () => window.open(whatsappSupportUrl, '_blank'),
    },
    {
      label: 'Contact Sales Team',
      icon: Phone,
      action: () => window.open('tel:+254726819687', '_self'),
    },
  ];

  return (
    <>
      <button
        type="button"
        className="help-button support-float group fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:bottom-6 sm:right-6"
        onClick={() => setIsOpen(true)}
        aria-label="Open support options"
      >
        <span className="support-pulse absolute inset-0 rounded-full bg-primary/30" aria-hidden="true" />
        <HelpCircle size={20} className="relative z-10" />
        <span className="relative z-10 hidden text-sm font-semibold sm:inline">Support</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black/45 p-4 animate-fadeIn" onClick={() => setIsOpen(false)}>
          <div
            className="support-sheet fixed bottom-0 left-0 right-0 rounded-t-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:bottom-6 sm:right-6 sm:left-auto sm:w-[360px] sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Support Center</h3>
                <p className="text-sm text-slate-600">How can we help you today?</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-slate-300 p-2 text-slate-600 hover:bg-slate-100"
                aria-label="Close support panel"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2">
              {options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    option.action?.();
                    setIsOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  <span className="flex items-center gap-2">
                    <option.icon size={16} className="text-primary" />
                    {option.label}
                  </span>
                  <span className="text-slate-400">-&gt;</span>
                </button>
              ))}
            </div>

            <a
              href={whatsappSupportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>

            <p className="mt-3 text-xs text-slate-500">
              Email:{' '}
              <a href="mailto:farmtrack.consulting@gmail.com" className="text-primary">
                farmtrack.consulting@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingHelpButton;
