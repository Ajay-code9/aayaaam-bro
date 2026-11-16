import React, { useState, useEffect, useMemo } from 'react';
import {
  Zap,
  CheckCircle2,
  Clock,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Cpu,
  Layers,
  ShieldCheck,
  Code2,
  Terminal,
  Activity,
  Server,
  ExternalLink,
  SlidersHorizontal,
  Workflow,
  Sparkles,
  BarChart3,
  Globe,
  Settings,
  Users,
  Monitor
} from 'lucide-react';
import { CTASection } from '../CTA/CTASection';

export interface ProductModule {
  title: string;
  desc: string;
  icon: React.ElementType;
  highlight: string;
}

export interface ProductVisualizerTab {
  id: string;
  label: string;
  previewText: string;
  codeSnippet?: string;
}

export interface ProductWorkflowStep {
  num: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductSlideItem {
  dark: string;
  light: string;
}

export interface ProductMasterPageProps {
  productTitle: string;
  heroBadge: string;
  heroDescription: string;
  productMetric: { label: string; value: string; sub: string };
  heroImage?: string;
  heroImageDark?: string;
  heroImageLight?: string;
  heroSlidesDark?: string[];
  heroSlidesLight?: string[];
  heroSlides?: ProductSlideItem[];
  customHeroElement?: React.ReactNode;
  heroImageAlt?: string;
  heroImageFrameless?: boolean;
  heroImageLayout?: 'split' | 'below';
  workflowSteps?: ProductWorkflowStep[];
  visualizerTabs: ProductVisualizerTab[];
  modules: ProductModule[];
  techSpecs: { label: string; value: string }[];
  faqs: ProductFaq[];
  onOpenAccount: () => void;
}

export const ProductMasterPageTemplate: React.FC<ProductMasterPageProps> = ({
  productTitle,
  heroBadge,
  heroDescription,
  productMetric,
  heroImage,
  heroImageDark,
  heroImageLight,
  heroSlidesDark,
  heroSlidesLight,
  heroSlides,
  customHeroElement,
  heroImageAlt,
  heroImageFrameless = false,
  heroImageLayout = 'split',
  workflowSteps,
  visualizerTabs,
  modules,
  techSpecs,
  faqs,
  onOpenAccount
}) => {
  const [activeTab, setActiveTab] = useState<string>(visualizerTabs[0]?.id || 'tab1');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Normalize slides
  const slides: ProductSlideItem[] = useMemo(() => {
    if (heroSlides && heroSlides.length > 0) return heroSlides;
    if (heroSlidesDark && heroSlidesLight && heroSlidesDark.length > 0 && heroSlidesDark.length === heroSlidesLight.length) {
      return heroSlidesDark.map((darkPath, idx) => ({
        dark: darkPath,
        light: heroSlidesLight[idx]
      }));
    }
    return [];
  }, [heroSlides, heroSlidesDark, heroSlidesLight]);

  // Auto-play slideshow if slides exist
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentTabObj = visualizerTabs.find((t) => t.id === activeTab) || visualizerTabs[0];

  // Default fallback workflow steps if product page does not supply custom ones
  const defaultSteps: ProductWorkflowStep[] = [
    { num: '01', title: 'Instant Setup', desc: 'Connect your brokerage server, CRM database, or liquidity feeds with 1-click cloud connectors.', icon: Settings },
    { num: '02', title: 'Custom Branding', desc: 'Upload your brokerage logo, select custom color themes, and map your custom domain name.', icon: SlidersHorizontal },
    { num: '03', title: 'Launch to Clients', desc: 'Enable self-service trader registration, IB portals, mobile apps, and automated funding gateways.', icon: Users },
    { num: '04', title: 'Monitor & Grow', desc: 'Track live trading volume, risk exposure, referral payouts, and server health from one dashboard.', icon: BarChart3 }
  ];

  const activeSteps = workflowSteps || defaultSteps;

  const stepColors = [
    'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-emerald-500',
    'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 text-blue-500',
    'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 text-purple-500',
    'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 text-amber-500'
  ];

  // Colorful icon theme colors for feature cards
  const iconThemeColors = [
    { bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20', badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
    { bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20', badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    { bg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20', badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
    { bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20', badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' },
    { bg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20', badge: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20' },
    { bg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20', badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20' }
  ];

  const renderHeroImageCard = (isSplitMode: boolean) => (
    <div className={`relative group w-full ${isSplitMode ? 'lg:col-span-7' : 'max-w-5xl mx-auto pt-6'}`}>
      {!heroImageFrameless && (
        <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-45 transition duration-500" />
      )}
      <div className={heroImageFrameless ? 'relative w-full' : 'relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl'}>
        {/* Browser Mockup Header */}
        {!heroImageFrameless && <div className="flex items-center justify-between px-3 py-1 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1 px-2.5 py-0 rounded bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400">
            <span className="text-emerald-500 font-bold">https://</span>
            <span>trader.AyaamX.com</span>
          </div>
          <div className="w-6" />
        </div>}

        {customHeroElement ? (
          customHeroElement
        ) : slides.length > 0 ? (
          <div className={`relative w-full overflow-hidden flex flex-col items-center justify-center ${heroImageFrameless ? '' : 'bg-white dark:bg-slate-950'}`}>
            {slides.map((slide, sIdx) => {
              const isActive = sIdx === currentSlideIndex;
              return (
                <div
                  key={sIdx}
                  className={`w-full transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 relative z-10' : 'opacity-0 absolute inset-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.dark}
                    alt={`${heroImageAlt || productTitle} Slide ${sIdx + 1}`}
                    className="hidden dark:block w-full h-auto object-contain"
                  />
                  <img
                    src={slide.light}
                    alt={`${heroImageAlt || productTitle} Slide ${sIdx + 1}`}
                    className="block dark:hidden w-full h-auto object-contain"
                  />
                </div>
              );
            })}

            {/* Slider Dots Indicator */}
            {slides.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-900/75 dark:bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentSlideIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === currentSlideIndex ? 'w-5 bg-emerald-500' : 'w-1.5 bg-slate-400/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : heroImageDark && heroImageLight ? (
          <div className={`w-full overflow-hidden flex items-center justify-center ${heroImageFrameless ? '' : 'bg-white dark:bg-slate-950'}`}>
            <img
              src={heroImageDark}
              alt={heroImageAlt || productTitle}
              className="hidden dark:block w-full h-auto object-contain"
            />
            <img
              src={heroImageLight}
              alt={heroImageAlt || productTitle}
              className="block dark:hidden w-full h-auto object-contain"
            />
          </div>
        ) : heroImage ? (
          <div className={`w-full overflow-hidden flex items-center justify-center ${heroImageFrameless ? '' : 'bg-white dark:bg-slate-950'}`}>
            <img
              src={heroImage}
              alt={heroImageAlt || productTitle}
              className="w-full h-auto object-contain"
            />
          </div>
        ) : (
          <div className="p-6 sm:p-8 flex flex-col items-center justify-center min-h-[340px] sm:min-h-[400px] text-center space-y-4 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0A101D] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-lg relative z-10">
              <Monitor className="w-8 h-8" />
            </div>
            
            <div className="space-y-1.5 relative z-10 max-w-sm">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                {productTitle} Image Slot
              </span>
              <h4 className="text-base font-extrabold text-white">Product Interface / Screenshot Preview</h4>
              <p className="text-xs text-slate-400">
                Insert your product screenshot, UI mockup, or promotional banner image here.
              </p>
            </div>
            
            <div className="pt-2 flex items-center gap-2 relative z-10 text-[11px] font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Ready for Product Image</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-90px)] flex flex-col justify-center py-6 sm:py-10 overflow-hidden border-b border-slate-200 dark:border-[#1F1F28] bg-white dark:bg-[#000000]">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left my-auto">
          {heroImageLayout === 'split' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                {/* Top Product Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800/50">
                  <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{heroBadge}</span>
                </div>

                {/* Clear Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  {productTitle} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
                    Turnkey Brokerage Solution
                  </span>
                </h1>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {heroDescription}
                </p>

                {/* CTA & Metric Card */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <button
                    onClick={onOpenAccount}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm shadow-emerald-600/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="inline-flex items-center gap-3 p-2 px-3.5 rounded-xl bg-slate-50 dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] shadow-xs shrink-0">
                    <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-sm font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                      {productMetric.value}
                    </div>
                    <div className="h-3.5 w-px bg-slate-200 dark:bg-[#1F1F28] shrink-0" />
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      {productMetric.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Image Section */}
              {renderHeroImageCard(true)}
            </div>
          ) : (
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="max-w-3xl space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-800/50">
                  <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{heroBadge}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  {productTitle} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">
                    Turnkey Brokerage Solution
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {heroDescription}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <button
                    onClick={onOpenAccount}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm shadow-emerald-600/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="inline-flex items-center gap-3 p-2.5 px-4 rounded-xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-xs shrink-0">
                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-base font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                      {productMetric.value}
                    </div>
                    <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 shrink-0" />
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      {productMetric.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Image Section (Scroll Down) */}
              {renderHeroImageCard(false)}
            </div>
          )}
        </div>
      </section>

      {/* 2. CHRONOLOGICAL HOW IT WORKS WORKFLOW */}
      <section className="py-14 sm:py-18 bg-white dark:bg-[#000000] border-b border-slate-200 dark:border-[#1F1F28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <Workflow className="w-4 h-4" />
              <span>STEP-BY-STEP DEPLOYMENT WORKFLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How {productTitle} Works For Your Brokerage
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Simple 4-step process from setup to live trading execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {activeSteps.map((stepItem, sIdx) => {
              const StepIcon = stepItem.icon || Workflow;
              const colorStyle = stepColors[sIdx % stepColors.length];

              return (
                <div key={sIdx} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] space-y-3 relative">
                  <div className={`w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border ${colorStyle}`}>
                    {stepItem.num}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {StepIcon && <StepIcon className="w-4 h-4" />}
                    <span>{stepItem.title}</span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {stepItem.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CORE FEATURES WITH RICH VECTOR ICONS */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>KEY PRODUCT FEATURES</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Designed to Make Broker Operations Simple
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Everything your brokerage needs to deliver a world-class trading experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((item, idx) => {
            const IconComp = item.icon;
            const theme = iconThemeColors[idx % iconThemeColors.length];

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl border ${theme.bg}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border ${theme.badge}`}>
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. INTERACTIVE MODULE CONTROL & LIVE VISUAL PREVIEW */}
      <section className="py-14 sm:py-18 bg-slate-50 dark:bg-[#000000] border-t border-b border-slate-200 dark:border-[#1F1F28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Interactive Module Views
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Click below to preview different functional controls of {productTitle}.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {visualizerTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white dark:bg-[#0D0D12] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-[#1F1F28]'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Visualizer Display Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#1F1F28] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 ml-2">
                  {productTitle} // {currentTabObj?.label}
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
                Operational Status: OK
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              {currentTabObj?.previewText}
            </p>

            {currentTabObj?.codeSnippet && (
              <div className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-emerald-400 overflow-x-auto border border-slate-800">
                <pre>{currentTabObj.codeSnippet}</pre>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 5. SIMPLE TECH SPECS & FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Specs Table */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {productTitle} Specifications Overview
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techSpecs.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                  {item.label}
                </div>
                <div className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Clear answers to common questions about deploying {productTitle}.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-[#1F1F28] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Related Stack Modules Cross-Linking Grid */}
        <div className="space-y-6 pt-8 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              MODULAR BROKERAGE STACK
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore Related Turnkey Modules
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Seamlessly connect {productTitle} with other core AyaamX infrastructure components.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => {
                window.history.pushState({}, '', '/products/forex-crm');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] hover:border-emerald-500/50 transition-all space-y-2 group cursor-pointer"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                <span>Forex CRM &amp; Portal</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                Multi-tier client portal, Sumsub KYC, 50+ PSPs, and MT4/MT5 sync.
              </p>
            </button>

            <button
              onClick={() => {
                window.history.pushState({}, '', '/services/trading-technology/trading-platform-integration');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] hover:border-emerald-500/50 transition-all space-y-2 group cursor-pointer"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                <span>HTML5 WebTrader</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                Zero-install web trading terminal with Level-2 DOM and TradingView charts.
              </p>
            </button>

            <button
              onClick={() => {
                window.history.pushState({}, '', '/services/trading-technology/fix-api-lp-integration');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] hover:border-emerald-500/50 transition-all space-y-2 group cursor-pointer"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                <span>FIX 4.4 Liquidity Bridge</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                Sub-millisecond SmartOrder routing and A/B book risk management.
              </p>
            </button>

            <button
              onClick={() => {
                window.history.pushState({}, '', '/solutions/forex-brokerage/ib-affiliate-management');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-4 rounded-xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] hover:border-emerald-500/50 transition-all space-y-2 group cursor-pointer"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                <span>Multi-Tier IB Portal</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                Multi-level affiliate tree visualizer and sub-cent automated rebates.
              </p>
            </button>
          </div>
        </div>

      </section>

      {/* CTA SECTION */}
      <CTASection variant="light" onOpenAccount={onOpenAccount} />

    </div>
  );
};
