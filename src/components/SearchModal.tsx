import React, { useState, useEffect } from 'react';
import { Search, X, MapPin, ArrowRight, Compass } from 'lucide-react';
import { TravelArticle, Destination } from '../types/travel';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: TravelArticle[];
  destinations: Destination[];
  onSelectArticle: (slug: string) => void;
  onSelectDestination: (slug: string) => void;
}

export function SearchModal({
  isOpen,
  onClose,
  articles,
  destinations,
  onSelectArticle,
  onSelectDestination
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle handled by parent or keep open
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredArticles = cleanQuery
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(cleanQuery) ||
          a.destination.toLowerCase().includes(cleanQuery) ||
          a.country.toLowerCase().includes(cleanQuery) ||
          a.category.toLowerCase().includes(cleanQuery) ||
          a.seo.keywords.some((k) => k.toLowerCase().includes(cleanQuery))
      )
    : articles.slice(0, 3);

  const filteredDestinations = cleanQuery
    ? destinations.filter(
        (d) =>
          d.name.toLowerCase().includes(cleanQuery) ||
          d.country.toLowerCase().includes(cleanQuery) ||
          d.region.toLowerCase().includes(cleanQuery)
      )
    : destinations.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-stone-200">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-stone-200">
          <Search className="w-5 h-5 text-stone-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search travel guides, Bangladesh routes, Japan, Switzerland..."
            autoFocus
            className="w-full text-base placeholder-stone-400 text-slate-800 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-stone-400 hover:text-stone-600 mr-2 p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Articles Section */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-2 px-2">
              {cleanQuery ? `Travel Guides (${filteredArticles.length})` : 'Popular Travel Guides'}
            </div>
            {filteredArticles.length > 0 ? (
              <div className="space-y-1">
                {filteredArticles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      onSelectArticle(art.slug);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-stone-50 transition-colors text-left group cursor-pointer"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-[#0284c7] transition-colors">
                        {art.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {art.destination} · {art.category} · {art.readingTime}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[#0284c7] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-stone-500 px-2 py-1">No articles match your query.</p>
            )}
          </div>

          {/* Destinations Section */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 mb-2 px-2">
              {cleanQuery ? `Destinations (${filteredDestinations.length})` : 'Featured Regions'}
            </div>
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredDestinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => {
                      onSelectDestination(dest.slug);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 transition-colors text-left group cursor-pointer border border-stone-100"
                  >
                    <div className="w-9 h-9 rounded-lg overflow-hidden bg-stone-200 shrink-0">
                      <img
                        src={dest.coverImage}
                        alt={dest.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-800 group-hover:text-[#0284c7] transition-colors">
                        {dest.name}
                      </h5>
                      <span className="text-[11px] text-stone-500 block">{dest.country}</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-xs text-stone-500 px-2 py-1">No destinations match your query.</p>
            )}
          </div>
        </div>

        {/* Footer tip */}
        <div className="bg-stone-50 px-4 py-2.5 border-t border-stone-200 text-[11px] text-stone-500 flex items-center justify-between">
          <span>Search guides by name, country, or category</span>
          <span className="font-mono text-[10px]">ESC to close</span>
        </div>
      </div>
    </div>
  );
}
