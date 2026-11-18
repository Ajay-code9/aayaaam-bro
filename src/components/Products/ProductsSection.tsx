import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Users,
  Database,
  Brain,
  Blocks,
  LineChart,
  Sparkles
} from 'lucide-react';

interface ProductsSectionProps {
  onOpenAccount: () => void;
}

interface B2BModuleTab {
  id: string;
  name: string;
  shortTag: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  deploymentTime: string;
  slaMetric: string;
  image: string;
  highlights: string[];
}

const B2B_MODULE_TABS: B2BModuleTab[] = [
  {
    id: 'forex-crm',
    name: 'Broker CRM & Client Portal',
    shortTag: 'FLAGSHIP COMMERCIAL SOFTWARE',
    icon: Database,
    tagline: 'Turnkey Trader Portal & Brokerage Backoffice Suite',
    description: 'We deliver and deploy a fully branded customer portal and operational CRM. Includes self-service trader wallets, multi-currency deposit processing, automated KYC review pipelines, and custom administrative permissions.',
    deploymentTime: '1 - 3 Days Turnkey Delivery',
    slaMetric: 'Zero Per-Trader Platform Fees',
    image: '/tab-crm-portal.png',
    highlights: [
      'Self-service client dashboard with instant multi-currency account creation',
      'Automated KYC onboarding with integrated document verification webhooks',
      'Multi-tier IB affiliate engine with real-time rebate volume calculations',
      'Centralized admin backoffice with granular staff role permissions & logs',
    ],
  },
  {
    id: 'prop-trading',
    name: 'Prop Firm Evaluation Engine',
    shortTag: 'PROPRIETARY TRADING PLATFORM',
    icon: ShieldCheck,
    tagline: 'Automated Funded Challenge & Risk Management Software',
    description: 'A complete, turnkey technology stack engineered specifically for prop trading firms. Automatically configures 1-step, 2-step, or instant challenge tiers, monitors equity drawdowns in real-time, and issues funded trader payouts.',
    deploymentTime: 'Pre-Packaged Turnkey Launch',
    slaMetric: 'Sub-Millisecond Breach Detection',
    image: '/tab-prop-firm.png',
    highlights: [
      'Real-time trailing drawdown surveillance with sub-millisecond breach logic',
      'Customizable evaluation parameters (profit targets, daily loss, max drawdown)',
      'Automated account breach lockout, credential generation, and email alerts',
      'Funded trader performance dashboard with automated profit-split payouts',
    ],
  },
  {
    id: 'trading-terminals',
    name: 'WebTrader & Mobile Apps',
    shortTag: 'FRONT-END PLATFORM LICENSING',
    icon: Cpu,
    tagline: 'White-Label Web Trading Terminal & Native Mobile Apps',
    description: 'License a cross-platform trading terminal branded 100% under your brokerage. Built with native TradingView charting, depth of market (DOM), one-click execution, and native iOS and Android apps ready for app stores.',
    deploymentTime: 'Full Custom Branding Handover',
    slaMetric: 'Sub-10ms Order Execution',
    image: '/tab-web-mobile.png',
    highlights: [
      'Browser-based terminal equipped with 100+ TradingView indicators and drawing tools',
      'Native iOS and Android trading applications deployed under your company developer account',
      'Multi-asset support: FX pairs, crypto, indices, commodities, and equities',
      'Sub-10ms order execution connected to MT4, MT5, cTrader, or custom backends',
    ],
  },
  {
    id: 'copy-pamm',
    name: 'Copy Trading & PAMM / MAM',
    shortTag: 'SOCIAL & INVESTMENT SUITE',
    icon: Users,
    tagline: 'Server-Side Trade Replication & MAM / PAMM Engine',
    description: 'Expand your client acquisition with a turnkey copy trading and asset management platform. Strategy providers broadcast trades while follower accounts mirror positions in sub-milliseconds with zero execution slippage.',
    deploymentTime: 'Server-Side API Hook',
    slaMetric: '< 1ms Execution Latency',
    image: '/tab-copy-pamm.png',
    highlights: [
      'Sub-millisecond trade copying with zero execution lag and zero trade slippage',
      'Configurable allocation models: Equity Ratio, Balance Ratio, and Fixed Lot Multiplier',
      'Automated high-watermark performance fee calculation and monthly profit distribution',
      'Public strategy provider leaderboards with verified historical return statistics',
    ],
  },
  {
    id: 'ai-automation',
    name: 'AI Document & Workflow Agents',
    shortTag: 'CUSTOM ENTERPRISE AI PROJECT',
    icon: Brain,
    tagline: 'Private AI Agents for Backoffice & Operational Automation',
    description: 'We architect and build tailored enterprise AI workflow software. Deploy private domain agents that parse complex financial documents, automate routine compliance screening, and assist support teams while keeping all data private.',
    deploymentTime: 'Custom Architecture Sprint',
    slaMetric: '100% Private Cloud Hosting',
    image: '/tab-ai-agents.png',
    highlights: [
      'Automated structured data extraction from bank statements, invoices, and IDs',
      'Internal support agent trained exclusively on your standard operating procedures',
      'Automated compliance pre-checks with transparent exception routing for staff review',
      'Zero public LLM training — all models and embeddings reside in your dedicated cloud',
    ],
  },
  {
    id: 'fix-blockchain',
    name: 'FIX Bridge & Crypto Gateways',
    shortTag: 'CONNECTIVITY & DIGITAL ASSETS',
    icon: Blocks,
    tagline: 'Institutional FIX 4.4 Bridge & Multi-Chain Crypto Settlement',
    description: 'Engineered for high-volume brokerages requiring ultra-low latency liquidity connectivity. Routes orders directly to 150+ Tier-1 LPs via FIX 4.4/5.0 while automating non-custodial crypto deposits across 10+ major blockchains.',
    deploymentTime: 'Equinix NY4 / LD4 Cross-Connect',
    slaMetric: '150+ LPs & 10+ Chains',
    image: '/tab-fix-bridge.png',
    highlights: [
      'Direct FIX 4.4 / 5.0 protocol bridge connecting to 150+ institutional liquidity providers',
      'Smart order routing (SOR) aggregation ensuring tightest bid-ask execution spreads',
      'Non-custodial crypto payment gateway with automated on-chain deposit confirmation',
      'Pre-built MetaTrader 5 server-side API connectors for real-time balance and trade synchronization',
    ],
  },
];

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenAccount }) => {
  const [activeTabId, setActiveTabId] = useState<string>(B2B_MODULE_TABS[0].id);
  const activeTab = B2B_MODULE_TABS.find(t => t.id === activeTabId) || B2B_MODULE_TABS[0];

  return (
    <section id="products" className="py-14 sm:py-20 bg-white dark:bg-[#000000] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-[#1F1F28] font-sans select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
            Ready-to-Deploy Platforms &amp; Software Engines
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
            Select a platform module below to inspect full technical deliverables, deployment timeframes, and licensing models available for your brand.
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div className="bg-slate-100 dark:bg-[#0D0D12] p-1.5 rounded-2xl border border-slate-200 dark:border-[#1F1F28] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5">
          {B2B_MODULE_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            const IconComp = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`py-3 px-2.5 rounded-xl transition-all flex items-center justify-center gap-2 text-center cursor-pointer font-sans ${
                  isActive
                    ? 'bg-white dark:bg-[#15151D] text-slate-950 dark:text-white border border-slate-300 dark:border-emerald-500/50 shadow-sm'
                    : 'bg-transparent text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#121218]'
                }`}
              >
                <IconComp className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500'}`} />
                <span className={`text-xs tracking-tight truncate ${isActive ? 'font-extrabold text-slate-950 dark:text-white' : 'font-semibold text-slate-700 dark:text-slate-300'}`}>
                  {tab.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Content Showcase Box */}
        <div className="bg-slate-50/80 dark:bg-[#0D0D12] border border-slate-200 dark:border-[#1F1F28] rounded-3xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column (lg:col-span-7): Module Specifications & Features */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Module Header */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    {activeTab.shortTag}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
                    {activeTab.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
                    {activeTab.description}
                  </p>
                </div>

                {/* Metric Badges Row */}
                <div className="grid grid-cols-2 gap-4 bg-white dark:bg-[#141C2B] p-4 rounded-2xl border border-slate-200 dark:border-[#1E293B]">
                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">ESTIMATED DEPLOYMENT</div>
                    <div className="text-sm font-extrabold font-sans text-slate-950 dark:text-white mt-0.5">{activeTab.deploymentTime}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">ENTERPRISE PERFORMANCE</div>
                    <div className="text-sm font-extrabold font-sans text-emerald-700 dark:text-emerald-400 mt-0.5">{activeTab.slaMetric}</div>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5">
                  {activeTab.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 font-medium font-sans">
                      <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={onOpenAccount}
                    className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all text-xs tracking-wider uppercase font-sans cursor-pointer flex items-center gap-2 shadow-sm group"
                  >
                    <span>Request {activeTab.name} Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (lg:col-span-5): Floating 3D Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab.id}
                src={activeTab.image}
                alt={`AyaamX ${activeTab.name} Showcase`}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-full max-h-[380px] object-contain select-none filter drop-shadow-2xl rounded-2xl"
              />
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
