import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

export function NewsletterBox() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    // In production, sync with Mailchimp/ConvertKit or Decap CMS webhook
  };

  return (
    <section className="newsletter-section my-16 bg-[#0f2942] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-lg">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0284c7]/15 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
          The Sunday Dispatch by Income Shuvo
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white">
          Travel Slower. Journey Deeper.
        </h2>
        <p className="text-sm text-stone-300 leading-relaxed max-w-lg mx-auto">
          Join over 14,000 discerning travelers. Every Sunday, receive one beautifully curated destination guide, honest budget breakdown, and hidden trail recommendations. No spam, ever.
        </p>

        {subscribed ? (
          <div className="p-4 bg-white/10 rounded-xl border border-white/20 inline-flex items-center gap-3 text-emerald-300 text-sm animate-fade-in">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>Welcome aboard! Check your inbox to confirm your free travel dispatch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-2 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="relative w-full">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7] transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#0284c7] hover:bg-[#0369a1] text-white text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-sm"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            {error && <p className="text-rose-400 text-xs mt-2">{error}</p>}
            <p className="text-[11px] text-stone-400 mt-2">
              Zero algorithms. Pure human travel writing. Unsubscribe anytime in one click.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
