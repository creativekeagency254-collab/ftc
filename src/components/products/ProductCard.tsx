import React from 'react';

export interface Product {
  id: string;
  name: string;
  summary: string;
  description: string;
  advantages: string[];
  image: string;
  category: 'pest-control' | 'equipment';
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const categoryLabel = product.category === 'equipment' ? 'Equipment' : 'Bioproduct';
  const accentDots =
    product.category === 'equipment'
      ? ['bg-amber-400', 'bg-slate-900', 'bg-slate-500']
      : ['bg-emerald-600', 'bg-emerald-400', 'bg-slate-400'];

  const openProduct = () => onClick(product);

  return (
    <article
      role="button"
      tabIndex={0}
      className="group relative cursor-pointer rounded-[28px] border-[3px] border-black bg-[#f3f4f6] p-3 shadow-[0_14px_28px_rgba(2,6,23,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_rgba(2,6,23,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      onClick={openProduct}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProduct();
        }
      }}
    >
      <div className="rounded-[22px] border-[2px] border-black/90 bg-white p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
        <div className="mb-3 flex items-center justify-between">
          <p className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-600">
            {categoryLabel}
          </p>
          <div className="flex items-center gap-1.5">
            {accentDots.map((dot, idx) => (
              <span key={idx} className={`h-2.5 w-2.5 rounded-full ${dot}`} />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-[#f8fafc]">
          <img
            src={product.image}
            alt={`${product.name} organic biopesticide for ${product.summary.toLowerCase()}`}
            className="h-52 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
          <p className="mt-1 min-h-[48px] text-sm leading-6 text-slate-600">{product.summary}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          openProduct();
        }}
        className="mt-3 w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-black"
      >
        View Product
      </button>
    </article>
  );
};

export default ProductCard;
