import React, { useState } from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { API_WEBSOCKET_CATEGORIES } from '../../data/apiWebsocketNavData';
import { DELIVERY_WORKFLOW_STEPS } from '../../data/webMobileNavData';

interface ApiWebsocketMegaMenuProps {
  onNavigate: (path: string) => void;
  isDark: boolean;
}

export const ApiWebsocketMegaMenu: React.FC<ApiWebsocketMegaMenuProps> = ({
  onNavigate,
  isDark,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('market-data-apis');

  const activeCategory =
    API_WEBSOCKET_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
    API_WEBSOCKET_CATEGORIES[0];

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1020px] max-w-[calc(100vw-32px)] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-0 animate-in fade-in zoom-in-95 duration-200 z-50 overflow-hidden font-sans ${
        isDark ? 'bg-[#0E131F] text-white shadow-black/80' : 'bg-[#FAFCFB] text-slate-900 shadow-slate-900/15'
      }`}
    >
      {/* AyaamX Emerald Caret */}
      <div className="absolute -top-2 left-[64.5%] -translate-x-1/2 w-4 h-4 rotate-45 bg-emerald-500 border-t border-l border-emerald-500 shadow-xs z-10" />

      {/* Main Two-Panel Layout */}
      <div className="flex flex-col lg:flex-row min-h-[300px]">
        
        {/* ── LEFT PANEL: Category Selector (Vertical Tabs) ── */}
        <div className={`w-full lg:w-[260px] shrink-0 p-2.5 border-b lg:border-b-0 lg:border-r ${
          isDark ? 'border-slate-800/80 bg-[#0A0E17]' : 'border-slate-200/80 bg-[#F4F8F6]'
        }`}>
          <div className="space-y-1.5">
            {API_WEBSOCKET_CATEGORIES.map((category) => {
              const IconComp = category.icon;
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  onMouseEnter={() => setActiveCategoryId(category.id)}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all duration-150 cursor-pointer text-[12px] font-medium group ${
                    isActive
                      ? isDark
                        ? 'bg-emerald-500/15 text-emerald-400 font-bold shadow-xs border border-emerald-500/30'
                        : 'bg-emerald-100/70 text-emerald-800 font-bold shadow-xs border border-emerald-300/60'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? isDark
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-emerald-200/60 text-emerald-800'
                          : isDark
                          ? 'bg-slate-800/80 text-emerald-400/80 group-hover:text-emerald-400 group-hover:bg-slate-800'
                          : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100/70'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="nav-text-container" title={category.title}>
                      <span className="nav-text-marquee">{category.title}</span>
                    </div>
                  </div>

                  {isActive && (
                    <ChevronRight className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT PANEL: Content Cards & Workflow Bar ── */}
        <div className="flex-1 p-3.5 sm:p-4 flex flex-col justify-between">
          
          {/* Top Section: Active Category Header & Grid Cards */}
          <div className="space-y-4">
            {/* Category Subtitle Header */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-3 rounded-full bg-emerald-500" />
              <h4 className="text-xs font-mono font-black uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">
                {activeCategory.headerTitle}
              </h4>
            </div>

            {/* Dynamic Grid Cards matching screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeCategory.items.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.path)}
                    className={`group text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isDark
                        ? 'bg-[#121826] hover:bg-[#161F32] border-slate-800/80 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-black/40'
                        : 'bg-white hover:bg-emerald-50/30 border-slate-200/90 hover:border-emerald-400 hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                            isDark
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                              : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                          }`}
                        >
                          <ItemIcon className="w-4.5 h-4.5" />
                        </div>
                        <span className="text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-emerald-500 transition-all text-[10.5px] font-bold">
                          Explore →
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h5 className="text-[12px] font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                          {item.title}
                        </h5>
                        <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── BOTTOM BANNER: Delivery Workflow Bar ── */}
          <div className="mt-3.5 pt-2.5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[11.5px]">
            <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200 shrink-0">
              <Zap className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
              <span>Hassle-Free Delivery Workflow:</span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {DELIVERY_WORKFLOW_STEPS.map((step, idx) => (
                <React.Fragment key={step.step}>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10.5px] font-semibold tracking-wide border ${
                      isDark
                        ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}
                  >
                    {step.title}
                  </span>
                  {idx < DELIVERY_WORKFLOW_STEPS.length - 1 && (
                    <span className="text-slate-400 dark:text-slate-600 text-[10.5px]">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
