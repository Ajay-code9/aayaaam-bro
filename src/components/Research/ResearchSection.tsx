import React from 'react';
import { RESEARCH_ARTICLES } from '../../data/mockData';
import { BookOpen, Calendar, ArrowRight, TrendingUp, Globe, Cpu, Filter, Award, Sparkles } from 'lucide-react';

interface ResearchSectionProps {
  onOpenAccount: () => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onOpenAccount }) => {
  return (
    <section id="research" className="py-16 lg:py-20 bg-slate-50/70 dark:bg-[#000000] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-[#1F1F28] font-sans relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Humanized B2B Operator Guides Header */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end border-b border-slate-200 dark:border-[#1F1F28] pb-8">
          
          {/* LEFT SIDE: Clean Header & Feature Pills */}
          <div className="lg:col-span-8 space-y-4 text-left relative z-10">
            
            {/* Clean Simple Badge */}

            {/* Natural Human Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 dark:text-white font-sans leading-[1.15]">
              Architectural Insights, Playbooks <span className="text-emerald-600 dark:text-emerald-400">&</span> Documentation
            </h2>

            {/* Clear Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              Practical engineering perspectives on system design, AI workflow automation, broker CRM backoffices, and multi-network Web3 infrastructure.
            </p>

            {/* Horizontal Key Metrics Row */}
            <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 border-t border-slate-200/80 dark:border-[#1F1F28] pt-4">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-3 pr-4 sm:pr-6 border-r border-slate-200 dark:border-[#1F1F28] shrink-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-200 dark:border-emerald-500/30">
                  <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-mono leading-none">14+</div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Modular Solutions</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3 pr-4 sm:pr-6 border-r border-slate-200 dark:border-[#1F1F28] shrink-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-200 dark:border-emerald-500/30">
                  <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-mono leading-none">REST & FIX</div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">API Documentation</div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 border border-emerald-200 dark:border-emerald-500/30">
                  <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-base font-bold text-emerald-700 dark:text-emerald-400 font-mono leading-none">Production-Ready</div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Turnkey Blueprints</div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: Action Button */}
          <div className="lg:col-span-4 relative flex flex-col justify-end items-start lg:items-end min-h-[120px]">
            <div className="relative z-10 w-full sm:w-auto">
              <button
                onClick={onOpenAccount}
                className="h-[46px] px-6 bg-slate-900 dark:bg-emerald-500 hover:bg-slate-800 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer group w-full sm:w-auto"
              >
                <span>View Full Knowledge Base</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 dark:text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* 3 Research Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white dark:bg-[#0D0D12] rounded-2xl border border-slate-200/90 dark:border-[#1F1F28] p-6 flex flex-col justify-between hover:border-emerald-500/70 dark:hover:border-emerald-500/70 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-bold rounded border border-emerald-200 dark:border-emerald-500/30">
                    {article.tag}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {article.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors font-sans leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-[#1F1F28] flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>{article.author}</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">{article.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Humanized B2B Proof Cards Banner (Light in Light Mode, Smoke Black in Dark Mode) */}
        <div className="bg-white dark:bg-[#0D0D12] text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-[#1F1F28] p-6 sm:p-8 font-sans shadow-lg shadow-slate-200/40 dark:shadow-none">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            
            {/* COLUMN 1: Complete IP Ownership */}
            <div className="md:pr-8 md:border-r md:border-slate-200 dark:md:border-[#1F1F28] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-3xl font-bold text-slate-900 dark:text-white font-mono">100% IP</div>
                <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Source Code Ownership</div>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">Complete IP Handover</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Every line of source code, database schema, and custom API integration is 100% owned by your firm upon delivery. Zero hidden license traps.
              </p>
            </div>

            {/* COLUMN 2: Zero Vendor Lock-in */}
            <div className="md:px-8 md:border-r md:border-slate-200 dark:md:border-[#1F1F28] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-3xl font-bold text-slate-900 dark:text-white font-mono">0% Lock-In</div>
                <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Open Architecture</div>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">Deploy on Your Cloud</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Deploy directly inside your company's AWS or private cloud. You maintain absolute sovereignty over databases, client records, and infrastructure.
              </p>
            </div>

            {/* COLUMN 3: 99.99% Reliability SLA */}
            <div className="md:pl-8 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-3xl font-bold text-slate-900 dark:text-white font-mono">99.99%</div>
                <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Guaranteed System Uptime</div>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">Enterprise Reliability SLA</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Production-grade microservices with automated daily backups, multi-zone disaster recovery failover, and sub-1hr emergency incident response.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
