import React, { useState } from 'react';
import { useRouter } from '../../router';
import { getSolutionData, SolutionData } from '../../data/aayaamx/solutions-data';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  Layers,
  Cpu,
  Lock,
  Code2,
  Workflow,
  Check,
  Server,
  Database,
  Globe,
  ExternalLink,
  Zap,
  Building,
  Coins
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface SolutionPageProps {
  onOpenAccount: () => void;
  solutionKey?: string;
}

export const UniversalSolutionDetailPage: React.FC<SolutionPageProps> = ({ onOpenAccount, solutionKey }) => {
  const { currentPath, navigate } = useRouter();
  
  // Resolve data dynamically based on URL path or explicit key
  const effectiveKey = solutionKey || currentPath;
  const data: SolutionData = getSolutionData(effectiveKey);

  const [activeTabId, setActiveTabId] = useState<string>(data.sandbox?.tabs?.[0]?.id || '');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const activeTab = data.sandbox?.tabs?.find(t => t.id === activeTabId) || data.sandbox?.tabs?.[0];

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-200 dark:border-[#1F1F28] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={() => navigate('/')} 
              className="text-xs font-mono font-medium text-slate-500 hover:text-emerald-600 transition-colors"
            >
              HOME
            </button>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <button 
              onClick={() => navigate('/solutions')} 
              className="text-xs font-mono font-medium text-slate-500 hover:text-emerald-600 transition-colors"
            >
              SOLUTIONS
            </button>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-slate-600 dark:text-slate-400 font-mono text-xs font-semibold uppercase tracking-wider">
              {data.categoryBadge}
            </span>
          </div>

          {/* Headline & Tagline */}
          <div className="max-w-4xl space-y-4">
            <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              {data.familyTitle}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {data.headline}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-2">
              {data.tagline}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenAccount}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>REQUEST SOLUTION ARCHITECTURE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#deliverables"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#0D0D12] dark:hover:bg-[#16161F] text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-[#1F1F28] transition-all cursor-pointer"
            >
              <span>EXPLORE CAPABILITIES</span>
            </a>
          </div>

          {/* Telemetry / Metrics HUD */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {data.metrics?.map((metric, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] transition-all hover:border-emerald-500/40 group"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-500 transition-colors truncate">
                    {metric.value}
                  </div>
                  {metric.live && (
                    <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE SLA
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. SUB-SOLUTIONS MODULE GRID */}
      {data.subSolutions && data.subSolutions.length > 0 && (
        <section className="py-12 border-b border-slate-200 dark:border-[#1F1F28] bg-slate-50/50 dark:bg-[#060608]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                  MODULAR ARCHITECTURE
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Specialized Ecosystem Pillars
                </h2>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {data.subSolutions.length} INTEGRATED MODULES AVAILABLE
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.subSolutions.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] hover:border-emerald-500/40 transition-all group space-y-2 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-emerald-500">0{idx + 1}</span>
                    <Zap className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. INTERACTIVE SIMULATION SANDBOX */}
      {data.sandbox && data.sandbox.tabs && data.sandbox.tabs.length > 0 && (
        <section className="py-16 sm:py-24 border-b border-slate-200 dark:border-[#1F1F28] bg-slate-50/30 dark:bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  LIVE SYSTEM ARCHITECTURE SIMULATOR
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Interactive Production Inspection
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Examine the underlying distributed logic, RPC handlers, data schemas, and failover topologies that power our production deployments.
                </p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 font-mono text-xs px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 self-start md:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold">{data.sandbox.liveBadge}</span>
              </div>
            </div>

            {/* Sandbox Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-[#1F1F28] bg-white dark:bg-[#0D0D12] overflow-hidden shadow-xl">
              
              {/* Browser Bar */}
              <div className="px-4 py-3 bg-slate-100 dark:bg-[#12121A] border-b border-slate-200 dark:border-[#1F1F28] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80 shrink-0" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80 shrink-0" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80 shrink-0" />
                  <span className="ml-3 font-mono text-xs text-slate-500 dark:text-slate-400 items-center gap-1.5 hidden sm:flex truncate max-w-[200px] md:max-w-none">
                    <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                    https://{data.sandbox.address}
                  </span>
                </div>

                <div className="w-full sm:w-auto flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 max-w-full">
                  {data.sandbox.tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                        activeTab?.id === tab.id
                          ? 'bg-emerald-500 text-slate-950 shadow'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sandbox Body */}
              {activeTab && (
                <div className="p-4 sm:p-6 space-y-6">
                  
                  {/* Tab Telemetry Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#08080C] border border-slate-200 dark:border-[#1F1F28]">
                    <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                      <span className="text-xs text-slate-500 font-mono">{activeTab.metricLabel1}:</span>
                      <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">{activeTab.metricValue1}</span>
                    </div>
                    <div className="flex items-center justify-between sm:justify-start sm:gap-3 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-[#1F1F28] pt-2 sm:pt-0 sm:pl-3">
                      <span className="text-xs text-slate-500 font-mono">{activeTab.metricLabel2}:</span>
                      <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">{activeTab.metricValue2}</span>
                    </div>
                    <div className="flex items-center justify-between sm:justify-start sm:gap-3 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-[#1F1F28] pt-2 sm:pt-0 sm:pl-3">
                      <span className="text-xs text-slate-500 font-mono">{activeTab.metricLabel3}:</span>
                      <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">{activeTab.metricValue3}</span>
                    </div>
                  </div>

                  {/* Code View */}
                  <div className="rounded-xl bg-slate-950 text-slate-200 p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto border border-slate-800 shadow-inner">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-xs">
                      <span className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-emerald-400" />
                        {activeTab.codeTitle}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                        {activeTab.badge}
                      </span>
                    </div>

                    <pre className="space-y-1">
                      {activeTab.codeLines?.map((line, lIdx) => (
                        <div 
                          key={lIdx} 
                          className={`flex items-start ${
                            line.type === 'highlight' 
                              ? 'bg-emerald-500/10 -mx-4 px-4 py-0.5 rounded text-emerald-200 font-medium' 
                              : line.type === 'comment' 
                              ? 'text-slate-500 italic' 
                              : ''
                          }`}
                        >
                          <span className="w-8 select-none text-slate-600 text-right pr-4 text-[11px]">{lIdx + 1}</span>
                          <span className="flex-1">
                            {line.parts.map((p, pIdx) => {
                              let cls = 'text-slate-300';
                              if (p.kind === 'keyword') cls = 'text-purple-400 font-bold';
                              if (p.kind === 'func') cls = 'text-blue-400 font-semibold';
                              if (p.kind === 'component') cls = 'text-yellow-400 font-semibold';
                              if (p.kind === 'string') cls = 'text-emerald-400';
                              if (p.kind === 'prop') cls = 'text-sky-300';
                              if (p.kind === 'badge') cls = 'px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]';
                              return <span key={pIdx} className={cls}>{p.text}</span>;
                            })}
                          </span>
                        </div>
                      ))}
                    </pre>
                  </div>

                  {/* Sandbox Footer Note */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono pt-2">
                    <span>{data.sandbox.footerNote}</span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      AUDITED ARCHITECTURE
                    </span>
                  </div>

                </div>
              )}

            </div>

          </div>
        </section>
      )}

      {/* 4. TECHNICAL SPECIFICATION MATRIX */}
      {data.techMatrix && (
        <section className="py-16 sm:py-20 border-b border-slate-200 dark:border-[#1F1F28]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                INFRASTRUCTURE STACK
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Battle-Tested Technical Matrix
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Architectural components selected for ultra-low latency, strict isolation, and multi-region failover.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[data.techMatrix.column1, data.techMatrix.column2, data.techMatrix.column3].map((col, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] space-y-4 shadow-sm"
                >
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200 dark:border-[#1F1F28]">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {col.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 font-mono text-xs">
                    {col.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
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

      {/* 5. DELIVERABLES / CORE CAPABILITIES */}
      <section id="deliverables" className="py-16 sm:py-24 border-b border-slate-200 dark:border-[#1F1F28] bg-slate-50/40 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              WHAT WE DELIVER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Core Capabilities & Turnkey Deliverables
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Every deployment includes complete institutional deliverables, documented APIs, and 100% intellectual property ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.deliverables?.map((deliv, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] space-y-4 hover:border-emerald-500/40 transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {deliv.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-emerald-500 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {deliv.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {deliv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-[#1F1F28] space-y-1.5">
                  {deliv.specs?.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. VERIFIED PRODUCTION CASE STUDY SHOWCASE */}
      {data.project && (
        <section className="py-16 sm:py-20 border-b border-slate-200 dark:border-[#1F1F28]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500 text-slate-950">
                    FEATURED CASE STUDY
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    DEPLOYED IN PRODUCTION
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {data.project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {data.project.summary}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  <Activity className="w-4 h-4" />
                  <span>KEY IMPACT: {data.project.metrics}</span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenAccount}
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  REQUEST CASE STUDY BRIEF
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. 3-STAGE METHODOLOGY */}
      {data.methodology && (
        <section className="py-16 sm:py-24 border-b border-slate-200 dark:border-[#1F1F28] bg-slate-50/30 dark:bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                DELIVERY ROADMAP
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                How We Engineer & Ship Your Solution
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                A structured, sprint-driven engineering process from architecture discovery to turn-key production launch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stage: '01', data: data.methodology.stage1 },
                { stage: '02', data: data.methodology.stage2 },
                { stage: '03', data: data.methodology.stage3 },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] space-y-4 relative shadow-sm"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#1F1F28]">
                    <span className="text-2xl font-black font-mono text-emerald-500">
                      {item.stage}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      STAGE {item.stage}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.data.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {item.data.focus}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1F1F28]">
                    {item.data.bullets?.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 8. TECHNICAL FAQS ACCORDION */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-16 sm:py-24 border-b border-slate-200 dark:border-[#1F1F28]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center space-y-2">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Engineering & Deployment FAQ
              </h2>
            </div>

            <div className="space-y-3">
              {data.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 dark:border-[#1F1F28] bg-white dark:bg-[#0D0D12] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#12121A] transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-[#1F1F28]">
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

      {/* 9. BOTTOM CONVERSION CTA */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
