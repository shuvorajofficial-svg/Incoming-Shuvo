import React, { useState } from 'react';
import { Search, Compass, Calendar, DollarSign, ArrowUpRight, MapPin } from 'lucide-react';
import { Destination } from '../types/travel';
import { SEOHead } from '../components/SEOHead';
import { AdsterraBanner } from '../components/AdsterraAd';

interface DestinationsViewProps {
  destinations: Destination[];
  onSelectDestination: (slug: string) => void;
  onSelectArticle: (slug: string) => void;
}

export function DestinationsView({
  destinations,
  onSelectDestination,
  onSelectArticle
}: DestinationsViewProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedStyle, setSelectedStyle] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = ['All', 'Bangladesh', 'South Asia', 'East Asia', 'Europe', 'Middle East'];
  const styles = ['All', 'Mountains & Clouds', 'Beaches & Islands', 'Ancient Heritage', 'Rainforest & Tea Gardens', 'Scenic Train Journeys'];

  const filtered = destinations.filter((dest) => {
    const matchRegion = selectedRegion === 'All' || dest.region === selectedRegion;
    const matchStyle = selectedStyle === 'All' || dest.style === selectedStyle;
    const matchSearch =
      !searchQuery.trim() ||
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchRegion && matchStyle && matchSearch;
  });

  return (
    <div className="bg-[#FAF9F5] min-h-screen py-10">
      <SEOHead
        title="Destinations Directory – Bangladesh & Global Travel Guides"
        description="Browse comprehensive travel guides and itineraries for Bangladesh, Japan, Turkey, Switzerland, and beyond by Income Shuvo."
        canonicalPath="/destinations"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
            Global Travel Directory
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Where Will You Journey Next?
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Curated destinations across Bangladesh's lush valleys and coastlines, as well as unforgettable cultural epicenters around the globe.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-6 mb-10 shadow-xs space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by country, city, or landscape (e.g. Bangladesh, Kyoto, Mountains)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1 border-t border-stone-100">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider shrink-0 mr-2">
              Region:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto p-1 max-w-full">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    selectedRegion === reg
                      ? 'bg-[#0f2942] text-white shadow-xs font-semibold'
                      : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Travel Style Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1 border-t border-stone-100">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider shrink-0 mr-2">
              Style:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto p-1 max-w-full">
              {styles.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStyle(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    selectedStyle === st
                      ? 'bg-[#0284c7] text-white shadow-xs font-semibold'
                      : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <span>Showing {filtered.length} curated destinations</span>
          {(selectedRegion !== 'All' || selectedStyle !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedRegion('All');
                setSelectedStyle('All');
                setSearchQuery('');
              }}
              className="text-[#0284c7] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Destinations Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((dest) => (
              <div
                key={dest.id}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={dest.coverImage}
                      alt={dest.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[11px] font-bold text-slate-800 px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#0284c7]" />
                      <span>{dest.country}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                      {dest.style}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                      {dest.summary}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mt-4 pt-3 border-t border-stone-100">
                      <span className="text-[10px] font-semibold uppercase text-stone-400 tracking-wider block mb-1.5">
                        Key Highlights
                      </span>
                      <ul className="space-y-1 text-xs text-stone-600">
                        {dest.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-[#0284c7] font-bold">•</span>
                            <span className="truncate">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Meta Strip */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Best Season:</span>
                      <span className="font-medium text-stone-800 text-[11px] truncate max-w-[160px]">
                        {dest.bestTimeToVisit.split('(')[0]}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Est. Daily Cost:</span>
                      <span className="font-semibold text-stone-800 text-[11px]">
                        {dest.typicalDailyBudget}
                      </span>
                    </div>
                  </div>

                  {dest.articleSlug && (
                    <button
                      onClick={() => onSelectArticle(dest.articleSlug!)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#0f2942] hover:bg-[#0284c7] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Read Field Guide & Itinerary</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-stone-200 space-y-3">
            <Compass className="w-10 h-10 text-stone-300 mx-auto" />
            <h3 className="text-base font-serif font-bold text-stone-800">
              No destinations match your criteria
            </h3>
            <p className="text-xs text-stone-500">
              Try resetting your region, style, or search filters to see all available guides.
            </p>
          </div>
        )}

        {/* Sponsor Banner */}
        <div className="mt-16">
          <AdsterraBanner placement="footer" />
        </div>
      </div>
    </div>
  );
}
