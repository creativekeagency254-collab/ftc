import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import FeaturedProducts from './FeaturedProducts';
import StatCounter from '../about/StatCounter';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://i.postimg.cc/Pq81k4df/assets-task-01jy3kehzxfqzbv4b4m84q4d93-1750320354-img-1.webp',
    'https://i.postimg.cc/vTYVF9JK/assets-task-01jwzj0qn7f0er8tsbd4nwnfw5-1749110839-img-2-1.webp',
    'https://i.postimg.cc/vB5t0WYc/assets-task-01jynnkfbzfx6stsqkaj15kmg4-1750926841-img-1.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('[data-section="features"]');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    {
      title: 'Products',
      description: 'Explore our innovative agricultural solutions',
      path: '/products',
    },
    {
      title: 'Gallery',
      description: 'See our products in action across farms',
      path: '/gallery',
    },
    {
      title: 'Performance',
      description: 'View detailed metrics and success stories',
      path: '/performance',
    },
    {
      title: 'FAQ',
      description: 'Find answers to common questions',
      path: '/faq',
    },
  ];

  return (
    <>
      <section className="home-hero-shell relative h-[85vh] min-h-[580px] overflow-hidden bg-slate-900 md:h-[95vh]">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1600ms] ease-linear ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Farming slide ${index + 1}`}
                className={`h-full w-full object-cover transition-transform duration-[3200ms] ease-out ${
                  index === currentSlide ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/40" />
            </div>
          ))}
        </div>

        <div className="relative flex h-full items-center pt-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center text-white">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">FARMTRACK BIOSCIENCES</p>
              <h1 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
                Revolutionizing modern farming with practical, organic solutions
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-base text-slate-100 md:text-lg">
                Innovative crop protection and nutrition solutions for optimized agri-productivity.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/products" onClick={() => window.scrollTo(0, 0)} className="btn btn-primary">
                  Explore Organic Biopesticides
                </Link>
                <button
                  type="button"
                  onClick={scrollToFeatures}
                  className="btn rounded-md border border-white/70 bg-white/5 text-white hover:bg-white/15"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToFeatures}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/40 p-2 text-white transition-colors hover:bg-white/10"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={22} />
        </button>
      </section>

      <section className="home-soft-section bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className="home-loop-card rounded-xl border border-emerald-100 bg-slate-50 p-5 transition-all hover:border-emerald-300 hover:bg-emerald-50/60"
                style={{ animationDelay: `${index * 0.35}s` }}
              >
                <h3 className="mb-1 text-lg font-bold text-slate-800">{link.title}</h3>
                <p className="text-sm text-slate-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div data-section="products">
        <FeaturedProducts />
      </div>

      <section className="home-soft-section home-soft-section-dark bg-slate-900 py-14 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <StatCounter value={200} label="Thousand Farmers Using Our Biopesticides" suffix="k+" delay={0} />
            </div>
            <div className="text-center">
              <StatCounter value={15} label="Years of Biopesticide Research" suffix="+" delay={200} />
            </div>
            <div className="text-center">
              <StatCounter value={37} label="Average Yield Increase with Organic Solutions" suffix="%" delay={400} />
            </div>
            <div className="text-center">
              <StatCounter value={8} label="East African Countries Served" delay={600} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
