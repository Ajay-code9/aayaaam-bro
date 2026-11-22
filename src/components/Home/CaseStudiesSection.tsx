import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from '../../router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface CaseStudyCard {
  slug: string;
  name: string;
  category: string;
  stage: string;
  metric: string;
  image: string;
  comingSoon?: boolean;
}

const CASE_STUDY_CARDS: CaseStudyCard[] = [
  {
    slug: 'succeed-capital-fx',
    name: 'Succeed Capital FX',
    category: 'Finance',
    stage: 'Enterprise',
    metric: '$120M+ monthly volume on platform',
    image: '/case-studies/succeed-capital-fx-overview.webp'
  },
  {
    slug: 'solitaire-markets',
    name: 'Solitaire Markets',
    category: 'FinTech',
    stage: 'Institutional',
    metric: '< 8ms sub-millisecond FIX 4.4 routing',
    image: '/case-studies/solitaire-markets-concept.webp'
  },
  {
    slug: 'blockchain-crypto-payment-gateway',
    name: 'Blockchain Payment Gateway',
    category: 'Web3 & PSP',
    stage: 'Multi-Chain',
    metric: 'Instant non-custodial crypto settlement',
    image: '/case-studies/blockchain-crypto-payment-gateway-concept.webp'
  },
  {
    slug: 'crypto-exchange-spot-futures-p2p',
    name: 'Crypto Exchange — Spot, Futures & P2P',
    category: 'Digital Assets',
    stage: 'Turnkey',
    metric: '100% audited multi-mode trading architecture',
    image: '/case-studies/crypto-exchange-spot-futures-p2p-concept.webp'
  },
  {
    slug: 'bus-booking-admin-management-system',
    name: 'ResVIP Mobility Platform',
    category: 'SaaS / ERP',
    stage: 'Operations',
    metric: '25,000+ daily passenger bookings processed',
    image: '/case-studies/resvip-fleet.webp'
  }
];

export const CaseStudiesSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section id="case-studies" className="py-20 lg:py-24 bg-white dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header: Polished Institutional Showcase Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
            Engineered <span className="text-slate-500 dark:text-slate-400 font-extrabold">for resilience at scale.</span>
          </h2>
        </motion.div>

        {/* 6-Card Asymmetric Showcase Grid (1 Feature Context Card + 5 Product Showcase Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Context Anchor Card */}
          <motion.div 
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-50/80 dark:bg-[#0B111B] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden group"
          >
            <div className="space-y-5 relative z-10">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white leading-snug">
                Software built for businesses that can't afford errors.
              </h3>

              {/* Simple Clean Badges */}
              <div className="flex flex-wrap gap-2">
                {['FinTech & Trading', 'AI Platforms', 'Web3 & Crypto', 'Cloud Apps'].map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-2xs"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Whether you're handling real client funds, thousands of live orders per second, or private customer data — normal software isn't enough. We build fast, reliable, and secure platforms designed to work without glitches.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => navigate('/portfolio')}
                className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#1b3995] dark:hover:border-[#77bd7b] bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xs group"
              >
                <span>View our work</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Cards 2 to 6: 5 Real Product Case Studies with Staggered Scroll-Up */}
          {CASE_STUDY_CARDS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: 0.08 * (idx + 1), ease: [0.16, 1, 0.3, 1] }}
              onClick={() => navigate(`/portfolio/${item.slug}`)}
              className="bg-slate-50/70 dark:bg-[#0B111B] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl overflow-hidden hover:border-[#1b3995]/50 dark:hover:border-[#438780]/60 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Screenshot Frame */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800/80">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {item.comingSoon && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-white border border-white/20 backdrop-blur-md">
                      COMING SOON
                    </span>
                  </div>
                )}
              </div>

              {/* Card Meta & Typography */}
              <div className="p-6 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                    {item.stage}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-[#1b3995] dark:group-hover:text-[#77bd7b] transition-colors leading-snug">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {item.metric}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Centered Link: 'View all case studies' */}
        <div className="text-center pt-4">
          <button
            onClick={() => navigate('/portfolio')}
            className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200 hover:text-[#1b3995] dark:hover:text-[#77bd7b] underline underline-offset-8 transition-colors cursor-pointer uppercase tracking-wider"
          >
            View all case studies
          </button>
        </div>

      </div>
    </section>
  );
};
