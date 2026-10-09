import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { JOURNAL_POSTS, JournalArticle } from '../data/content';
import { ArticleModal } from './ArticleModal';

interface JournalProps {
  onOpenConsultation: () => void;
}

export const Journal: React.FC<JournalProps> = ({ onOpenConsultation }) => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 sm:py-32 lg:py-40 bg-[#EDE6DB] border-t border-[#D8CABB]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#B99A6B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#77716A] font-medium">
                THE STUDIO JOURNAL
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2B2520] tracking-tight">
              Reflections on space, <br className="hidden sm:inline" />
              light, and living.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#77716A] font-light max-w-md leading-relaxed">
            Notes and architectural essays from our partners on tactile materials, spatial psychology, and quiet craftsmanship.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {JOURNAL_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group bg-[#F5F1EA] border border-[#D8CABB] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-[0_16px_40px_rgba(43,37,32,0.06)] hover:-translate-y-1"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2B2520]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-xs text-[#F5F1EA] text-[10px] tracking-widest uppercase px-2.5 py-1">
                    {post.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs text-[#77716A] mb-3">
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#2B2520] font-normal mb-3 group-hover:text-[#40372F] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#77716A] leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Action Footer */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#2B2520] group-hover:text-[#B99A6B] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#B99A6B]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onConsultationRequest={() => {
          setActiveArticle(null);
          onOpenConsultation();
        }}
      />
    </section>
  );
};
