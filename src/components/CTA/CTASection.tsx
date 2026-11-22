import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Zap, Globe2 } from 'lucide-react';

interface CTASectionProps {
  onOpenAccount: () => void;
  title?: string;
  subtitle?: string;
  badge?: string;
  variant?: 'default' | 'institutional' | 'light' | 'dark';
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenAccount,
  title,
  subtitle = "End-to-end digital engineering across Trading Tech, AI & Automation, Web3, and Enterprise Platforms. Your vision, full code ownership, engineered to scale.",
  badge = "ENTERPRISE DIGITAL ENGINEERING GATEWAY",
}) => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28 font-sans bg-white dark:bg-[#000000] text-slate-900 dark:text-white border-t border-slate-200 dark:border-[#1F1F28] transition-colors duration-300">

      {/* Mesh Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Background Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60 dark:opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center space-y-8">

        {/* Badge */}

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-[1.1] text-slate-900 dark:text-white">
          {title ? (
            title
          ) : (
            <>
              Build Your Next-Generation{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Digital &amp; Trading Ecosystem.
              </span>
            </>
          )}
        </h2>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenAccount}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base rounded-xl shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onOpenAccount}
            className="w-full sm:w-auto px-7 py-4 font-bold text-sm rounded-xl border transition-all flex items-center justify-center gap-2 cursor-pointer bg-slate-50 dark:bg-[#121520] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 shadow-xs"
          >
            <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Schedule Platform Walkthrough</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-8 py-4 rounded-2xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-xs text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>End-to-End Delivery</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>100% Code Ownership</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Ultra-Low Latency</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>99.99% Uptime SLA</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
