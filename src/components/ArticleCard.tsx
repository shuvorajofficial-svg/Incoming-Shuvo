import React, { useState } from 'react';
import { Clock, MapPin, ArrowUpRight, Compass } from 'lucide-react';
import { TravelArticle } from '../types/travel';

interface ArticleCardProps {
  article: TravelArticle;
  onClick: () => void;
  variant?: 'featured' | 'standard' | 'compact';
}

export function ArticleCard({ article, onClick, variant = 'standard' }: ArticleCardProps) {
  const [imageError, setImageError] = useState(false);

  if (variant === 'compact') {
    return (
      <article
        onClick={onClick}
        className="group flex gap-4 items-start cursor-pointer py-3 border-b border-stone-200/70 hover:bg-stone-50/60 p-2 rounded-lg transition-colors"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-stone-200 relative">
          {!imageError ? (
            <img
              src={article.coverImage}
              alt={article.imageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-400">
              <Compass className="w-6 h-6" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          {/* Unboxed clean metadata with dot separator */}
          <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-1">
            <span className="font-medium text-[#0284c7]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>
          <h4 className="text-sm font-serif font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h4>
          <p className="text-xs text-stone-500 mt-1 line-clamp-1">
            {article.destination}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={onClick}
      className="group bg-white border border-stone-200/90 rounded-2xl overflow-hidden hover:border-stone-300 transition-all duration-300 flex flex-col cursor-pointer shadow-xs hover:shadow-md"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
        {!imageError ? (
          <img
            src={article.coverImage}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-stone-100 text-stone-400">
            <Compass className="w-10 h-10" />
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Clean Unboxed Metadata: NO PILLS */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-2.5">
            <span className="font-semibold text-[#0284c7]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.destination}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-stone-600 mt-2.5 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Card Footer: Author and Read prompt */}
        <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#0f2942] text-white flex items-center justify-center text-[10px] font-bold">
              IS
            </span>
            <span className="font-medium text-stone-700">{article.author}</span>
          </div>

          <span className="inline-flex items-center gap-1 font-semibold text-[#0284c7] group-hover:translate-x-0.5 transition-transform">
            Read Guide <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
