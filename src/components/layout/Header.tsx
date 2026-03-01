import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download, PhoneCall } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < 40) {
        setIsVisible(true);
      } else if (current > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bioproducts', path: '/products' },
    { name: 'Performance', path: '/performance' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Map', path: '/map' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  const handleCatalogDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/Farmtrack-Catalogue.pdf';
    link.download = 'FarmTrack-Product-Catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed inset-x-0 z-50 transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-[112%] scale-[0.985] opacity-0'
      }`}
      style={{ top: '16px', padding: '0 14px' }}
    >
      <div
        className={`${isHomePage ? 'header-glass-shell' : 'header-solid-shell'} mx-auto max-w-7xl rounded-2xl border-2 border-black shadow-2xl`}
        style={{
          background: isHomePage
            ? 'linear-gradient(130deg, rgba(2,6,23,0.38) 0%, rgba(15,23,42,0.30) 50%, rgba(4,47,46,0.32) 100%)'
            : 'linear-gradient(130deg, rgba(255,255,255,0.99) 0%, rgba(255,255,255,0.99) 100%)',
          backdropFilter: isHomePage ? 'blur(22px)' : 'blur(3px)',
          WebkitBackdropFilter: isHomePage ? 'blur(22px)' : 'blur(3px)',
          transform: 'translateZ(0)',
        }}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:h-[60px] sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white p-1">
              <img
                src="/header-logo.png"
                alt="FarmTrack BioSciences logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/icon-192.png';
                }}
              />
            </div>
            <div className="min-w-0 leading-tight">
              <p className={`truncate text-sm font-bold sm:text-base ${isHomePage ? 'text-white' : 'text-slate-900'}`}>FarmTrack BioSciences</p>
              <p className={`hidden text-[11px] font-medium tracking-wide sm:block ${isHomePage ? 'text-slate-200' : 'text-slate-500'}`}>Sustainable Agriculture Solutions</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-white/80 text-primary shadow-sm'
                      : isHomePage
                        ? 'text-slate-100 hover:bg-white/15 hover:text-primary'
                        : 'text-slate-700 hover:bg-white/80 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={handleCatalogDownload}
              className={`header-cta-catalog inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm font-semibold ${
                isHomePage
                  ? 'border-white/50 text-white hover:bg-white/15'
                  : 'border-emerald-200 text-slate-700 hover:bg-emerald-50'
              }`}
            >
              <Download size={15} />
              Catalog
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden ${
              isHomePage ? 'border-white/40 text-white' : 'border-slate-300 text-slate-700'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`mx-auto mt-2 max-w-7xl rounded-2xl border-2 border-black p-3 shadow-xl backdrop-blur-xl lg:hidden ${
            isHomePage ? 'bg-slate-900/85' : 'bg-white/95'
          }`}
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) => {
                  const isBioproducts = link.path === '/products';
                  return `block rounded-md border px-3 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'border-primary/40 bg-primary text-white shadow-sm'
                      : isBioproducts
                        ? isHomePage
                          ? 'border-emerald-200/40 bg-emerald-500/15 text-emerald-100 hover:bg-emerald-500/25'
                          : 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                        : isHomePage
                          ? 'border-transparent text-slate-100 hover:bg-white/10 hover:text-primary'
                          : 'border-transparent text-slate-700 hover:bg-slate-50 hover:text-primary'
                  }`
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleCatalogDownload}
              className={`header-cta-catalog rounded-full border px-3 py-2 text-sm font-semibold ${
                isHomePage ? 'border-white/40 text-white hover:bg-white/10' : 'border-emerald-200 text-slate-700 hover:bg-emerald-50'
              }`}
            >
              Catalog
            </button>
            <a
              href="tel:+254711495522"
              className="header-cta-call inline-flex items-center justify-center rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-white"
            >
              <PhoneCall size={14} className="mr-1.5" />
              Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
