import React from 'react';
import { ArrowUpRight, Compass, Home, Hammer, Sparkles, SlidersHorizontal, Palette } from 'lucide-react';
import { SERVICES, Service } from '../data/content';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const serviceIcons: Record<string, React.FC<{ className?: string }>> = {
  'interior-architecture': Compass,
  'residential-interiors': Home,
  'custom-spaces': Hammer,
  'material-lighting': Sparkles,
  'project-direction': SlidersHorizontal,
  'styling-finishing': Palette,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 lg:py-40 bg-[#F5F1EA] border-t border-[#D8CABB]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#B99A6B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#77716A] font-medium">
                DISCIPLINES & EXPERTISE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2B2520] tracking-tight">
              Design, from concept <br className="hidden sm:inline" />
              to completion.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#77716A] font-light max-w-md leading-relaxed">
            We provide an end-to-end architectural journey, bridging initial vision and master joinery with turnkey white-glove delivery.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: Service) => {
            const Icon = serviceIcons[service.id] || Compass;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className="group relative bg-[#FBF9F5] p-8 sm:p-10 border border-[#D8CABB] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(43,37,32,0.06)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                {/* Champagne Accent Top Border on Hover */}
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#B99A6B] transition-colors duration-300" />

                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EDE6DB]">
                    <span className="font-sans text-xs tracking-[0.2em] font-semibold text-[#B99A6B]">
                      {service.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#77716A] group-hover:text-[#2B2520] transition-colors" />
                  </div>

                  {/* Title & Focus */}
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#77716A] block mb-2 font-medium">
                    {service.focus}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2520] font-normal mb-4 group-hover:text-[#40372F] transition-colors">
                    {service.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#77716A] leading-relaxed mb-6 font-light">
                    {service.summary}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-8">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#40372F]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B99A6B]/70 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-[#EDE6DB] flex items-center justify-between text-xs uppercase tracking-[0.16em] font-medium text-[#2B2520] group-hover:text-[#B99A6B] transition-colors">
                  <span>Inquire For This Scope</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
