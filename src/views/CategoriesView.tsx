import React, { useState } from 'react';
import { Compass, ChevronRight, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/travelData';
import { TravelArticle } from '../types/travel';
import { ArticleCard } from '../components/ArticleCard';
import { SEOHead } from '../components/SEOHead';

interface CategoriesViewProps {
  articles: TravelArticle[];
  onSelectArticle: (slug: string) => void;
  initialCategory?: string;
}

export function CategoriesView({
  articles,
  onSelectArticle,
  initialCategory = 'Bangladesh'
}: CategoriesViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const filteredArticles = articles.filter(
    (a) => a.category === activeCategory || (activeCategory === 'International' && a.country !== 'Bangladesh')
  );

  return (
    <div className="bg-[#FAF9F5] min-h-screen py-10">
      <SEOHead
        title="Travel Categories & Themes – Income Shuvo"
        description="Explore travel guides organized by category: Bangladesh, Mountains, Beaches, Adventure, Food & Culture, and Budget Travel by Income Shuvo."
        canonicalPath="/categories"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
            Curated Themes
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Browse by Travel Style
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed">
            Select a travel pillar below to filter field reports, logistics checklists, and photo essays.
          </p>
        </div>

        {/* Category Pills Strip (Segmented Buttons) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0f2942] text-white border-[#0f2942] shadow-sm'
                    : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-serif">{cat.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-md font-mono ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </div>
                <p className={`text-[11px] mt-2 line-clamp-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {cat.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Category Header */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-stone-200">
          <div>
            <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block">
              Browsing Pillar
            </span>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-0.5">
              {activeCategory} Dispatches ({filteredArticles.length})
            </h2>
          </div>
        </div>

        {/* Filtered Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <ArticleCard
                key={art.id}
                article={art}
                onClick={() => onSelectArticle(art.slug)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 space-y-3">
            <Compass className="w-8 h-8 text-stone-300 mx-auto" />
            <p className="text-sm font-semibold text-stone-700">
              New field guides for "{activeCategory}" are currently in editorial production.
            </p>
            <p className="text-xs text-stone-500">
              Check back next week or subscribe to The Sunday Dispatch for upcoming routes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
