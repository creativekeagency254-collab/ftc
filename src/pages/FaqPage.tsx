import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PlusCircle, MinusCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import { faqItems, FAQItem } from '../data/faqData';

const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeQuestions, setActiveQuestions] = useState<string[]>([]);

  const filteredFaqs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleQuestion = (id: string) => {
    setActiveQuestions(prev => 
      prev.includes(id) 
        ? prev.filter(q => q !== id) 
        : [...prev, id]
    );
  };

  // Generate FAQ Schema for structured data
  const faqSchema = faqItems.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  return (
    <>
      <Helmet>
        <title>FAQ | FarmTrack BioSciences - Frequently Asked Questions About Biopesticides & Organic Solutions</title>
        <meta name="description" content="Find answers to frequently asked questions about FarmTrack biopesticides, organic pest control products, equipment, ordering, shipping, technical support, and agricultural solutions. Get expert guidance on product application, safety, compatibility, storage, organic certification, export compliance, and sustainable farming practices." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Frequently Asked Questions | FarmTrack BioSciences" />
        <meta property="og:description" content="Get answers to common questions about our biopesticides, organic solutions, and sustainable agricultural products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://farmtrack.co.ke/faq" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="http://farmtrack.co.ke/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSchema
          })}
        </script>
      </Helmet>

      <div className="pt-20 bg-secondary bg-opacity-70 min-h-screen">
        <div className="section-padding">
          <div className="container mx-auto">
            <SectionTitle 
              title="Frequently Asked Questions" 
              subtitle="Find answers to common questions about our products and services" 
            />

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === 'all' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                All Categories
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === 'products' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('products')}
              >
                Products
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === 'equipment' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('equipment')}
              >
                Equipment
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === 'ordering' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('ordering')}
              >
                Ordering
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === 'support' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory('support')}
              >
                Support
              </button>
            </div>

            {/* FAQs */}
            <div className="max-w-3xl mx-auto">
              {filteredFaqs.map((faq: FAQItem) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-lg mb-4 border-2 border-gray-100">
                  <div 
                    className="p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleQuestion(faq.id)}
                  >
                    <h3 className="font-medium text-gray-800">{faq.question}</h3>
                    {activeQuestions.includes(faq.id) ? (
                      <MinusCircle className="text-primary flex-shrink-0" size={20} />
                    ) : (
                      <PlusCircle className="text-primary flex-shrink-0" size={20} />
                    )}
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeQuestions.includes(faq.id) ? 'max-h-96 p-4 pt-0' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Didn't Find Your Answer?
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Contact our support team and we'll get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary p-6 rounded-xl text-center">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Call Us</h4>
                  <div className="space-y-2">
                    <a 
                      href="tel:+254711495522" 
                      className="block text-primary font-medium hover:underline transition-colors"
                    >
                      +254 711 495522
                    </a>
                    <span className="text-gray-500">or</span>
                    <a 
                      href="tel:+254726819687" 
                      className="block text-primary font-medium hover:underline transition-colors"
                    >
                      +254 726 819687
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Monday-Friday 8AM-5PM</p>
                </div>
                <div className="bg-secondary p-6 rounded-xl text-center">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Email Us @</h4>
                  <a 
                    href="mailto:farmtrack.consulting@gmail.com?subject=Inquiry from FAQ Page&body=Hello FarmTrack Team,%0D%0A%0D%0AI have a question about..." 
                    className="text-primary font-medium hover:underline transition-colors"
                  >
                    farmtrack.consulting@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">24/7 Support</p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  );
};

export default FaqPage;
