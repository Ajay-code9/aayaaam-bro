import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Zap } from 'lucide-react';

interface CTASectionProps {
  onOpenAccount: () => void;
  title?: string;
  subtitle?: string;
  badge?: string;
  variant?: 'default' | 'institutional' | 'light' | 'dark';
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenAccount,
  title = "Have a Complex Idea? Let's Engineer It.",
  subtitle = "Discuss your architecture, target deployment timelines, and project scope directly with our lead engineering team. Full source code ownership, zero vendor lock-in.",
  badge,
}) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 font-sans bg-white dark:bg-[#070A0F] text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">

      {/* Mesh Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#1b3995]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#438780]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Background Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center space-y-6"
      >

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#1b3995]/10 text-[#1b3995] dark:text-[#77bd7b] border border-[#1b3995]/20">
            <span>{badge}</span>
          </div>
        )}

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-950 dark:text-white">
          {title}
        </h2>

        <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenAccount}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#1b3995] via-[#204464] to-[#438780] hover:opacity-95 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#1b3995]/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust Points */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#77bd7b]" />
            <span>Strict NDA Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#77bd7b]" />
            <span>100% IP &amp; Source Ownership</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#77bd7b]" />
            <span>Dedicated Single-Tenant Deployment</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
