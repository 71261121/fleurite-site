'use client';

import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position for glassmorphism header style (scrolled > 50px)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight active section using IntersectionObserver
  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -40% 0px',
        threshold: 0.2,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Smooth scroll helper with header offset adjustment
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.style.scrollMarginTop = '80px';
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-xs z-40 md:hidden transition-opacity"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md bg-white/80 shadow-sm border-b border-rose-100/60 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="font-display text-2xl font-bold text-rose-700 hover:text-rose-800 transition-colors tracking-tight focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-sm"
              >
                Fleurite.me
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-8 font-sans">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className={`text-sm font-medium transition-colors relative py-1 focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-xs ${
                      isActive ? 'text-rose-700 font-semibold' : 'text-gray-600 hover:text-rose-700'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-700 rounded-full animate-in fade-in duration-200" />
                    )}
                  </a>
                );
              })}
              <a
                href="#get-access"
                onClick={(e) => handleScrollTo(e, 'get-access')}
                className="bg-rose-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                Get the System — $27
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="p-2 rounded-lg text-gray-700 hover:text-rose-700 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu Dropdown */}
        <div
          id="mobile-menu"
          aria-label="Mobile navigation"
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-lg transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-3 pb-6 space-y-3 sm:px-6 font-sans">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-rose-50 text-rose-700 font-semibold border-l-4 border-rose-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-rose-700'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#get-access"
                onClick={(e) => handleScrollTo(e, 'get-access')}
                className="block w-full text-center bg-rose-700 text-white font-semibold px-5 py-3 rounded-xl hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all shadow-sm active:scale-[0.98]"
              >
                Get the System — $27
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
