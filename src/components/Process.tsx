import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="process" className="py-24 sm:py-32 lg:py-40 bg-[#F5F1EA] border-t border-[#D8CABB]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#B99A6B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#77716A] font-medium">
              METHODOLOGY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2B2520] tracking-tight">
            From first idea to <br className="hidden sm:inline" />
            final detail.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#77716A] font-light leading-relaxed">
            A disciplined four-phase progression that brings clarity, transparent governance, and peace of mind to complex architectural projects.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Selector */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-12 border-b border-[#D8CABB] pb-6">
          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeStepIndex === index;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(index)}
                className={`text-left p-6 transition-all duration-300 relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A6B] cursor-pointer ${
                  isActive
                    ? 'bg-[#EDE6DB] border border-[#D8CABB] shadow-xs'
                    : 'bg-transparent hover:bg-[#EDE6DB]/50 border border-transparent'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#B99A6B]" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-sm tracking-widest font-semibold ${
                      isActive ? 'text-[#B99A6B]' : 'text-[#77716A]'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#77716A] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#B99A6B]" />
                    {step.timeline}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#2B2520] font-normal mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-[#77716A] line-clamp-1">
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase (Desktop) */}
        <div className="hidden lg:block bg-[#EDE6DB] border border-[#D8CABB] p-10 sm:p-14 shadow-sm">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A6B] font-semibold">
                Phase {PROCESS_STEPS[activeStepIndex].step} — {PROCESS_STEPS[activeStepIndex].timeline}
              </span>
              <h3 className="font-serif text-4xl text-[#2B2520] font-light">
                {PROCESS_STEPS[activeStepIndex].title}: {PROCESS_STEPS[activeStepIndex].subtitle}
              </h3>
              <p className="text-base text-[#40372F] font-light leading-relaxed">
                {PROCESS_STEPS[activeStepIndex].summary}
              </p>
            </div>

            <div className="col-span-7 bg-[#F5F1EA] p-8 border border-[#D8CABB] space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#2B2520] block mb-2">
                Core Deliverables & Actions:
              </span>
              <div className="grid grid-cols-2 gap-4">
                {PROCESS_STEPS[activeStepIndex].points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#40372F]">
                    <CheckCircle2 className="w-4 h-4 text-[#B99A6B] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="bg-[#EDE6DB] p-6 border border-[#D8CABB] shadow-xs"
            >
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#D8CABB]">
                <span className="font-mono text-xs tracking-widest font-semibold text-[#B99A6B]">
                  {step.step} — {step.timeline}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#77716A]">
                  Step {index + 1} of 4
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#2B2520] mb-2 font-normal">
                {step.title}
              </h3>
              <p className="text-xs text-[#77716A] mb-4">
                {step.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-[#40372F] leading-relaxed mb-4">
                {step.summary}
              </p>
              <div className="space-y-2 pt-3 border-t border-[#D8CABB]">
                {step.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#40372F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B99A6B] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
