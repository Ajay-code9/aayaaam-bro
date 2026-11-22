import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { WEB_MOBILE_CATEGORIES } from '../../data/webMobileNavData';

interface WebMobileMegaMenuProps {
  onNavigate: (path: string) => void;
  isDark: boolean;
}

export const WebMobileMegaMenu: React.FC<WebMobileMegaMenuProps> = ({
  onNavigate,
  isDark,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('web-development');

  const activeCategory =
    WEB_MOBILE_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
    WEB_MOBILE_CATEGORIES[0];

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[1040px] max-w-[calc(100vw-32px)] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-0 animate-in fade-in zoom-in-95 duration-200 z-50 overflow-hidden font-sans ${
        isDark ? 'bg-[#0B111B] text-white shadow-black/80' : 'bg-white text-slate-900 shadow-xl'
      }`}
    >
      {/* Top Brand Caret */}
      <div className="absolute -top-2 left-[23.5%] -translate-x-1/2 w-4 h-4 rotate-45 bg-[#1b3995] border-t border-l border-[#1b3995] shadow-xs z-10" />

      {/* Main Two-Panel Layout */}
      <div className="flex flex-col lg:flex-row">
        
        {/* ── LEFT PANEL: Category Selector (Clean Vertical List with Line Icons) ── */}
        <div className={`w-full lg:w-[270px] shrink-0 p-4 border-b lg:border-b-0 lg:border-r ${
          isDark ? 'border-slate-800/80 bg-[#070A0F]' : 'border-slate-100 bg-slate-50/70'
        }`}>
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-3 pb-2.5">
            DEVELOPMENT CATEGORIES
          </div>

          <div className="space-y-1">
            {WEB_MOBILE_CATEGORIES.map((category) => {
              const IconComp = category.icon;
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  onMouseEnter={() => setActiveCategoryId(category.id)}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer text-[13px] font-semibold group ${
                    isActive
                      ? isDark
                        ? 'bg-[#1b3995]/25 text-white font-bold border border-[#1b3995]/40 shadow-xs'
                        : 'bg-[#1b3995]/10 text-[#1b3995] font-bold border border-[#1b3995]/20 shadow-xs'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <IconComp className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? 'text-[#1b3995] dark:text-[#77bd7b]' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200'
                    }`} />
                    <div className="nav-text-container" title={category.title}>
                      <span className="nav-text-marquee">{category.title}</span>
                    </div>
                  </div>

                  {isActive && (
                    <ChevronRight className="w-4 h-4 shrink-0 text-[#1b3995] dark:text-[#77bd7b]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT PANEL: Clean Two-Column List Cards + Bottom GET STARTED Bar ── */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                {activeCategory.headerTitle} · ARCHITECTURAL MODULES
              </span>
              <span className="text-[11px] text-[#1b3995] dark:text-[#77bd7b] font-bold">
                100% Full Source Code
              </span>
            </div>

            {/* 2-Column Clean Horizontal List Cards (Azumo / Modern style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeCategory.items.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.path)}
                    className="group text-left p-3.5 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-all duration-150 cursor-pointer flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-700 dark:text-slate-300 group-hover:bg-[#1b3995] group-hover:text-white transition-colors mt-0.5">
                      <ItemIcon className="w-4 h-4" />
                    </div>

                    <div className="space-y-1 min-w-0">
                      <h5 className="text-[13px] font-bold text-slate-900 dark:text-white group-hover:text-[#1b3995] dark:group-hover:text-[#77bd7b] transition-colors leading-snug">
                        {item.title}
                      </h5>
                      <p className="text-[11.5px] leading-relaxed text-slate-500 dark:text-slate-400 font-normal line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── BOTTOM GET STARTED BANNER (Exact Azumo Style) ── */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-[#1b3995] via-[#204464] to-[#438780] text-white">
            <div className="space-y-0.5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#77bd7b] font-bold">GET STARTED</div>
              <div className="text-xs sm:text-sm font-extrabold leading-tight">
                Build Intelligent Digital Products &amp; Platforms
              </div>
              <div className="text-[11px] text-slate-200">
                Discuss your architectural scope with our senior engineering team
              </div>
            </div>

            <button
              onClick={() => onNavigate('/contact')}
              className="px-4 py-2 rounded-lg bg-white text-[#1b3995] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm"
            >
              <span>Schedule Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
