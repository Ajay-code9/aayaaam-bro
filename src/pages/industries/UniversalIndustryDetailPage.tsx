import React, { useState } from 'react';
import { useRouter } from '../../router';
import { getIndustryPage } from '../../data/aayaamx/industry-pages';
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
  Workflow,
  Check,
  Server,
  Database,
  Globe,
  ExternalLink,
  Zap,
  Building
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface IndustryPageProps {
  onOpenAccount: () => void;
  industryKey?: string;
}

export const UniversalIndustryDetailPage: React.FC<IndustryPageProps> = ({ onOpenAccount, industryKey }) => {
  const { currentPath, navigate } = useRouter();

  // Resolve slug from path
  const path = industryKey || currentPath;
  const data = getIndustryPage(path) || getIndustryPage('/industries/forex-brokerage');

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  if (!data) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-white flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Industry Profile Coming Soon</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-200 dark:border-[#1F1F28] overflow-hidden">
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
            <span className="text-xs font-mono font-medium text-slate-500">INDUSTRIES</span>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-mono text-[11px] font-bold border border-emerald-200 dark:border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{data.name.toUpperCase()} INFRASTRUCTURE</span>
            </span>
          </div>

          {/* Headline & Tagline */}
          <div className="max-w-4xl space-y-4">
            <div className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              SPECIALIZED INDUSTRY ARCHITECTURE
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {data.headline}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-2">
              {data.intro}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenAccount}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>DISCUSS {data.name.toUpperCase()} PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#workflow"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#0D0D12] dark:hover:bg-[#16161F] text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-[#1F1F28] transition-all cursor-pointer"
            >
              <span>SEE CORE WORKFLOW</span>
            </a>
          </div>

          {/* Audience Callout Banner */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] flex items-center gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span><strong className="text-slate-900 dark:text-white">Designed For:</strong> {data.audience}</span>
          </div>

        </div>
      </section>

      {/* 2. CHRONOLOGICAL INDUSTRY WORKFLOW */}
      <section id="workflow" className="py-16 sm:py-20 border-b border-slate-200 dark:border-[#1F1F28] bg-slate-50/40 dark:bg-[#060608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              END-TO-END WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {data.workflowTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              How operations, customer requests, and system records execute in production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.workflow.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] space-y-3 shadow-sm hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-[#1F1F28]">
                  <span className="text-2xl font-black font-mono text-emerald-500">0{idx + 1}</span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">STAGE 0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {step[0]}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step[1]}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="py-16 sm:py-24 border-b border-slate-200 dark:border-[#1F1F28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              INTEGRATED CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Connected Infrastructure for {data.name}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Each capability links directly to dedicated platform modules with full API access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] space-y-4 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-sm"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {cap[0]}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cap[1]}
                  </p>
                </div>
                <button
                  onClick={() => navigate(cap[2])}
                  className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 hover:underline pt-2 cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INTEGRATION & READINESS CHECKS */}
      <section className="py-16 sm:py-20 border-b border-slate-200 dark:border-[#1F1F28] bg-slate-50/30 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                INTEGRATION PROTOCOL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                How We Interface With Your Providers
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {data.integration}
              </p>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-700 dark:text-slate-300">
                <strong>Project Scope:</strong> {data.brief}
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] space-y-4 shadow-sm">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                OPERATIONAL VERIFICATION CHECKS
              </h3>
              <ul className="space-y-3 font-mono text-xs">
                {data.checks.map((chk, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{chk}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQS ACCORDION */}
      {data.questions && data.questions.length > 0 && (
        <section className="py-16 sm:py-24 border-b border-slate-200 dark:border-[#1F1F28]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                QUESTIONS & CLARIFICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Frequently Asked Architectural Questions
              </h2>
            </div>

            <div className="space-y-3">
              {data.questions.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 dark:border-[#1F1F28] bg-white dark:bg-[#0D0D12] overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#12121A] transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {faq[0]}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-[#1F1F28]">
                        {faq[1]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. BOTTOM CONVERSION CTA */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
