import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Studio', href: '#studio' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F5F1EA]/95 backdrop-blur-md py-4 border-b border-[#D8CABB]/60 shadow-[0_4px_24px_rgba(43,37,32,0.04)] text-[#2B2520]'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-6 text-[#FBF9F5]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A6B]"
            aria-label="Aurelia House - Return to top"
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-[0.2em] font-normal uppercase transition-colors duration-300 ${
                isScrolled ? 'text-[#2B2520]' : 'text-[#FBF9F5]'
              }`}
            >
              AURELIA HOUSE
            </span>
            <span
              className={`text-[9px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-[#77716A]' : 'text-[#D8CABB]'
              }`}
            >
              INTERIORS • ARCHITECTURE
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-10 text-xs uppercase tracking-[0.18em] font-medium"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A6B] ${
                  isScrolled
                    ? 'text-[#40372F] hover:text-[#2B2520]'
                    : 'text-[#FBF9F5]/90 hover:text-[#FFFFFF]'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B99A6B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A6B] cursor-pointer ${
                isScrolled
                  ? 'bg-[#2B2520] text-[#F5F1EA] hover:bg-[#40372F] shadow-sm'
                  : 'bg-[#FBF9F5] text-[#2B2520] hover:bg-[#EDE6DB]'
              }`}
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A6B] cursor-pointer ${
                isScrolled ? 'text-[#2B2520]' : 'text-[#FBF9F5]'
              }`}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#2B2520]/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-between p-8 pt-28 text-[#F5F1EA] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#B99A6B] border-b border-[#40372F] pb-3">
            Menu Navigation
          </p>
          <nav className="flex flex-col gap-5">
            {navLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-serif text-3xl tracking-wide hover:text-[#B99A6B] transition-colors flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <span className="text-xs font-sans tracking-widest text-[#77716A] group-hover:text-[#B99A6B]">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-[#40372F] flex flex-col gap-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-4 bg-[#B99A6B] text-[#2B2520] font-sans text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 hover:bg-[#d8cabb] transition-colors cursor-pointer"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex justify-between items-center text-xs text-[#B8A99A]">
            <span>hello@aureliahouse.com</span>
            <span>New York • Zurich</span>
          </div>
        </div>
      </div>
    </>
  );
};
