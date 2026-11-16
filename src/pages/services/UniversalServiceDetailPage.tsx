import React, { useState } from 'react';
import { useRouter } from '../../router';
import { getServiceData, ServiceData } from '../../data/aayaamx/services-data';
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
  Globe
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

  const [activeTabId, setActiveTabId] = useState<string>(data.sandbox.tabs[0]?.id || '');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const activeTab = data.sandbox.tabs.find(t => t.id === activeTabId) || data.sandbox.tabs[0];

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
              onClick={() => navigate('/services')} 
              className="text-xs font-mono font-medium text-slate-500 hover:text-emerald-600 transition-colors"
            >
              SERVICES
            </button>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-slate-600 dark:text-slate-400 font-mono text-xs font-semibold uppercase tracking-wider">
              {data.categoryBadge}
            </span>
          </div>

          {/* Headline & Tagline */}
          <div className="max-w-4xl space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white font-sans leading-[1.15] break-words">
              {data.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {data.tagline}
            </p>
          </div>

          {/* 4 Telemetry Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
            {data.metrics.map((m, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 dark:bg-[#0D0D12] p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-[#1F1F28] space-y-1 hover:border-emerald-500/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="text-lg sm:text-2xl font-black font-mono text-slate-900 dark:text-white truncate">
                    {m.value}
                  </div>
                  {m.live && (
                    <span className="flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/80 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      LIVE SLA
                    </span>
                  )}
                </div>
                <div className="text-[11px] sm:text-xs font-sans text-slate-500 dark:text-slate-400 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenAccount}
              className="px-6 sm:px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Share Your Project Brief</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('deliverables');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-slate-100 dark:bg-[#0D0D12] hover:bg-slate-200 dark:hover:bg-[#15151D] text-slate-800 dark:text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-300 dark:border-[#1F1F28] inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Deliverables</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. LIVE SANDBOX / SYSTEM ARCHITECTURE WORKBENCH */}
      {data.sandbox && data.sandbox.tabs.length > 0 && (
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-[#1F1F28] bg-slate-50/60 dark:bg-[#050508]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" />
                  SYSTEM ARCHITECTURE SIMULATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-sans">
                  Interactive Production Inspection
                </h2>
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-[#0D0D12] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#1F1F28]">
                ENDPOINT: <span className="text-slate-900 dark:text-emerald-400 font-bold">{data.sandbox.address}</span>
              </div>
            </div>

            {/* Sandbox Container (IDE Style) */}
            <div className="bg-white dark:bg-[#0D0D12] rounded-2xl border border-slate-200 dark:border-[#1F1F28] shadow-xl overflow-hidden">
              
              {/* Window Title Bar & Tabs */}
              <div className="bg-slate-100 dark:bg-[#07070A] px-4 py-2.5 border-b border-slate-200 dark:border-[#1F1F28] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {data.sandbox.tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTabId(tab.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                          tab.id === (activeTab?.id || '')
                            ? 'bg-white dark:bg-[#15151D] text-slate-950 dark:text-white border border-slate-300 dark:border-[#1F1F28] shadow-xs'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/80">
                  {data.sandbox.liveBadge}
                </div>
              </div>

              {/* Active Tab Content & Telemetry HUD */}
              {activeTab && (
                <div className="p-5 sm:p-6 space-y-6">
                  
                  {/* Telemetry Micro-Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-slate-50 dark:bg-[#121218] p-3 rounded-xl border border-slate-200 dark:border-[#1F1F28]">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">{activeTab.metricLabel1}</div>
                      <div className="text-sm font-black font-mono text-slate-900 dark:text-emerald-400 mt-0.5">{activeTab.metricValue1}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-[#121218] p-3 rounded-xl border border-slate-200 dark:border-[#1F1F28]">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">{activeTab.metricLabel2}</div>
                      <div className="text-sm font-black font-mono text-slate-900 dark:text-white mt-0.5">{activeTab.metricValue2}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-[#121218] p-3 rounded-xl border border-slate-200 dark:border-[#1F1F28]">
                      <div className="text-[10px] font-mono text-slate-400 uppercase">{activeTab.metricLabel3}</div>
                      <div className="text-sm font-black font-mono text-slate-900 dark:text-white mt-0.5">{activeTab.metricValue3}</div>
                    </div>
                  </div>

                  {/* Code Snippet Box */}
                  <div className="bg-[#0A0D14] text-slate-200 rounded-xl p-4 font-mono text-xs overflow-x-auto border border-slate-800 space-y-1">
                    <div className="text-[11px] text-slate-500 pb-2 border-b border-slate-800 mb-2 flex items-center justify-between">
                      <span>FILE: {activeTab.codeTitle}</span>
                      <span className="text-emerald-400 text-[10px] uppercase">{activeTab.badge}</span>
                    </div>
                    {activeTab.codeLines.map((line, lIdx) => (
                      <div 
                        key={lIdx} 
                        className={`py-0.5 leading-relaxed ${line.type === 'highlight' ? 'bg-emerald-500/15 -mx-4 px-4 text-emerald-300 font-bold' : ''} ${line.type === 'comment' ? 'text-slate-500 italic' : ''}`}
                      >
                        {line.parts.map((p, pIdx) => {
                          let color = 'text-slate-200';
                          if (p.kind === 'keyword') color = 'text-purple-400 font-bold';
                          if (p.kind === 'func') color = 'text-blue-400';
                          if (p.kind === 'string') color = 'text-emerald-400';
                          if (p.kind === 'badge') color = 'text-amber-400 font-bold';
                          return <span key={pIdx} className={color}>{p.text}</span>;
                        })}
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* Sandbox Footer */}
              <div className="bg-slate-50 dark:bg-[#07070A] px-5 py-3 border-t border-slate-200 dark:border-[#1F1F28] text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>{data.sandbox.footerNote}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% PRODUCTION COMPATIBLE</span>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* 2.5 TECHNOLOGY STACK MATRIX */}
      {data.techMatrix && (
        <section className="py-14 sm:py-20 border-b border-slate-200 dark:border-[#1F1F28] bg-white dark:bg-[#000000]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2.5">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                ENGINEERING STANDARDS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-sans">
                Enterprise Technology Matrix
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                We select proven frameworks, databases, and infrastructure with zero vendor lock-in, high throughput, and strict security compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[data.techMatrix.column1, data.techMatrix.column2, data.techMatrix.column3].map((col, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50/70 dark:bg-[#0D0D12] p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-[#1F1F28] space-y-4 hover:border-emerald-500/50 transition-all"
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-[#1F1F28]">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                      {idx === 0 ? <Code2 className="w-5 h-5" /> : idx === 1 ? <Database className="w-5 h-5" /> : <Server className="w-5 h-5" />}
                    </div>
                    <h3 className="text-base font-bold text-slate-950 dark:text-white font-sans">
                      {col.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 pt-1">
                    {col.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
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

      {/* 3. CORE DELIVERABLES GRID */}
      <section id="deliverables" className="py-16 sm:py-24 border-b border-slate-200 dark:border-[#1F1F28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-sans">
              Production Deliverables &amp; Specifications
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Every deliverable is backed by strict architecture specifications, automated testing pipelines, and complete intellectual property handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.deliverables.map((del, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#0D0D12] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#1F1F28] space-y-5 hover:border-emerald-500/60 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-[#1F1F28]">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                    {del.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white font-sans group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {del.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mt-2">
                    {del.description}
                  </p>
                </div>

                <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-[#1F1F28]">
                  {del.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. 3-STAGE DELIVERY METHODOLOGY */}
      {data.methodology && (
        <section className="py-16 sm:py-24 border-b border-slate-200 dark:border-[#1F1F28] bg-slate-50/60 dark:bg-[#050508]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-2.5">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                OUR DELIVERY PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-sans">
                Predictable Milestone-Driven Execution
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                From initial architecture mapping to production launch and warranty SLAs — clear visibility at every stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[data.methodology.stage1, data.methodology.stage2, data.methodology.stage3].map((stage, idx) => (
                <div 
                  key={idx}
                  className="bg-white dark:bg-[#0D0D12] p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-[#1F1F28] space-y-4 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono font-black flex items-center justify-center text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white font-sans">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {stage.focus}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-[#1F1F28] space-y-2">
                    {stage.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 5. SERVICE FAQS */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-16 sm:py-24 border-b border-slate-200 dark:border-[#1F1F28]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center space-y-2.5">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white font-sans">
                Technical &amp; Commercial Questions
              </h2>
            </div>

            <div className="space-y-3">
              {data.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className={`bg-white dark:bg-[#0D0D12] rounded-xl border transition-all ${
                      isOpen ? 'border-emerald-500/80 shadow-md ring-1 ring-emerald-500/20' : 'border-slate-200 dark:border-[#1F1F28]'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-[#1F1F28] pt-3">
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

      {/* 6. FINAL BOTTOM CTA */}
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
