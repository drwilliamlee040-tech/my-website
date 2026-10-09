import React, { useEffect } from 'react';
import { X, ArrowRight, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { Project } from '../data/content';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onConsultationRequest: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onConsultationRequest,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#2B2520]/80 backdrop-blur-md transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#F5F1EA] border border-[#D8CABB] shadow-2xl flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#2B2520] text-[#F5F1EA] hover:bg-[#40372F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A6B] cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Header */}
        <div className="relative w-full h-[45vh] sm:h-[55vh] min-h-[300px] overflow-hidden bg-[#2B2520]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 text-[#FBF9F5]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D8CABB] font-medium">
                {project.number} — {project.category}
              </span>
            </div>
            <h2 id="modal-title" className="font-serif text-3xl sm:text-5xl text-[#FBF9F5] font-light">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Project Content Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-10">
          {/* Key Meta Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#D8CABB] text-xs">
            <div>
              <span className="text-[#77716A] uppercase tracking-wider block mb-1">Location</span>
              <span className="font-medium text-[#2B2520]">{project.location}</span>
            </div>
            <div>
              <span className="text-[#77716A] uppercase tracking-wider block mb-1">Year Completed</span>
              <span className="font-medium text-[#2B2520]">{project.year}</span>
            </div>
            <div>
              <span className="text-[#77716A] uppercase tracking-wider block mb-1">Spatial Area</span>
              <span className="font-medium text-[#2B2520]">{project.area}</span>
            </div>
            <div>
              <span className="text-[#77716A] uppercase tracking-wider block mb-1">Discipline</span>
              <span className="font-medium text-[#2B2520]">{project.category}</span>
            </div>
          </div>

          {/* Description & Story */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#2B2520]">Architectural Narrative</h3>
            <p className="text-base text-[#40372F] font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architectural Challenge & Studio Solution */}
          {project.challenge && project.solution && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#EDE6DB] border border-[#D8CABB]">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#77716A] block mb-2">
                  The Spatial Challenge
                </span>
                <p className="text-xs sm:text-sm text-[#40372F] leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B99A6B] block mb-2">
                  The Aurelia Resolution
                </span>
                <p className="text-xs sm:text-sm text-[#40372F] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          )}

          {/* Materials Palette */}
          <div>
            <h3 className="font-serif text-xl text-[#2B2520] mb-3">Material Register</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.materials.map((mat, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-[#EDE6DB] border border-[#D8CABB] text-[#40372F] font-medium"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#D8CABB] flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={() => {
                onClose();
                onConsultationRequest(project.title);
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#2B2520] text-[#F5F1EA] hover:bg-[#40372F] text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Inquire About Similar Architecture</span>
              <ArrowRight className="w-4 h-4 text-[#B99A6B]" />
            </button>
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-[0.16em] text-[#77716A] hover:text-[#2B2520] py-2 cursor-pointer"
            >
              Close Project Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
