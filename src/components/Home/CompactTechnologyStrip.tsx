import React from 'react';
import { Cpu, Database, Server, Shield, Globe, Code, Layers, Cloud } from 'lucide-react';

export const CompactTechnologyStrip: React.FC = () => {
  const stackCategories = [
    {
      category: 'Languages & Core Runtimes',
      items: ['TypeScript', 'C++', 'Python', 'Go', 'Node.js', 'Rust']
    },
    {
      category: 'Frontend & Cross-Platform',
      items: ['React 19', 'Next.js 15', 'React Native', 'Flutter', 'Tailwind CSS']
    },
    {
      category: 'Financial Protocols & Data',
      items: ['FIX 4.4 Engine', 'WebSockets', 'TradingView', 'MT5 Gateway', 'Redis Streams']
    },
    {
      category: 'Databases & Infrastructure',
      items: ['PostgreSQL', 'TimescaleDB', 'Docker', 'Kubernetes', 'AWS VPC / GCP']
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#438780] dark:text-[#77bd7b]">
              ENGINEERING STACK
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mt-1">
              Production-Grade Enterprise Architecture
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Single unified, high-performance technology stack engineered for sub-millisecond throughput, zero memory leaks, and resilient cloud autoscaling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stackCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50/70 dark:bg-[#0B111B] border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-2">
                {cat.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
