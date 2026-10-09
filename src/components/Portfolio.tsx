import React, { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { PROJECTS, Project } from '../data/content';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onInquireProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Residential', 'Architecture', 'Custom'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 lg:py-40 bg-[#EDE6DB]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#B99A6B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#77716A] font-medium">
                SELECTED WORKS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2B2520] tracking-tight">
              Quiet sanctuaries, <br className="hidden sm:inline" />
              singular spaces.
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#F5F1EA] border border-[#D8CABB]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2B2520] text-[#F5F1EA] font-medium shadow-xs'
                    : 'text-[#77716A] hover:text-[#2B2520]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Varied Editorial Composition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            // Asymmetrical editorial column spans
            let colSpan = 'md:col-span-6';
            let heightClass = 'h-[440px] sm:h-[500px]';

            if (index === 0) {
              colSpan = 'md:col-span-12 lg:col-span-8';
              heightClass = 'h-[460px] sm:h-[560px]';
            } else if (index === 1) {
              colSpan = 'md:col-span-12 lg:col-span-4';
              heightClass = 'h-[460px] sm:h-[560px]';
            } else if (index === 2) {
              colSpan = 'md:col-span-12 lg:col-span-5';
              heightClass = 'h-[440px] sm:h-[520px]';
            } else if (index === 3) {
              colSpan = 'md:col-span-12 lg:col-span-7';
              heightClass = 'h-[440px] sm:h-[520px]';
            } else {
              colSpan = 'md:col-span-6';
              heightClass = 'h-[420px] sm:h-[480px]';
            }

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`${colSpan} group relative ${heightClass} overflow-hidden bg-[#2B2520] border border-[#D8CABB] cursor-pointer shadow-[0_12px_36px_rgba(43,37,32,0.06)]`}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Floating Meta & Number */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[#FBF9F5] z-10">
                  <span className="text-xs font-mono uppercase tracking-widest bg-black/40 px-2.5 py-1 backdrop-blur-xs text-[#D8CABB]">
                    {project.number}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#EDE6DB] font-medium hidden sm:inline-block">
                    {project.location}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10 text-[#FBF9F5] transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2 text-xs text-[#D8CABB] tracking-wider uppercase">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FBF9F5] mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#EDE6DB]/80 font-light line-clamp-2 mb-4 max-w-lg">
                    {project.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#F5F1EA] group-hover:text-[#B99A6B] transition-colors">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#B99A6B]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onConsultationRequest={(title) => {
          onInquireProject(title);
        }}
      />
    </section>
  );
};
