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
    shortTag: 'Brokerage Software Suite',
    icon: Database,
    tagline: 'Complete Turnkey Brokerage CRM & Trader Onboarding Portal',
    description: 'We license and deploy a custom-branded client portal and centralized backoffice CRM for your brokerage — uniting automated KYC verification, payment gateway processing, and multi-tier IB hierarchies in one system.',
    deploymentTime: '1 - 3 Days Turnkey Deployment',
    slaMetric: 'Unlimited Accounts & Full Isolation',
    image: '/tab-crm-portal.png',
    highlights: [
      'Clean client portal for instant deposits, account creation & balance history',
      'Unlimited multi-tier Introducing Broker (IB) partner rebate tracking',
      'Automated KYC document upload queue with clear staff review states',
      'Granular team permissions, audit logs, and complete data ownership',
    ],
  },
  {
    id: 'prop-trading',
    name: 'Prop Firm Evaluation Engine',
    shortTag: 'Prop Firm Suite',
    icon: ShieldCheck,
    tagline: 'Automated Prop Firm Challenge & Real-Time Risk Suite',
    description: 'Deploy our battle-tested prop firm evaluation platform. Automate challenge tier onboarding, live equity trailing drawdown surveillance, automated breach lockouts, and instant profit split approvals.',
    deploymentTime: 'Pre-Built Turnkey Suite',
    slaMetric: 'Sub-Millisecond Breach Detection',
    image: '/tab-prop-firm.png',
    highlights: [
      'Automated daily equity snapshot & trailing drawdown breach detection',
      'Customizable 1-Step, 2-Step, or Instant Funding evaluation rules',
      'Automated breach account locking and real-time email notification triggers',
      'Integrated profit-split calculator and automated payout approval queue',
    ],
  },
  {
    id: 'trading-terminals',
    name: 'WebTrader & Mobile Apps',
    shortTag: 'Trading Terminal Suite',
    icon: Cpu,
    tagline: 'Custom Branded WebTrader & Native iOS / Android Trading Apps',
    description: 'License a cross-platform trading terminal branded completely under your firm. Features native TradingView charting, Depth of Market (DOM), one-click execution, and sub-10ms direct order routing.',
    deploymentTime: 'White-Label Under Your Brand',
    slaMetric: 'Sub-10ms Order Execution',
    image: '/tab-web-mobile.png',
    highlights: [
      'Cross-platform Web-first terminal with full TradingView technical indicator suite',
      'Native iOS & Android mobile trading apps ready for App Store and Google Play',
      'Level II Market Depth (DOM) & advanced algorithmic order types',
      'Multi-chart layouts with custom color palette and your company logo',
    ],
  },
  {
    id: 'copy-pamm',
    name: 'Copy Trading & PAMM / MAM',
    shortTag: 'Social & Asset Management',
    icon: Users,
    tagline: 'Institutional Social Copy Trading & PAMM / MAM Allocation Engine',
    description: 'Expand your brokerage offering with our high-speed social trading and investment engine. Replicate master trades across thousands of follower accounts in sub-milliseconds with automated high-watermark fee splits.',
    deploymentTime: 'Instant Server-Side Hook',
    slaMetric: '< 1ms Copy Latency & 0 Slippage',
    image: '/tab-copy-pamm.png',
    highlights: [
      'Sub-millisecond trade replication with zero slippage or execution lag',
      'Flexible allocation modes: Equity Ratio, Balance Ratio, and Lot Multiplier',
      'PAMM / MAM automated high-watermark performance fee calculation engine',
      'Transparent investor leaderboards with verified historical performance stats',
    ],
  },
  {
    id: 'ai-automation',
    name: 'AI Document & Workflow Agents',
    shortTag: 'Enterprise AI Suite',
    icon: Brain,
    tagline: 'Enterprise AI Agents for Document Processing & Workflow Automation',
    description: 'We build and integrate private domain AI agents directly into your backoffice. Automatically extract data from invoices and statements, pre-screen compliance documents, and resolve client inquiries with full audit logs.',
    deploymentTime: 'Private Cloud Deployment',
    slaMetric: 'Zero Public Model Training',
    image: '/tab-ai-agents.png',
    highlights: [
      'Extract structured data from unstructured invoices, PDFs, and customer requests',
      'Autonomous customer support and operations assistant with source citations',
      'Automated compliance checks and exception routing to staff specialists',
      'Full data privacy with zero third-party model training on your company data',
    ],
  },
  {
    id: 'fix-blockchain',
    name: 'FIX Bridge & Crypto Gateways',
    shortTag: 'Liquidity & Crypto Suite',
    icon: Blocks,
    tagline: 'Sub-Millisecond FIX 4.4 Bridge & Non-Custodial Crypto Gateway',
    description: 'Connect your platform directly to 150+ Tier-1 liquidity providers via ultra-low latency FIX 4.4/5.0 protocols. Comes pre-integrated with automated non-custodial crypto payment gateways supporting 8+ major blockchains.',
    deploymentTime: 'Equinix NY4 / LD4 Cross-Connect',
    slaMetric: '150+ LPs & 8+ Chains',
    image: '/tab-fix-bridge.png',
    highlights: [
      'Standardized FIX 4.4 / 5.0 protocol bridge connecting 150+ Tier-1 LPs',
      'MetaTrader 5 server-side API hooks for custom EA execution & account sync',
      'Automated non-custodial crypto gateway with instant deposit auto-crediting',
      'SmartRouting order aggregation engine for tightest bid-ask spreads',
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
            Turnkey Software Platforms &amp; Modular Engines
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
            Select a software suite below to inspect turnkey capabilities, architecture specifications, and enterprise deployment options for your brand.
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
