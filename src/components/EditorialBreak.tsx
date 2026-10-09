import React from 'react';

export const EditorialBreak: React.FC = () => {
  return (
    <section className="relative w-full h-[65vh] sm:h-[80vh] min-h-[500px] overflow-hidden bg-[#2B2520] flex items-center justify-center">
      {/* High-Resolution Cinematic Photograph */}
      <img
        src="/src/assets/images/editorial_architectural_living_1791494808240.jpg"
        alt="Aurelia House architectural stone living pavilion with sunken lounge and warm cove illumination"
        className="absolute inset-0 w-full h-full object-cover object-center scale-100 transition-transform duration-1000"
        referrerPolicy="no-referrer"
        loading="lazy"
      />

      {/* Subtle Warm Dark Contrast Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Quiet Centered Editorial Phrase */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <span className="w-12 h-[1px] bg-[#B99A6B] mx-auto block mb-6" />
        <p className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FBF9F5] font-light tracking-[0.08em] leading-tight uppercase drop-shadow-sm">
          DESIGNED FOR THE WAY YOU LIVE.
        </p>
        <span className="text-[11px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#D8CABB] mt-6 block">
          Aurelia House • Private Architecture
        </span>
      </div>
    </section>
  );
};
