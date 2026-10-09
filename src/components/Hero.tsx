import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreWork }) => {
  return (
    <section className="relative w-full min-h-screen flex items-end justify-start overflow-hidden bg-[#2B2520]">
      {/* Background Photography with Subtle Zoom / Scale */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/src/assets/images/hero_luxury_living_1791494750198.jpg"
          alt="Aurelia House luxury contemporary living room interior with limestone fireplace and curved bouclé seating"
          className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured Scrim & Warm Architectural Gradient for 4.5:1 Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />
        <div className="absolute inset-0 bg-[#2B2520]/20 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-36 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#B99A6B]" />
            <p className="text-[11px] sm:text-xs font-sans tracking-[0.28em] text-[#D8CABB] uppercase font-medium">
              INTERIORS • ARCHITECTURE • LIVING
            </p>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#FBF9F5] leading-[1.08] tracking-tight mb-6 sm:mb-8 text-balance">
            Spaces Designed <br className="hidden sm:inline" />
            To Feel Like Home.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-[#EDE6DB]/90 font-light leading-relaxed max-w-xl mb-8 sm:mb-10 text-balance">
            Thoughtful interiors shaped around light, material, proportion, and the way you live.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={onExploreWork}
              className="px-8 py-4 bg-[#F5F1EA] text-[#2B2520] hover:bg-[#FFFFFF] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A6B] cursor-pointer shadow-lg"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 text-[#B99A6B] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-transparent border border-[#F5F1EA]/60 text-[#F5F1EA] hover:bg-[#F5F1EA]/10 hover:border-[#F5F1EA] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A6B] cursor-pointer"
            >
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Explore Indicator */}
      <div className="absolute right-6 sm:right-12 bottom-8 z-10 hidden sm:flex flex-col items-center gap-3">
        <span className="text-[10px] tracking-[0.25em] text-[#D8CABB] uppercase font-medium rotate-90 origin-right translate-y-6">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#B99A6B] to-[#F5F1EA] animate-pulse" />
        <ArrowDown className="w-3.5 h-3.5 text-[#D8CABB]" />
      </div>
    </section>
  );
};
