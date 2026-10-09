import React, { useState } from 'react';
import { ArrowRight, Check, Instagram, Linkedin, Globe, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [legalModalContent, setLegalModalContent] = useState<string | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  const navLinks = [
    { label: 'The Studio', href: '#studio' },
    { label: 'Disciplines & Services', href: '#services' },
    { label: 'Selected Portfolio', href: '#portfolio' },
    { label: 'Design Methodology', href: '#process' },
    { label: 'Studio Journal', href: '#journal' },
    { label: 'Contact & Inquiries', href: '#contact' },
  ];

  return (
    <>
      <footer className="bg-[#2B2520] text-[#F5F1EA] pt-20 sm:pt-28 pb-12 border-t border-[#40372F]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#40372F]">
            {/* Brand Block */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-normal uppercase text-[#FBF9F5] block">
                  AURELIA HOUSE
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#B99A6B] block mt-1">
                  INTERIORS • ARCHITECTURE • LIVING
                </span>
              </div>
              <p className="text-sm text-[#D8CABB] font-light leading-relaxed max-w-sm">
                Creating refined residential interiors shaped by thoughtful architecture, natural materials, timeless design, and the way you live.
              </p>
              <div className="pt-2 text-xs text-[#B8A99A]">
                <p>New York • 520 Broadway, SoHo</p>
                <p>Zurich • Atelier by Appointment</p>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A6B] font-semibold block mb-4">
                EXPLORE
              </span>
              <ul className="space-y-3 text-xs uppercase tracking-[0.16em]">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#D8CABB] hover:text-[#FFFFFF] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Notes Block */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A6B] font-semibold block mb-1">
                PRIVATE NOTES FROM THE STUDIO
              </span>
              <p className="text-xs text-[#D8CABB] font-light leading-relaxed">
                Receive our quarterly architectural journal and monograph previews on materials, lighting, and finished estates.
              </p>

              {newsletterSubscribed ? (
                <div className="p-3 bg-[#40372F] border border-[#B99A6B] text-xs text-[#F5F1EA] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B99A6B]" />
                  <span>Welcome to our private monograph dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <div className="flex">
                    <input
                      type="email"
                      required
                      placeholder="your.email@residence.com"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#40372F] border border-[#77716A]/50 text-xs text-[#FBF9F5] placeholder-[#B8A99A] focus:outline-none focus:border-[#B99A6B]"
                    />
                    <button
                      type="submit"
                      className="px-5 py-3 bg-[#B99A6B] hover:bg-[#d8cabb] text-[#2B2520] font-sans text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-[10px] text-[#77716A] block">
                    No unsolicited correspondence. Respectful privacy guaranteed.
                  </span>
                </form>
              )}

              {/* Social Channels */}
              <div className="pt-4 flex items-center gap-4 text-xs text-[#D8CABB]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B99A6B] transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <span>·</span>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B99A6B] transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Pinterest</span>
                </a>
                <span>·</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#B99A6B] transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright & Legal Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#77716A] gap-4">
            <div>
              <p>© 2026 AURELIA HOUSE. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setLegalModalContent('privacy')}
                className="hover:text-[#D8CABB] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => setLegalModalContent('terms')}
                className="hover:text-[#D8CABB] transition-colors cursor-pointer"
              >
                Terms of Engagement
              </button>
              <span>·</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-[#B99A6B] transition-colors cursor-pointer"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Dialog */}
      {legalModalContent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
        >
          <div className="bg-[#F5F1EA] text-[#2B2520] max-w-lg w-full p-8 border border-[#D8CABB] shadow-2xl relative space-y-4">
            <h3 className="font-serif text-2xl uppercase tracking-wider">
              {legalModalContent === 'privacy' ? 'Privacy Policy' : 'Terms of Engagement'}
            </h3>
            <div className="text-xs text-[#40372F] space-y-3 leading-relaxed max-h-60 overflow-y-auto">
              {legalModalContent === 'privacy' ? (
                <>
                  <p>
                    Aurelia House operates under strict non-disclosure conventions. All client property details, blueprints, geographical coordinates, art collections, and communication archives are stored encrypted and never disseminated.
                  </p>
                  <p>
                    We do not sell, rent, or disclose personal inquiry data to any third-party marketing entities.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All architectural concepts, furniture joinery drawings, finish palettes, and 3D renderings produced by Aurelia House remain the intellectual property of the studio until formal licensing or project completion sign-off.
                  </p>
                  <p>
                    On-site inspections and general contractor coordination adhere strictly to AIA residential standard practices.
                  </p>
                </>
              )}
            </div>
            <div className="pt-4 border-t border-[#D8CABB] flex justify-end">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-5 py-2 bg-[#2B2520] text-[#F5F1EA] text-xs uppercase tracking-wider cursor-pointer"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
