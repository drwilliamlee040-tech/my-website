import React, { useEffect } from 'react';
import { X, Clock, Calendar, ArrowRight, Share2 } from 'lucide-react';
import { JournalArticle } from '../data/content';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
  onConsultationRequest: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onConsultationRequest,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#2B2520]/80 backdrop-blur-md transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F5F1EA] border border-[#D8CABB] shadow-2xl flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#2B2520] text-[#F5F1EA] hover:bg-[#40372F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A6B] cursor-pointer"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Image Banner */}
        <div className="relative w-full h-[40vh] sm:h-[48vh] min-h-[260px] overflow-hidden bg-[#2B2520]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 right-6 text-[#FBF9F5]">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#D8CABB] mb-2 font-medium">
              <span>{article.category}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
            <h2 id="article-title" className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#FBF9F5] font-light leading-tight">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="p-4 bg-[#EDE6DB] border-l-2 border-[#B99A6B] text-sm sm:text-base italic text-[#40372F] leading-relaxed">
            {article.excerpt}
          </div>

          <div className="space-y-6 text-base sm:text-lg text-[#2B2520] font-light leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Article Footer & Consultation Prompt */}
          <div className="pt-8 border-t border-[#D8CABB] flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-xs text-[#77716A]">
              Published by <strong className="text-[#2B2520]">Aurelia House Studio</strong> • Architecture & Living
            </div>

            <button
              onClick={() => {
                onClose();
                onConsultationRequest();
              }}
              className="px-6 py-3 bg-[#2B2520] text-[#F5F1EA] hover:bg-[#40372F] text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Discuss Your Home Project</span>
              <ArrowRight className="w-4 h-4 text-[#B99A6B]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
