import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Download } from 'lucide-react';
import EmailSubscription from '../ui/EmailSubscription';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCatalogDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/Farmtrack-Catalogue.pdf';
    link.download = 'FarmTrack-Product-Catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: Facebook, color: '#1877F2', href: 'https://web.facebook.com/p/Farmtrack-Consulting-LTD-100063821324618/?_rdc=1&_rdr#', label: 'Facebook' },
    { icon: Twitter, color: '#1DA1F2', href: 'https://web.facebook.com/p/Farmtrack-Consulting-LTD-100063821324618/?_rdc=1&_rdr#', label: 'Twitter' },
    { icon: Instagram, color: '#E4405F', href: 'https://api.whatsapp.com/send?phone=%2B254711495522&context=Afd3oa8qaOwDl7c-Fn7v4GNY4HUiWx-Q1qifjr8pl29tEiYOSLsLPeavn3MmC7f4H5hmB74BZUv1-_NVpuegPfTzqBZuRB4QtWPVZTJJfGRrn3bpJlRNQaP66AgARxzvnb_f6iCbPPurtiDwdUGgYr2iGg&source=FB_Page&app=facebook&entry_point=page_cta', label: 'whatsapp us' },
    { icon: Linkedin, color: '#0A66C2', href: '#', label: 'LinkedIn' },
    { icon: Youtube, color: '#FF0000', href: '#', label: 'YouTube' },
  ];

  const solutionsLinks = [
    { name: 'Fruit Fly Solutions', path: '/products?category=fruit-fly-solutions' },
    { name: 'Biopesticide Solutions', path: '/products?category=biopesticide-solutions' },
    { name: 'Lepidopteran / Moth', path: '/products?category=lepidopteran-solutions' },
    { name: 'Fungicide Solutions', path: '/products?category=fungicide-solutions' },
    { name: 'Accessories', path: '/products?category=accessories' },
  ];

  return (
    <>
      <section className="border-b bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: social.color }}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={18} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-4">
              <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2 text-2xl font-bold text-primary">
                <img
                  src="https://images.pexels.com/photos/32311431/pexels-photo-32311431.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="FarmTrack BioSciences logo"
                  className="h-8 w-8 object-contain"
                />
                <span>FarmTrack</span>
              </Link>
              <p className="text-gray-700">
                Providing innovative biopesticides and organic agricultural solutions to enhance crop yields and farming efficiency since 2010.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-800">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/products" onClick={scrollToTop} className="text-gray-700 transition-colors hover:text-primary">
                    Biopesticides
                  </Link>
                </li>
                <li>
                  <Link to="/performance" onClick={scrollToTop} className="text-gray-700 transition-colors hover:text-primary">
                    Performance
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" onClick={scrollToTop} className="text-gray-700 transition-colors hover:text-primary">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/map" onClick={scrollToTop} className="text-gray-700 transition-colors hover:text-primary">
                    Map
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={scrollToTop} className="text-gray-700 transition-colors hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" onClick={scrollToTop} className="text-gray-700 transition-colors hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-800">Solutions</h3>
              <ul className="space-y-2">
                {solutionsLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={scrollToTop} className="text-gray-700 transition-colors hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-800">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="mt-1 shrink-0 text-primary" size={18} />
                  <a
                    href="https://www.google.com/maps/place/Farmtrack+Consulting+Limited/@-1.2454593,36.9380445,17z/data=!3m1!4b1!4m6!3m5!1s0x182f159c5955c2bd:0x6e9cdf8ab437b250!8m2!3d-1.2454593!4d36.9406194!16s%2Fg%2F11h4g342nn?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 transition hover:text-primary"
                  >
                    NJIRU, Mwiki - Kasarani road, Kasarani Constituency, Kenya
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="shrink-0 text-primary" size={18} />
                  <a href="tel:+254711495522" className="text-gray-700 transition hover:text-primary">
                    +254 711 495522
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="shrink-0 text-primary" size={18} />
                  <a href="mailto:farmtrack.consulting@gmail.com" className="text-gray-700 transition hover:text-primary">
                    farmtrack.consulting@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <EmailSubscription />
              <div className="mt-6">
                <button
                  onClick={handleCatalogDownload}
                  className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-md"
                >
                  <Download size={18} className="mr-2" />
                  Download Product Catalog
                </button>
                <p className="mt-2 text-center text-xs text-gray-500">Complete product information and specifications</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm text-gray-700">© {new Date().getFullYear()} FarmTrack BioSciences. All rights reserved.</p>
              <div className="mt-4 flex space-x-6 md:mt-0">
                <a href="#" className="text-sm text-gray-700 hover:text-primary">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-700 hover:text-primary">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-gray-700 hover:text-primary">
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4 text-center">
              <a href="tel:+254793832286" className="inline-flex items-center text-sm text-gray-600 transition-colors hover:text-primary">
                <Phone size={14} className="mr-2" />
                Meet the Developer: +254 793 832286
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
