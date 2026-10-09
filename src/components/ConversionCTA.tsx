import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ConversionCTAProps {
  onOpenConsultation: () => void;
  onScrollToContact: () => void;
}

export const ConversionCTA: React.FC<ConversionCTAProps> = ({
  onOpenConsultation,
  onScrollToContact,
}) => {
  return (
    <section className="relative py-28 sm:py-36 lg:py-40 bg-[#2B2520] text-[#F5F1EA] overflow-hidden">
      {/* Background Architectural Ambient Image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="/src/assets/images/hero_luxury_living_1791494750198.jpg"
          alt="Aurelia House interior mood"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B2520] via-[#2B2520]/90 to-[#2B2520]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#B99A6B]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#B99A6B] font-medium">
              BEGIN YOUR RESIDENCE
            </span>
            <span className="w-8 h-[1px] bg-[#B99A6B]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#FBF9F5] leading-tight tracking-tight mb-6 uppercase">
            Ready to create a space <br className="hidden sm:inline" />
            that feels entirely yours?
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#D8CABB] font-light leading-relaxed max-w-xl mx-auto mb-10">
            Tell us about your home, your vision, and the way you want to live. We accept a limited number of commissions each year to ensure uncompromising devotion.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-9 py-4 bg-[#F5F1EA] text-[#2B2520] hover:bg-[#FFFFFF] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A6B] cursor-pointer shadow-lg"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#B99A6B] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onScrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#F5F1EA]/50 text-[#F5F1EA] hover:bg-[#F5F1EA]/10 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start a Conversation →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
