import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Globe, Percent, Layers, BarChart2, Cpu, Brain, Blocks, Code, Sparkles } from 'lucide-react';
import { useRouter } from '../../router';

interface InstitutionalClassyShowcaseProps {
  onOpenAccount: () => void;
}

export const InstitutionalClassyShowcase: React.FC<InstitutionalClassyShowcaseProps> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();

  const modularEngines = [
    {
      title: 'Turnkey Broker CRM & Client Portal Software',
      subtitle: 'READY-TO-DEPLOY SOFTWARE PRODUCT',
      desc: 'A complete, ready-to-launch brokerage operating software. We deploy your branded web/mobile client portal, KYC onboarding queues, multi-tier IB rebate tree calculator, and payment gateway backoffice in under 3 days.',
      route: '/products/forex-crm',
      btnText: 'Purchase / License CRM Suite',
      icon: Layers
    },
    {
      title: 'Prop Trading Challenge & Risk Management Software',
      subtitle: 'TURNKEY PROP FIRM PLATFORM',
      desc: 'Launch your proprietary trading firm with our all-in-one evaluation software. Handles challenge phase automation, live equity drawdown breach detection, account credential generation, and funded trader profit split payouts.',
      route: '/products/prop-trading-crm',
      btnText: 'Purchase Prop Firm Suite',
      icon: ShieldCheck
    },
    {
      title: 'White-Label WebTrader & Native Mobile Apps',
      subtitle: 'WHITE-LABEL SOFTWARE PRODUCT',
      desc: 'Own your trading interface. We license high-speed cross-platform WebTraders and native iOS/Android apps with TradingView charting, depth of market (DOM), and sub-10ms order routing, customized under your logo and domain.',
      route: '/products/web-trader',
      btnText: 'Get White-Label Terminal',
      icon: BarChart2
    },
    {
      title: 'Social Copy Trading & PAMM / MAM Software Engine',
      subtitle: 'ENTERPRISE ASSET ENGINE',
      desc: 'Plug-and-play investment software for brokers and asset managers. Instant server-side trade replication across thousands of follower accounts with automated high-watermark performance fee settlement.',
      route: '/products/pamm-mam',
      btnText: 'License Copy Trading Engine',
      icon: Cpu
    },
    {
      title: 'Custom AI Automation & Document Intelligence Systems',
      subtitle: 'CUSTOM AI PROJECT DELIVERABLE',
      desc: 'We engineer custom AI software projects tailored to your firm. Includes automated financial document extraction pipelines, compliance audit bots, and 24/7 intelligent customer operations assistants.',
      route: '/services',
      btnText: 'Commission AI Project',
      icon: Brain
    },
    {
      title: 'FIX 4.4 Engine & Crypto Gateway Software',
      subtitle: 'CORE FINANCIAL INFRASTRUCTURE',
      desc: 'Enterprise order routing and digital asset payment software. Connect directly to 150+ Tier-1 LPs via ultra-low latency FIX protocols paired with automated, non-custodial crypto deposit and withdrawal gateways.',
      route: '/api-integrations',
      btnText: 'Get Infrastructure Suite',
      icon: Blocks
    }
  ];

  return (
    <section className="bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 py-16 sm:py-24 font-sans border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ── HEADER & METRICS SUMMARY (Sleek & Quick to scan) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1b3995]/10 text-[#1b3995] dark:text-[#77bd7b] border border-[#1b3995]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRODUCTION-READY PRODUCTS & ARCHITECTURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Software Products &amp; Enterprise Solutions We Deliver
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Buy production-ready software platforms or commission custom end-to-end engineering projects — delivered with full branding, private cloud deployment, and optional source-code ownership.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
            <div>
              <div className="text-2xl font-black text-slate-950 dark:text-white">14+</div>
              <div className="text-[11px] text-slate-500 font-medium">Modular Systems</div>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
            <div>
              <div className="text-2xl font-black text-slate-950 dark:text-white">150+</div>
              <div className="text-[11px] text-slate-500 font-medium">Connected LPs</div>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
            <div>
              <div className="text-2xl font-black text-[#1b3995] dark:text-[#77bd7b]">99.99%</div>
              <div className="text-[11px] text-slate-500 font-medium">Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* ── 6 MODULAR PRODUCT CARDS (Clean Sleek Grid without giant obstructive mockup) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modularEngines.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                onClick={() => navigate(mod.route)}
                className="p-6 bg-slate-50/70 dark:bg-[#0B111B] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl hover:border-[#1b3995]/50 dark:hover:border-[#1b3995]/60 hover:shadow-xl hover:shadow-[#1b3995]/5 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1b3995] to-[#204464] flex items-center justify-center text-white shadow-md shadow-[#1b3995]/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700">
                      {mod.subtitle}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white group-hover:text-[#1b3995] dark:group-hover:text-[#77bd7b] transition-colors leading-snug">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1b3995] dark:text-[#77bd7b] group-hover:underline">
                    {mod.btnText}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-200/60 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-[#1b3995] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
