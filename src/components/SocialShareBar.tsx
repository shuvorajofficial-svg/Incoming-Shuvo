import React, { useState } from 'react';
import { Share2, Check, Copy, Printer, MessageCircle } from 'lucide-react';
import { TravelArticle } from '../types/travel';
import { SITE_METADATA } from '../data/travelData';

interface SocialShareBarProps {
  article: TravelArticle;
  className?: string;
}

export function SocialShareBar({ article, className = '' }: SocialShareBarProps) {
  const [copied, setCopied] = useState(false);

  // In production, uses real domain or current window location
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : SITE_METADATA.canonicalUrl;
  const articleUrl = `${currentOrigin}/article/${article.slug}`;
  const shareText = `Check out this travel guide: "${article.title}" by Income Shuvo`;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(articleUrl);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = articleUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
    window.open(url, '_blank', 'width=600,height=450,noopener,noreferrer');
  };

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${articleUrl}`)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(articleUrl)}&via=incomeshuvo`;
    window.open(url, '_blank', 'width=600,height=400,noopener,noreferrer');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`share-bar py-4 border-y border-stone-200/90 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left: Label */}
        <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
          <Share2 className="w-4 h-4 text-stone-500" />
          <span>Share this guide</span>
        </div>

        {/* Right: Functional buttons */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Facebook */}
          <button
            onClick={handleFacebookShare}
            aria-label="Share on Facebook"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={handleWhatsAppShare}
            aria-label="Share on WhatsApp"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>

          {/* X / Twitter */}
          <button
            onClick={handleTwitterShare}
            aria-label="Share on X / Twitter"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>Post</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            aria-label="Copy article link"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Link!' : 'Copy Link'}</span>
          </button>

          {/* Print Guide */}
          <button
            onClick={handlePrint}
            aria-label="Print article guide"
            title="Print a clean offline copy"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
}
