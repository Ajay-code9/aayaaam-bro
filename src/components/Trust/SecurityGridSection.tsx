import React from 'react';
import { ShieldCheck, Database, Code2, Server, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SecurityGridSectionProps {
  onOpenAccount: () => void;
}

export const SecurityGridSection: React.FC<SecurityGridSectionProps> = ({ onOpenAccount }) => {
  const securityPillars = [
    {
      icon: Database,
      badge: 'DATA SOVEREIGNTY',
      title: 'Dedicated Databases & Zero Lock-In',
      description: 'Your client data, transaction records, and user logs are deployed on isolated single-tenant database instances. We never co-mingle or monetize your customer records.',
      highlights: ['100% Single-Tenant Isolation', 'Zero Multi-Tenant Leaks', 'Automated Daily Encrypted Backups']
    },
    {
      icon: Code2,
      badge: 'IP & CODE RIGHTS',
      title: 'Full Source Code & Architecture Handover',
      description: 'Complete intellectual property rights and full source repository access. Build your core enterprise value with total autonomy and zero ongoing per-seat platform taxes.',
      highlights: ['Full Git Repository Handover', 'Clean Documented Architecture', 'Commercial Perpetual Rights']
    },
    {
      icon: ShieldCheck,
      badge: 'BANK-GRADE GOVERNANCE',
      title: 'Enterprise Encryption & Compliance Controls',
      description: 'Engineered to withstand institutional security audits with TLS 1.3 in-transit, AES-256 at-rest encryption, automated role-based access control (RBAC), and full audit trails.',
      highlights: ['SOC-2 / ISO Alignment', 'Granular Role-Based Permissions', 'Immutable Tamper-Proof Audit Logs']
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Institutional Data Sovereignty &amp; Bank-Grade Security
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Unlike retail SaaS vendors that lock your proprietary business logic into black boxes, AyaamX guarantees complete data sovereignty, isolated cloud architecture, and full source code ownership.
          </p>
        </div>

        {/* 3 Modern Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0B111B] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-7 flex flex-col justify-between hover:border-[#1b3995]/50 dark:hover:border-[#1b3995]/60 hover:shadow-xl hover:shadow-[#1b3995]/5 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1b3995] to-[#204464] flex items-center justify-center text-white shadow-md shadow-[#1b3995]/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-[#1b3995] dark:group-hover:text-[#77bd7b] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-100 dark:border-slate-800/60">
                    {pillar.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#77bd7b] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">SLA: 99.99% GUARANTEED</span>
                  <button
                    onClick={onOpenAccount}
                    className="text-xs font-bold text-[#1b3995] dark:text-[#77bd7b] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Audit Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <div className="bg-white dark:bg-[#0B111B] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-slate-950 dark:text-white">
              Need custom compliance or dedicated private cloud deployment (AWS / GCP / Bare-Metal)?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Our engineering team deploys on your own virtual private clouds (VPC) with complete perimeter firewalls and key management.
            </p>
          </div>
          <button
            onClick={onOpenAccount}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-[#1b3995] via-[#204464] to-[#438780] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md cursor-pointer transition-all"
          >
            Request Security Whitepaper
          </button>
        </div>

      </div>
    </section>
  );
};
