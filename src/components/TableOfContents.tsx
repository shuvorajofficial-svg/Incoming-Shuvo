import React from 'react';
import { ListOrdered } from 'lucide-react';

interface TOCSection {
  id: string;
  heading: string;
}

interface TableOfContentsProps {
  sections: TOCSection[];
  activeId?: string;
  className?: string;
}

export function TableOfContents({ sections, activeId, className = '' }: TableOfContentsProps) {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className={`bg-stone-50/80 border border-stone-200/90 rounded-xl p-4 ${className}`}>
      <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-600">
        <ListOrdered className="w-3.5 h-3.5 text-[#0284c7]" />
        <span>In This Guide</span>
      </div>
      <nav className="space-y-1.5 text-xs">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => handleScrollTo(sec.id)}
            className={`block w-full text-left py-1 px-2 rounded transition-colors text-stone-600 hover:text-[#0f2942] hover:bg-stone-100/90 cursor-pointer ${
              activeId === sec.id ? 'bg-sky-50 text-[#0284c7] font-semibold' : ''
            }`}
          >
            {sec.heading}
          </button>
        ))}
        <button
          onClick={() => handleScrollTo('itinerary-section')}
          className="block w-full text-left py-1 px-2 rounded transition-colors text-stone-600 hover:text-[#0f2942] hover:bg-stone-100/90 cursor-pointer"
        >
          Day-by-Day Itinerary
        </button>
        <button
          onClick={() => handleScrollTo('budget-section')}
          className="block w-full text-left py-1 px-2 rounded transition-colors text-stone-600 hover:text-[#0f2942] hover:bg-stone-100/90 cursor-pointer"
        >
          Estimated Trip Expenses
        </button>
        <button
          onClick={() => handleScrollTo('packing-section')}
          className="block w-full text-left py-1 px-2 rounded transition-colors text-stone-600 hover:text-[#0f2942] hover:bg-stone-100/90 cursor-pointer"
        >
          Packing Essentials & Checklist
        </button>
        <button
          onClick={() => handleScrollTo('comments-section')}
          className="block w-full text-left py-1 px-2 rounded transition-colors text-stone-600 hover:text-[#0f2942] hover:bg-stone-100/90 cursor-pointer"
        >
          Traveler Community Notes
        </button>
      </nav>
    </div>
  );
}
