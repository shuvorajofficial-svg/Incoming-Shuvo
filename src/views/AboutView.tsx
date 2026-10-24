import React from 'react';
import { Camera, Compass, Award, ShieldCheck, Heart, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { SITE_METADATA } from '../data/travelData';
import { SEOHead } from '../components/SEOHead';
import { NewsletterBox } from '../components/NewsletterBox';

interface AboutViewProps {
  onNavigate: (view: string, param?: string) => void;
}

export function AboutView({ onNavigate }: AboutViewProps) {
  return (
    <div className="bg-[#FAF9F5] min-h-screen py-10">
      <SEOHead
        title="About Income Shuvo – Travel Philosophy, Biography & Editorial Ethics"
        description="Learn about Income Shuvo, founder of Income Shuvo Travel Blog. 64 districts in Bangladesh explored, 28+ countries, camera gear, and independent travel ethics."
        canonicalPath="/about"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Introduction */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
            Meet the Author
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Hi, I'm Income Shuvo.
          </h1>
          <p className="text-base sm:text-lg text-stone-600 font-serif italic">
            "I travel not to conquer places, but to listen to what they have to say."
          </p>
        </section>

        {/* Narrative & Bio Profile Split */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#0f2942] relative shadow-xl flex items-center justify-center text-white">
              <div className="text-center p-6 space-y-3">
                <div className="w-24 h-24 mx-auto rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center font-serif text-3xl font-bold">
                  IS
                </div>
                <h3 className="text-xl font-serif font-bold text-white">Income Shuvo</h3>
                <p className="text-xs text-sky-200 uppercase tracking-widest font-mono">
                  Writer · Photographer · Explorer
                </p>
                <div className="pt-2 text-[11px] text-stone-300">
                  Dhaka, Bangladesh & Worldwide
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              The Journey Behind the Journal
            </h2>
            <p>
              Growing up in Bangladesh, my early wanderlust was fueled by passenger river ferries traversing the Padma and Meghna rivers, and the quiet serpentine roads climbing into the Chittagong Hill Tracts. Over the past decade, that curiosity transformed into a lifelong vocation: documenting landscapes, traditional communities, and practical overland logistics.
            </p>
            <p>
              I launched <strong>Income Shuvo</strong> with a single mission: to create genuine, in-depth travel guides that bridge the gap between dreamlike photography and ground-level reality. Whether walking above the sea of clouds in Sajek or catching the first dawn light across Cappadocia, every guide published here is based on authentic field experience.
            </p>
            <p>
              I believe in transparent pricing, supporting small family-run homestays, honoring local indigenous cultures, and never exaggerating claims or inventing reviews.
            </p>
          </div>
        </section>

        {/* Milestone Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white border border-stone-200/90 rounded-2xl shadow-xs text-center">
          <div className="p-3">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#0f2942] block">64 / 64</span>
            <span className="text-xs text-stone-500 mt-1 block">Districts of Bangladesh Explored</span>
          </div>
          <div className="p-3 border-l border-stone-100">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#0284c7] block">28+</span>
            <span className="text-xs text-stone-500 mt-1 block">Countries Documented</span>
          </div>
          <div className="p-3 border-l border-stone-100">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#0f2942] block">120k+</span>
            <span className="text-xs text-stone-500 mt-1 block">Annual Readers Guided</span>
          </div>
          <div className="p-3 border-l border-stone-100">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-700 block">100%</span>
            <span className="text-xs text-stone-500 mt-1 block">Independent Editorial Integrity</span>
          </div>
        </section>

        {/* Editorial Standards & Core Pillars */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
              Our Guiding Compass
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Editorial Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-stone-200/90 rounded-xl p-6 space-y-2.5">
              <ShieldCheck className="w-6 h-6 text-[#0284c7]" />
              <h3 className="text-base font-serif font-bold text-slate-900">
                1. No Fabricated Rates
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We clearly disclose all estimated expenses. We never fabricate real-time booking rates or publish fake hotel reviews. What you read is what we spent on the ground.
              </p>
            </div>

            <div className="bg-white border border-stone-200/90 rounded-xl p-6 space-y-2.5">
              <Heart className="w-6 h-6 text-rose-600" />
              <h3 className="text-base font-serif font-bold text-slate-900">
                2. Cultural Reverence
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We advocate for responsible, low-impact exploration. We ask permission before photographing, support local indigenous businesses, and respect sacred places.
              </p>
            </div>

            <div className="bg-white border border-stone-200/90 rounded-xl p-6 space-y-2.5">
              <Award className="w-6 h-6 text-amber-600" />
              <h3 className="text-base font-serif font-bold text-slate-900">
                3. First-Hand Validation
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                No copy-pasting from aggregate travel sites. Every trail mentioned, convoy navigated, and transit pass tested was experienced in person by Income Shuvo.
              </p>
            </div>
          </div>
        </section>

        {/* Gear Kit */}
        <section className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-[#0284c7]" />
            <h3 className="text-lg font-serif font-bold text-slate-900">
              What’s in Income Shuvo’s Field Bag?
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Travel photography should capture atmosphere rather than weigh you down. My standard field kit:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-white rounded-lg border border-stone-200/80">
              <strong className="block text-slate-800">Primary Camera</strong>
              <span className="text-stone-500">Sony Alpha 7 IV Full-Frame</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200/80">
              <strong className="block text-slate-800">Documentary Glass</strong>
              <span className="text-stone-500">24-70mm f/2.8 GM II</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200/80">
              <strong className="block text-slate-800">Ultra-Wide Lens</strong>
              <span className="text-stone-500">16-35mm f/2.8 for skies & valleys</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200/80">
              <strong className="block text-slate-800">Power & Backup</strong>
              <span className="text-stone-500">20,000mAh Rugged Solar Bank</span>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#0f2942] hover:bg-[#0284c7] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch for Editorial Collaborations</span>
          </button>
        </div>

        {/* Newsletter */}
        <NewsletterBox />
      </div>
    </div>
  );
}
