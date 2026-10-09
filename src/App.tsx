import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StudioIntro } from './components/StudioIntro';
import { FeaturedProject } from './components/FeaturedProject';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { EditorialBreak } from './components/EditorialBreak';
import { Testimonials } from './components/Testimonials';
import { Journal } from './components/Journal';
import { ConversionCTA } from './components/ConversionCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS, Project } from './data/content';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [presetScope, setPresetScope] = useState<string | undefined>(undefined);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const handleOpenConsultation = (scope?: string) => {
    setPresetScope(scope);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setPresetScope(undefined);
  };

  const handleExploreWork = () => {
    const portfolioElement = document.querySelector('#portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToPhilosophy = () => {
    const philosophyElement = document.querySelector('#philosophy');
    if (philosophyElement) {
      philosophyElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];

  return (
    <div className="min-h-screen bg-[#F5F1EA] text-[#2B2520] font-sans selection:bg-[#B99A6B]/20 selection:text-[#2B2520]">
      {/* Skip to Content Accessible Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2B2520] focus:text-[#F5F1EA] focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Luxury Header */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreWork={handleExploreWork}
        />

        {/* Studio Editorial Intro */}
        <StudioIntro onLearnMore={handleScrollToPhilosophy} />

        {/* Featured Project Visual Section */}
        <FeaturedProject
          project={featuredProject}
          onViewProject={(p) => setActiveProjectModal(p)}
        />

        {/* Services & Disciplines */}
        <Services
          onSelectService={(serviceName) => {
            handleOpenConsultation(serviceName);
          }}
        />

        {/* Portfolio Showcase Grid */}
        <Portfolio
          onInquireProject={(projectTitle) => {
            handleOpenConsultation(`Residential Project inspired by ${projectTitle}`);
          }}
        />

        {/* Design Philosophy Section (Dark Espresso Accent) */}
        <Philosophy />

        {/* Architectural Timeline Process */}
        <Process />

        {/* Full-width Editorial Break */}
        <EditorialBreak />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Studio Journal & Insights */}
        <Journal onOpenConsultation={() => handleOpenConsultation()} />

        {/* Final High-Impact Conversion CTA */}
        <ConversionCTA
          onOpenConsultation={() => handleOpenConsultation()}
          onScrollToContact={handleScrollToContact}
        />

        {/* Detailed Contact Area */}
        <Contact initialServiceOrProject={presetScope} />
      </main>

      {/* Dark Espresso Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Global Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        presetScope={presetScope}
      />

      {/* Featured Project Standalone Modal if clicked directly from FeaturedProject */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onConsultationRequest={(title) => {
          setActiveProjectModal(null);
          handleOpenConsultation(`Project inspired by ${title}`);
        }}
      />
    </div>
  );
}

export default App;
