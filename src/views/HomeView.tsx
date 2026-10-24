import React, { useState } from 'react';
import { ArrowUpRight, Compass, Calendar, Clock, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { TravelArticle, Destination } from '../types/travel';
import { ArticleCard } from '../components/ArticleCard';
import { AdsterraBanner } from '../components/AdsterraAd';
import { NewsletterBox } from '../components/NewsletterBox';
import { SEOHead } from '../components/SEOHead';
import { SITE_METADATA } from '../data/travelData';

interface HomeViewProps {
  articles: TravelArticle[];
  destinations: Destination[];
  onSelectArticle: (slug: string) => void;
  onSelectDestination: (slug: string) => void;
  onNavigate: (view: string, param?: string) => void;
}

export function HomeView({
  articles,
  destinations,
  onSelectArticle,
  onSelectDestination,
  onNavigate
}: HomeViewProps) {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');

  // Lead story is Sajek Valley
  const leadArticle = articles.find((a) => a.featured) || articles[0];
  const secondaryArticles = articles.filter((a) => a.id !== leadArticle.id).slice(0, 2);
  const trendingArticles = articles.filter((a) => a.trending).slice(0, 4);

  const categories = ['All', 'Bangladesh', 'Mountains', 'Beaches', 'Culture & Food', 'Adventure', 'International'];

  const filteredFeed = selectedCategoryFilter === 'All'
    ? articles
    : articles.filter((a) => a.category === selectedCategoryFilter || a.region === selectedCategoryFilter);

  return (
    <div>
      <SEOHead
        title="Income Shuvo – Explore More. Travel Better. Discover the World."
        description="Curated travel guides, itineraries, budget tips, and documentary photography across Bangladesh and the world by Income Shuvo."
      />

      {/* 1. EDITORIAL HERO (LEAD STORY) */}
      <section className="relative pt-6 pb-12 sm:pb-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Headline & Editorial Context */}
            <div className="lg:col-span-5 space-y-5">
              {/* Clean unboxed metadata kicker */}
              <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                <span className="text-[#0284c7] font-semibold tracking-wide uppercase text-[11px]">
                  Featured Lead Story
                </span>
                <span aria-hidden="true">·</span>
                <span>{leadArticle.destination}</span>
                <span aria-hidden="true">·</span>
                <span>{leadArticle.readingTime}</span>
              </div>

              {/* Title with balanced wrap */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-[1.15] text-balance">
                {leadArticle.title}
              </h1>

              {/* Deck / Excerpt */}
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                {leadArticle.excerpt}
              </p>

              {/* Action and Author Byline */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectArticle(leadArticle.slug)}
                  className="px-6 py-3 rounded-xl bg-[#0f2942] hover:bg-[#0284c7] text-white text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Read Complete Guide</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="text-xs text-stone-500 pl-2">
                  <span>Written by </span>
                  <strong className="text-stone-800">{leadArticle.author}</strong>
                  <span className="block text-stone-400 text-[11px]">{leadArticle.publishedDate}</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Resolution Visual Showcase */}
            <div className="lg:col-span-7">
              <div
                onClick={() => onSelectArticle(leadArticle.slug)}
                className="group relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-stone-200"
              >
                <img
                  src={leadArticle.coverImage}
                  alt={leadArticle.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-sky-200">
                    Chittagong Hill Tracts, Bangladesh
                  </span>
                  <p className="text-sm font-medium text-stone-100 line-clamp-1 mt-0.5">
                    Morning Meghmala (sea of clouds) washing over Ruilui Para
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE-TIER EDITORIAL SALIENCE STRIP (SECONDARY FEATURES + TRENDING) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-stone-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
              Curated Dispatch
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Top Travel Stories & Field Notes
            </h2>
          </div>
          <button
            onClick={() => onNavigate('articles')}
            className="text-xs font-semibold text-[#0284c7] hover:text-[#0f2942] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View All Guides</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Secondary Features (2 Large Cards - 8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {secondaryArticles.map((art) => (
              <ArticleCard
                key={art.id}
                article={art}
                onClick={() => onSelectArticle(art.slug)}
              />
            ))}
          </div>

          {/* Trending / Quick Dispatch Column (4 Cols) */}
          <div className="lg:col-span-4 bg-white border border-stone-200/90 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-700">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Trending Dispatches</span>
              </div>
              <div className="space-y-4">
                {trendingArticles.map((art, idx) => (
                  <div
                    key={art.id}
                    onClick={() => onSelectArticle(art.slug)}
                    className="group cursor-pointer pb-3 border-b border-stone-100 last:border-none"
                  >
                    <div className="flex items-center gap-2 text-[11px] text-stone-400 mb-1">
                      <span className="font-mono text-stone-500">0{idx + 1}.</span>
                      <span className="text-[#0284c7] font-medium">{art.category}</span>
                      <span>·</span>
                      <span>{art.readingTime}</span>
                    </div>
                    <h4 className="text-sm font-serif font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors line-clamp-2 leading-snug">
                      {art.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 text-xs text-stone-500">
              <span>Updated weekly from field expeditions by </span>
              <strong className="text-stone-800">Income Shuvo</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ADSTERRA TOP LEADERBOARD SPONSOR PLACEMENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdsterraBanner placement="top-leaderboard" />
      </div>

      {/* 3. FEATURED DESTINATIONS SPOTLIGHT */}
      <section className="py-12 sm:py-16 bg-[#F3EFE6]/60 border-y border-stone-200/90 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-stone-300/80">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
                Destination Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                Explore by Iconic Landscapes
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md">
              From the highest peaks of Rangamati to the tranquil Zen shrines of Kyoto and alpine trains of Switzerland.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.slice(0, 6).map((dest) => (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest.slug)}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={dest.coverImage}
                      alt={dest.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-stone-800 px-2.5 py-1 rounded-md shadow-xs">
                      {dest.country}
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                      {dest.style}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                      {dest.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="text-[11px]">Best: {dest.bestTimeToVisit.split('(')[0]}</span>
                  <span className="font-semibold text-[#0284c7] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    Guides <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FILTERABLE FEED BY CATEGORY (BUTTONS / TABS) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
              Travel Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              All Travel Articles & Itineraries
            </h2>
          </div>

          {/* Interactive filter tabs (clean functional buttons, no garish badges) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategoryFilter === cat
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeed.map((art) => (
            <ArticleCard
              key={art.id}
              article={art}
              onClick={() => onSelectArticle(art.slug)}
            />
          ))}
        </div>
      </section>

      {/* 5. AUTHOR SPOTLIGHT: INCOME SHUVO */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xs">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-[#0f2942] text-white flex items-center justify-center shrink-0 shadow-sm relative">
            <span className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
              IS
            </span>
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" title="Traveling Active" />
          </div>

          <div className="space-y-3 flex-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
              Meet The Travel Creator
            </span>
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              Income Shuvo
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed max-w-2xl">
              "Travel is not about collecting stamps or checking off bucket lists; it is about slowing down enough to understand the rhythm of a place. From the cloud ridges of Sajek to the ancient stone paths of Kyoto, my goal is to equip travelers with honest itineraries, real costs, and deep cultural reverence."
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-stone-500 pt-2">
              <div>
                <strong className="text-slate-900 text-sm font-semibold">64 / 64</strong> Districts in Bangladesh
              </div>
              <span className="text-stone-300">·</span>
              <div>
                <strong className="text-slate-900 text-sm font-semibold">28+</strong> Countries Explored
              </div>
              <span className="text-stone-300">·</span>
              <div>
                <strong className="text-slate-900 text-sm font-semibold">100%</strong> Independent & Unbiased
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('about')}
            className="px-5 py-2.5 rounded-xl border border-stone-300 hover:border-slate-800 text-xs font-semibold text-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Read Full Biography
          </button>
        </div>
      </section>

      {/* 6. NEWSLETTER DISPATCH */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterBox />
      </div>
    </div>
  );
}
