import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

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
      className={`fixed inset-x-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ top: '16px', padding: '0 14px' }}
    >
      <div
        className={`header-glass-shell mx-auto max-w-7xl rounded-2xl border shadow-2xl ${
          isHomePage ? 'border-white/35' : 'border-white/55'
        }`}
        style={{
          background: isHomePage
            ? 'linear-gradient(130deg, rgba(2,6,23,0.38) 0%, rgba(15,23,42,0.30) 50%, rgba(4,47,46,0.32) 100%)'
            : 'linear-gradient(130deg, rgba(255,255,255,0.70) 0%, rgba(248,250,252,0.72) 45%, rgba(236,253,245,0.72) 100%)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          transform: 'translateZ(0)',
        }}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:h-[70px] sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => window.scrollTo(0, 0)}>
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-white p-1">
              <img
                src="https://images.pexels.com/photos/32311431/pexels-photo-32311431.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="FarmTrack BioSciences logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/favicon.svg';
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
              className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm font-semibold ${
                isHomePage
                  ? 'border-white/40 text-white hover:bg-white/10'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Download size={15} />
              Catalog
            </button>
            <a href="tel:+254711495522" className="rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow hover:bg-primary/90">
              Call Now
            </a>
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
          className={`mx-auto mt-2 max-w-7xl rounded-2xl border p-3 shadow-xl backdrop-blur-xl lg:hidden ${
            isHomePage ? 'border-white/40 bg-slate-900/85' : 'border-white/60 bg-white/95'
          }`}
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? 'bg-primary/20 text-primary'
                      : isHomePage
                        ? 'text-slate-100 hover:bg-white/10 hover:text-primary'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleCatalogDownload}
              className={`rounded-md border px-3 py-2 text-sm font-semibold ${
                isHomePage ? 'border-white/40 text-white' : 'border-slate-300 text-slate-700'
              }`}
            >
              Catalog
            </button>
            <a href="tel:+254711495522" className="rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white">
              Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
