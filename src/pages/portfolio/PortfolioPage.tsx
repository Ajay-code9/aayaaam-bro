import React, { useState } from 'react';
import { useRouter } from '../../router';
import { caseStudies } from '../../data/aayaamx/portfolio';
import { caseStudyExtendedDetails } from '../../data/aayaamx/caseStudyDetails';
import { ArrowRight, CheckCircle2, Sparkles, Filter, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface PortfolioPageProps {
  onOpenAccount: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenAccount }) => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fintech', 'Blockchain', 'Custom Software'];

  const filteredStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  // Fallback image map
  const imageMap: Record<string, string> = {
    'succeed-capital-fx': '/case-studies/succeed-capital-fx-overview.webp',
    'solitaire-markets': '/case-studies/solitaire-markets-concept.webp',
    'blockchain-crypto-payment-gateway': '/case-studies/blockchain-crypto-payment-gateway-concept.webp',
    'smart-contract-payment-application': '/case-studies/smart-contract-payment-application-concept.webp',
    'crypto-exchange-spot-futures-p2p': '/case-studies/crypto-exchange-spot-futures-p2p-concept.webp',
    'bus-booking-admin-management-system': '/case-studies/bus-booking-admin-management-system-concept.webp',
    'resvip-travel-booking': '/case-studies/resvip-fleet.webp',
    'white-label-lms-platform': '/case-studies/white-label-lms-platform-concept.webp',
    'fxregulation': '/case-studies/fxregulation-concept.webp'
  };

  return (
    <div className="bg-white dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
      
      {/* 1. HERO */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#0B111B] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1b3995]/10 text-[#1b3995] dark:text-[#77bd7b] border border-[#1b3995]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCTION ENGINEERING CASE STUDIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
            Engineered by AayaamX. <br />
            <span className="bg-gradient-to-r from-[#1b3995] via-[#204464] to-[#438780] bg-clip-text text-transparent">
              Products Built for Complex Businesses.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Explore our architectural case studies across FinTech, AI systems, blockchain rails, and enterprise platforms. Every project represents full source code delivery, strict security compliance, and proven production outcomes.
          </p>

          {/* Category Filters */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1b3995] text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#1b3995]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY CARDS GRID */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => {
            const detail = caseStudyExtendedDetails[study.slug as keyof typeof caseStudyExtendedDetails];
            const img = imageMap[study.slug] || '/case-studies/succeed-capital-fx-overview.webp';

            return (
              <div
                key={study.slug}
                onClick={() => navigate(`/portfolio/${study.slug}`)}
                className="bg-slate-50/70 dark:bg-[#0B111B] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl overflow-hidden hover:border-[#1b3995]/50 dark:hover:border-[#438780]/60 hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Screenshot Banner */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <img
                      src={img}
                      alt={study.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-black/80 text-[#77bd7b] border border-[#77bd7b]/30 backdrop-blur-md">
                        {study.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#77bd7b] transition-colors">
                        {study.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body: Challenge -> Solution -> Built */}
                  <div className="p-6 space-y-4">
                    {detail?.challenge && (
                      <div>
                        <span className="text-[10px] font-bold tracking-wider uppercase text-rose-500 dark:text-rose-400 block">
                          The Challenge
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {detail.challenge}
                        </p>
                      </div>
                    )}

                    {detail?.solution && (
                      <div>
                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#438780] dark:text-[#77bd7b] block">
                          The Solution
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                          {detail.solution}
                        </p>
                      </div>
                    )}

                    {/* Scope / Modules */}
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 block mb-1.5">
                        What We Built
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {study.scope.slice(0, 4).map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="p-6 pt-0">
                  {detail?.impactMetrics && (
                    <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center mb-4">
                      {detail.impactMetrics.slice(0, 3).map(([label, val], mIdx) => (
                        <div key={mIdx}>
                          <div className="text-sm font-extrabold text-[#1b3995] dark:text-[#77bd7b]">{val}</div>
                          <div className="text-[9px] text-slate-500 truncate">{label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs font-bold text-[#1b3995] dark:text-[#77bd7b] group-hover:underline">
                    <span>Read Architectural Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FINAL PROJECT DISCUSSION CTA */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
