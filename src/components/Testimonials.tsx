import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#F5F1EA]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#B99A6B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#77716A] font-medium">
              CLIENT TESTIMONIALS
            </span>
            <span className="w-6 h-[1px] bg-[#B99A6B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B2520] tracking-tight">
            What our clients say
          </h2>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="max-w-4xl mx-auto bg-[#EDE6DB] border border-[#D8CABB] p-8 sm:p-14 lg:p-16 relative shadow-[0_12px_40px_rgba(43,37,32,0.04)]">
          <Quote className="w-10 h-10 sm:w-14 sm:h-14 text-[#B99A6B]/50 mb-6" />

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-[#2B2520] leading-relaxed mb-10 italic">
            “{current.quote}”
          </blockquote>

          {/* Client Attribution & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-[#D8CABB]">
            <div>
              <p className="font-serif text-lg sm:text-xl text-[#2B2520] font-normal">
                {current.author}
              </p>
              <p className="text-xs text-[#77716A] tracking-wider uppercase mt-0.5">
                {current.location} • {current.project}
              </p>
            </div>

            {/* Pagination / Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#77716A] tracking-widest mr-2">
                0{activeIndex + 1} / 0{TESTIMONIALS.length}
              </span>
              <button
                onClick={prevTestimonial}
                className="p-3 bg-[#F5F1EA] hover:bg-[#2B2520] text-[#2B2520] hover:text-[#F5F1EA] border border-[#D8CABB] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A6B] cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-[#F5F1EA] hover:bg-[#2B2520] text-[#2B2520] hover:text-[#F5F1EA] border border-[#D8CABB] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A6B] cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Client Preview Pills / Badges below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 text-left border transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'bg-[#EDE6DB] border-[#B99A6B] shadow-xs'
                  : 'bg-[#F5F1EA] border-[#D8CABB] hover:bg-[#EDE6DB]/50'
              }`}
            >
              <p className="font-serif text-sm font-medium text-[#2B2520]">{t.author}</p>
              <p className="text-[11px] text-[#77716A]">{t.location}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
