import React from 'react';
import { Compass, Heart, Shield, FileText, HelpCircle, Lock } from 'lucide-react';
import { SITE_METADATA } from '../data/travelData';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (view: string, param?: string) => {
    onNavigate(view, param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1E33] text-stone-300 border-t border-stone-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-2xl font-serif font-bold text-white tracking-tight hover:text-sky-400 transition-colors cursor-pointer text-left"
            >
              Income Shuvo
            </button>
            <p className="text-xs uppercase tracking-widest text-[#38bdf8] font-mono">
              {SITE_METADATA.tagline}
            </p>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              An independent travel journal dedicated to mindful journeys, authentic culture, sustainable adventures, and transparent budget travel across Bangladesh and the wider world.
            </p>
            <div className="pt-2 text-xs text-stone-400">
              <span>Author & Creator: </span>
              <strong className="text-stone-200">Income Shuvo</strong>
              <span className="block text-[11px] text-stone-500 mt-0.5">Based in Bangladesh · Wandering Worldwide</span>
            </div>
          </div>

          {/* Destination Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Featured Guides
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('article', 'sajek-valley-travel-guide')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sajek Valley Cloud Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('article', 'coxs-bazar-inani-beach-guide')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cox's Bazar & Marine Drive
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('article', 'kyoto-autumn-solitude-guide')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Kyoto Autumn Temples
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('article', 'cappadocia-budget-hot-air-balloons')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cappadocia Balloon Trails
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('article', 'sreemangal-tea-gardens-rainforest')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sreemangal Tea Rainforest
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('destinations')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Destinations Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('articles')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  All Travel Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('categories')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Travel Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Income Shuvo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Press Kit
                </button>
              </li>
            </ul>
          </div>

          {/* Editorial & Publishing */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Publishing & CMS
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Lock className="w-3 h-3 text-sky-400" />
                  <span>Decap CMS Portal</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admin-guide')}
                  className="text-left text-[#38bdf8] hover:text-white transition-colors cursor-pointer"
                >
                  Netlify & Git Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('disclaimer')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Adsterra & FTC Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Income Shuvo. All rights reserved. Content crafted with genuine travel passion.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Netlify Ready</span>
            <span>·</span>
            <span>Decap CMS Integrated</span>
            <span>·</span>
            <span>Adsterra Policy Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
