import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { SITE_METADATA } from '../data/travelData';
import { SEOHead } from '../components/SEOHead';

export function ContactView() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Destination Query',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "Can I sponsor a travel guide or invite Income Shuvo for a press trip?",
      a: "Yes. We partner with ethical tourism boards, eco-resorts, and sustainable travel equipment brands that align with our mindful exploration philosophy. Note that editorial honesty is non-negotiable; all reviews reflect genuine traveler experiences."
    },
    {
      q: "Are the estimated costs guaranteed?",
      a: "No. The budgets provided in our guides are based on real on-the-ground expenses incurred during our actual field visits. Prices in rural and mountain regions fluctuate depending on tourist seasons, fuel rates, and local holidays. Always budget a 15–20% buffer."
    },
    {
      q: "Can I republish Income Shuvo's photography?",
      a: "All travel photography and written articles are copyrighted by Income Shuvo. For editorial syndication, commercial licensing, or academic usage, please submit a formal inquiry via this contact form."
    },
    {
      q: "How can I join an upcoming expedition?",
      a: "We occasionally organize small-group photography treks in the Chittagong Hill Tracts and Sylhet tea regions. Announcements are sent exclusively to subscribers of The Sunday Dispatch."
    }
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen py-10">
      <SEOHead
        title="Contact Income Shuvo – Collaborations, Press & Travel Queries"
        description="Contact Income Shuvo for tourism board partnerships, travel photography licensing, reader advice, or press trip inquiries."
        canonicalPath="/contact"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Let's Talk Travel.
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Have a question about a Bangladesh hill route, need advice on an upcoming trip, or looking to partner on a tourism project? Send a dispatch below.
          </p>
        </div>

        {/* Contact Grid: Form + Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Message Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formState.name}. Income Shuvo reviews incoming messages weekly between field assignments and will reply shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', subject: 'Destination Query', message: '' });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-[#0284c7] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Farhan Chowdhury"
                      required
                      className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. farhan@example.com"
                      required
                      className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Subject / Topic
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0284c7] bg-white"
                  >
                    <option value="Destination Query">Destination Advice or Route Query</option>
                    <option value="Tourism Board Partnership">Tourism Board / Eco-Resort Collaboration</option>
                    <option value="Photography Licensing">Photo & Editorial Licensing</option>
                    <option value="Press / Media">Press / Interview Inquiry</option>
                    <option value="Feedback">Website Feedback or Correction</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your upcoming travel plan, project scope, or inquiry..."
                    required
                    className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0f2942] hover:bg-[#0284c7] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Dispatch to Income Shuvo</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Details Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
                Direct Contacts
              </span>
              <h3 className="text-xl font-serif font-bold text-slate-900">
                Editorial Inquiries
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                For urgent communications, direct emails reach Income Shuvo's desk:
              </p>

              <div className="pt-2 space-y-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-stone-200/70 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0284c7] shrink-0" />
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-mono">Official Email</span>
                    <a href={`mailto:${SITE_METADATA.contactEmail}`} className="font-semibold text-slate-800 hover:text-[#0284c7]">
                      {SITE_METADATA.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200/70 flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-[#0284c7] shrink-0" />
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase font-mono">Response Window</span>
                    <span className="font-semibold text-slate-800">48–72 Hours (GMT+6)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Kit Prompt */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 space-y-2">
              <h4 className="text-sm font-bold text-slate-900">
                Media Kit & Audience Demographics
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Interested in advertising or sponsored articles? Our readership spans adventure seekers, digital nomads, and cultural travelers across Bangladesh and international diaspora.
              </p>
              <div className="pt-2">
                <span className="text-[11px] text-[#0284c7] font-semibold">
                  Request 2026 Media Kit via contact form above.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <section className="space-y-6 pt-6 border-t border-stone-200">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFAQ === i;
              return (
                <div key={i} className="border border-stone-200 rounded-xl bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-serif font-bold text-slate-900">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
