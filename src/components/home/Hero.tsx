import React, { useState, useEffect } from 'react';
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
    }, 5000);
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
      path: '/products'
    },
    {
      title: 'Gallery',
      description: 'See our products in action across farms',
      path: '/gallery'
    },
    {
      title: 'Performance',
      description: 'View detailed metrics and success stories',
      path: '/performance'
    },
    {
      title: 'FAQ',
      description: 'Find answers to common questions',
      path: '/faq'
    }
  ];

  return (
    <>
      <section className="relative h-[85vh] overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Farming slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 title-animation">
                Revolutionizing <br />
                <span className="text-primary">modern farming</span>
              </h1>
              <p className="text-lg mb-8">
               Innovative crop protection and nutrition solutions for optimised agri-productivity.  
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/products" onClick={() => window.scrollTo(0, 0)} className="btn btn-primary btn-enhanced">
                  Explore Organic Biopesticides
                </Link>
                <button onClick={scrollToFeatures} className="btn btn-outline text-white border-white hover:bg-white/20 btn-enhanced">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={36} />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white/90 backdrop-blur-sm p-4 rounded-xl transition-all duration-300 hover:bg-primary hover:text-white group"
              >
                <h3 className="text-primary font-bold mb-1 group-hover:text-white">{link.title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-white/90">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section - Right after Quick Links */}
      <div data-section="products">
        <FeaturedProducts />
      </div>

      {/* Stats Section - Added below Featured Products */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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