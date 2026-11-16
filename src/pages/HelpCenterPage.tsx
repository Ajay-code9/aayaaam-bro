import React, { useState } from 'react';
import { Search, BookOpen, Server, ShieldCheck, Cpu, Headphones, ArrowRight, HelpCircle, FileText, CheckCircle2, ChevronDown } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const HelpCenterPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const categories = [
    {
      title: "Broker CRM & Portal Setup",
      desc: "Client onboarding, Sumsub KYC configuration, PSP gateway links, and IB tree management.",
      icon: BookOpen,
      count: "18 Articles"
    },
    {
      title: "FIX Bridge & Liquidity Routing",
      desc: "Sub-millisecond FIX 4.4 session setup, SmartOrder routing rules, and LP cross-connects.",
      icon: Server,
      count: "14 Articles"
    },
    {
      title: "MT5 & Server Plugins",
      desc: "C++ server plugin hot-loading, virtual dealer configuration, and margin protection rules.",
      icon: Cpu,
      count: "12 Articles"
    },
    {
      title: "Security & Infrastructure Compliance",
      desc: "AES-256 database vault isolation, staff RBAC permissions, and SOC alert monitoring.",
      icon: ShieldCheck,
      count: "10 Articles"
    }
  ];

  const popularArticles = [
    { title: "How to connect Sumsub KYC API to White-Label Client Portal", cat: "CRM Setup", time: "4 min read" },
    { title: "Configuring FIX 4.4 Session Parameters for LMAX & Match-Prime", cat: "FIX Bridge", time: "6 min read" },
    { title: "Deploying C++ Trade Server Plugins without MT5 Server Restart", cat: "MT5 Plugins", time: "5 min read" },
    { title: "Enforcing Zero-Trust IP Allowlisting & 2FA for Staff Admin Portals", cat: "Security", time: "3 min read" },
    { title: "Setting Up Multi-Tier IB Commission Schedules & Automated Rebates", cat: "IB Portal", time: "7 min read" }
  ];

  const faqs = [
    {
      q: "How fast can our team deploy the AyaamX Turnkey SaaS Stack?",
      a: "Standard turnkey deployments (White-Label CRM, WebTrader, Mobile Apps, and FIX Bridge) take 24 to 48 hours. Custom C++ MT5 server plugins and bespoke API bridges typically deploy within 3 to 5 business days."
    },
    {
      q: "What technical support channels are included in our SLA?",
      a: "Enterprise clients receive direct 24/7/365 access to senior MetaTrader, FIX bridge, and CRM engineers via dedicated VIP Slack channels, direct phone hotlines, and urgent portal tickets under a guaranteed sub-15 minute response SLA."
    },
    {
      q: "Do you offer full source code ownership for custom developments?",
      a: "Yes. For custom enterprise engineering projects, complete source code ownership and full intellectual property (IP) rights are transferred to your firm upon project completion."
    },
    {
      q: "How does AyaamX ensure continuous high availability during market volatility?",
      a: "Our infrastructure is co-located inside Equinix NY4, LD4, and TY3 financial datacenters with active-active server redundancy and automatic sub-second failover nodes, guaranteeing 99.999% uptime."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#090D14] text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-300 min-h-screen">
      
      {/* 1. HERO SEARCH SECTION */}
      <section className="relative py-16 sm:py-24 bg-white dark:bg-[#0E1420] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>OPERATOR KNOWLEDGEBASE & SUPPORT CENTER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How Can We Help Your Brokerage?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto">
            Search 50+ technical guides, API documentation, MT5 plugin manuals, and CRM administration workflows.
          </p>

          {/* Search Input Bar */}
          <div className="relative max-w-2xl mx-auto pt-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search guides (e.g. Sumsub KYC, FIX 4.4, MT5 plugin, IB rebates)..."
              className="w-full px-5 py-4 pl-12 bg-slate-50 dark:bg-[#141C2B] border border-slate-200 dark:border-slate-700 rounded-2xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-sm"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* 2. KNOWLEDGEBASE CATEGORIES GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Knowledgebase Categories
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Select a category to browse step-by-step technical guides and documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white dark:bg-[#141C2B] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 hover:border-emerald-500/50 transition-all group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/20 group-hover:scale-105 transition-transform">
                <cat.icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                  <span>{cat.title}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {cat.desc}
                </p>
              </div>
              <div className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                {cat.count}
              </div>
            </div>
          ))}
        </div>

        {/* Popular Operator Articles */}
        <div className="bg-white dark:bg-[#141C2B] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-500" />
              <span>Popular Technical Guides</span>
            </h3>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">50+ Total Guides</span>
          </div>

          <div className="space-y-3">
            {popularArticles.map((art, aIdx) => (
              <div key={aIdx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#0E1420] border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between hover:border-emerald-500/50 transition-all cursor-pointer group">
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {art.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">{art.cat}</span>
                    <span>{art.time}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Technical Questions
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Clear answers to deployment and integration queries.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div key={fIdx} className="rounded-xl bg-white dark:bg-[#141C2B] border border-slate-200 dark:border-slate-800 overflow-hidden">
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
        </div>

      </section>

      {/* CTA SECTION */}
      <CTASection variant="light" onOpenAccount={onOpenAccount} />

    </div>
  );
};

