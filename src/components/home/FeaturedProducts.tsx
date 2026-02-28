import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

const FeaturedProducts: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const amount = scrollContainerRef.current.clientWidth * 0.85;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const featuredProducts = [
    {
      name: 'BACTROLURE',
      image: 'https://i.postimg.cc/GtjTytX8/assets-task-01jyne42f1fr087xcbj00rybs5-1750918941-img-0.webp',
      summary: 'Advanced bacterial formulation for enhanced plant growth and pest resistance.',
    },
    {
      name: 'CUE LURE PLUG',
      image: 'https://i.postimg.cc/J4fCkxBX/assets-task-01jynev8c2e5r9d4kn7n65txmp-1750919516-img-0.webp',
      summary: 'Specialized attractant for fruit fly control in orchards and vegetable farms.',
    },
    {
      name: 'TUTALURE',
      image: 'https://i.postimg.cc/6pdg4RyT/Untitled-design-63.png',
      summary: 'For monitoring and mass killing in tomato crops and other Solanaceae host plants.',
    },
    {
      name: 'FLOWER PESTS',
      image: 'https://i.postimg.cc/0NpmnffF/assets-task-01jyraz2rafe9sp87906a4evs9-1751016195-img-1.webp',
      summary: 'Specialized attractant for fly control in orchards and flower farms.',
    },
    {
      name: 'Our Most Trusted Solutions',
      image: 'https://i.postimg.cc/qq99fxZX/Untitled-design-71.png',
      summary: "Here's a showcase of select products that demonstrate our commitment to quality and innovation.",
    },
    {
      name: 'TYPES OF PESTS',
      image: 'https://i.postimg.cc/43c6xbdF/Untitled-design-64.png',
      summary: 'Specialized attractant for fruit fly control in orchards and vegetable farms.',
    },
    {
      name: 'Powdery Mildew',
      image: 'https://i.postimg.cc/yY5knw8t/20250603-1657-Pumpkin-Mildew-Detail-simple-compose-01jwv19gtafeba0w46trp3d0rq.png',
      summary: 'Complete research to maximize crop growth and overall plant health.',
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <SectionTitle title="Featured Products" subtitle="Explore our most popular agricultural solutions" />

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2.5 shadow-md transition hover:bg-slate-100 md:block"
            aria-label="Scroll left"
          >
            <ArrowLeft size={18} className="text-slate-700" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2.5 shadow-md transition hover:bg-slate-100 md:block"
            aria-label="Scroll right"
          >
            <ArrowRight size={18} className="text-slate-700" />
          </button>

          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex gap-5 overflow-x-auto px-1 py-2 md:px-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProducts.map((product, index) => (
              <article
                key={index}
                className="group w-[300px] flex-shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-1 text-xs font-semibold text-slate-700">
                    Featured
                  </div>
                  <h3 className="absolute bottom-3 left-3 right-3 text-lg font-bold text-white drop-shadow">
                    {product.name}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="mb-4 text-sm leading-6 text-slate-600">{product.summary}</p>
                  <Link
                    to="/products"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/products" onClick={() => window.scrollTo(0, 0)} className="btn btn-primary">
            Explore All Biopesticides
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
