import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MinusCircle, PlusCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { faqItems } from '../../data/faqData';

const HomeFaqPreview: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);
  const topFaqs = faqItems.slice(0, 5);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Answers to the most common product, ordering, and support questions."
        />

        <div className="space-y-3">
          {topFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article key={item.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                >
                  <span className="font-semibold text-slate-800">{item.question}</span>
                  {isOpen ? (
                    <MinusCircle size={18} className="shrink-0 text-primary" />
                  ) : (
                    <PlusCircle size={18} className="shrink-0 text-primary" />
                  )}
                </button>
                <div
                  className={`overflow-hidden border-t border-slate-200 transition-all duration-300 ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-4 py-3 text-sm leading-6 text-slate-600">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link to="/faq" onClick={() => window.scrollTo(0, 0)} className="btn btn-primary">
            View Full FAQ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFaqPreview;
