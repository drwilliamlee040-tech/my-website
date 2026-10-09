import React from 'react';
import { ArrowRight, Compass, Layers, SunMedium } from 'lucide-react';
import { STATS } from '../data/content';

interface StudioIntroProps {
  onLearnMore: () => void;
}

export const StudioIntro: React.FC<StudioIntroProps> = ({ onLearnMore }) => {
  return (
    <section id="studio" className="relative py-24 sm:py-32 lg:py-40 bg-[#F5F1EA] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-6 h-[1px] bg-[#B99A6B]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#77716A] font-medium">
                  THE STUDIO
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2B2520] leading-[1.12] tracking-tight text-balance">
                Quiet luxury, <br />
                carefully considered.
              </h2>
            </div>

            {/* Architectural Micro Quote */}
            <div className="hidden lg:block mt-16 pt-8 border-t border-[#D8CABB]">
              <p className="text-sm font-serif italic text-[#77716A] leading-relaxed max-w-sm">
                “Architecture is the learned game, correct and magnificent, of forms assembled in the light.”
              </p>
            </div>
          </div>

          {/* Right Column: Story & Material Detail */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="space-y-6 text-base sm:text-lg text-[#40372F] font-light leading-relaxed max-w-2xl">
              <p>
                Aurelia House is an international interior architecture and design studio crafting private residences of quiet distinction. We believe true luxury does not shout; it breathes through exquisite proportions, natural light, and the honesty of enduring materials.
              </p>
              <p className="text-[#77716A] text-sm sm:text-base">
                Each commission is approached as a singular narrative—integrating custom joinery, sculptural stone elements, bespoke textiles, and circadian lighting schemes tailored precisely to your daily cadence and private sanctuary.
              </p>
            </div>

            <div>
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium text-[#2B2520] hover:text-[#B99A6B] transition-colors py-2 border-b border-[#2B2520] hover:border-[#B99A6B] group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A6B]"
              >
                <span>Meet The Studio & Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Architectural Material Composition Card */}
            <div className="mt-4 p-4 sm:p-6 bg-[#EDE6DB] border border-[#D8CABB] rounded-xs shadow-[0_12px_40px_rgba(43,37,32,0.04)] grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 overflow-hidden rounded-xs aspect-[4/3] bg-[#D8CABB]">
                <img
                  src="/src/assets/images/journal_material_palette_1791494898739.jpg"
                  alt="Curated material palette with travertine, raw linen, brushed bronze and fluted oak"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-7 space-y-2">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#77716A] font-medium">
                  Material Palette 2026
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2B2520]">
                  Travertine, Oak & Patinated Bronze
                </h3>
                <p className="text-xs text-[#77716A] leading-relaxed">
                  Every project starts with physical tactile exploration. We sample quarried natural stone, millwork finishes, and woven textiles in natural light.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Stats Strip */}
        <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-[#D8CABB]/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col space-y-1">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#2B2520] tracking-tight tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-[#40372F] font-medium">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#77716A] leading-tight">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
