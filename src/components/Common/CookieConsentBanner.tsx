import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Settings, Check, X } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showPreferences, setShowPreferences] = useState<boolean>(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('AyaamX_cookie_consent');
    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('AyaamX_cookie_consent', JSON.stringify(fullConsent));
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const minConsent = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('AyaamX_cookie_consent', JSON.stringify(minConsent));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('AyaamX_cookie_consent', JSON.stringify(prefs));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Bottom Sticky Cookie Banner */}
      <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 animate-in slide-in-from-bottom duration-300">
        <div className="bg-slate-900/95 dark:bg-[#0D131F]/95 backdrop-blur-md text-white p-5 rounded-2xl border border-slate-800 shadow-2xl space-y-4 font-sans text-xs">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                <Cookie className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Cookie Consent &amp; Privacy Governance</h4>
                <p className="text-[11px] text-slate-400">We use essential and analytics cookies to optimize user experience and measure B2B campaign performance.</p>
              </div>
            </div>
            <button
              onClick={handleRejectNonEssential}
              aria-label="Close banner"
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all cursor-pointer shadow-md"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl transition-all cursor-pointer border border-slate-700"
            >
              Necessary Only
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              className="px-3.5 py-2 text-slate-400 hover:text-white font-semibold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Preferences</span>
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Granular Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#0E1420] text-slate-900 dark:text-white w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-2xl font-sans">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-extrabold text-base">Cookie Preference Settings</h3>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Essential */}
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Strictly Necessary Cookies</span>
                    <span className="text-[9px] font-mono uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded">Always Active</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">Required for website security, session navigation, and core features.</p>
                </div>
                <input type="checkbox" checked disabled className="mt-1" />
              </div>

              {/* Analytics */}
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">Analytics &amp; Performance</div>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">Allows us to measure traffic sources and optimize page load performance (GA4).</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                  className="mt-1 cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Marketing */}
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">Marketing &amp; Campaign Attribution</div>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">Used for Meta Pixel / Conversions API lead attribution for paid campaigns.</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                  className="mt-1 cursor-pointer accent-emerald-600"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
