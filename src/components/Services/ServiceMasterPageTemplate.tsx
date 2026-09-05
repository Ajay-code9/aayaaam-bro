import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Headphones,
  Server,
  FileCheck2,
  Users,
  Cpu,
  Activity,
  Award,
  Workflow
} from 'lucide-react';
import { CTASection } from '../CTA/CTASection';

export interface ServiceDeliverable {
  title: string;
  desc: string;
  icon: React.ElementType;
  sla: string;
}

export interface ServiceWorkflowStep {
  step: string;
  title: string;
  desc: string;
  icon?: React.ElementType;
}

export interface ServiceScopeItem {
  feature: string;
  standard: string;
  enterprise: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceMasterPageProps {
  serviceTitle: string;
  heroBadge: string;
  heroDescription: string;
  slaMetric: { label: string; value: string; sub: string };
  deliverables: ServiceDeliverable[];
  workflowSteps: ServiceWorkflowStep[];
  scopeInclusions: ServiceScopeItem[];
  specs: { label: string; value: string }[];
  faqs: ServiceFaq[];
  onOpenAccount: () => void;
}

export const ServiceMasterPageTemplate: React.FC<ServiceMasterPageProps> = ({
  serviceTitle,
  heroBadge,
  heroDescription,
  slaMetric,
  deliverables,
  workflowSteps,
  scopeInclusions,
  specs,
  faqs,
  onOpenAccount
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Colorful icon theme colors for deliverable cards
  const iconThemeColors = [
    { bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20', badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
    { bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20', badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    { bg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20', badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
    { bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20', badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' },
    { bg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20', badge: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20' },
    { bg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20', badge: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20' }
  ];

  const stepColors = [
    'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">

      {/* 1. HERO SECTION (100% ABOVE-THE-FOLD LANDING WITH ZERO CLIPPING) */}
      <section className="relative py-8 sm:py-12 lg:py-14 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1420] text-slate-900 dark:text-white">
        {/* Subtle Background Radial Grid & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-extrabold border border-emerald-200 dark:border-emerald-800/60">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{heroBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {serviceTitle}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                {heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenAccount}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Book Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Broker Compliance Verified</span>
                </div>
              </div>

              {/* Quick Specs Pills */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200 dark:border-slate-800">
                {specs.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">{item.label}</div>
                    <div className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400 truncate">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metric & Feature Grid */}
            <div className="lg:col-span-5 space-y-3">
              {/* Metric Card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-md dark:shadow-xl space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                  <span>{slaMetric.label}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-extrabold">
                    GUARANTEED SLA
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                  {slaMetric.value}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {slaMetric.sub}
                </div>
              </div>

              {/* Key Deliverables Cards */}
              <div className="grid grid-cols-1 gap-2.5">
                {deliverables.slice(0, 3).map((item, dIdx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={dIdx} className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-xs flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.title}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/80 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                        {item.sla}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CHRONOLOGICAL 4-STEP OPERATIONAL WORKFLOW */}
      <section className="py-14 sm:py-18 bg-white dark:bg-[#0E1420] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <Workflow className="w-4 h-4" />
              <span>STEP-BY-STEP SERVICE PROCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How {serviceTitle} Is Delivered
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Clear 4-step workflow ensuring zero downtime and 100% operational transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflowSteps.map((stepItem, sIdx) => {
              const StepIcon = stepItem.icon || Clock;
              const colorStyle = stepColors[sIdx % stepColors.length];

              return (
                <div key={sIdx} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#131926] border border-slate-200 dark:border-slate-800 space-y-3 relative">
                  <div className={`w-9 h-9 rounded-xl font-mono font-bold flex items-center justify-center text-sm border ${colorStyle}`}>
                    0{sIdx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <StepIcon className="w-4 h-4" />
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

      {/* 3. GUARANTEED SERVICE DELIVERABLES WITH RICH VECTOR ICONS */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Guaranteed Service Deliverables
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Included in your managed service agreement with transparent performance metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, idx) => {
            const IconComp = item.icon;
            const theme = iconThemeColors[idx % iconThemeColors.length];

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl border ${theme.bg}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${theme.badge}`}>
                      {item.sla}
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

      {/* 4. SCOPE MATRIX & SPECS */}
      <section className="py-14 sm:py-18 bg-slate-100 dark:bg-[#0E1420] border-t border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Service Scope Comparison Matrix
            </h2>
          </div>

          <div className="bg-white dark:bg-[#131926] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-slate-50 dark:bg-[#0E1420] border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 uppercase font-mono font-bold">
                  <tr>
                    <th className="p-4">Service Feature</th>
                    <th className="p-4 text-emerald-600 dark:text-emerald-400">Standard Tier</th>
                    <th className="p-4 text-purple-600 dark:text-purple-400">Enterprise VIP Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-600 dark:text-slate-300">
                  {scopeInclusions.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 font-bold text-slate-900 dark:text-white">{row.feature}</td>
                      <td className="p-4">{row.standard}</td>
                      <td className="p-4 font-bold text-emerald-600 dark:text-emerald-400">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map((item, idx) => (
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
      </section>

      {/* 5. FAQs */}
      <section className="py-16 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Clear answers about our managed service SLAs.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, fIdx) => {
            const isOpen = activeFaq === fIdx;
            return (
              <div
                key={fIdx}
                className="rounded-xl bg-white dark:bg-[#131926] border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                  className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection variant="light" onOpenAccount={onOpenAccount} />

    </div>
  );
};
