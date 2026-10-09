import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../data/content';

interface FeaturedProjectProps {
  project: Project;
  onViewProject: (project: Project) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, onViewProject }) => {
  return (
    <section className="relative w-full bg-[#EDE6DB] py-12 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div
          onClick={() => onViewProject(project)}
          className="group relative w-full h-[60vh] sm:h-[75vh] min-h-[500px] overflow-hidden cursor-pointer shadow-[0_20px_60px_rgba(43,37,32,0.12)] border border-[#D8CABB]"
        >
          {/* Visual Background */}
          <img
            src={project.image}
            alt={`${project.title} - ${project.location} residential interior design by Aurelia House`}
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
          />

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />

          {/* Project Details Overlay */}
          <div className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-[#FBF9F5]">
            <div className="flex justify-between items-start">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D8CABB] font-medium bg-black/30 backdrop-blur-xs px-3 py-1">
                {project.number} / PRIVATE RESIDENCE
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#D8CABB] hidden sm:inline-block">
                {project.location} • {project.year}
              </span>
            </div>

            <div className="max-w-2xl transform transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FBF9F5] mb-4">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-[#EDE6DB]/90 font-light leading-relaxed max-w-xl mb-6">
                {project.description}
              </p>
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium text-[#F5F1EA] group-hover:text-[#B99A6B] transition-colors">
                <span>View Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 text-[#B99A6B]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
