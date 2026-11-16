import React from 'react';
import { Check, ArrowRight, Code, Sparkles, Shield, Rocket, Clock, Database, Layers } from 'lucide-react';

interface YieldPricingSectionProps {
  onOpenAccount: () => void;
}

export const YieldPricingSection: React.FC<YieldPricingSectionProps> = ({ onOpenAccount }) => {
  const engagementModels = [
    {
      badge: 'FIXED-SCOPE TURNKEY',
      icon: Rocket,
      title: 'Dedicated Product Delivery',
      subtitle: 'From Requirements to Live Production',
      desc: 'Ideal for startups and businesses launching a new customer portal, trading platform, AI assistant, or mobile application with defined milestones.',
      points: [
        'Fixed budget & milestone-based sprint delivery',
        'Direct collaboration with lead system architects',
        'Comprehensive testing, QA, and production launch',
        '100% full source-code & IP ownership at handover'
      ],
      guaranteeLabel: 'Delivery SLA',
      guaranteeValue: 'On-Time Milestone Handover'
    },
    {
      badge: 'MONTHLY INFRASTRUCTURE',
      icon: Database,
      title: 'Turnkey Software Suites',
      subtitle: 'Flat Monthly SaaS Licensing',
      desc: 'Deploy ready-to-run Broker CRM backoffices, Prop Firm evaluation engines, or multi-chain crypto gateways without expensive per-user penalties.',
      points: [
        'Predictable flat monthly fee with zero hidden surcharges',
        'Unlimited client accounts and multi-tier IB partner trees',
        'Continuous automated backups and 99.99% uptime monitoring',
        'Regular security patches and new feature rollouts'
      ],
      guaranteeLabel: 'Licensing Standard',
      guaranteeValue: 'Zero Per-User Penalty Caps'
    },
    {
      badge: 'LONG-TERM PARTNERSHIP',
      icon: Layers,
      title: 'Engineering Retainer & Support',
      subtitle: 'Dedicated Technical Extension',
      desc: 'Ongoing developer retainer for established businesses needing continuous feature iteration, API scaling, DevOps maintenance, and 24/7 technical SLAs.',
      points: [
        'Dedicated senior developers integrated with your team',
        'Proactive performance tuning and microservices scaling',
        'High-priority issue resolution and emergency response desk',
        'Regular architecture reviews and roadmap planning'
      ],
      guaranteeLabel: 'Support Commitment',
      guaranteeValue: 'Guaranteed 99.99% System SLA'
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50/80 dark:bg-[#000000] border-b border-slate-200 dark:border-[#1F1F28] font-sans select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
            Transparent Pricing &amp; Predictable Delivery
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
            AyaamX offers clear engagement frameworks tailored to your business model — whether you need a fixed-scope product build, ready turnkey SaaS modules, or dedicated long-term engineering support.
          </p>
        </div>

        {/* 3 Clean Enterprise Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {engagementModels.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0D0D12] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#1F1F28] shadow-xs hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white font-sans group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 mt-1">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  <div className="pt-2 space-y-2.5 border-t border-slate-100 dark:border-slate-800">
                    {item.points.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                    {item.guaranteeLabel}: <strong className="text-slate-900 dark:text-white font-bold">{item.guaranteeValue}</strong>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Center Action CTA */}
        <div className="text-center pt-2">
          <button
            onClick={onOpenAccount}
            className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2 shadow-md cursor-pointer group"
          >
            <span>Request Custom Scope &amp; Pricing Quotation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
