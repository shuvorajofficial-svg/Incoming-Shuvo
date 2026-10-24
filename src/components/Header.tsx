import { useState } from 'react';
import { Menu, X, Compass, Search } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
  onOpenSearch?: () => void;
}

export function Header({ currentView, onNavigate, onOpenSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string, param?: string) => {
    onNavigate(view, param);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-2xl font-serif font-bold tracking-tight text-[#0f2942] hover:text-[#0284c7] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Income Shuvo
          </button>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button
              onClick={() => handleNavClick('destinations')}
              className={`hover:text-[#0f2942] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'destinations' ? 'text-[#0f2942] font-semibold underline underline-offset-8 decoration-[#0284c7] decoration-2' : ''
              }`}
            >
              Destinations
            </button>
            <button
              onClick={() => handleNavClick('articles')}
              className={`hover:text-[#0f2942] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'articles' ? 'text-[#0f2942] font-semibold underline underline-offset-8 decoration-[#0284c7] decoration-2' : ''
              }`}
            >
              Articles
            </button>
            <button
              onClick={() => handleNavClick('categories')}
              className={`hover:text-[#0f2942] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'categories' ? 'text-[#0f2942] font-semibold underline underline-offset-8 decoration-[#0284c7] decoration-2' : ''
              }`}
            >
              Categories
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#0f2942] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'about' ? 'text-[#0f2942] font-semibold underline underline-offset-8 decoration-[#0284c7] decoration-2' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#0f2942] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentView === 'contact' ? 'text-[#0f2942] font-semibold underline underline-offset-8 decoration-[#0284c7] decoration-2' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                aria-label="Search travel guides"
                className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-stone-500" />
                <span>Search</span>
                <kbd className="hidden lg:inline text-[10px] bg-white border border-stone-300 rounded px-1 text-stone-500">⌘K</kbd>
              </button>
            )}

            <button
              onClick={() => handleNavClick('destinations')}
              className="px-4 py-2 text-xs font-medium text-white bg-[#0f2942] hover:bg-[#0284c7] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            >
              Explore Guides
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FAF9F5] px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick('destinations')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-100"
            >
              Destinations
            </button>
            <button
              onClick={() => handleNavClick('articles')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-100"
            >
              Articles
            </button>
            <button
              onClick={() => handleNavClick('categories')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-100"
            >
              Categories
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-100"
            >
              About Income Shuvo
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left px-3 py-2.5 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-100"
            >
              Contact & Collaborations
            </button>
            <button
              onClick={() => handleNavClick('admin-guide')}
              className="text-left px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#0284c7] hover:bg-sky-50"
            >
              Decap CMS & Netlify Setup
            </button>
          </div>
          {onOpenSearch && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-stone-100 rounded-lg text-sm text-stone-700"
            >
              <Search className="w-4 h-4 text-stone-500" />
              <span>Search Destination Guides</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
}
