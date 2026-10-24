import React, { useState } from 'react';
import { 
  Lock, GitBranch, ExternalLink, Code2, Download, Copy, Check, 
  FileText, Shield, Terminal, ArrowUpRight, Sparkles 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function AdminCMSGuideView() {
  const [activeTab, setActiveTab] = useState<'cms-portal' | 'article-studio' | 'netlify-guide' | 'adsterra-guide'>('article-studio');
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  // In-browser Article Studio State
  const [newTitle, setNewTitle] = useState('Saint Martin’s Island: The Coral Sanctuary of the South');
  const [newDestination, setNewDestination] = useState('Saint Martin’s Island, Cox’s Bazar');
  const [newCategory, setNewCategory] = useState('Beaches');
  const [newCost, setNewCost] = useState('$130 – $190 (BDT 15,000 – 22,000) for 3 days');
  const [newExcerpt, setNewExcerpt] = useState('Bangladesh’s sole coral island offers crystal turquoise waters, coconut palms, and peaceful stargazing when the day-tripper cruise ships leave.');
  const [newMarkdown, setNewMarkdown] = useState(`## 1. Crossing the Bay to the Coral Atoll

Boarding the morning sea-truck from Teknaf or the direct cruise ship from Cox’s Bazar, the journey into Saint Martin’s Island (Narikel Jinjira) is an exhilarating transition into tropical isolation...

### The Blue Hour at Chera Dwip
Take a local wooden boat or walk the sandbar during low tide to Chera Dwip, the southernmost point of Bangladesh...`);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  const generatedFrontmatter = `---
title: "${newTitle}"
date: "${new Date().toISOString()}"
author: "Income Shuvo"
category: "${newCategory}"
destination: "${newDestination}"
country: "Bangladesh"
readingTime: "6 min read"
estimatedCost: "${newCost}"
excerpt: "${newExcerpt}"
coverImage: "/uploads/saint_martins.jpg"
metaTitle: "${newTitle} | Income Shuvo"
metaDescription: "${newExcerpt}"
keywords: ["Saint Martin Island", "Bangladesh Coral Beach", "Income Shuvo"]
---

${newMarkdown}`;

  const handleDownloadMarkdown = () => {
    const slug = newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const blob = new Blob([generatedFrontmatter], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${slug}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen py-10">
      <SEOHead
        title="Admin, Decap CMS & Netlify Git Gateway Hub – Income Shuvo"
        description="Configure Decap CMS at /admin/, Git Gateway authentication on Netlify, create markdown articles, and inspect Adsterra ad scripts."
        canonicalPath="/admin-guide"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
            Content Management & Publishing
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Decap CMS & Netlify Git Gateway Hub
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Manage your travel articles with Decap CMS at <code>/admin/</code>, configure Git-based authentication on Netlify, and test new posts.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-100 rounded-2xl max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab('article-studio')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === 'article-studio'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-stone-600 hover:text-slate-900'
            }`}
          >
            Markdown Post Studio
          </button>
          <button
            onClick={() => setActiveTab('cms-portal')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === 'cms-portal'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-stone-600 hover:text-slate-900'
            }`}
          >
            Decap CMS Portal (/admin/)
          </button>
          <button
            onClick={() => setActiveTab('netlify-guide')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === 'netlify-guide'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-stone-600 hover:text-slate-900'
            }`}
          >
            Netlify & Git Authentication
          </button>
          <button
            onClick={() => setActiveTab('adsterra-guide')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === 'adsterra-guide'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-stone-600 hover:text-slate-900'
            }`}
          >
            Adsterra Integration Guide
          </button>
        </div>

        {/* TAB 1: ARTICLE STUDIO (In-Browser Markdown Creator) */}
        {activeTab === 'article-studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
            {/* Editor Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div>
                  <h3 className="text-base font-serif font-bold text-slate-900">
                    Draft New Travel Guide
                  </h3>
                  <p className="text-xs text-stone-500">
                    Creates Decap CMS compliant Markdown with YAML frontmatter.
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase bg-sky-50 text-[#0284c7] px-2 py-0.5 rounded font-semibold">
                  Author: Income Shuvo
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Article Title
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Destination & Location
                  </label>
                  <input
                    type="text"
                    value={newDestination}
                    onChange={(e) => setNewDestination(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0284c7] bg-white"
                  >
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Mountains">Mountains</option>
                    <option value="Beaches">Beaches</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Culture & Food">Culture & Food</option>
                    <option value="Budget Travel">Budget Travel</option>
                    <option value="International">International</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Estimated Trip Cost (Never Fabricated)
                </label>
                <input
                  type="text"
                  value={newCost}
                  onChange={(e) => setNewCost(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Excerpt / Lead Deck
                </label>
                <textarea
                  rows={2}
                  value={newExcerpt}
                  onChange={(e) => setNewExcerpt(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Markdown Body Content
                </label>
                <textarea
                  rows={7}
                  value={newMarkdown}
                  onChange={(e) => setNewMarkdown(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-200 text-xs font-mono text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={handleDownloadMarkdown}
                  className="px-4 py-2.5 bg-[#0f2942] hover:bg-[#0284c7] text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .md File</span>
                </button>

                <button
                  onClick={() => handleCopy(generatedFrontmatter, 'studio-copy')}
                  className="px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  {copiedSnippet === 'studio-copy' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSnippet === 'studio-copy' ? 'Copied!' : 'Copy YAML + Markdown'}</span>
                </button>
              </div>
            </div>

            {/* Live Generated Output (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-stone-900 text-stone-200 rounded-2xl p-6 shadow-xs space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-stone-400 pb-2 border-b border-stone-800">
                  <span className="flex items-center gap-1.5 text-sky-400 font-sans font-semibold">
                    <FileText className="w-4 h-4" /> Decap CMS File Schema
                  </span>
                  <span className="text-[10px] text-stone-500">content/posts/*.md</span>
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap max-h-[460px] text-amber-300/90 text-[11px] leading-relaxed">
                  {generatedFrontmatter}
                </pre>
              </div>

              <div className="p-4 bg-sky-50 border border-sky-200/80 rounded-xl text-xs text-sky-900 space-y-1">
                <strong>How to publish:</strong>
                <p className="text-[11px] leading-relaxed">
                  Save this file into <code>content/posts/</code> in your Git repository, or log in to Decap CMS at <code>/admin/</code> to publish with live image uploading and preview!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DECAP CMS PORTAL */}
        {activeTab === 'cms-portal' && (
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#0284c7]">
                  Static Content Management
                </span>
                <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1">
                  Decap CMS Administration (/admin/)
                </h2>
              </div>
              <a
                href="/admin/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#0f2942] hover:bg-[#0284c7] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-2 shadow-sm shrink-0"
              >
                <span>Launch /admin/ CMS Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                <span className="text-xs font-mono text-stone-400 uppercase">Configuration</span>
                <h4 className="text-sm font-bold text-slate-900">/admin/config.yml</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Configured with <code>git-gateway</code> backend, publishing editorial workflow, and collections for travel posts, destinations, and site branding.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                <span className="text-xs font-mono text-stone-400 uppercase">Authentication</span>
                <h4 className="text-sm font-bold text-slate-900">Netlify Identity</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Protected with Git Gateway OAuth. Authors log in with invite-only email credentials without ever exposing GitHub tokens in client code.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                <span className="text-xs font-mono text-stone-400 uppercase">Automated Pipeline</span>
                <h4 className="text-sm font-bold text-slate-900">Git Commits & Deploys</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  When you hit Publish in Decap CMS, it automatically commits markdown and uploads images to GitHub, triggering Netlify's build process.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: NETLIFY & GIT AUTHENTICATION GUIDE */}
        {activeTab === 'netlify-guide' && (
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 animate-fade-in text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="pb-4 border-b border-stone-200">
              <h2 className="text-2xl font-serif font-bold text-slate-900">
                Deploying to Netlify with Decap CMS Git Gateway
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Follow these 5 steps to deploy to production and enable automated Git commits.
              </p>
            </div>

            <ol className="space-y-6 list-decimal pl-5">
              <li className="space-y-2">
                <strong className="text-slate-900 block font-serif text-base">
                  Push your repository to GitHub
                </strong>
                <p>
                  Push the project source code to your personal GitHub repository on the <code>main</code> branch.
                </p>
                <div className="p-3 bg-stone-900 text-stone-200 rounded-lg font-mono text-xs overflow-x-auto">
                  <code>git init && git add . && git commit -m "Initial Income Shuvo blog" && git push origin main</code>
                </div>
              </li>

              <li className="space-y-2">
                <strong className="text-slate-900 block font-serif text-base">
                  Connect Site on Netlify
                </strong>
                <p>
                  Log into Netlify, select <strong>"Add new site" &gt; "Import an existing project"</strong>, and pick your GitHub repository. The build settings in <code>netlify.toml</code> will automatically set:
                </p>
                <ul className="list-disc pl-5 text-stone-600 text-xs">
                  <li>Build Command: <code>npm run build</code></li>
                  <li>Publish Directory: <code>dist</code></li>
                </ul>
              </li>

              <li className="space-y-2">
                <strong className="text-slate-900 block font-serif text-base">
                  Enable Netlify Identity Service
                </strong>
                <p>
                  In your Netlify Site dashboard, go to <strong>Site configuration &gt; Identity &gt; Enable Identity</strong>.
                </p>
                <p>
                  Under <strong>Registration preferences</strong>, set it to <strong>Invite only</strong> so unauthorized visitors cannot create accounts on your personal travel blog.
                </p>
              </li>

              <li className="space-y-2">
                <strong className="text-slate-900 block font-serif text-base">
                  Enable Git Gateway
                </strong>
                <p>
                  Scroll down to <strong>Services &gt; Git Gateway</strong> and click <strong>Enable Git Gateway</strong>. This grants Decap CMS secure permission to commit changes and upload images directly to your GitHub repo on your behalf without exposing any tokens in browser code.
                </p>
              </li>

              <li className="space-y-2">
                <strong className="text-slate-900 block font-serif text-base">
                  Invite Yourself & Log In at /admin/
                </strong>
                <p>
                  Go to <strong>Identity &gt; Invite users</strong>, enter your email (<code>shuvorajofficial@gmail.com</code>). Accept the invitation link sent to your email, set a password, and log in at <code>your-site.netlify.app/admin/</code>!
                </p>
              </li>
            </ol>
          </div>
        )}

        {/* TAB 4: ADSTERRA INTEGRATION GUIDE */}
        {activeTab === 'adsterra-guide' && (
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 animate-fade-in text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="pb-4 border-b border-stone-200">
              <h2 className="text-2xl font-serif font-bold text-slate-900">
                Adsterra Placement & Script Guide
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Documented insertion spots for Leaderboard Banners, In-Article Units, Social Bar, and Popunder.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">1. Banner Ads (728x90 & 300x250)</h3>
                <p className="text-xs text-stone-600">
                  Located in <code>src/components/AdsterraAd.tsx</code>. Replace the placeholder div with the official script snippet generated from your Adsterra dashboard:
                </p>
                <pre className="p-3 bg-stone-900 text-amber-300 rounded-lg text-xs font-mono overflow-x-auto">
{`<!-- Place inside AdsterraBanner component -->
<script type="text/javascript">
  atOptions = {
    'key' : 'YOUR_ADSTERRA_KEY',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script type="text/javascript" src="//www.topcreativeformat.com/YOUR_KEY/invoke.js"></script>`}
                </pre>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">2. Social Bar</h3>
                <p className="text-xs text-stone-600">
                  Adsterra Social Bar is a lightweight non-intrusive format. Add your Social Bar script to <code>index.html</code> right inside the <code>&lt;head&gt;</code>:
                </p>
                <pre className="p-3 bg-stone-900 text-amber-300 rounded-lg text-xs font-mono overflow-x-auto">
{`<script type='text/javascript' src='//pl1234567.highcpmgate.com/socialbar.js'></script>`}
                </pre>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm">3. Popunder / OnClick Placement</h3>
                <p className="text-xs text-stone-600">
                  To protect user experience and avoid bouncing visitors, configure 1 impression per 24 hours in Adsterra, then place the script before <code>&lt;/body&gt;</code> in <code>index.html</code>:
                </p>
                <pre className="p-3 bg-stone-900 text-amber-300 rounded-lg text-xs font-mono overflow-x-auto">
{`<script type='text/javascript' src='//pl9999999.highcpmgate.com/popunder.js'></script>`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
