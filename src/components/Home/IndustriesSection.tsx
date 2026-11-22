import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from '../../router';

interface IndustryItem {
  id: string;
  pillLabel: string;
  cardTitle: string;
  category: string;
  description: string;
  path: string;
  image: string;
  highlights: string[];
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: 'fintech',
    pillLabel: 'FinTech & Capital Markets',
    cardTitle: 'Trading & Capital Markets',
    category: 'Institutional Finance',
    description: 'We engineer ultra-low latency execution engines, multi-tier IB partner portals, FIX protocol bridges, and institutional liquidity aggregators designed for zero execution slippage.',
    path: '/solutions/fintech',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    highlights: ['Sub-10ms Matching Engines', 'MT5 Server API Bridges', 'Multi-Tier Rebate Automation']
  },
  {
    id: 'ai-automation',
    pillLabel: 'AI & Intelligent Systems',
    cardTitle: 'Autonomous AI Workflows',
    category: 'Enterprise Intelligence',
    description: 'Autonomous multi-agent workflows, computer vision OCR extraction, predictive algorithmic risk models, and enterprise LLM pipelines deployed on private VPC infrastructure.',
    path: '/solutions/ai-business',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    highlights: ['Autonomous Agent Pipelines', 'Document OCR & KYC Extraction', 'Predictive Risk Models']
  },
  {
    id: 'saas-enterprise',
    pillLabel: 'SaaS & Enterprise',
    cardTitle: 'Multi-Tenant Platforms',
    category: 'Scalable Cloud Architecture',
    description: 'High-throughput business ERPs, multi-tenant B2B portals, distributed event-driven microservices, and mission-critical cloud backends engineered to scale gracefully under peak load.',
    path: '/solutions/enterprise',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    highlights: ['Multi-Tenant Data Isolation', 'High-Concurrency PostgreSQL', 'Event-Driven Microservices']
  },
  {
    id: 'blockchain-web3',
    pillLabel: 'Blockchain & Web3',
    cardTitle: 'Multi-Chain Infrastructure',
    category: 'Decentralized Systems',
    description: 'Non-custodial crypto payment gateways, automated multi-chain deposits, P2P escrow trading desks, gas-optimized smart contracts, and real-time blockchain indexers.',
    path: '/solutions/blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80',
    highlights: ['Non-Custodial Crypto Gateways', 'Audited Smart Contracts', 'Sub-Second Indexing']
  },
  {
    id: 'prop-trading',
    pillLabel: 'Prop Trading & Brokerages',
    cardTitle: 'Prop Firm & Brokerage Ecosystems',
    category: 'Quantitative Trading',
    description: 'Complete turn-key Prop Trading challenge portals, automated rule evaluation (max drawdown & profit target audits), and integrated client backoffices.',
    path: '/solutions/prop-firm-crm',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&auto=format&fit=crop&q=80',
    highlights: ['Automated Drawdown Evaluation', 'Multi-Asset Trading Portals', 'Real-time Leaderboards']
  },
  {
    id: 'logistics-supply',
    pillLabel: 'Logistics & Dispatch',
    cardTitle: 'Real-Time Dispatch & Logistics',
    category: 'Fleet Operations',
    description: 'Real-time GPS tracking telematics, dynamic route optimization engines, automated warehouse inventory sync, and carrier dispatch orchestration platforms.',
    path: '/solutions/enterprise',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    highlights: ['Live Telematics Tracking', 'Route Optimization Algorithms', 'Automated Dispatch Queues']
  },
  {
    id: 'cybersecurity-compliance',
    pillLabel: 'Cybersecurity & Compliance',
    cardTitle: 'Security & Compliance Gateways',
    category: 'Data Sovereignty',
    description: 'Zero-trust architecture, automated transaction monitoring, AML anti-fraud heuristics, encrypted audit logs, and institutional SOC2/ISO compliance readiness.',
    path: '/security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
    highlights: ['Zero-Trust Security Mesh', 'Automated AML Heuristics', 'Encrypted Single-Tenant Logs']
  },
  {
    id: 'data-analytics',
    pillLabel: 'High-Volume Data Analytics',
    cardTitle: 'Streaming Analytics Engines',
    category: 'Big Data & Telemetry',
    description: 'Streaming WebSocket feeds, TimescaleDB time-series warehousing, distributed Kafka event pipelines, and interactive executive dashboards with sub-second querying.',
    path: '/solutions/websockets-streaming',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    highlights: ['Sub-Second ClickHouse Queries', 'Kafka Distributed Streams', 'Live Executive Dashboards']
  }
];

