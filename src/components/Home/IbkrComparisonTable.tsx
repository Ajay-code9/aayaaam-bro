import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface IbkrComparisonTableProps {
  onOpenAccount: () => void;
}

export const IbkrComparisonTable: React.FC<IbkrComparisonTableProps> = ({ onOpenAccount }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'engineering' | 'trading' | 'ai_web3'>('all');

  const comparisonData = [
    {
      category: 'trading',
      feature: 'Trading Technology & Broker CRM',
      note: 'Client portals, MT5 gateways, multi-tier IB rebate engines, and real-time ledger accounting.',
      ayaamx: 'Turnkey Integration (1-3 Days) + Full Code Ownership',
      legacy: 'Rigid monthly licensing fees with zero customization',
      inhouse: '12+ Months High R&D overhead and execution risk',
    },
    {
      category: 'trading',
      feature: 'Prop Firm Evaluation & Breach Engine',
      note: 'Sub-millisecond trailing drawdown tracking, profit targets, and automated funded trader payouts.',
      ayaamx: 'Real-Time Breach Logic & Automated Profit Splits',
      legacy: 'Requires expensive third-party plugin subscriptions',
      inhouse: 'High-latency socket monitoring and breach slip risk',
    },
    {
      category: 'trading',
      feature: 'FIX 4.4 Liquidity & WebSockets Engine',
      note: 'Direct market connectivity, Level 2 depth of market, and live tick streaming.',
      ayaamx: 'Direct Sub-Millisecond Multi-LP Smart Routing',
      legacy: 'High per-million volume surcharges and tick throttling',
      inhouse: 'Fragile FIX session maintenance and failover bugs',
    },
    {
      category: 'ai_web3',
      feature: 'Autonomous AI Workflow Agents',
      note: 'Document parsing, automated compliance checks, and intelligent assistants with human review.',
      ayaamx: 'Custom Domain Models & Reviewable Task Pipelines',
      legacy: 'Generic chatbot wrappers with no enterprise integration',
      inhouse: 'Complex prompt drift and unvalidated hallucinations',
    },
    {
      category: 'ai_web3',
      feature: 'Multi-Chain Crypto Payment Gateway',
      note: 'Automated deposit address generation, on-chain confirmation tracking, and auto-settlement.',
      ayaamx: 'Non-Custodial Architecture with 8+ Chains Support',
      legacy: 'High transactional fees and custody holding delays',
      inhouse: 'Vulnerability to re-entrancy and gas spikes',
    },
    {
      category: 'engineering',
      feature: 'Custom Enterprise Portal Engineering',
      note: 'Web & mobile applications built around your exact business logic and team workflows.',
      ayaamx: 'Tailored UI/UX Systems + Clean Scalable Codebase',
      legacy: 'Off-the-shelf templates requiring manual workarounds',
      inhouse: 'Protracted dev cycles and inconsistent UI components',
    },
    {
      category: 'engineering',
      feature: 'System Integration & Cross-Technology Stack',
      note: 'Connecting existing ERPs, legacy tools, and modern APIs with clear data sovereignty.',
      ayaamx: 'One Connected Architecture from Scope to Launch',
      legacy: 'Siloed data silos that require manual synchronization',
      inhouse: 'Spaghetti microservices with poor documentation',
    },
    {
      category: 'engineering',
      feature: 'Long-Term Support & Operational SLAs',
      note: 'Continuous uptime monitoring, security patching, and proactive performance optimization.',
      ayaamx: '99.99% Uptime SLA + Dedicated Architecture Advisory',
      legacy: 'Slow ticket response queues and outsourced L1 support',
      inhouse: 'Team turnover risking institutional knowledge loss',
    },
  ];

  const filteredData = selectedCategory === 'all' 
    ? comparisonData 
    : comparisonData.filter(item => item.category === selectedCategory);

  return (
    <section className="py-12 sm:py-16 mt-8 sm:mt-0 bg-slate-50/80 dark:bg-[#0E1420] border-b border-slate-200 dark:border-[#1E293B] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight font-sans">
            Why High-Growth Firms Choose AyaamX
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium font-sans">
            Compare AyaamX end-to-end product engineering, trading engines, and custom AI systems against legacy off-the-shelf software and high-risk in-house builds.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-[#141C2B] text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-[#1E293B]'
            }`}
          >
            All Capabilities
          </button>
          <button
            onClick={() => setSelectedCategory('trading')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              selectedCategory === 'trading'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-[#141C2B] text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-[#1E293B]'
            }`}
          >
            Trading & Broker Tech
          </button>
          <button
            onClick={() => setSelectedCategory('ai_web3')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              selectedCategory === 'ai_web3'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-[#141C2B] text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-[#1E293B]'
            }`}
          >
            AI & Web3 Infrastructure
          </button>
          <button
            onClick={() => setSelectedCategory('engineering')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              selectedCategory === 'engineering'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-[#141C2B] text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-[#1E293B]'
            }`}
          >
            Digital Product Engineering
          </button>
        </div>

        {/* Comparison Table */}
        <div className="bg-white dark:bg-[#141C2B] rounded-2xl border border-slate-200 dark:border-[#1E293B] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans text-xs">
              <thead>
                <tr className="bg-slate-100 dark:bg-[#090D14] border-b border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-4 px-5 min-w-[260px]">Capability &amp; Deliverable</th>
                  <th className="py-4 px-5 min-w-[220px] bg-emerald-50 dark:bg-emerald-500/10 text-emerald-900 dark:text-emerald-400 border-x border-emerald-200 dark:border-emerald-500/30 font-extrabold">
                    AyaamX Engineering Standard
                  </th>
                  <th className="py-4 px-5 min-w-[190px] text-slate-600 dark:text-slate-400">Legacy Off-The-Shelf Vendors</th>
                  <th className="py-4 px-5 min-w-[190px] text-slate-600 dark:text-slate-400">Custom In-House Build</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-[#1E293B]">
                {filteredData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-[#1B2538] transition-colors">
                    <td className="py-4 px-5 font-semibold text-slate-900 dark:text-white">
                      <div className="text-sm font-bold">{row.feature}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-1 leading-relaxed">{row.note}</div>
                    </td>
                    <td className="py-4 px-5 bg-emerald-50/60 dark:bg-emerald-500/10 border-x border-emerald-200 dark:border-emerald-500/30 font-extrabold text-emerald-800 dark:text-emerald-300 text-xs leading-relaxed">
                      {row.ayaamx}
                    </td>
                    <td className="py-4 px-5 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{row.legacy}</td>
                    <td className="py-4 px-5 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{row.inhouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Action */}
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-[#0E1420] border-t border-slate-200 dark:border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 dark:text-slate-400 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Full source-code transparency, zero vendor lock-in, and guaranteed 99.99% uptime SLAs.</span>
            </div>
            <button
              onClick={onOpenAccount}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 text-xs uppercase tracking-wider shadow-sm group"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
