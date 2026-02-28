import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import { galleryImages } from '../data/galleryData';

const GalleryPage: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Gallery | FarmTrack BioSciences - Agricultural Success Stories & Product Demonstrations</title>
        <meta name="description" content="View our gallery of FarmTrack biopesticides and organic solutions in action across various farms and agricultural settings. See real-world applications, crop transformations, pest control demonstrations, farmer success stories, before/after comparisons, harvest improvements, and sustainable farming practices. Visual evidence of product effectiveness across Kenya, Tanzania, Uganda, and East Africa." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Agricultural Success Gallery | FarmTrack BioSciences" />
        <meta property="og:description" content="See our biopesticides and organic solutions in action across farms throughout Kenya and East Africa. Visual proof of agricultural transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://farmtrack.co.ke/gallery" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="http://farmtrack.co.ke/gallery" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "FarmTrack BioSciences Agricultural Success Gallery",
            "description": "Visual documentation of agricultural transformations and product effectiveness across East Africa",
            "url": "http://farmtrack.co.ke/gallery",
            "image": galleryImages.map(image => ({
              "@type": "ImageObject",
              "name": image.title,
              "description": image.description,
              "url": image.image,
              "caption": image.description
            }))
          })}
        </script>
      </Helmet>

      <div className="pt-20 bg-secondary min-h-screen">
        <div className="section-padding">
          <div className="container mx-auto">
            <SectionTitle 
              title="Image Gallery" 
              subtitle="See our products in action across farms throughout Kenya" 
            />

            <div 
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id}
                  className={`relative rounded-2xl overflow-hidden shadow-lg ${
                    inView ? 'animate-scaleUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="w-full h-64 bg-gray-50 rounded-2xl overflow-hidden">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-full object-contain transition-all duration-500"
                      style={{
                        transform: hoveredImage === image.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div 
                    className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 flex items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: hoveredImage === image.id ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)'
                    }}
                  >
                    {hoveredImage === image.id && (
                      <div className="text-center p-4 animate-fadeIn">
                        <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                        <p className="text-white text-sm mb-4">{image.description}</p>
                        <Link 
                          to={`/products`}
                          onClick={() => window.scrollTo(0, 0)}
                          className="btn btn-primary inline-block"
                        >
                          View Product
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
</>
  );
};

export default GalleryPage;
