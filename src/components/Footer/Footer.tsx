import React from 'react';
import { HIDE_CLIENT_PORTAL_LOGIN, HIDE_BOOK_DEMO } from '../../config/flags';
import { ShieldCheck, AlertTriangle, ArrowUpRight, Lock, Globe } from 'lucide-react';
import { useRouter } from '../../router';

interface FooterProps {
  onOpenAccount: () => void;
  onLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAccount, onLogin }) => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-slate-100 dark:bg-[#000000] text-slate-600 dark:text-slate-400 font-sans border-t border-slate-200 dark:border-[#1F1F28] text-xs relative overflow-hidden transition-colors duration-300">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 relative z-10">

        {/* Top Header & Brand Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800/70">
          <div className="space-y-1.5 max-w-lg">
            <div className="flex items-center gap-2">
              <div className="relative h-11 sm:h-13 lg:h-14 flex items-center shrink-0">
                <img
                  src="/logo-white.png"
                  alt="AyaamX"
                  className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-0 dark:opacity-100"
                />
                <img
                  src="/logo-black.png"
                  alt="AyaamX"
                  className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-100 dark:opacity-0 absolute inset-0"
                />
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 px-2 py-0.5 rounded-full tracking-wider uppercase">
                Enterprise SaaS
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-normal">
              Intelligent digital engineering, AI automation & turnkey trading technology suites.
            </p>
          </div>

          {/* Quick CTA buttons */}
          {(!HIDE_CLIENT_PORTAL_LOGIN || !HIDE_BOOK_DEMO) && (
            <div className="flex items-center gap-3">
              {!HIDE_CLIENT_PORTAL_LOGIN && (
                <button
                  onClick={onLogin}
                  className="px-4 py-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-xs transition-all cursor-pointer"
                >
                  Client Portal Login
                </button>
              )}
              {!HIDE_BOOK_DEMO && (
                <button
                  onClick={onOpenAccount}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg shadow-sm shadow-emerald-600/20 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  Get Demo <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Normal Spaced Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 border-b border-slate-200 dark:border-slate-800/70">
          {/* Column 1: Engineering Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Software Engineering
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[10px]">
              <li><button onClick={() => navigate('/services/software-engineering/custom-software-development')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Custom Software Dev</button></li>
              <li><button onClick={() => navigate('/services/software-engineering/saas-development')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">SaaS Development</button></li>
              <li><button onClick={() => navigate('/services/software-engineering/web-application-development')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Web Applications</button></li>
              <li><button onClick={() => navigate('/services/software-engineering/mobile-app-development')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Mobile App Engineering</button></li>
              <li><button onClick={() => navigate('/services/software-engineering/mvp-development')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">MVP & Modernization</button></li>
            </ul>
          </div>

          {/* Column 2: AI & Cloud */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              AI & Cloud
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[10px]">
              <li><button onClick={() => navigate('/services/ai-automation/ai-agent-development')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">AI Agent Development</button></li>
              <li><button onClick={() => navigate('/services/ai-automation/generative-ai-solutions')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Generative AI Solutions</button></li>
              <li><button onClick={() => navigate('/services/cloud-infrastructure/cloud-engineering')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Cloud Engineering & DevOps</button></li>
              <li><button onClick={() => navigate('/services/cloud-infrastructure/api-development')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">API & System Integrations</button></li>
              <li><button onClick={() => navigate('/services/ai-automation/business-process-automation')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Workflow Automation</button></li>
            </ul>
          </div>

          {/* Column 3: Fintech & Web3 */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Fintech & Web3
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[10px]">
              <li><button onClick={() => navigate('/products/forex-crm')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Forex & Broker CRM</button></li>
              <li><button onClick={() => navigate('/products/prop-trading-crm')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Prop Trading Platform</button></li>
              <li><button onClick={() => navigate('/solutions/crypto-gateway')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Crypto Payment Gateway</button></li>
              <li><button onClick={() => navigate('/services/blockchain/smart-contract-development')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Smart Contracts & Web3</button></li>
              <li><button onClick={() => navigate('/products/web-trader')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Custom WebTrader</button></li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Industries
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[10px]">
              <li><button onClick={() => navigate('/industries/financial-services')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Financial Services</button></li>
              <li><button onClick={() => navigate('/industries/forex-brokerage')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Forex & Brokerage</button></li>
              <li><button onClick={() => navigate('/industries/prop-trading')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Prop Trading Firms</button></li>
              <li><button onClick={() => navigate('/industries/banking-fintech')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Banking & Fintech</button></li>
              <li><button onClick={() => navigate('/industries/enterprise-businesses')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Enterprise Businesses</button></li>
            </ul>
          </div>

          {/* Column 5: Company & Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              Company
            </h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[10px]">
              <li><button onClick={() => navigate('/company')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">About AayaamX</button></li>
              <li><button onClick={() => navigate('/company#our-story')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Our Story</button></li>
              <li><button onClick={() => navigate('/company#leadership-team')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Leadership & Team</button></li>
              <li><button onClick={() => navigate('/company#careers')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Careers</button></li>
              <li><button onClick={() => navigate('/company#contact')} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left font-normal">Share Project Brief</button></li>
            </ul>
          </div>
        </div>

        {/* B2B Technology & Infrastructure Disclosure Box */}
        <div className="bg-white dark:bg-[#0D0D12] p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-[#1F1F28] space-y-1.5 shadow-xs">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300 font-semibold text-[10px] font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>SOFTWARE ENGINEERING & PRODUCT DEVELOPMENT DISCLOSURE</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-[10px] leading-relaxed font-normal">
            AyaamX is an enterprise software development and product engineering company based in Ahmedabad, India. We design and deliver custom software platforms, fintech infrastructure, AI automation workflows, and scalable cloud applications for businesses worldwide.
          </p>
        </div>

        {/* Clean Corporate Footer Bottom */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-6 font-medium">
            <button onClick={() => navigate('/terms-conditions')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Terms</button>
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Privacy</button>
            <button onClick={() => navigate('/company#contact')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Contact</button>
          </div>

          <div className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
            © 2026 AyaamX Technologies. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
