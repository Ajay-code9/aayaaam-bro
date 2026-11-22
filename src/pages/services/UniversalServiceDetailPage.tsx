import React, { useState } from 'react';
import { useRouter } from '../../router';
import { getServiceData, ServiceData } from '../../data/aayaamx/services-data';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Code2,
  Server,
  Database,
  Globe,
  Check,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  Calculator,
  Clock,
  Send,
  Terminal,
  Activity
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface ServicePageProps {
  onOpenAccount: () => void;
  serviceKey?: string;
}

export const UniversalServiceDetailPage: React.FC<ServicePageProps> = ({ onOpenAccount, serviceKey }) => {
  const { currentPath, navigate } = useRouter();
  
  // Resolve data dynamically based on URL path or explicit key
  const effectiveKey = serviceKey || currentPath;
  const data: ServiceData = getServiceData(effectiveKey);

  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTechCategory, setActiveTechCategory] = useState<'all' | 'frontend' | 'backend' | 'devops'>('all');

  // Interactive Scope Calculator State
  const [projectTier, setProjectTier] = useState<'landing' | 'portal' | 'saas'>('portal');
  const [techStackChoice, setTechStackChoice] = useState<'modern-next' | 'fullstack-node' | 'enterprise-python'>('modern-next');

  // Computed Scope Estimates
  const scopeEstimates = {
    landing: {
      timeline: '2 – 3 Weeks',
      deliverableSummary: 'High-Converting Corporate / Product Showcase with 95+ Core Web Vitals, CMS integration, and SEO microdata.',
      includedSpecs: ['Next.js 15 SSR/SSG', 'Tailwind Fluid Design', 'CMS / Blog Setup', '30-Day SLA Handover'],
    },
    portal: {
      timeline: '4 – 6 Weeks',
      deliverableSummary: 'Bespoke Customer Portal or Multi-User Web Application with RBAC authentication, PostgreSQL database, and API integrations.',
      includedSpecs: ['RBAC & OAuth2/JWT', 'PostgreSQL Relational DB', 'Admin Control Panel', 'Swagger/OpenAPI Specs'],
    },
    saas: {
      timeline: '6 – 10 Weeks',
      deliverableSummary: 'Enterprise-grade Web Platform with multi-tenant data partitioning, Redis caching, payment processing, and event queues.',
      includedSpecs: ['Multi-Tenant Context', 'Redis & BullMQ Queues', 'Payment Gateway Sync', 'Docker/CI/CD Cloud Deploy'],
    },
  };

  const currentEstimate = scopeEstimates[projectTier];

  return (
    <div className="min-h-screen bg-white dark:bg-[#080B11] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* ── 1. HERO SECTION (WITH HIGH-TECH ARCHITECTURE PREVIEW CARD) ── */}
      <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-slate-100 dark:border-slate-800/80 overflow-hidden">
        {/* Subtle background ambient light */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Cols: Exact text and headings */}
            <div className="lg:col-span-7 space-y-6">
              {/* Green Category Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                  {data.categoryBadge || 'WEB DEVELOPMENT'}
                </span>
              </div>

              {/* Main Title & Subtitle */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white font-sans leading-[1.12]">
                  {data.title}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                  Web &amp; Mobile Development
                </p>
              </div>

              {/* Long Description */}
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl font-normal">
                {data.tagline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('deliverables');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer group"
                >
                  <span>View Software overview</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onOpenAccount}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs sm:text-sm rounded-full transition-all border border-slate-200 dark:border-slate-700 cursor-pointer"
                >
                  <span>Discuss custom scope</span>
                </button>
              </div>

              {/* Quick Trust Strip */}
              <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Code Ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>30-Day SLA Warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Zero Vendor Lock-in</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: High-Tech Architecture Benchmark Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-[#0E131F]/90 backdrop-blur-md shadow-xl p-5 sm:p-6 space-y-4">
                
                {/* Header with status dot */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-mono font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      PRODUCTION STACK BENCHMARK
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100/70 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                    SSR EDGE ACTIVE
                  </span>
                </div>

                {/* Performance Metrics Row */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#121826] border border-slate-200/70 dark:border-slate-800 text-center">
                    <div className="text-lg font-black font-mono text-emerald-600 dark:text-emerald-400">98+</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Lighthouse SEO</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#121826] border border-slate-200/70 dark:border-slate-800 text-center">
                    <div className="text-lg font-black font-mono text-slate-900 dark:text-white">&lt;0.6s</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Edge FCP</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#121826] border border-slate-200/70 dark:border-slate-800 text-center">
                    <div className="text-lg font-black font-mono text-slate-900 dark:text-white">60 fps</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">UI Responsiveness</div>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="space-y-2 pt-1">
                  <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    ENGINEERED WITH
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['React 19', 'Next.js 15 (App Router)', 'TypeScript 5', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'].map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-[#161F32] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Handover Guarantee Pill */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>OWASP Top 10 Security Hardened</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">100% IP</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE DELIVER (ENRICHED WITH LIVE TECH CHIPS & EXPANDED SPECS) ── */}
      <section id="deliverables" className="py-14 sm:py-20 border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-2">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.18em]">
              STANDARD ENGINEERING PACKAGE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white font-sans tracking-tight">
              What We Deliver
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              Every project engineered by AayaamX includes production-ready deliverables built for high performance and long-term scalability.
            </p>
          </div>

          {/* 2-Column Responsive Grid matching reference + feature tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {data.deliverables.map((del, idx) => (
              <div
                key={idx}
                className="group rounded-2xl p-5 sm:p-6 border transition-all duration-200 bg-white dark:bg-[#0E131F] border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    {/* Emerald Rounded Checkbox Icon */}
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>

                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-950 dark:text-white font-sans group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {del.title}
                        </h3>
                        <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {del.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature Tags for Deeper Context */}
                  {del.specs && del.specs.length > 0 && (
                    <div className="pt-2 pl-11 flex flex-wrap gap-1.5">
                      {del.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-[#161F32] text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Handover Tag */}
                <div className="mt-4 pt-3 pl-11 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>Production Ready</span>
                  <span className="text-[10px] font-mono text-slate-400">Tested &amp; Documented</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. EXECUTION METHODOLOGY (HOW WE WORK WITH PROGRESS FLOW CONNECTOR) ── */}
      {data.methodology && (
        <section className="py-14 sm:py-20 border-b border-slate-100 dark:border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="space-y-2">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.18em]">
                EXECUTION METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white font-sans tracking-tight">
                How We Work
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                Our 3-stage agile delivery workflow ensures clear communication, visible sprint progress, and zero-downtime deployment.
              </p>
            </div>

            {/* 3 Process Cards with Stage Timelines */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
              {[
                { stageNum: 1, timeframe: 'Sprint 0 – Align', stageData: data.methodology.stage1 },
                { stageNum: 2, timeframe: 'Sprints 1-2 – Build', stageData: data.methodology.stage2 },
                { stageNum: 3, timeframe: 'Sprint 3 – Launch', stageData: data.methodology.stage3 }
              ].map(({ stageNum, timeframe, stageData }, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 border transition-all duration-200 bg-white dark:bg-[#0E131F] border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 hover:shadow-lg flex flex-col justify-between min-h-[240px]"
                >
                  <div className="space-y-4">
                    {/* Number Badge and Stage Chip */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center border border-emerald-200 dark:border-emerald-500/30">
                        {stageNum}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        STAGE {stageNum}
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                        {timeframe}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white font-sans">
                        {stageData.title.replace(/^Stage\s*\d+:\s*/i, '')}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2 font-normal">
                        {stageData.focus}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    {stageData.bullets && (
                      <div className="space-y-1.5 pt-2">
                        {stageData.bullets.slice(0, 2).map((b, bI) => (
                          <div key={bI} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="truncate">{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Guaranteed SLA Pill */}
                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <span>Guaranteed SLA</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-Card Box: Explore Full Web & Mobile Development */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B0F19] p-7 sm:p-9 text-center space-y-4 mt-8">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-100/70 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                &lt;/&gt;
              </div>

              <div className="space-y-1.5 max-w-2xl mx-auto">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Explore the full <span className="font-bold text-slate-950 dark:text-white">Web &amp; Mobile Development</span> offering or talk to our team about your requirements.
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  AayaamX — Aayaam Nextgen Technologies Private Limited builds software — we do not provide regulated financial services; compliance is the client's responsibility.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => navigate('/custom-software-development')}
                  className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore web &amp; mobile development</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigate('/portfolio')}
                  className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  View portfolio
                </button>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ── 4. INTERACTIVE PROJECT SCOPE ESTIMATOR (NEW HIGH-CONVERTING TOOL) ── */}
      <section className="py-14 sm:py-20 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0B0E17]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.18em]">
              INSTANT SCOPING CALCULATOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-sans tracking-tight">
              Estimate Your Project Scope &amp; Timeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Select your required application tier and primary tech preference to see estimated sprint timelines and included deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 7 Cols: Interactive Selectors */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Step 1: Select Application Tier */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Step 1: Choose Application Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'landing', label: 'Corporate Landing', sub: 'Showcase / CMS' },
                    { id: 'portal', label: 'Customer Portal', sub: 'Multi-User App' },
                    { id: 'saas', label: 'Enterprise Platform', sub: 'SaaS / High Volume' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setProjectTier(tier.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        projectTier === tier.id
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-400 shadow-sm'
                          : 'bg-white dark:bg-[#0E131F] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <div className="text-xs font-bold">{tier.label}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{tier.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Technology Preference */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Step 2: Choose Engineering Architecture
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'modern-next', label: 'Next.js 15 + React', sub: 'SSR Edge & Tailwind' },
                    { id: 'fullstack-node', label: 'Node.js / Express', sub: 'REST & PostgreSQL' },
                    { id: 'enterprise-python', label: 'Python / FastAPI / Go', sub: 'High Throughput API' },
                  ].map((stack) => (
                    <button
                      key={stack.id}
                      onClick={() => setTechStackChoice(stack.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        techStackChoice === stack.id
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-700 dark:text-emerald-400 shadow-sm'
                          : 'bg-white dark:bg-[#0E131F] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <div className="text-xs font-bold">{stack.label}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{stack.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 Cols: Real-Time Scope Summary Output Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0E131F] border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase text-slate-500">
                    SCOPING ESTIMATE
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentEstimate.timeline}</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                    Deliverable Scope:
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {currentEstimate.deliverableSummary}
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    PACKAGE INCLUSIONS:
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {currentEstimate.includedSpecs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium text-[11px]">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={onOpenAccount}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Exact Quote &amp; Proposal</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-2">
                    Guaranteed response within 2 business hours • Non-disclosure agreement (NDA) ready
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. ENTERPRISE TECHNOLOGY MATRIX (WITH CATEGORY FILTER TABS) ── */}
      {data.techMatrix && (
        <section className="py-14 sm:py-20 border-b border-slate-100 dark:border-slate-800/80 bg-white dark:bg-[#080B11]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.18em]">
                  TECH STACK
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-sans tracking-tight">
                  Enterprise Technology Matrix
                </h2>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-[#121826] border border-slate-200 dark:border-slate-800 self-start sm:self-auto">
                {[
                  { id: 'all', label: 'All Stacks' },
                  { id: 'frontend', label: 'Frontend' },
                  { id: 'backend', label: 'Backend' },
                  { id: 'devops', label: 'DevOps & Cloud' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTechCategory(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTechCategory === tab.id
                        ? 'bg-white dark:bg-[#1E293B] text-emerald-600 dark:text-emerald-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { col: data.techMatrix.column1, cat: 'frontend', icon: Code2 },
                { col: data.techMatrix.column2, cat: 'backend', icon: Database },
                { col: data.techMatrix.column3, cat: 'devops', icon: Server }
              ]
                .filter(({ cat }) => activeTechCategory === 'all' || activeTechCategory === cat)
                .map(({ col, icon: IconComp }, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-50/70 dark:bg-[#0E131F] p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3.5 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-950 dark:text-white font-sans">
                        {col.title}
                      </h3>
                    </div>

                    <ul className="space-y-2 pt-1">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. SERVICE FAQS ── */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-14 sm:py-20 border-b border-slate-100 dark:border-slate-800/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="space-y-2">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.18em]">
                FAQS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-sans tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {data.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className={`bg-white dark:bg-[#0E131F] rounded-xl border transition-all ${
                      isOpen ? 'border-emerald-500/80 shadow-md ring-1 ring-emerald-500/20' : 'border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* ── 7. FINAL BOTTOM CTA ── */}
      <CTASection 
        onOpenAccount={onOpenAccount}
        badge="CUSTOM ENTERPRISE SOFTWARE GATEWAY"
        title={
          <>
            Build Scalable Enterprise Software &amp;{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Modern Digital Products.
            </span>
          </>
        }
        subtitle="End-to-end product engineering across custom web platforms, scalable microservices, automated workflows, and high-performance databases. Your vision, full code ownership, engineered to scale."
      />

    </div>
  );
};
