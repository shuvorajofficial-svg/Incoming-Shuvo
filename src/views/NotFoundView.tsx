import React from 'react';
import { Compass, Home, Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface NotFoundViewProps {
  onNavigate: (view: string) => void;
  onOpenSearch?: () => void;
}

export function NotFoundView({ onNavigate, onOpenSearch }: NotFoundViewProps) {
  return (
    <div className="bg-[#FAF9F5] min-h-[70vh] flex items-center justify-center py-16 px-4">
      <SEOHead
        title="404 – Trail Lost | Income Shuvo"
        description="The travel guide or page you are looking for has taken a detour or does not exist."
      />

      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-sky-50 text-[#0284c7] flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
            Error 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Off the Beaten Path
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            The travel dispatch or coordinates you requested cannot be found. The road may have shifted, or the article has been reorganized.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#0f2942] hover:bg-[#0284c7] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="w-full sm:w-auto px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search All Guides</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
