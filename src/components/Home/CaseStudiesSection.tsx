import React from 'react';
import { useRouter } from '../../router';
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, Layers, Cpu, Database } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const { navigate } = useRouter();

  const projects = [
    {
      title: "Succeed Capital FX",
      category: "Trading & Brokerage Ecosystem",
      description: "Full-scale client portal, CRM, MetaTrader 5 gateway, and risk surveillance engine processing $120M+ monthly volume.",
      image: "/case-studies/succeed-capital-fx-overview.webp",
      tags: ["Next.js", "TypeScript", "Node.js", "MT5 API", "Redis"],
      metrics: [
        { label: "Account Setup", val: "< 2 Mins" },
        { label: "Platform Uptime", val: "99.98%" },
        { label: "Monthly Volume", val: "$120M+" }
      ]
    },
    {
      title: "Solitaire Markets",
      category: "Institutional FIX 4.4 Engine",
      description: "Sub-millisecond FIX 4.4 order routing engine, Tier-1 LP aggregation, depth of market, and responsive Web & Mobile terminals.",
      image: "/case-studies/solitaire-markets-concept.webp",
      tags: ["C++ FIX Engine", "WebSockets", "TradingView", "Liquidity Aggregator"],
      metrics: [
        { label: "Order Routing", val: "< 1ms" },
        { label: "Live Ticks", val: "5,000/sec" },
        { label: "Redundancy", val: "100% Failover" }
      ]
    },
    {
      title: "Blockchain Crypto Payment Gateway",
      category: "Web3 & Multi-Chain Settlement",
      description: "Multi-network automated deposit address generator, real-time blockchain confirmation tracking, and auto-settlement engine.",
      image: "/case-studies/blockchain-crypto-payment-gateway-concept.webp",
      tags: ["Solidity", "Web3.js", "Multi-Chain", "Automated PSP"],
      metrics: [
        { label: "Supported Chains", val: "8+ Networks" },
        { label: "Settlement Delay", val: "Instant" },
        { label: "Audited Contracts", val: "100% Secure" }
      ]
    },
    {
      title: "ResVip Bus Booking Platform",
      category: "Enterprise Transport SaaS",
      description: "Unified customer reservation suite, fleet scheduling dispatch, and real-time passenger manifest tracking for transport operations.",
      image: "/case-studies/resvip-fleet.webp",
      tags: ["React Native", "Real-Time GPS", "Enterprise ERP", "Payment Mesh"],
      metrics: [
        { label: "Daily Bookings", val: "25,000+" },
        { label: "Dispatch Speed", val: "Real-Time" },
        { label: "Fleet Coverage", val: "Cross-City" }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50/70 dark:bg-[#0c121e] border-b border-slate-200/80 dark:border-[#1E293B] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-[#1E293B] pb-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
              Selected Work &amp; Case Studies
            </h2>
          </div>
          <button
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            <span>View All Engineering Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2x2 Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate('/portfolio')}
              className="group bg-white dark:bg-[#141C2B] rounded-2xl border border-slate-200/80 dark:border-[#1E293B] overflow-hidden hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-900/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans group-hover:text-emerald-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics Strip */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-[#1E293B] grid grid-cols-3 gap-2 text-center">
                {item.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <div className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 font-sans">{m.val}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-sans">{m.label}</div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
