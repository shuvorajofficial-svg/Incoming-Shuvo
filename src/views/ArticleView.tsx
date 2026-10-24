import React, { useState, useEffect } from 'react';
import { 
  Clock, Calendar, User, ArrowLeft, ChevronDown, ChevronUp, 
  CheckSquare, MessageSquare, Send, Heart, Bookmark, Share2, Compass, AlertCircle 
} from 'lucide-react';
import { TravelArticle, Comment } from '../types/travel';
import { TableOfContents } from '../components/TableOfContents';
import { EstimatedCostCard } from '../components/EstimatedCostCard';
import { SocialShareBar } from '../components/SocialShareBar';
import { AdsterraBanner } from '../components/AdsterraAd';
import { ArticleCard } from '../components/ArticleCard';
import { SEOHead } from '../components/SEOHead';
import { SITE_METADATA } from '../data/travelData';

interface ArticleViewProps {
  article: TravelArticle;
  allArticles: TravelArticle[];
  onSelectArticle: (slug: string) => void;
  onBack: () => void;
  onNavigate: (view: string, param?: string) => void;
}

export function ArticleView({
  article,
  allArticles,
  onSelectArticle,
  onBack,
  onNavigate
}: ArticleViewProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTOC, setActiveTOC] = useState(article.contentSections[0]?.id || '');
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c1',
      author: 'Tanvir Hossain',
      date: 'October 21, 2026',
      content: 'Incredible guide, Income Shuvo! We followed your Chander Gari army escort advice at Baghaihat and stayed in Konglak Para. Waking up to the sea of clouds was pure magic.',
      likes: 8
    },
    {
      id: 'c2',
      author: 'Elena Rostova',
      date: 'October 22, 2026',
      content: 'The transparent budget estimate was so refreshing to see. Most travel sites quote outdated prices. Thank you for setting realistic expectations for rural hill travel!',
      likes: 5
    }
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Scroll depth progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newCommentObj: Comment = {
      id: `comm_${Date.now()}`,
      author: newCommentName.trim(),
      date: 'Just now',
      content: newCommentText.trim(),
      likes: 0
    };

    setComments([newCommentObj, ...comments]);
    setNewCommentName('');
    setNewCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 4000);
  };

  const handleLikeComment = (id: string) => {
    setComments(comments.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c)));
  };

  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id && (a.category === article.category || a.region === article.region))
    .slice(0, 3);

  // If fewer than 3 related by category, pick other articles
  const finalRelated = relatedArticles.length >= 2 
    ? relatedArticles 
    : allArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <SEOHead
        title={article.seo.metaTitle || article.title}
        description={article.seo.metaDescription || article.excerpt}
        image={article.coverImage}
        canonicalPath={`/article/${article.slug}`}
        article={article}
        type="article"
      />

      {/* Reading Progress Bar (Pinned Top) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-stone-200 z-50">
        <div
          className="h-full bg-[#0284c7] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Article Header & Navigation Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-stone-900 transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate('articles')}
            className="hover:text-stone-900 transition-colors cursor-pointer"
          >
            Articles
          </button>
          <span>/</span>
          <span className="text-[#0284c7] font-medium truncate max-w-xs sm:max-w-sm">
            {article.destination}
          </span>
        </div>

        {/* Article Meta Bar (Unboxed clean metadata) */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center flex-wrap gap-2 text-xs text-stone-500 font-medium">
            <span className="font-semibold text-[#0284c7] tracking-wider uppercase text-[11px]">
              {article.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{article.destination}</span>
            <span aria-hidden="true">·</span>
            <span>Published {article.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-[1.2] text-balance">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-stone-600 font-serif italic max-w-2xl mx-auto leading-relaxed">
            "{article.subtitle}"
          </p>

          {/* Author Byline */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0f2942] text-white flex items-center justify-center font-bold text-xs shadow-sm">
              IS
            </div>
            <div className="text-left text-xs">
              <span className="font-bold text-slate-900 block">{article.author}</span>
              <span className="text-stone-500">{article.authorRole}</span>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="my-8 sm:my-12 rounded-2xl overflow-hidden shadow-xl aspect-[16/9] max-h-[580px] w-full bg-stone-200">
          <img
            src={article.coverImage}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image Caption & Location Attribution */}
        <div className="max-w-4xl mx-auto -mt-6 sm:-mt-8 mb-8 text-center text-xs text-stone-500 italic">
          <span>Captured on field assignment by Income Shuvo · {article.destination}, {article.country}</span>
        </div>
      </div>

      {/* Two-Column Asymmetric Reading Layout: 70% Body / 30% Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Reading Column (8 Cols - ~68%) */}
          <main className="lg:col-span-8 space-y-10">
            {/* Social Share Bar */}
            <SocialShareBar article={article} />

            {/* Highlights Deck */}
            <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#0284c7] mb-3">
                Key Expeditions Highlights
              </h3>
              <ul className="space-y-2 text-sm text-stone-700">
                {article.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#0284c7] font-bold mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Sections */}
            <div className="prose prose-stone max-w-none text-slate-800 space-y-8">
              {article.contentSections.map((sec, idx) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24 space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 border-b border-stone-200/80 pb-3">
                    {sec.heading}
                  </h2>

                  {sec.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className={`text-base sm:text-lg text-stone-700 leading-relaxed ${
                        idx === 0 && pIdx === 0
                          ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#0f2942]'
                          : ''
                      }`}
                    >
                      {p}
                    </p>
                  ))}

                  {sec.callout && (
                    <div className="my-6 p-4 rounded-xl bg-[#F3EFE6] border border-stone-300 text-sm text-stone-800 leading-relaxed">
                      {sec.callout}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* IN-ARTICLE ADSTERRA SPONSOR BANNER */}
            <AdsterraBanner placement="in-article" />

            {/* Day-by-Day Interactive Itinerary */}
            <section id="itinerary-section" className="scroll-mt-24 pt-6 border-t border-stone-200">
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
                  Field Tested Route
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">
                  Complete Day-by-Day Itinerary
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Click on each day to expand transport timings, recommended stays, and meal recommendations.
                </p>
              </div>

              <div className="space-y-3">
                {article.itinerary.map((day) => {
                  const isOpen = expandedDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className="border border-stone-200 bg-white rounded-xl overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => setExpandedDay(isOpen ? null : day.day)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-stone-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#0f2942] text-white flex items-center justify-center text-xs font-bold shrink-0">
                            D{day.day}
                          </span>
                          <div>
                            <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block">
                              Day {day.day}
                            </span>
                            <h4 className="text-base font-serif font-bold text-slate-900">
                              {day.title}
                            </h4>
                          </div>
                        </div>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-2 border-t border-stone-100 space-y-4 animate-fade-in text-sm">
                          <div>
                            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2">
                              Planned Schedule & Activities
                            </span>
                            <ul className="space-y-2">
                              {day.activities.map((act, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-2.5 text-stone-700">
                                  <span className="text-[#0284c7] font-bold mt-0.5">•</span>
                                  <span>{act}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {(day.recommendedStay || day.mealTip) && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                              {day.recommendedStay && (
                                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80">
                                  <span className="font-semibold text-stone-700 block">Recommended Stay:</span>
                                  <span className="text-stone-600">{day.recommendedStay}</span>
                                </div>
                              )}
                              {day.mealTip && (
                                <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80">
                                  <span className="font-semibold text-stone-700 block">Local Dining Tip:</span>
                                  <span className="text-stone-600">{day.mealTip}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Estimated Trip Budget Card */}
            <section id="budget-section" className="scroll-mt-24 pt-4">
              <EstimatedCostCard cost={article.estimatedCost} destination={article.destination} />
            </section>

            {/* Packing Essentials Checklist */}
            <section id="packing-section" className="scroll-mt-24 bg-stone-50 border border-stone-200/90 rounded-2xl p-6">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-stone-200">
                <CheckSquare className="w-5 h-5 text-[#0284c7]" />
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Packing Checklist & Essential Gear
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
                {article.packingEssentials.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 bg-white rounded-lg border border-stone-200/70">
                    <span className="w-4 h-4 rounded border border-stone-300 bg-stone-50 flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Photography Gallery Strip */}
            {article.galleryImages.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Field Photography Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {article.galleryImages.map((img, i) => (
                    <figure key={i} className="group overflow-hidden rounded-xl border border-stone-200 bg-white">
                      <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                        <img
                          src={img.url}
                          alt={img.caption}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="p-3 text-xs text-stone-500 italic text-center">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Social Share Bar */}
            <SocialShareBar article={article} />

            {/* Author Profile Bio Box */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#0f2942] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm">
                IS
              </div>
              <div className="space-y-2 text-center sm:text-left flex-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                  Written and Verified By
                </span>
                <h4 className="text-lg font-serif font-bold text-slate-900">
                  {article.author}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {SITE_METADATA.authorBio}
                </p>
                <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-[#0284c7]">
                  <button onClick={() => onNavigate('about')} className="hover:underline cursor-pointer">
                    Read Author Story →
                  </button>
                  <button onClick={() => onNavigate('contact')} className="hover:underline cursor-pointer">
                    Submit Field Question →
                  </button>
                </div>
              </div>
            </div>

            {/* Comments & Traveler Community Notes */}
            <section id="comments-section" className="scroll-mt-24 pt-6 border-t border-stone-200 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
                    Reader Notes & Updates
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mt-0.5">
                    Traveler Community ({comments.length})
                  </h3>
                </div>
                <MessageSquare className="w-5 h-5 text-stone-400" />
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleCommentSubmit} className="bg-white border border-stone-200 rounded-xl p-5 space-y-3">
                <h4 className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                  Have recent route advice or feedback on this guide?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={newCommentName}
                    onChange={(e) => setNewCommentName(e.target.value)}
                    placeholder="Your Name (e.g. Rahul, Travel Fellow)"
                    required
                    className="p-2.5 rounded-lg border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                  />
                </div>
                <textarea
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Share latest checkpoint status, road conditions, or helpful tips for fellow travelers..."
                  rows={3}
                  required
                  className="w-full p-2.5 rounded-lg border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                />
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-stone-400">
                    Comments are reviewed to prevent spam.
                  </span>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#0f2942] hover:bg-[#0284c7] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Comment</span>
                  </button>
                </div>
                {commentSuccess && (
                  <p className="text-xs text-emerald-600 font-medium">
                    Thank you! Your community note has been posted.
                  </p>
                )}
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comm) => (
                  <div key={comm.id} className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-bold text-stone-800">{comm.author}</span>
                      <span>{comm.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {comm.content}
                    </p>
                    <div className="pt-1 flex items-center gap-4 text-xs">
                      <button
                        onClick={() => handleLikeComment(comm.id)}
                        className="flex items-center gap-1 text-stone-500 hover:text-rose-600 transition-colors cursor-pointer"
                      >
                        <Heart className="w-3.5 h-3.5" />
                        <span>{comm.likes} Helpful</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sticky Margin Sidebar (4 Cols - ~32%) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              {/* Table of Contents */}
              <TableOfContents
                sections={article.contentSections}
                activeId={activeTOC}
              />

              {/* Author Card Minimal */}
              <div className="bg-white border border-stone-200/90 rounded-xl p-5 shadow-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block mb-2">
                  Guide Author
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0f2942] text-white flex items-center justify-center font-bold text-sm">
                    IS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{article.author}</h4>
                    <span className="text-xs text-stone-500">Traveler & Photojournalist</span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                  Dedicated to documenting authentic cultural heritage and practical budget logistics.
                </p>
              </div>

              {/* SIDEBAR ADSTERRA BANNER */}
              <AdsterraBanner placement="sidebar" />

              {/* Quick Trip Stats Card */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-xs space-y-2.5">
                <span className="font-mono uppercase text-[10px] tracking-wider text-stone-400 block">
                  Quick Expedition Summary
                </span>
                <div className="flex justify-between py-1 border-b border-stone-200/70">
                  <span className="text-stone-500">Destination:</span>
                  <span className="font-semibold text-stone-800">{article.destination}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200/70">
                  <span className="text-stone-500">Country:</span>
                  <span className="font-semibold text-stone-800">{article.country}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200/70">
                  <span className="text-stone-500">Duration:</span>
                  <span className="font-semibold text-stone-800">{article.itinerary.length} Days Itinerary</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Style:</span>
                  <span className="font-semibold text-[#0284c7]">{article.category}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Travel Guides Carousel / Grid */}
        <section className="mt-20 pt-12 border-t border-stone-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
                Keep Exploring
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">
                Related Travel Dispatches
              </h3>
            </div>
            <button
              onClick={() => onNavigate('articles')}
              className="text-xs font-semibold text-[#0284c7] hover:underline cursor-pointer"
            >
              Browse All →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {finalRelated.map((rel) => (
              <ArticleCard
                key={rel.id}
                article={rel}
                onClick={() => onSelectArticle(rel.slug)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
