import React from 'react';
import { motion } from 'motion/react';
import { Headphones, Lightbulb, Target, Compass, Code, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';

interface EngineeringWorkflowSectionProps {
  onOpenAccount: () => void;
}

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Architecture Consultation',
    desc: 'Deep-dive feasibility audit, tech stack evaluation, and NDA signoff.',
    icon: Headphones
  },
  {
    step: '02',
    title: 'Ideation & Discovery',
    desc: 'Translating business logic into system workflows and edge-case maps.',
    icon: Lightbulb
  },
  {
    step: '03',
    title: 'System Strategy',
    desc: 'Database schemas, API endpoints, microservices, and VPC topology design.',
    icon: Target
  },
  {
    step: '04',
    title: 'UI/UX Engineering',
    desc: 'Interactive Figma design systems, dark/light token palettes, and user flows.',
    icon: Compass
  },
  {
    step: '05',
    title: 'Agile Engineering',
    desc: 'Clean modular code in C++, Go, TypeScript, React, and automated CI/CD.',
    icon: Code
  },
  {
    step: '06',
    title: 'Stress & Security Testing',
    desc: 'Pen-testing, automated regression suites, and latency throughput audits.',
    icon: ShieldCheck
  },
  {
    step: '07',
    title: 'Deployment & Handover',
    desc: 'Private VPC rollout, 100% full source-code handover, and 24/7 SLA monitoring.',
    icon: Wrench
  }
];

export const EngineeringWorkflowSection: React.FC<EngineeringWorkflowSectionProps> = ({ onOpenAccount }) => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50 dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle Ambient City Skyline / Grid Silhouette Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_0.8px,transparent_0.8px)] dark:bg-[radial-gradient(#1e293b_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Top Two-Column Header matching the user screenshot layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Title */}
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]">
              The AyaamX Way of Engineering Your Software<span className="text-[#77bd7b]">.</span>
            </h2>
          </div>

          {/* Right Narrative & Interactive CTA Box */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Our seasoned systems engineers and architects cover every phase of the digital engineering lifecycle. We follow rigorous institutional best practices, isolated CI/CD pipelines, and structured agile sprints to eliminate delivery risk and reduce ongoing operational overhead.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Have An Architecture To Discuss?
              </span>

              <button
                onClick={onOpenAccount}
                className="px-6 py-3 rounded-xl bg-[#1b3995] hover:bg-[#204464] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#1b3995]/20 transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </motion.div>

        {/* Horizontal Connected Timeline Stepper (7 Steps) */}
        <div className="relative pt-6">
          
          {/* Connecting Track Line */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-slate-200 dark:bg-slate-800 -z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4 relative z-10">
            {WORKFLOW_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.07 * idx, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center space-y-3 group"
                >
                  {/* Step Bubble Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#0B111B] border-2 border-slate-200 dark:border-slate-800 group-hover:border-[#1b3995] dark:group-hover:border-[#77bd7b] flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-[#1b3995] dark:group-hover:text-[#77bd7b] group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 shadow-sm relative">
                    <Icon className="w-7 h-7" />
                    <span className="absolute -top-2 -right-2 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {item.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-[#1b3995] dark:group-hover:text-[#77bd7b] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
