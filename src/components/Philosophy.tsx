import React from 'react';
import { PHILOSOPHY } from '../data/content';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-28 sm:py-36 lg:py-44 bg-[#2B2520] text-[#F5F1EA] overflow-hidden">
      {/* Subtle Background Architectural Ambient Glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="/src/assets/images/editorial_architectural_living_1791494808240.jpg"
          alt="Architectural space background texture"
          className="w-full h-full object-cover filter blur-xs"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#2B2520]/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#B99A6B]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#B99A6B] font-medium">
              OUR APPROACH
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-light text-[#FBF9F5] leading-[1.08] tracking-tight text-balance">
            Beauty lives in <br />
            the details.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#D8CABB] font-light leading-relaxed max-w-xl">
            We reject superficial decoration. Our work derives character from spatial purity, authentic organic textures, and the interplay between light and form.
          </p>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {PHILOSOPHY.map((item, index) => (
            <div
              key={item.number}
              className="relative flex flex-col justify-between pt-8 border-t border-[#B99A6B]/40 group"
            >
              {/* Subtle top indicator */}
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-mono text-sm tracking-widest text-[#B99A6B] font-semibold">
                  {item.number} —
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D8CABB] font-medium group-hover:text-[#FBF9F5] transition-colors">
                  {item.name}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FBF9F5] mb-4 group-hover:text-[#EDE6DB] transition-colors">
                  {item.headline}
                </h3>
                <p className="text-sm sm:text-base text-[#D8CABB]/85 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Architectural Fine Line on Hover */}
              <div className="mt-8 pt-4">
                <span className="w-12 h-[1px] bg-[#B99A6B]/40 group-hover:w-24 group-hover:bg-[#B99A6B] transition-all duration-500 block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
