import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Determine if we're on the homepage for text color
  const isHomePage = location.pathname === '/';

  // Handle scroll effect for showing/hiding header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show header on top, hide when scrolling down, show when scrolling up
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu and dropdown when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const leftNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bioproducts', path: '/products' },
    { name: 'Performance', path: '/performance' },
  ];

  const rightNavLinks = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'Map', path: '/map' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  const dropdownItems = [
    { name: 'Fruit Fly Solutions', description: 'BACTROLURE, CUELURE, and more', path: '/products?category=fruit-fly' },
    { name: 'Biopesticides', description: 'METATRACK PLUS, Organic solutions', path: '/products?category=biopesticides' },
    { name: 'Monitoring Equipment', description: 'Traps, sticky cards, accessories', path: '/products?category=accessories' },
    { name: 'Fungicides', description: 'MILTRACK and organic fungicides', path: '/products?category=fungicides' },
    { name: 'Moth Control', description: 'TUTALURE, FAW LURE, FCM LURE', path: '/products?category=lepidopteran' },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  const handleCatalogDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Farmtrack Catalogue copy-3.pdf';
    link.download = 'FarmTrack-Product-Catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ 
        top: '20px',
        left: '0',
        right: '0',
        padding: '0 20px'
      }}
    >
      {/* Floating Container with Rounded Edges */}
      <div 
        className="mx-auto max-w-7xl rounded-2xl shadow-2xl transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(220,20,60,0.15) 33%, rgba(34,139,34,0.15) 66%, rgba(255,255,255,0.95) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.4)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
        }}
      >
        <div className="px-6 lg:px-8 h-16">
          <div className="flex justify-between items-center h-full">
            {/* Company Logo and Name */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group z-10"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/32311431/pexels-photo-32311431.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="FarmTrack BioSciences logo"
                  className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span 
                  className={`font-bold transition-colors duration-300 group-hover:text-primary leading-tight ${
                    isHomePage ? 'text-white' : 'text-gray-800'
                  }`}
                  style={{ 
                    fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px'
                  }}
                >
                  FarmTrack BioSciences
                </span>
                <span 
                  className={`text-xs font-medium tracking-wide opacity-70 ${
                    isHomePage ? 'text-white' : 'text-gray-600'
                  }`}
                  style={{ fontSize: '10px' }}
                >
                  Sustainable Agriculture Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Split Layout with Dropdown */}
            <nav className="hidden lg:flex items-center justify-center flex-1 max-w-5xl mx-8">
              <div className="flex items-center justify-between w-full">
                
                {/* Left Navigation Links */}
                <div className="flex items-center space-x-6">
                  {leftNavLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative px-3 py-2 font-medium transition-all duration-300 group ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : `${isHomePage ? 'text-white hover:text-primary' : 'text-gray-700 hover:text-primary'}`
                      }`}
                      style={{ 
                        fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Underline animation */}
                      <div 
                        className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                          location.pathname === link.path 
                            ? 'w-full' 
                            : 'w-0 group-hover:w-full'
                        }`}
                      ></div>
                    </Link>
                  ))}
                </div>

                {/* Center Dropdown Menu - Click Only */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center px-4 py-2 font-medium transition-all duration-300 group rounded-lg hover:bg-gray-50 ${
                      isHomePage ? 'text-white hover:text-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                    style={{ 
                      fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                      fontSize: '14px',
                      fontWeight: 600
                    }}
                  >
                    <span>Solutions</span>
                    <ChevronDown 
                      size={16} 
                      className={`ml-2 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {/* Dropdown Menu - Only shows on click */}
                  {dropdownOpen && (
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 rounded-xl shadow-xl border border-white/20 overflow-hidden z-50"
                      style={{
                        animation: 'scaleUp 0.2s ease-out',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.85) 100%)',
                        backdropFilter: 'blur(15px)',
                        WebkitBackdropFilter: 'blur(15px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
                      }}
                    >
                      <div className="p-4">
                        <div className="text-center mb-4">
                          <h3 className="text-gray-800 font-bold text-lg mb-1">
                            Our Solutions
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Comprehensive biopesticide solutions
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          {dropdownItems.map((item, index) => (
                            <Link
                              key={index}
                              to={item.path}
                              onClick={() => {
                                setDropdownOpen(false);
                                window.scrollTo(0, 0);
                              }}
                              className="block p-3 rounded-lg transition-all duration-300 hover:bg-white/50 group"
                            >
                              <div className="text-gray-800 font-medium text-sm group-hover:text-primary">
                                {item.name}
                              </div>
                              <div className="text-gray-500 text-xs mt-1">
                                {item.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-white/30">
                          <Link
                            to="/products"
                            onClick={() => {
                              setDropdownOpen(false);
                              window.scrollTo(0, 0);
                            }}
                            className="block w-full text-center py-2 px-4 bg-primary/15 hover:bg-primary/25 text-primary font-medium rounded-lg transition-all duration-300"
                          >
                            View All Products
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Navigation Links */}
                <div className="flex items-center space-x-6">
                  {rightNavLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative px-3 py-2 font-medium transition-all duration-300 group ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : `${isHomePage ? 'text-white hover:text-primary' : 'text-gray-700 hover:text-primary'}`
                      }`}
                      style={{ 
                        fontFamily: "'Montserrat', 'Open Sans', 'Roboto', sans-serif",
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Underline animation */}
                      <div 
                        className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                          location.pathname === link.path 
                            ? 'w-full' 
                            : 'w-0 group-hover:w-full'
                        }`}
                      ></div>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X size={20} className="text-gray-700" />
              ) : (
                <Menu size={20} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center space-x-2">
              <img
                src="https://images.pexels.com/photos/32311431/pexels-photo-32311431.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="FarmTrack BioSciences logo"
                className="h-6 w-6 object-contain"
              />
              <span className="font-bold text-primary text-lg">FarmTrack</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
            >
              <X size={16} className="text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full">
            <nav className="flex-1 px-4 py-6 space-y-1">
              {allNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-3 py-3 rounded-xl font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10 border-l-4 border-primary'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Contact Section */}
            <div className="p-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:+254711495522"
                className="w-full bg-primary text-white px-4 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;