import React, { useState } from 'react';
import { PLATFORM_FEATURES } from '../../data/mockData';
import { Monitor, Smartphone, Globe, CheckCircle2, ChevronRight, Zap, Shield, Cpu, Play, BarChart2 } from 'lucide-react';

interface TerminalShowcaseProps {
  onOpenAccount: () => void;
}

export const TerminalShowcase: React.FC<TerminalShowcaseProps> = ({ onOpenAccount }) => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(PLATFORM_FEATURES[0].id);
  const [activeChartStyle, setActiveChartStyle] = useState<'candle' | 'line'>('candle');
  const [orderType, setOrderType] = useState<string>('LIMIT');

  const currentFeature = PLATFORM_FEATURES.find(f => f.id === selectedFeatureId) || PLATFORM_FEATURES[0];

  return (
    <section id="platform" className="py-10 lg:py-12 bg-white dark:bg-[#000000] text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1F1F28] font-sans relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Side-by-Side Unified Viewport Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT COLUMN (lg:col-span-5): Header + Vertical Tab Selectors */}
          <div className="lg:col-span-5 space-y-5">
            {/* Header */}
            <div className="space-y-2.5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans leading-tight">
                Branded Trading Terminals & Client Portals
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                Deploy high-speed web traders, intuitive client onboarding portals, and native mobile apps built specifically for your brokerage or prop firm brand.
              </p>
            </div>

            {/* Vertical Tab Selector Cards */}
            <div className="space-y-2.5">
              {PLATFORM_FEATURES.map((feature, idx) => {
                const isSelected = feature.id === selectedFeatureId;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setSelectedFeatureId(feature.id)}
                    className={`w-full p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer border flex items-center justify-between gap-3 group ${
                      isSelected
                        ? 'bg-slate-50 dark:bg-[#0D0D12] border-emerald-500 dark:border-emerald-500 ring-1 ring-emerald-500/40 shadow-md'
                        : 'bg-white dark:bg-[#07070A] border-slate-200 dark:border-[#1F1F28] hover:bg-slate-50 dark:hover:bg-[#121218] hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold shrink-0 transition-colors ${
                        isSelected 
                          ? 'bg-emerald-500 text-white dark:text-slate-950' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                      }`}>
                        {idx === 0 ? <Monitor className="w-4 h-4" /> : idx === 1 ? <Globe className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className={`text-sm font-bold font-sans truncate ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans truncate mt-0.5">{feature.subtitle}</p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {isSelected ? (
                        <span className="text-[9.5px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/80">
                          ACTIVE
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN (lg:col-span-7): Clean Showcase Viewport */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Display Image Container */}
            <div className="bg-slate-50 dark:bg-[#07070A] border border-slate-200 dark:border-[#1F1F28] p-3 sm:p-4 shadow-xl rounded-2xl flex items-center justify-center min-h-[360px] sm:min-h-[420px] overflow-hidden group">
              <img
                src={
                  selectedFeatureId === 'pro-desktop' 
                    ? '/aayaamx-webtrader-desktop.png' 
                    : selectedFeatureId === 'web-trader' 
                    ? '/aayaamx-crm-portal.png' 
                    : '/aayaamx-mobile-trading-apps.png'
                }
                alt={currentFeature.title}
                className="w-full h-auto max-h-[400px] object-contain select-none shadow-lg rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>

            {/* Horizontal Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {currentFeature.specs.map((spec, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-[#0D0D12] p-2.5 border border-slate-200 dark:border-[#1F1F28] text-center rounded-lg">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans tracking-tight">{spec.label}</div>
                  <div className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">{spec.value}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
