import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Layers, Code2, Blocks, Cloud, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../../router';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  headline: string;
  description: string;
  highlights: string[];
  image: string;
  path: string;
  icon: React.ElementType;
}

const FIVE_CORE_SERVICES: ServiceItem[] = [
  {
    id: 'ai-intelligent-systems',
    num: '01',
    title: 'AI & Intelligent Systems',
    headline: 'Autonomous AI Agents & Enterprise Intelligence',
    description: 'We architect domain-specialized AI agent pipelines, document extraction engines, real-time predictive analytics, and natural language interfaces integrated directly into your business workflows with zero-data-retention privacy.',
    highlights: ['Autonomous Multi-Agent Pipelines', 'Document Intelligence & Financial OCR', 'Predictive Risk & Forecasting Models'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    path: '/services/ai-automation/ai-agent-development',
    icon: Cpu
  },
  {
    id: 'fintech-trading',
    num: '02',
    title: 'FinTech & Trading',
    headline: 'High-Throughput Trading & Broker Infrastructure',
    description: 'Ultra-low latency FIX 4.4 routing engines, turnkey broker CRM client portals, prop trading challenge evaluation modules, and PAMM/MAM social copy trading systems engineered for institutional volume.',
    highlights: ['Sub-10ms Order Execution Gateways', 'White-Label WebTrader & Mobile Terminals', 'Automated Multi-Tier IB Rebate Engine'],
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    path: '/products/forex-crm',
    icon: Layers
  },
  {
    id: 'custom-software',
    num: '03',
    title: 'Custom Software',
    headline: 'Tailored Enterprise Web & Mobile Applications',
    description: 'End-to-end custom digital product engineering. From customer-facing web apps and high-performance cross-platform mobile apps to internal operations ERPs, built from scratch with 100% source code ownership.',
    highlights: ['100% Full Source Code Handover', 'React Native / Flutter 60fps Mobile Apps', 'Dedicated Single-Tenant Architecture'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    path: '/services/software-engineering/custom-software-development',
    icon: Code2
  },
  {
    id: 'blockchain-web3',
    num: '04',
    title: 'Blockchain & Web3',
    headline: 'Non-Custodial Crypto Gateways & Smart Contracts',
    description: 'Automated multi-chain crypto payment deposit generators, real-time transaction confirmation monitors, institutional custody integrations, and audited smart contract protocols.',
    highlights: ['Multi-Chain Automated PSP Gateway', 'Audited Security Smart Contracts', 'P2P Escrow & Digital Asset Wallets'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    path: '/solutions/crypto-gateway',
    icon: Blocks
  },
  {
    id: 'cloud-api-engineering',
    num: '05',
    title: 'Cloud & API Engineering',
    headline: 'Distributed Microservices & Real-Time WebSockets',
    description: 'Mission-critical cloud infrastructure deployed on AWS, GCP, or private bare-metal VPCs. Real-time streaming WebSockets, RESTful API gateways, and automated CI/CD DevOps with 99.99% uptime SLAs.',
    highlights: ['Low-Latency WebSocket Streaming', 'Private VPC & Kubernetes DevOps', '99.99% Enterprise Uptime SLA'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    path: '/api-integrations',
    icon: Cloud
  }
];

export const CustomSoftwareServicesSection: React.FC = () => {
  const { navigate } = useRouter();
  const [activeTabId, setActiveTabId] = useState<string>('ai-intelligent-systems');

  const activeService = FIVE_CORE_SERVICES.find(s => s.id === activeTabId) || FIVE_CORE_SERVICES[0];
  const ActiveIcon = activeService.icon;

  return (
    <section id="what-we-build" className="py-20 lg:py-24 bg-slate-50/70 dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header with dynamic upward text reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            What We Build
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            AI &amp; Intelligent Systems · FinTech &amp; Trading · Custom Software · Blockchain &amp; Web3 · Cloud &amp; API Engineering
          </p>
        </motion.div>

        {/* Master-Detail Interactive 5-Service Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch"
        >
          
          {/* Left Column: 5 Clean Vertical Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2">
            {FIVE_CORE_SERVICES.map((item) => {
              const isActive = item.id === activeTabId;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTabId(item.id)}
                  onMouseEnter={() => setActiveTabId(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 sm:py-3 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? 'bg-[#1b3995] text-white font-bold shadow-md shadow-[#1b3995]/20 border-transparent'
                      : 'bg-white dark:bg-[#0B111B] text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-[#438780]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className={`text-[9.5px] font-mono tracking-wider block font-bold leading-none mb-0.5 ${isActive ? 'text-[#77bd7b]' : 'text-slate-400'}`}>
                        CAPABILITY {item.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold leading-snug">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className={`w-3.5 h-3.5 transition-transform shrink-0 ${
                    isActive ? 'text-white translate-x-0.5' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Panel: Active Capability Showcase with Real UI Preview */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0B111B] border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-lg transition-all duration-300">
            {/* Top Showcase Image - Compact */}
            <div className="w-full h-40 sm:h-44 md:h-48 overflow-hidden relative bg-slate-900">
              <img
                src={activeService.image}
                alt={activeService.headline}
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#1b3995]/90 text-white border border-[#438780]/40 backdrop-blur-md">
                  {activeService.title}
                </span>
              </div>
            </div>

            {/* Bottom Content Area - Compact */}
            <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-snug">
                  {activeService.headline}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {activeService.description}
                </p>

                {/* Capability Highlights */}
                <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {activeService.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#77bd7b] flex-shrink-0" />
                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => navigate(activeService.path)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b3995] dark:text-[#77bd7b] hover:underline group cursor-pointer"
                >
                  <span>Explore Architecture &amp; Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
