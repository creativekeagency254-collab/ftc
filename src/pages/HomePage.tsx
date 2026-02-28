import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeatureTiles from '../components/home/FeatureTiles';
import HomeFaqPreview from '../components/home/HomeFaqPreview';
import Reviews from '../components/home/Reviews';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FarmTrack BioSciences: Organic Biopesticides & Sustainable Pest Control Kenya</title>
        <meta name="description" content="Revolutionize your farm with FarmTrack BioSciences. Discover eco-friendly biopesticides, pheromone lures, and IPM solutions for maize, tomatoes, coffee, and horticulture in Kenya & East Africa. Boost yields, reduce chemicals." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="FarmTrack BioSciences: Organic Biopesticides & Sustainable Pest Control Kenya" />
        <meta property="og:description" content="Revolutionize your farm with FarmTrack BioSciences. Discover eco-friendly biopesticides, pheromone lures, and IPM solutions for maize, tomatoes, coffee, and horticulture in Kenya & East Africa. Boost yields, reduce chemicals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://farmtrack.co.ke/" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="FarmTrack BioSciences" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:locale:alternate" content="sw_KE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FarmTrack BioSciences: Organic Biopesticides & Sustainable Pest Control Kenya" />
        <meta name="twitter:description" content="Revolutionize your farm with FarmTrack BioSciences. Discover eco-friendly biopesticides, pheromone lures, and IPM solutions for maize, tomatoes, coffee, and horticulture in Kenya & East Africa. Boost yields, reduce chemicals." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:site" content="@FarmTrackBio" />
        <meta name="twitter:creator" content="@FarmTrackBio" />
        <meta name="author" content="FarmTrack BioSciences" />
        <meta name="publisher" content="FarmTrack BioSciences" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Kenya" />
        <meta name="geo.position" content="-1.2454593;36.9406194" />
        <meta name="ICBM" content="-1.2454593, 36.9406194" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="http://farmtrack.co.ke/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "http://farmtrack.co.ke/#organization",
                "name": "FarmTrack BioSciences",
                "url": "http://farmtrack.co.ke/",
                "logo": "http://farmtrack.co.ke/favicon.svg",
                "description": "Leading provider of organic biopesticides, biological pest control solutions, and eco-friendly agricultural products in Kenya and East Africa.",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+254-711-495522",
                  "contactType": "customer service",
                  "areaServed": ["KE", "TZ", "UG", "RW"],
                  "availableLanguage": ["en", "sw"]
                },
                "sameAs": [
                  "https://web.facebook.com/p/Farmtrack-Consulting-LTD-100063821324618/",
                  "https://api.whatsapp.com/send?phone=%2B254711495522"
                ],
                "foundingDate": "2010",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "NJIRU, Mwiki - Kasarani road",
                  "addressLocality": "Nairobi",
                  "addressRegion": "Nairobi County",
                  "postalCode": "00100",
                  "addressCountry": "KE"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "FarmTrack BioSciences Product Catalog",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Organic Biopesticides",
                        "description": "Eco-friendly pest control solutions for sustainable agriculture."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "Pheromone Lures & Monitoring Traps",
                        "description": "Advanced tools for precision pest management and forecasting."
                      }
                    }
                  ]
                }
              },
              {
                "@type": "WebSite",
                "@id": "http://farmtrack.co.ke/#website",
                "url": "http://farmtrack.co.ke/",
                "name": "FarmTrack BioSciences",
                "description": "Revolutionizing agriculture with sustainable biopesticides and organic pest control in Kenya and East Africa.",
                "publisher": {
                  "@id": "http://farmtrack.co.ke/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "http://farmtrack.co.ke/products?search={search_term_string}",
                  "query-input": "required name=search_term_string"
                },
                "inLanguage": "en-KE"
              },
              {
                "@type": "LocalBusiness",
                "@id": "http://farmtrack.co.ke/#localbusiness",
                "name": "FarmTrack BioSciences",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "NJIRU, Mwiki - Kasarani road",
                  "addressLocality": "Nairobi",
                  "addressRegion": "Nairobi County",
                  "postalCode": "00100",
                  "addressCountry": "KE"
                },
                "telephone": "+254-711-495522",
                "email": "farmtrack.consulting@gmail.com",
                "url": "http://farmtrack.co.ke/",
                "image": "http://farmtrack.co.ke/og-image.jpg",
                "priceRange": "KES",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "17:00"
                  }
                ],
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -1.2454593,
                  "longitude": 36.9406194
                },
                "servesCuisine": "Agricultural Products",
                "areaServed": [
                  { "@type": "State", "name": "Nairobi County" },
                  { "@type": "State", "name": "Kiambu County" },
                  { "@type": "State", "name": "Nakuru County" },
                  { "@type": "State", "name": "Uasin Gishu County" },
                  { "@type": "State", "name": "Machakos County" },
                  { "@type": "State", "name": "Meru County" },
                  { "@type": "State", "name": "Kitui County" },
                  { "@type": "State", "name": "Embu County" },
                  { "@type": "Country", "name": "Kenya" },
                  { "@type": "Country", "name": "Tanzania" },
                  { "@type": "Country", "name": "Uganda" },
                  { "@type": "Country", "name": "Rwanda" }
                ],
                "hasMap": "https://www.google.com/maps/place/Farmtrack+Consulting+Limited/@-1.2454593,36.9380445,17z/"
              }
            ]
          })}
        </script>
      </Helmet>

      <Hero />
      <div data-section="features">
        <FeatureTiles />
      </div>
      <HomeFaqPreview />
      <Reviews />
    </>
  );
};

export default HomePage;
