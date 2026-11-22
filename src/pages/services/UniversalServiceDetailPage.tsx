import React from 'react';
import { useRouter } from '../../router';
import { getServiceData, ServiceData } from '../../data/aayaamx/services-data';
import {
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ServicePageProps {
  onOpenAccount: () => void;
  serviceKey?: string;
}

export const UniversalServiceDetailPage: React.FC<ServicePageProps> = ({ onOpenAccount, serviceKey }) => {
  const { currentPath, navigate } = useRouter();
  
  // Resolve data dynamically based on URL path or explicit key
  const effectiveKey = serviceKey || currentPath;
  const data: ServiceData = getServiceData(effectiveKey);

  return (
    <div className="min-h-screen bg-white dark:bg-[#080B11] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* ── 1. HERO SECTION (EXACT MATCH TO SCREENSHOT 1) ── */}
      <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Green Category Tag */}
          <div className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
            {data.categoryBadge || 'WEB DEVELOPMENT'}
          </div>

          {/* Heading and Subheading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white font-sans leading-[1.15]">
              {data.title}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
              Web &amp; Mobile Development
            </p>
          </div>

          {/* Tagline Description */}
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-4xl font-normal">
            {data.tagline}
          </p>

          {/* Two Clean Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('deliverables');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-gradient-to-r from-[#1b3995] via-[#204464] to-[#438780] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer group"
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

        </div>
      </section>

      {/* ── 2. WHAT WE DELIVER (EXACT MATCH TO SCREENSHOT 1 & 2 - CLEAN 2-COL CARDS) ── */}
      <section id="deliverables" className="py-14 sm:py-20 border-b border-slate-100 dark:border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-2">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.18em]">
              STANDARD ENGINEERING PACKAGE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white font-sans tracking-tight">
              What We Deliver
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              Every project engineered by AayaamX includes production-ready deliverables built for high performance and long-term scalability.
            </p>
          </div>

          {/* 2-Column Clean Cards (Without extra numbering or complex tags) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {data.deliverables.map((del, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 sm:p-6 border transition-all duration-200 bg-white dark:bg-[#0E131F] border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-md flex items-start gap-4"
              >
                {/* Emerald Rounded Checkbox Icon */}
                <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-300 dark:border-emerald-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 dark:text-white font-sans">
                    {del.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {del.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. EXECUTION METHODOLOGY / HOW WE WORK (EXACT MATCH TO SCREENSHOT 3) ── */}
      {data.methodology && (
        <section className="py-14 sm:py-20 border-b border-slate-100 dark:border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="space-y-2">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.18em]">
                EXECUTION METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white font-sans tracking-tight">
                How We Work
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                Our 3-stage agile delivery workflow ensures clear communication, visible sprint progress, and zero-downtime deployment.
              </p>
            </div>

            {/* 3 Clean Stage Cards (Stage 1, Stage 2, Stage 3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { stageNum: 1, stageData: data.methodology.stage1 },
                { stageNum: 2, stageData: data.methodology.stage2 },
                { stageNum: 3, stageData: data.methodology.stage3 }
              ].map(({ stageNum, stageData }, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 border transition-all duration-200 bg-white dark:bg-[#0E131F] border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-md flex flex-col justify-between min-h-[220px]"
                >
                  <div className="space-y-4">
                    {/* Circle Number and Stage Pill */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center border border-emerald-200 dark:border-emerald-500/30">
                        {stageNum}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        STAGE {stageNum}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white font-sans">
                        {stageData.title.replace(/^Stage\s*\d+:\s*/i, '')}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-2 font-normal">
                        {stageData.focus}
                      </p>
                    </div>
                  </div>

                  {/* Guaranteed SLA bottom row */}
                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                    <span>Guaranteed SLA</span>
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-Card Box: Explore full Web & Mobile Development */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B0F19] p-7 sm:p-9 text-center space-y-4 mt-8">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-100/70 dark:bg-blue-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
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
                  className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors inline-flex items-center gap-1 cursor-pointer"
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

    </div>
  );
};
