import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

const FeaturedProducts: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const featuredProducts = [
    {
      name: 'BACTROLURE',
      image: 'https://i.postimg.cc/GtjTytX8/assets-task-01jyne42f1fr087xcbj00rybs5-1750918941-img-0.webp',
      summary: 'Advanced bacterial formulation for enhanced plant growth and pest resistance.'
    },
     {
      name: 'CUE LURE PLUG',
      image: 'https://i.postimg.cc/J4fCkxBX/assets-task-01jynev8c2e5r9d4kn7n65txmp-1750919516-img-0.webp',
      summary: 'Specialized attractant for fruit fly control in orchards and vegetable farms.'
    },    {
      name: 'TUTALURE',
      image:'https://i.postimg.cc/6pdg4RyT/Untitled-design-63.png',
      summary: '. For monitoring and mass killing in tomato crops and other solanacaea host plants.'
    },
    {
      name: 'FLOWER PESTS',
      image: 'https://i.postimg.cc/0NpmnffF/assets-task-01jyraz2rafe9sp87906a4evs9-1751016195-img-1.webp',
      summary: 'Specialized attractant for fly control in orchards and Flower farms.'
    },
    {
      name: 'Our most trusted solutions',
      image: 'https://i.postimg.cc/qq99fxZX/Untitled-design-71.png',
      summary: 'Here’s a showcase of select products that demonstrate our commitment to quality and innovation.'
    },
    
 {
      name: 'TYPES OF PESTS',
      image: 'https://i.postimg.cc/43c6xbdF/Untitled-design-64.png',
      summary: 'Specialized attractant for fruit fly control in orchards and vegetable farms.'
    },
    {
      name: 'Powdery mildew',
      image: 'https://i.postimg.cc/yY5knw8t/20250603-1657-Pumpkin-Mildew-Detail-simple-compose-01jwv19gtafeba0w46trp3d0rq.png',
      summary: 'Complete research to maximize crop growth and overall plant health.'
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          title="Featured Products" 
          subtitle="Explore our most popular agricultural solutions" 
        />

        <div className="relative">
          {/* Scroll Controls */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} className="text-primary" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} className="text-primary" />
            </button>
          </div>

          {/* Products Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar gap-6 py-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredProducts.map((product, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[280px] product-card"
              >
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain bg-gray-50"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.summary}</p>
                <Link 
                  to="/products" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/products" onClick={() => window.scrollTo(0, 0)} className="btn btn-primary btn-enhanced">
            Explore All Biopesticides
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;