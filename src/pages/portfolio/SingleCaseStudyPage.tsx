import React from 'react';
import { useRouter } from '../../router';
import { caseStudies } from '../../data/aayaamx/portfolio';
import { caseStudyExtendedDetails } from '../../data/aayaamx/caseStudyDetails';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles, Server, Code2 } from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface SingleCaseStudyPageProps {
  slug: string;
  onOpenAccount: () => void;
}

export const SingleCaseStudyPage: React.FC<SingleCaseStudyPageProps> = ({ slug, onOpenAccount }) => {
  const { navigate } = useRouter();

  const study = caseStudies.find(c => c.slug === slug) || caseStudies[0];
  const detail = caseStudyExtendedDetails[study.slug as keyof typeof caseStudyExtendedDetails] || caseStudyExtendedDetails['succeed-capital-fx'];

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

  const heroImage = imageMap[study.slug] || '/case-studies/succeed-capital-fx-overview.webp';

  return (
    <div className="bg-white dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
      
      {/* 1. HERO: Project Name + Strong Screenshot + Industry */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#0B111B] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <button
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#1b3995] dark:hover:text-[#77bd7b] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </button>

          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1b3995]/10 text-[#1b3995] dark:text-[#77bd7b] border border-[#1b3995]/20">
              <span>{study.category} CASE STUDY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
              {study.name}
            </h1>

            {/* 2. OVERVIEW: 2-3 lines explaining what was built */}
            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {study.summary}
            </p>
          </div>

          {/* Main Showcase Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-950 max-h-[500px]">
            <img
              src={heroImage}
              alt={study.name}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* 3 & 4. CHALLENGE & SOLUTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Challenge */}
          <div className="p-8 rounded-2xl bg-rose-50/50 dark:bg-rose-950/10 border border-rose-200/80 dark:border-rose-900/30 space-y-4">
            <span className="text-xs font-bold font-mono tracking-widest text-rose-600 dark:text-rose-400 uppercase">
              01. The Challenge
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
              Operational Friction &amp; Architectural Limitations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {detail.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-2xl bg-[#438780]/10 dark:bg-[#438780]/10 border border-[#438780]/30 space-y-4">
            <span className="text-xs font-bold font-mono tracking-widest text-[#1b3995] dark:text-[#77bd7b] uppercase">
              02. The AyaamX Engineering Solution
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
              Modular, Scalable &amp; High-Throughput Delivery
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {detail.solution}
            </p>
          </div>

        </div>
      </section>

      {/* 5. WHAT WE BUILT: Show Modules */}
      <section className="py-16 bg-slate-50 dark:bg-[#0B111B] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#438780] dark:text-[#77bd7b]">
              03. Architecture &amp; Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              What We Built &amp; Deployed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.architectureDetails.map(([title, desc], idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white dark:bg-[#070A0F] border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1b3995]/10 text-[#1b3995] dark:text-[#77bd7b] flex items-center justify-center font-bold font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-950 dark:text-white">{title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7 & 8. TECH STACK & KEY FEATURES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Tech Stack */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#438780] dark:text-[#77bd7b]">
              04. Technology
            </span>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              Engineering Stack Tags
            </h3>
            <p className="text-xs text-slate-500">
              Single-tenant deployment with dedicated repositories and cloud containers.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {detail.technicalStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#438780] dark:text-[#77bd7b]">
              05. Key Capabilities
            </span>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              Enterprise Features &amp; Integrations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {detail.keyCapabilities.map(([cap, capDesc], cIdx) => (
                <div key={cIdx} className="space-y-1.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#77bd7b] shrink-0" />
                    <span>{cap}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-6">{capDesc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 9. RESULTS: Real, Measurable Outcomes */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1b3995]/10 via-[#204464]/10 to-[#438780]/10 border border-[#1b3995]/30 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1b3995] dark:text-[#77bd7b]">
              06. Production Outcomes
            </span>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              Measured &amp; Verified Results
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
            {detail.impactMetrics.map(([metricLabel, metricVal], mIdx) => (
              <div key={mIdx} className="p-4 rounded-xl bg-white dark:bg-[#070A0F] border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#1b3995] dark:text-[#77bd7b]">
                  {metricVal}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  {metricLabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 11. CTA: Building something similar? Discuss Your Project */}
      <CTASection
        title="Building Something Similar? Let's Engineer It."
        subtitle={`Discuss your custom ${study.category} platform or enterprise digital product with our senior systems engineering team.`}
        onOpenAccount={onOpenAccount}
      />

    </div>
  );
};
