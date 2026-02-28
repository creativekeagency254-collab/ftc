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
      name: 'James Mwangi',
      location: 'Nakuru County',
      rating: 5,
      text: 'TUTALURE increased my tomato yield by 40%. The ROI has been incredible for my farm.',
      image: 'https://images.pexels.com/photos/30215199/pexels-photo-30215199/free-photo-of-moody-portrait-of-a-man-in-nature.jpeg',
    },
    {
      name: 'Sarah Kimani',
      location: 'Kiambu County',
      rating: 5,
      text: 'The PRO-STICKY TRAPs are so effective at monitoring and controlling pests in my greenhouse.',
      image: 'https://images.pexels.com/photos/18866543/pexels-photo-18866543/free-photo-of-smiling-woman-with-afro-hairstyle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'John Omondi',
      location: 'Kisumu County',
      rating: 4,
      text: "FAWLURE transformed my maize production. I'm recommending it to all farmers in my community.",
      image: 'https://images.pexels.com/photos/2427506/pexels-photo-2427506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Emily Njeri',
      location: 'Nyeri County',
      rating: 5,
      text: 'METATRACK-PLUS has improved my Avocado quality tremendously. Even my vegetables are healthier and more abundant.',
      image: 'https://images.pexels.com/photos/7088692/pexels-photo-7088692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Daniel Kipchoge',
      location: 'Uasin Gishu County',
      rating: 5,
      text: 'The technical support from FarmTrack is exceptional. They helped me implement a complete solution for my Avocado farm.',
      image: 'https://images.pexels.com/photos/2427506/pexels-photo-2427506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Tabitha Wairimu',
      location: 'Meru County',
      rating: 4,
      text: "I've tried many products, but FarmTrack's solutions deliver consistent results season after season.",
      image: 'https://images.pexels.com/photos/14079450/pexels-photo-14079450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Robert Maina',
      location: 'Machakos County',
      rating: 5,
      text: 'CUELURE saved my fruit (melon) from devastating fruit fly damage. Worth every shilling!',
      image: 'https://images.pexels.com/photos/26885613/pexels-photo-26885613/free-photo-of-portrait-of-an-african-man-in-shadow.jpeg',
    },
    {
      name: 'Grace Mutua',
      location: 'Kitui County',
      rating: 5,
      text: 'Through the use of BACTROLURE, My mango farm has revolutionized. My produce is up by 30%!',
      image: 'https://images.pexels.com/photos/14079450/pexels-photo-14079450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Peter Kamau',
      location: 'Muranga County',
      rating: 4,
      text: 'BACTROLURE has made a huge difference in my mango farm. Pest damage is almost non-existent now.',
      image: 'https://images.pexels.com/photos/2427506/pexels-photo-2427506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Mary Wanjiku',
      location: 'Kirinyaga County',
      rating: 5,
      text: 'Integrated pest management is a game-changer. Much more efficient than traditional methods.',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg',
    },
    {
      name: 'Amoss Musyoka',
      location: 'Kitui County',
      rating: 4,
      text: 'FarmTrack support training has opened my eyes especially in use of traps.',
      image: 'https://images.pexels.com/photos/26885613/pexels-photo-26885613/free-photo-of-portrait-of-an-african-man-in-shadow.jpeg',
    },
  ];

  return (
    <section className="section-padding bg-secondary bg-opacity-70">
      <div className="container mx-auto">
        <SectionTitle
          title="What Our Customers/Farmers Say"
          subtitle="Hear from farmers who have transformed their operations with FarmTrack"
        />

        <div ref={reviewsRef} className="relative overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-secondary to-transparent md:w-32" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-secondary to-transparent md:w-32" />

          <div
            className={`flex gap-6 py-4 ${isVisible ? 'animate-scroll-right-to-left' : ''}`}
            style={{
              width: `${reviews.length * 2 * 320}px`,
              animationPlayState: 'running',
            }}
          >
            {reviews.concat(reviews).map((review, index) => (
              <article
                key={index}
                className="w-[300px] flex-shrink-0 rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <img src={review.image} alt={review.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="mb-2 flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
