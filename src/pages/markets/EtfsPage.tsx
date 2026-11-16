import React from 'react';
import { Layers, ShieldCheck, CheckCircle, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const EtfsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const etfCategories = [
    { title: "Broad Market Index", count: "1,200+ Funds", desc: "Track S&P 500, Nasdaq-100, Russell 2000, and MSCI World indexes with sub-0.03% expense ratios.", popular: "SPY, QQQ, VTI, IWM" },
    { title: "Thematic & Sector", count: "3,400+ Funds", desc: "Gain targeted exposure to AI, Semiconductors, Clean Energy, Biotechnology, and Cyber Security.", popular: "SMH, BOTZ, TAN, CIBR" },
    { title: "Fixed Income & Bond", count: "2,100+ Funds", desc: "Monthly dividend-yielding Treasuries, Investment-Grade Corporate, Municipal, and High-Yield bond ETFs.", popular: "TLT, BND, LQD, HYG" },
    { title: "Commodity & Real Estate", count: "850+ Funds", desc: "Physical Gold, Silver, Crude Oil, Agricultural baskets, and REIT real estate income funds.", popular: "GLD, SLV, USO, VNQ" }
  ];

  return (
    <div className="bg-white text-slate-900">
      <section className="relative bg-white text-slate-900 py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl text-slate-900 font-sans">
            Digital Asset Indexing &amp; Global ETF Routing Infrastructure
          </h1>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl leading-relaxed font-sans font-medium">
            Empower your brokerage to offer 13,000+ global ETFs, thematic baskets, and digital asset index modules through AyaamX modular routing engines and broker-controlled execution bridges.
          </p>
          <div className="p-4 bg-slate-100 rounded-lg border border-slate-200 text-xs text-slate-600 max-w-3xl">
            <strong className="text-slate-800">Technology Provider Disclosure:</strong> AyaamX provides trading software, indexation modules, and connectivity infrastructure for brokerage operators. AyaamX is a B2B technology vendor, not a retail broker or investment adviser, and does not issue, underwrite, or market financial ETFs to end-retail clients.
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {etfCategories.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md">
                    {item.count}
                  </span>
                  <span className="text-xs font-mono text-slate-500">Popular: {item.popular}</span>
                </div>
                <h3 className="text-2xl font-bold font-serif-heading text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                <button
                  onClick={onOpenAccount}
                  className="pt-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore {item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