export const IndustriesSection: React.FC = () => {
  const { navigate } = useRouter();
  const [activeId, setActiveId] = useState<string>('fintech');

  const activeIndex = INDUSTRIES.findIndex((i) => i.id === activeId);
  const activeIndustry = INDUSTRIES[activeIndex] || INDUSTRIES[0];

  // The 2 background cards in the deck
  const nextCard1 = INDUSTRIES[(activeIndex + 1) % INDUSTRIES.length];
  const nextCard2 = INDUSTRIES[(activeIndex + 2) % INDUSTRIES.length];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading + Clean Domain Buttons */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header Text with scroll entrance */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#1b3995] dark:text-[#77bd7b] uppercase block">
                WE SERVE YOUR BUSINESS DOMAIN
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
                Focused on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b3995] via-[#438780] to-[#77bd7b]">
                  What Matters Most
                </span>{' '}
                in <br />
                Your Industry
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-xl">
                We don't build generic cookie-cutter software. Our engineering teams immerse themselves into the exact technical protocols, latency requirements, and compliance standards of your domain.
              </p>
            </motion.div>

            {/* Interactive Domain Filter Buttons */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {INDUSTRIES.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? 'bg-[#1b3995] dark:bg-[#1b3995] text-white border-[#1b3995] shadow-md shadow-[#1b3995]/25 scale-[1.03]'
                        : 'bg-white dark:bg-[#0B111B] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#1b3995]/50 dark:hover:border-[#77bd7b]/50 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span>{item.pillLabel}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: 3D Stacked Deck with Card Swooping In From the Back */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[480px] w-full px-2 sm:px-0">
            
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] h-[440px] sm:h-[480px]">
              
              {/* Stack Card 3 (Farthest Back) */}
              <div 
                className="absolute inset-0 rounded-3xl bg-slate-200/90 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 shadow-md pointer-events-none overflow-hidden"
                style={{
                  transform: 'translate(24px, -16px) sm:translate(44px, -24px) rotate(5deg) scale(0.92)',
                  zIndex: 1,
                  opacity: 0.6
                }}
              >
                <img
                  src={nextCard2.image}
                  alt={nextCard2.cardTitle}
                  className="w-full h-full object-cover filter blur-[2px] opacity-30"
                />
                <div className="absolute top-6 left-6 text-slate-800 dark:text-slate-200 font-bold text-lg">
                  {nextCard2.cardTitle}
                </div>
              </div>

              {/* Stack Card 2 (Middle) */}
              <div 
                className="absolute inset-0 rounded-3xl bg-slate-100 dark:bg-[#111927] border border-slate-300 dark:border-slate-700 shadow-lg pointer-events-none overflow-hidden"
                style={{
                  transform: 'translate(22px, -12px) rotate(3deg) scale(0.95)',
                  zIndex: 2,
                  opacity: 0.85
                }}
              >
                <img
                  src={nextCard1.image}
                  alt={nextCard1.cardTitle}
                  className="w-full h-full object-cover filter blur-[1px] opacity-40"
                />
                <div className="absolute top-6 left-6 text-slate-800 dark:text-slate-200 font-bold text-xl">
                  {nextCard1.cardTitle}
                </div>
              </div>

              {/* Foreground Active Card: Animated from back (swapped from deep deck) */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndustry.id}
                  initial={{
                    x: 60,
                    y: -30,
                    rotate: 8,
                    scale: 0.88,
                    opacity: 0.3,
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1], // Smooth snappy cubic-bezier spring
                    }
                  }}
                  exit={{
                    x: -50,
                    y: 20,
                    rotate: -6,
                    scale: 0.95,
                    opacity: 0,
                    transition: {
                      duration: 0.25,
                      ease: 'easeInOut'
                    }
                  }}
                  className="absolute inset-0 rounded-3xl overflow-hidden bg-[#0a1122] border border-[#1b3995]/50 shadow-2xl shadow-[#1b3995]/30 flex flex-col justify-between p-7 sm:p-9 text-white group will-change-transform"
                  style={{
                    zIndex: 10
                  }}
                >
                  {/* Real High-Tech Image Background with Atmospheric Dark Gradient */}
                  <img
                    src={activeIndustry.image}
                    alt={activeIndustry.cardTitle}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#0b172e]/90 to-[#0c1c38]/70 pointer-events-none" />

                  {/* Top Details (Pill badge cleanly REMOVED per user request) */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                      {activeIndustry.cardTitle}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {activeIndustry.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="pt-2 space-y-1.5">
                      {activeIndustry.highlights.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#77bd7b]" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom View Solutions Button */}
                  <div className="relative z-10 pt-6">
                    <button
                      onClick={() => navigate(activeIndustry.path)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1b3995] via-[#204464] to-[#438780] hover:from-[#204464] hover:to-[#77bd7b] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between gap-3 shadow-lg shadow-[#1b3995]/30 cursor-pointer group/btn transition-all duration-300"
                    >
                      <span>EXPLORE SOLUTIONS</span>
                      <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
