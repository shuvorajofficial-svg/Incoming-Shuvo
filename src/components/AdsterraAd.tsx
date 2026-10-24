import React, { useState } from 'react';
import { Info, ExternalLink, X, Code2, Check, ShieldAlert } from 'lucide-react';

interface AdsterraBannerProps {
  placement?: 'top-leaderboard' | 'in-article' | 'sidebar' | 'footer';
  className?: string;
}

export function AdsterraBanner({ placement = 'in-article', className = '' }: AdsterraBannerProps) {
  const [showDocs, setShowDocs] = useState(false);

  // Responsive dimensions
  const isLeaderboard = placement === 'top-leaderboard' || placement === 'footer';

  return (
    <div className={`my-8 ${className}`}>
      <div className="bg-stone-50 border border-stone-200/90 rounded-xl p-4 transition-all">
        {/* Header indicator */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-2.5 pb-2 border-b border-stone-200/60">
          <span className="font-mono uppercase tracking-wider text-[11px] text-stone-400">
            Adsterra Sponsor Placement · {placement}
          </span>
          <button
            onClick={() => setShowDocs(!showDocs)}
            className="flex items-center gap-1 text-[11px] text-[#0284c7] hover:text-[#0f2942] transition-colors cursor-pointer"
          >
            <Code2 className="w-3 h-3" />
            <span>{showDocs ? 'Hide Integration Guide' : 'Publisher Script Guide'}</span>
          </button>
        </div>

        {/* Integration Instructions Drawer */}
        {showDocs && (
          <div className="mb-4 p-3 bg-stone-900 text-stone-200 rounded-lg text-xs space-y-2 font-mono">
            <div className="flex items-center justify-between text-sky-400 font-sans font-medium text-xs">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Adsterra Banner Script Instructions
              </span>
              <span className="text-[10px] bg-stone-800 px-2 py-0.5 rounded text-stone-300">Target: {isLeaderboard ? '728x90 Leaderboard' : '300x250 Native Banner'}</span>
            </div>
            <p className="font-sans text-stone-400 text-[11px]">
              To activate your live Adsterra banner, generate a {isLeaderboard ? '728x90 Banner or Native Banner' : '300x250 Banner'} zone in your Adsterra Publisher Dashboard, then replace the placeholder below with your script:
            </p>
            <pre className="p-2 bg-black/60 rounded text-[11px] text-amber-300 overflow-x-auto whitespace-pre-wrap">
{`<!-- Adsterra Banner Script Placement (${placement}) -->
<script type="text/javascript">
  atOptions = {
    'key' : 'YOUR_ADSTERRA_BANNER_ZONE_KEY',
    'format' : 'iframe',
    'height' : ${isLeaderboard ? '90' : '250'},
    'width' : ${isLeaderboard ? '728' : '300'},
    'params' : {}
  };
</script>
<script type="text/javascript" src="//www.topcreativeformat.com/YOUR_ADSTERRA_BANNER_ZONE_KEY/invoke.js"></script>`}
            </pre>
          </div>
        )}

        {/* Ad Container Placeholder (Respects Google & Adsterra Placement Policies) */}
        <div
          id={`adsterra-banner-${placement}`}
          data-adsterra-zone={placement}
          className={`mx-auto flex flex-col items-center justify-center rounded-lg border border-dashed border-stone-300 bg-stone-100/70 p-4 text-center ${
            isLeaderboard ? 'min-h-[90px] max-w-[728px]' : 'min-h-[250px] max-w-[336px]'
          }`}
        >
          {/* Default Non-Intrusive Editorial Sponsor Mockup / Active Slot */}
          <div className="flex flex-col items-center space-y-1.5 py-3">
            <div className="text-[11px] font-semibold text-stone-700 tracking-wide">
              TRAVEL GEAR & SUSTAINABLE TOURISM PARTNERS
            </div>
            <p className="text-xs text-stone-500 max-w-md">
              Support Income Shuvo's independent guides. Recommended flight aggregator & mountain trekking insurance partners.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="text-[10px] text-stone-400">Verified Travel Network</span>
              <span className="text-stone-300">·</span>
              <a
                href="https://adsterra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#0284c7] hover:underline flex items-center gap-0.5"
              >
                Adsterra Publisher Network <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-2 text-center">
          <span className="text-[10px] text-stone-400 italic">
            Advertisements are clearly demarcated to maintain editorial transparency and reader trust.
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Adsterra Social Bar:
 * Non-intrusive notification-style discrete bar positioned at bottom of screen.
 */
export function AdsterraSocialBar() {
  const [dismissed, setDismissed] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-30 max-w-sm w-full sm:w-auto p-1">
      <div className="bg-white border border-stone-300/90 shadow-xl rounded-xl p-3.5 transition-all text-stone-800">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                Sponsored Travel Update
              </span>
              <button
                onClick={() => setShowConfig(!showConfig)}
                className="text-[10px] text-stone-400 hover:text-stone-600 underline cursor-pointer"
              >
                Script Info
              </button>
            </div>
            <h4 className="text-xs font-semibold text-stone-900 leading-snug">
              Specialist Mountain Trekking & Travel Insurance for 2026
            </h4>
            <p className="text-[11px] text-stone-500 mt-1">
              Save up to 25% on international adventure insurance coverage with our travel partner.
            </p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss sponsored update"
            className="text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {showConfig && (
          <div className="mt-2.5 p-2 bg-stone-950 text-stone-300 rounded text-[10px] font-mono">
            <p className="text-amber-400 font-sans mb-1">Social Bar Placement:</p>
            <code>{`<!-- Adsterra Social Bar Script: Place inside <head> -->\n<script type='text/javascript' src='//pl1234567.highcpmgate.com/socialbar.js'></script>`}</code>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Adsterra Popunder Controller & Guidance
 * Fully documented, policy-compliant, user-friendly trigger with instructions.
 */
export function AdsterraPopunderDocs() {
  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 my-6 text-sm text-stone-700 space-y-3">
      <div className="flex items-center gap-2 text-stone-900 font-semibold">
        <ShieldAlert className="w-5 h-5 text-amber-600" />
        <span>Adsterra Popunder / OnClick Placement Documentation</span>
      </div>
      <p className="text-xs text-stone-600 leading-relaxed">
        Adsterra Popunders (OnClick format) open a promotional tab in the background when a user performs their first deliberate click. To avoid obstructing user navigation and adhere to Google's Better Ads Standards:
      </p>
      <ul className="text-xs list-disc pl-5 space-y-1 text-stone-600">
        <li><strong>Frequency Capping:</strong> Set capping to 1 impression per 24 hours per unique IP in your Adsterra dashboard.</li>
        <li><strong>Dwell Delay:</strong> Never trigger immediately on page entry; allow the reader to engage with travel articles first.</li>
        <li><strong>Placement:</strong> Insert your Popunder script snippet right before the closing <code>&lt;/body&gt;</code> tag in <code>index.html</code>.</li>
      </ul>
      <div className="bg-stone-900 text-stone-200 p-3 rounded-lg text-xs font-mono overflow-x-auto">
        <span className="text-stone-400 block mb-1 font-sans text-[11px]">// Production insertion snippet for index.html:</span>
        <code className="text-amber-300">{`<script type='text/javascript' src='//pl99999999.highcpmgate.com/popunder_zone.js'></script>`}</code>
      </div>
    </div>
  );
}
