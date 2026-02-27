import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import Timeline from '../components/about/Timeline';
import StatCounter from '../components/about/StatCounter';
import Reviews from '../components/home/Reviews';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us | FarmTrack BioSciences - Organic Biopesticides Leaders & Sustainable Agriculture Pioneers</title>
        <meta name="description" content="Learn about FarmTrack BioSciences' mission to provide sustainable biopesticides and organic pest control solutions transforming agriculture in East Africa. Founded in 2010, we've revolutionized farming for 200,000+ farmers across 8 countries with 37% average yield increases. Our comprehensive approach includes entomopathogenic fungi, beneficial bacteria, parasitoids, and advanced pheromone-based monitoring systems. Discover our journey from startup to leading agricultural innovation company, our partnerships with universities, our commitment to environmental stewardship, and our impact on sustainable farming practices across Kenya, Tanzania, Uganda, Rwanda, and beyond." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="About FarmTrack BioSciences - Leading Biopesticides & Sustainable Agriculture Company" />
        <meta property="og:description" content="Discover how FarmTrack BioSciences has transformed agriculture for 200,000+ farmers across East Africa since 2010. Learn about our mission, values, and commitment to sustainable farming." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://farmtrack.com/about" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://farmtrack.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About FarmTrack BioSciences",
            "description": "Learn about FarmTrack BioSciences' mission, history, and impact on sustainable agriculture in East Africa",
            "url": "https://farmtrack.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "FarmTrack BioSciences",
              "foundingDate": "2010",
              "description": "Leading provider of biopesticides and organic pest control solutions in East Africa",
              "mission": "To empower farmers across East Africa with innovative biopesticides and organic agricultural solutions that increase yields, reduce environmental impact, and improve livelihoods",
              "numberOfEmployees": "50-100",
              "industry": "Agriculture",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "-1.2454593",
                  "longitude": "36.9406194"
                },
                "geoRadius": "2000000"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20 min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/15634908/pexels-photo-15634908/free-photo-of-high-angle-view-of-tomatoes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Agricultural field" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 title-animation">Our Story</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Transforming East African agriculture with innovative biopesticides, organic solutions, and sustainable farming practices
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 title-animation">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At FarmTrack BioSciences, our mission is to empower farmers across East Africa with innovative biopesticides and organic agricultural solutions that increase yields, reduce environmental impact, and improve livelihoods.
                </p>
                <p className="text-gray-600 mb-6">
                  We believe that sustainable agriculture through biological pest control is the foundation of thriving communities. By combining cutting-edge biopesticide science with deep local knowledge, we create organic products that address the unique challenges faced by African farmers.
                </p>
                <p className="text-gray-600">
                  Our integrated approach encompasses both biochemical biopesticide solutions and equipment, providing farmers with complete organic systems to maximize their productivity and profitability while protecting the environment.
                </p>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 title-animation">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold text-xl">01</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Sustainable Innovation</h3>
                      <p className="text-gray-600">Constantly developing new biopesticide solutions that address evolving agricultural challenges organically.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold text-xl">02</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Environmental Stewardship</h3>
                      <p className="text-gray-600">Creating organic products that balance productivity with environmental protection through biological pest control.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold text-xl">03</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Partnership</h3>
                      <p className="text-gray-600">Working alongside farmers as true collaborators in their transition to sustainable, organic farming practices.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold text-xl">04</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Integrity</h3>
                      <p className="text-gray-600">Operating with transparency and honesty in all our biopesticide research and farmer relationships.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <SectionTitle 
              title="Our Journey" 
              subtitle="Discover the key milestones in FarmTrack BioSciences' evolution in biopesticides and organic solutions" 
            />
            <Timeline />
          </div>
        </section>

        {/* Contact Section - Added right after Timeline */}
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="bg-secondary rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Get in Touch with Our Team
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Contact our support team and we'll get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl text-center">
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
                      href="tel:+254735495522" 
                      className="block text-primary font-medium hover:underline transition-colors"
                    >
                      +254 735 495522
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Monday-Friday 8AM-5PM</p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Email Us @</h4>
                  <a 
                    href="mailto:farmtrack.consulting@gmail.com?subject=Inquiry from About Page&body=Hello FarmTrack Team,%0D%0A%0D%0AI have a question about..." 
                    className="text-primary font-medium hover:underline transition-colors"
                  >
                    farmtrack.consulting@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">24/7 Support</p> 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary bg-opacity-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter value={200} label="Thousand Farmers Using Our Biopesticides" suffix="k+" delay={0} />
              <StatCounter value={15} label="Years of Biopesticide Research" suffix="+" delay={200} />
              <StatCounter value={37} label="Average Yield Increase with Organic Solutions" suffix="%" delay={400} />
              <StatCounter value={8} label="East African Countries Served" delay={600} />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Reviews />
      </div>
</>
  );
};

export default AboutUsPage;