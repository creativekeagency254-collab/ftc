import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const Reviews: React.FC = () => {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }
    
    return () => {
      if (reviewsRef.current) {
        observer.unobserve(reviewsRef.current);
      }
    };
  }, []);

  const reviews = [
    {
      name: "James Mwangi",
      location: "Nakuru County",
      rating: 5,
      text: "TUTALURE increased my tomato yield by 40%. The ROI has been incredible for my farm.",
      image: "https://images.pexels.com/photos/30215199/pexels-photo-30215199/free-photo-of-moody-portrait-of-a-man-in-nature.jpeg"
    },
    {
      name: "Sarah Kimani",
      location: "Kiambu County",
      rating: 5,
      text: "The PRO-STICKY TRAPs are so effective at monitoring and controlling pests in my greenhouse.",
      image: "https://images.pexels.com/photos/18866543/pexels-photo-18866543/free-photo-of-smiling-woman-with-afro-hairstyle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "John Omondi",
      location: "Kisumu County",
      rating: 4,
      text: "FAWLURE transformed my maize production. I'm recommending it to all farmers in my community.",
      image: "https://images.pexels.com/photos/2427506/pexels-photo-2427506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Emily Njeri",
      location: "Nyeri County",
      rating: 5,
      text: "METATRACK-PLUS has improved my Avocado quality tremendously. Even my vegetables are healthier and more abundant.",
      image: "https://images.pexels.com/photos/7088692/pexels-photo-7088692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Daniel Kipchoge",
      location: "Uasin Gishu County",
      rating: 5,
      text: "The technical support from FarmTrack is exceptional. They helped me implement a complete solution for my Avocado farm.",
      image: "https://images.pexels.com/photos/2427506/pexels-photo-2427506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Tabitha Wairimu",
      location: "Meru County",
      rating: 4,
      text: "I've tried many products, but FarmTrack's solutions deliver consistent results season after season.",
      image: "https://images.pexels.com/photos/14079450/pexels-photo-14079450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Robert Maina",
      location: "Machakos County",
      rating: 5,
      text: "CUELURE saved my fruit (melon) from devastating fruit fly damage. Worth every shilling!",
      image: "https://images.pexels.com/photos/26885613/pexels-photo-26885613/free-photo-of-portrait-of-an-african-man-in-shadow.jpeg"
    },
    {
      name: "Grace Mutua",
      location: "Kitui County",
      rating: 5,
      text: "Through the use of BACTROLURE, My mango farm has revolutionized. My produce is up by 30%!",
      image: "https://images.pexels.com/photos/14079450/pexels-photo-14079450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Peter Kamau",
      location: "Muranga County",
      rating: 4,
      text: "BACTROLURE has made a huge difference in my mango farm. Pest damage is almost non-existent now.",
      image: "https://images.pexels.com/photos/2427506/pexels-photo-2427506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Mary Wanjiku",
      location: "Kirinyaga County",
      rating: 5,
      text: "Integrated pest management is a game-changer. Much more efficient than traditional methods.",
      image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg"
    },
    {
      name: "Amoss Musyoka",
      location: "Kitui County",
      rating: 4,
      text: "FarmTrack support training has opened my eyes especially in use of traps.",
      image: "https://images.pexels.com/photos/26885613/pexels-photo-26885613/free-photo-of-portrait-of-an-african-man-in-shadow.jpeg"
    }
  ];

  return (
    <section className="section-padding bg-secondary bg-opacity-70">
      <div className="container mx-auto">
        <SectionTitle 
          title="What Our Customers/Farmers Say" 
          subtitle="Hear from farmers who have transformed their operations with FarmTrack" 
        />

        <div 
          ref={reviewsRef}
          className="relative overflow-hidden"
        >
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none"></div>
          
          <div 
            className={`flex gap-6 py-4 ${
              isVisible ? 'animate-scroll-right-to-left' : ''
            }`}
            style={{
              width: `${(reviews.length * 2) * 320}px`, // Double width for seamless loop
              animationPlayState: 'running' // Always keep animation running
            }}
          >
            {/* Original reviews */}
            {reviews.map((review, index) => (
              <div 
                key={`original-${index}`}
                className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-lg p-6 border-4 border-gray-200 transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-100">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </div>
            ))}

            {/* Duplicate reviews for seamless looping */}
            {reviews.map((review, index) => (
              <div 
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-lg p-6 border-4 border-gray-200 transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-100">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;