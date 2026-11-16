import React from 'react';
import { BookOpen, Video, FileText, ArrowRight, GraduationCap, Play, Star, Clock, Code, TrendingUp, Layers } from 'lucide-react';

interface AcademySectionProps {
  onOpenAccount: () => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onOpenAccount }) => {
  const courses = [
    {
      title: 'Enterprise Fintech & Broker Architecture: CRM, Portals & Ledgers',
      level: 'Architecture Guide',
      levelColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      lessons: '10 Modules',
      duration: '35 mins',
      desc: 'Complete walkthrough of high-volume digital financial systems: managing account lifecycles, automated verification pipelines, multi-tier rebate trees, and real-time ledger accounting.',
      image: '/capabilities/trading-brokerage.webp',
      icon: TrendingUp
    },
    {
      title: 'AI Automation & Document Intelligence: Building Production Agents',
      level: 'AI Guide',
      levelColor: 'bg-slate-100 text-slate-800 border-slate-200',
      lessons: '12 Modules',
      duration: '40 mins',
      desc: 'Deploy autonomous LLM agents that extract data from unstructured invoices, run automated compliance auditing, and draft responses with human review checkpoints.',
      image: '/capabilities/ai-automation.webp',
      icon: Code
    },
    {
      title: 'Web3 & Multi-Chain Gateways: Non-Custodial Wallets & Settlement',
      level: 'Web3 Guide',
      levelColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      lessons: '9 Modules',
      duration: '30 mins',
      desc: 'Architecting non-custodial wallet infrastructure, automated deposit address generation, on-chain event listeners, and audited smart contract settlements.',
      image: '/capabilities/blockchain-payments.webp',
      icon: Layers
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#F8FAFC] dark:bg-[#000000] border-b border-slate-200/80 dark:border-[#1F1F28] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-[#1E293B] pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-200 dark:border-emerald-500/30">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>AYAAMX TECHNICAL ACADEMY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Engineering Architecture &amp; Delivery Playbooks
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-md font-sans">
            Technical guides, system diagrams, and integration blueprints covering FinTech engines, AI workflow agents, and scalable Web3 deployments.
          </p>
        </div>

        {/* 3 Interactive Visual Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0D0D12] rounded-2xl border border-slate-200/80 dark:border-[#1F1F28] overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Image with Glass Overlay Play Icon */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                    
                    {/* Level Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-md border shadow-2xs ${course.levelColor}`}>
                        {course.level}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border border-slate-700/60 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      <span>{course.duration}</span>
                    </div>

                    {/* Center Hover Play Circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-slate-950 translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                      {course.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Footer Action */}
                <div className="px-6 py-4 bg-slate-50/80 dark:bg-[#090D14]/60 border-t border-slate-100 dark:border-[#1E293B] flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">{course.lessons}</span>
                  <button
                    onClick={onOpenAccount}
                    className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1.5 cursor-pointer group/btn"
                  >
                    <span>Watch Operator Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Link Bar */}
        <div className="pt-2 text-center">
          <button
            onClick={onOpenAccount}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#141C2B] hover:bg-slate-100 dark:hover:bg-[#1B2538] text-slate-900 dark:text-white text-xs font-extrabold rounded-xl border border-slate-300 dark:border-[#1E293B] shadow-xs transition-all cursor-pointer group"
          >
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Explore All Operator Integration Guides & Playbooks</span>
            <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
};
