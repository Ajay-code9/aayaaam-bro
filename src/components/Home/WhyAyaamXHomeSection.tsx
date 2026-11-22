import React from 'react';
import { GitCommit, ShieldCheck, Zap, Lock } from 'lucide-react';

interface MetricItem {
  icon: React.ElementType;
  value: string;
  label: string;
  detail: string;
  badge: string;
}

const METRICS: MetricItem[] = [
  {
    icon: GitCommit,
    value: '100%',
    label: 'Source Code Handover',
    detail: 'Full IP ownership, zero vendor lock-in, and custom Git blueprints.',
    badge: 'IP Ownership'
  },
  {
    icon: Zap,
    value: '< 10ms',
    label: 'Execution Latency',
    detail: 'Engineered in C++ and Go for institutional order matching speed.',
    badge: 'Performance'
  },
  {
    icon: ShieldCheck,
    value: '99.99%',
    label: 'Production SLA',
    detail: 'High-availability multi-region clusters with zero single-point failures.',
    badge: 'Reliability'
  },
  {
    icon: Lock,
    value: 'Single-Tenant',
    label: 'Data Sovereignty',
    detail: 'Dedicated databases and isolated VPC clouds. Zero shared leaks.',
    badge: 'Privacy'
  }
];

export const WhyAyaamXHomeSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek 4-Metric Institutional Bar Container */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-[#0B111B] p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-gradient-to-bl from-[#1b3995]/10 via-[#438780]/5 to-transparent pointer-events-none blur-3xl" />

          {/* 4-Item Horizontal Stat Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y sm:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800/80">
            {METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col justify-between space-y-3 ${
                    idx !== 0 ? 'lg:pl-8 pt-6 sm:pt-0' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#1b3995] dark:text-[#77bd7b] shadow-xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1b3995]/10 text-[#1b3995] dark:text-[#77bd7b] border border-[#1b3995]/20">
                      {metric.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white font-mono">
                      {metric.value}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {metric.label}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {metric.detail}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
