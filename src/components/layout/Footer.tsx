import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Download } from 'lucide-react';
import EmailSubscription from '../ui/EmailSubscription';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCatalogDownload = () => {
    // Create a link element and trigger download
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
    { icon: Youtube, color: '#FF0000', href: '#', label: 'YouTube' }
  ];

  return (
    <>
      {/* Social Media Links */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{ backgroundColor: social.color }}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={20} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gray-100">
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2 text-primary font-bold text-2xl">
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

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/products" onClick={scrollToTop} className="text-gray-700 hover:text-primary transition-colors">
                    Biopesticides
                  </Link>
                </li>
                <li>
                  <Link to="/performance" onClick={scrollToTop} className="text-gray-700 hover:text-primary transition-colors">
                    Performance
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" onClick={scrollToTop} className="text-gray-700 hover:text-primary transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/map" onClick={scrollToTop} className="text-gray-700 hover:text-primary transition-colors">
                    Map
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={scrollToTop} className="text-gray-700 hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" onClick={scrollToTop} className="text-gray-700 hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                  <a
                    href="https://www.google.com/maps/place/Farmtrack+Consulting+Limited/@-1.2454593,36.9380445,17z/data=!3m1!4b1!4m6!3m5!1s0x182f159c5955c2bd:0x6e9cdf8ab437b250!8m2!3d-1.2454593!4d36.9406194!16s%2Fg%2F11h4g342nn?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary transition"
                  >
                    NJIRU, Mwiki - Kasarani road, Kasarani Constituency, Kenya
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="text-primary flex-shrink-0" size={18} />
                  <a
                    href="tel:+254711495522"
                    className="text-gray-700 hover:text-primary transition"
                  >
                    +254 711 495522
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="text-primary flex-shrink-0" size={18} />
                  <a
                    href="mailto:farmtrack.consulting@gmail.com"
                    className="text-gray-700 hover:text-primary transition"
                  >
                    farmtrack.consulting@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Email Subscription */}
            <div>
              <EmailSubscription />
              
              {/* Download Catalog Button */}
              <div className="mt-6">
                <button
                  onClick={handleCatalogDownload}
                  className="w-full bg-primary text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
                >
                  <Download size={18} className="mr-2" />
                  Download Product Catalog
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Complete product information & specifications
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-700 text-sm">
                © {new Date().getFullYear()} FarmTrack BioSciences. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-primary text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-700 hover:text-primary text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-700 hover:text-primary text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            {/* Developer Contact */}
            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
              <a 
                href="tel:+254793832286"
                className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
              >
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