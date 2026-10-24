import React, { useState } from 'react';
import { Shield, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SITE_METADATA } from '../data/travelData';

interface LegalViewProps {
  initialTab?: 'privacy' | 'terms' | 'disclaimer';
}

export function LegalView({ initialTab = 'privacy' }: LegalViewProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'disclaimer'>(initialTab);

  return (
    <div className="bg-[#FAF9F5] min-h-screen py-10">
      <SEOHead
        title={
          activeTab === 'privacy'
            ? 'Privacy & Cookie Policy – Income Shuvo'
            : activeTab === 'terms'
            ? 'Terms & Conditions – Income Shuvo'
            : 'Travel & Advertising Disclaimer – Income Shuvo'
        }
        description="Legal documentation for Income Shuvo Travel Blog: Privacy Policy, Terms and Conditions, and Travel/Adsterra Advertising Disclaimers."
        canonicalPath={`/${activeTab}`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Policies & Editorial Transparency
          </h1>
          <p className="text-xs sm:text-sm text-stone-500">
            Effective Date: October 2026 · Income Shuvo Travel Journal
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center gap-2 p-1 bg-stone-100 rounded-xl max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Privacy & Cookies
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Terms of Use
          </button>
          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'disclaimer'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Travel & Ad Disclaimer
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-10 shadow-xs text-sm text-stone-700 leading-relaxed space-y-6">
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-200">
                <Shield className="w-5 h-5 text-[#0284c7]" />
                <h2 className="text-xl font-serif font-bold text-slate-900">
                  Privacy Policy & Cookie Disclosure
                </h2>
              </div>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">1. Information We Collect</h3>
                <p>
                  <strong>Income Shuvo</strong> collects information you voluntarily provide when subscribing to "The Sunday Dispatch" newsletter, commenting on travel guides, or submitting inquiries via our contact form (such as your name and email address).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">2. Third-Party Advertising & Adsterra Cookies</h3>
                <p>
                  We partner with third-party advertising networks, including <strong>Adsterra</strong> and affiliate platforms. These third parties may use cookies, web beacons, and similar technologies to serve advertisements based on your prior visits to this website or other websites on the internet.
                </p>
                <p>
                  Adsterra's use of advertising cookies enables it and its partners to serve ads based on your visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting the Network Advertising Initiative opt-out page or configuring their browser cookie settings.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">3. Data Retention & Your Rights</h3>
                <p>
                  We do not sell, rent, or trade your personal email address to third parties. If you wish to unsubscribe from our newsletter, you may do so at any time via the unsubscribe link present in every dispatch or by emailing us directly at <code>shuvorajofficial@gmail.com</code>.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-200">
                <FileText className="w-5 h-5 text-[#0284c7]" />
                <h2 className="text-xl font-serif font-bold text-slate-900">
                  Terms & Conditions
                </h2>
              </div>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">1. Intellectual Property & Photography Rights</h3>
                <p>
                  All written content, itineraries, original photography, maps, and illustrations published on <strong>Income Shuvo</strong> (incomeshuvo.com) are the intellectual property of Income Shuvo unless explicitly credited otherwise.
                </p>
                <p>
                  You may not republish, reproduce, duplicate, or syndicate full articles or high-resolution photos without prior written consent. Brief excerpts (under 100 words) may be quoted provided direct do-follow attribution and link to the original article are given.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">2. User Comments & Community Etiquette</h3>
                <p>
                  When posting notes in our comments section, you agree to maintain respectful, civil dialogue. Defamatory comments, abusive language, spam links, or unauthorized promotional advertisements will be deleted immediately.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'disclaimer' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-200">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-serif font-bold text-slate-900">
                  Travel & Advertising Disclaimers
                </h2>
              </div>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">1. Estimated Costs & Price Accuracy</h3>
                <p>
                  <strong>All travel costs, hotel rates, transport fares, and meal prices listed across Income Shuvo are estimates</strong> based on average traveler expenses and real field visits conducted by the author. We explicitly do NOT fabricate real-time rates or live inventory pricing.
                </p>
                <p>
                  Travel expenses in Bangladesh (such as Chander Gari jeep hire, fuel surcharges, resort rates) and internationally (rail passes, museum entrance fees) fluctuate regularly due to inflation, seasonal demand, and regional government policies. Always confirm critical rates with official transport desks and licensed booking agents.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">2. Adventure Travel & Personal Safety</h3>
                <p>
                  Traveling through hilly terrains, remote rainforests (such as Lawachara), and border zones (such as Sajek Valley / Mizoram border) entails natural risks including road accidents, sudden weather shifts, and terrain hazards. Travelers are strictly responsible for their personal safety, physical fitness, obtaining mandatory permits/convoy escorts, and securing comprehensive travel insurance.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">3. FTC Affiliate & Sponsorship Disclosure</h3>
                <p>
                  Income Shuvo may earn a small affiliate commission when you book accommodations, gear, or travel insurance through links on this website, at zero additional cost to you. Advertisements served via <strong>Adsterra</strong> are clearly labeled with sponsor indicators. We only recommend gear and services we genuinely endorse.
                </p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
