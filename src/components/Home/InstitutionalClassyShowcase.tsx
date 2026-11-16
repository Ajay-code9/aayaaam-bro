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
      title: 'AyaamX Forex CRM & Client Operations',
      subtitle: 'Trader Portal & Broker CRM Ecosystem',
      desc: 'Connect trader registration, automated KYC verification queues, multi-currency deposit wallets, and multi-tier introducing broker rebate hierarchies with instant ledger synchronization.',
      route: '/products/forex-crm',
      btnText: 'Explore CRM Suite'
    },
    {
      title: 'Prop Trading Evaluation & Challenge Engine',
      subtitle: 'Real-Time Drawdown & Breach Rules',
      desc: 'Automate multi-phase evaluation challenges, trailing drawdown surveillance, automated account breach lockouts, and verified funded trader profit-split payouts.',
      route: '/products/prop-trading-crm',
      btnText: 'Explore Prop Firm Engine'
    },
    {
      title: 'Branded Web & Mobile Trading Platforms',
      subtitle: 'High-Speed WebTrader, iOS & Android',
      desc: 'Cross-platform trading platforms built with native TradingView charting, depth of market (DOM), one-click execution, and sub-10ms latency under your brand.',
      route: '/products/web-trader',
      btnText: 'Explore Trading Apps'
    },
    {
      title: 'Social Copy Trading & PAMM / MAM Suite',
      subtitle: 'Master-Follower Replication & Asset Management',
      desc: 'Scale social trading with sub-millisecond copier execution, equity/balance proportional modes, and automated high-watermark performance fee distribution.',
      route: '/products/pamm-mam',
      btnText: 'Explore Copy & PAMM'
    },
    {
      title: 'Autonomous AI Workflow & Document Agents',
      subtitle: 'Intelligent Enterprise Process Automation',
      desc: 'Deploy custom AI agents that extract structured data from financial records, automate compliance checking, and prepare draft responses with verified staff review.',
      route: '/services',
      btnText: 'Explore AI Solutions'
    },
    {
      title: 'FIX 4.4 Bridge & Multi-Chain Payment Gateway',
      subtitle: 'Institutional Liquidity & Crypto Settlement',
      desc: 'Direct sub-millisecond FIX protocol session routing to 150+ Tier-1 LPs paired with non-custodial crypto payment gateways supporting 8+ major blockchain networks.',
      route: '/api-integrations',
      btnText: 'Explore FIX & Gateways'
    }
  ];

  return (
    <section className="bg-white dark:bg-[#000000] text-slate-900 dark:text-slate-100 py-16 sm:py-24 font-sans border-b border-slate-200 dark:border-[#1F1F28] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ── 1. FLAGSHIP ECOSYSTEM & INFRASTRUCTURE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.15] font-sans">
              Accelerate Growth With AyaamX Digital &amp; Trading Ecosystems
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium font-sans">
              From broker CRM backoffices and prop firm evaluation engines to custom AI agents, Web3 infrastructure, and resilient enterprise applications — AyaamX builds technology around your exact operational workflows.
            </p>

            {/* B2B Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 pb-3 border-y border-slate-200 dark:border-[#1E293B]">
              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white font-sans">14+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 font-sans">Modular Systems</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white font-sans">150+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 font-sans">Connected LPs</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white font-sans">99.99%</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 font-sans">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-950 dark:text-white font-sans">50+</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 font-sans">Delivered Platforms</div>
              </div>
            </div>

            {/* Action Button & Telemetry */}
            <div className="space-y-3 pt-1">
              <button
                onClick={onOpenAccount}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all text-xs tracking-wider uppercase font-sans cursor-pointer shadow-md flex items-center gap-2 group"
              >
                <span>Explore 14 Modular Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-2">
                <span>SYSTEM SLA: <strong className="text-emerald-600 dark:text-emerald-400 font-bold">99.99%</strong></span>
                <span>·</span>
                <span>FIX BRIDGE: <strong className="text-emerald-600 dark:text-emerald-400 font-bold">ONLINE (&lt;6ms)</strong></span>
                <span>·</span>
                <span>API HOOKS: <strong className="text-emerald-600 dark:text-emerald-400 font-bold">ACTIVE</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column AyaamX Enterprise Workspace Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl group">
              <img
                src="/aayaamx-hero-workspace.webp"
                alt="AyaamX Enterprise Architecture"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500 dark:hidden"
              />
              <img
                src="/aayaamx-hero-workspace-dark.webp"
                alt="AyaamX Enterprise Architecture"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500 hidden dark:block"
              />
            </div>
          </div>

        </div>

        {/* ── 2. REAL WORKSPACE & ENGINEERING ECOSYSTEM MOCKUP ── */}
        <div className="py-6 text-center space-y-4">
          <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-2xl group">
            <img
              src="/aayaamx-engineering-terminal.jpg"
              alt="AyaamX Software Engineering Ecosystem & High-Throughput Terminal"
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500 rounded-2xl"
            />
          </div>
        </div>

        {/* ── 3. AYAAMX MODULAR INFRASTRUCTURE ENGINE (2-COL GRID) ── */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
              Complete Modular Infrastructure Engine
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
              Turnkey software modules designed to launch, operate, and scale modern brokerages, prop trading firms, and intelligent digital enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modularEngines.map((mod, idx) => (
              <div
                key={idx}
                onClick={() => navigate(mod.route)}
                className="space-y-3 p-6 bg-slate-50/70 dark:bg-[#0D0D12] border border-slate-200/80 dark:border-[#1F1F28] border-l-4 border-l-emerald-600 hover:bg-white dark:hover:bg-[#121218] hover:shadow-md transition-all group cursor-pointer rounded-r-2xl flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    {mod.subtitle}
                  </div>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate(mod.route); }}
                    className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <span>{mod.btnText}</span>
                    <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] group-hover:translate-x-1 transition-transform">›</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. TRANSPARENT ENGINEERING & OWNERSHIP MODEL ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 border-t border-slate-100 dark:border-slate-800">
          
          {/* Left Column Graphic */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group">
              <img
                src="/pricing-showcase.png"
                alt="AyaamX Engineering Delivery & Architecture"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900/85 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                  TRANSPARENT DELIVERY
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Institutional Transparency Copy */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
              Clear Engineering. Complete Code Ownership. Zero Lock-In.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium font-sans">
              We build custom digital products and trading platforms around the way your business actually works — with visible milestones, clean source code, and no hidden vendor penalties.
            </p>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans pt-1">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white font-bold block text-xs sm:text-sm">100% Full Intellectual Property &amp; Code Handover</strong>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed mt-0.5">
                    You own the entire codebase, database architecture, and deployment scripts. No monthly hostage fees or proprietary lock-ins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white font-bold block text-xs sm:text-sm">Milestone-Based, Step-by-Step Delivery</strong>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed mt-0.5">
                    We break complex requirements into visible increments: Discover → Architect → Engineer → Launch. You review working software before it goes live.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white font-bold block text-xs sm:text-sm">Long-Term Technical Support &amp; SLA</strong>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed mt-0.5">
                    Post-launch monitoring, security patches, and direct developer advisory to help your systems scale reliably as user traffic expands.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenAccount}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md group"
              >
                <span>GET A PROJECT SCOPE &amp; ESTIMATE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
