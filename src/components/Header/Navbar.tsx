import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter } from '../../router';
import { HIDE_CLIENT_PORTAL_LOGIN, HIDE_BOOK_DEMO } from '../../config/flags';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Send,
  Search,
  ArrowRight,
  Code,
  Brain,
  Blocks,
  LineChart,
  Cloud,
  Layers,
  Wallet,
  Building,
  Compass,
  FileText,
  Sparkles,
  Shield,
  Smartphone,
  Globe,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  onOpenAccount: () => void;
  onLogin: () => void;
  onOpenSearch: () => void;
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAccount,
  onLogin,
  onOpenSearch,
  onOpenInquiry,
}) => {
  const { currentPath, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>('services');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isDarkNavbar = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNav = (path: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      navigate(route);
      setActiveDropdown(null);
      setMobileMenuOpen(false);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const yOffset = -140; // generous offset to account for sticky navbar + subheader
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 150);
      return;
    }
    navigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full ${
      isDarkNavbar
        ? 'bg-[#0d121d]/95 backdrop-blur-md border-b border-slate-800 text-white shadow-md shadow-black/20'
        : 'bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-xs'
    }`}>
      {/* Container - Fixed still height (no shrinking/jumping on scroll) */}
      <div className="w-full max-w-[1536px] mx-auto px-3 sm:px-4 lg:px-5 xl:px-8 flex items-center justify-between h-16 relative">
        <button onClick={() => handleNav('/')} className="flex items-center group shrink-0 text-left cursor-pointer py-1">
          <div className="relative flex items-center h-11 sm:h-12 lg:h-[3.25rem]">
            <img
              src="/logo-black.png"
              alt="AyaamX"
              className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-0 dark:opacity-100 group-hover:scale-[1.02]"
            />
            <img
              src="/logo-white.png"
              alt="AyaamX"
              className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-100 dark:opacity-0 absolute inset-0 group-hover:scale-[1.02]"
            />
          </div>
        </button>

        {/* Centered Navigation Links - AYAAMX ARCHITECTURE */}
        <nav className={`hidden lg:flex items-center justify-center flex-1 mx-1 lg:mx-2 xl:mx-3 gap-1 lg:gap-1.5 xl:gap-2 text-[11px] lg:text-[11.5px] xl:text-xs font-semibold ${
          isDarkNavbar ? 'text-slate-200' : 'text-slate-700'
        }`}>
            {/* 0. Home */}
            <button
              type="button"
              onClick={() => handleNav('/')}
              className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
                currentPath === '/'
                  ? 'text-emerald-500 font-bold bg-emerald-500/10'
                  : isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60' : 'hover:text-emerald-600 hover:bg-slate-100/80'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>Home</span>
            </button>

            {/* 1. Services Dropdown */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('services'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2.5 py-1.5 rounded-lg ${
                  activeDropdown === 'services' || currentPath.startsWith('/services')
                    ? 'text-emerald-500 font-bold bg-emerald-500/10'
                    : isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60' : 'hover:text-emerald-600 hover:bg-slate-100/80'
                }`}
              >
                <span>Services</span>
              </button>
              {activeDropdown === 'services' && (
                <div
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1140px] max-w-[calc(100vw-32px)] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-6 animate-in fade-in zoom-in-95 duration-200 z-50 overflow-hidden ${
                    isDarkNavbar
                      ? 'bg-slate-900 text-white shadow-black/70'
                      : 'bg-white text-slate-900 shadow-slate-900/15'
                  }`}
                >
                  {/* AyaamX Emerald Diamond Caret */}
                  <div className="absolute -top-2 left-[28%] w-4 h-4 rotate-45 bg-emerald-500 border-t border-l border-emerald-500" />

                  {/* 4 Column Layout matching reference screenshot media_1794498004827_118a8b60.jpg */}
                  <div className="grid grid-cols-4 gap-6">
                    {/* Col 1 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Software & Core Dev</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Custom Software Development", path: "/services/software-engineering/custom-software-development", desc: "Tailored web, mobile & distributed backend systems", icon: Code },
                          { title: "SaaS Development", path: "/services/software-engineering/saas-development", desc: "Multi-tenant platforms with high uptime & RLS isolation", icon: Layers },
                          { title: "Web Application Development", path: "/services/software-engineering/web-application-development", desc: "Interactive portals built around business workflows", icon: Globe },
                          { title: "Mobile App Development", path: "/services/software-engineering/mobile-app-development", desc: "High-performance native iOS & Android applications", icon: Smartphone }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Trading & Fintech</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Forex CRM Development", path: "/services/trading-technology/forex-crm-development", desc: "Trader onboarding, verification & account servicing", icon: LineChart },
                          { title: "Broker Backoffice Development", path: "/services/trading-technology/broker-backoffice-development", desc: "Staff operations workspace, multi-tier IB & finance", icon: Building },
                          { title: "Trading Platform Integration", path: "/services/trading-technology/trading-platform-integration", desc: "WebTrader, mobile apps & trading terminal APIs", icon: Smartphone },
                          { title: "FIX API & LP Integration", path: "/services/trading-technology/fix-api-integration", desc: "Institutional execution bridges & latency feeds", icon: Cloud }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 3 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">AI & Blockchain</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "AI Agent Development", path: "/services/ai-automation/ai-agent-development", desc: "Intelligent autonomous agents & reviewable workflows", icon: Brain },
                          { title: "Generative AI Solutions", path: "/services/ai-automation/generative-ai-solutions", desc: "Document processing, draft replies & vector search", icon: Sparkles },
                          { title: "Smart Contract Development", path: "/services/blockchain/smart-contract-development", desc: "Audited token contracts, staking & EVM logic", icon: Blocks },
                          { title: "Digital Wallet Development", path: "/services/blockchain/digital-wallet-development", desc: "Multi-chain deposit tracking & confirmation routing", icon: Wallet }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 4 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Cloud & Architecture</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Cloud Engineering & DevOps", path: "/services/cloud-infrastructure/cloud-engineering", desc: "Dockerized scalable microservices & CI/CD", icon: Cloud },
                          { title: "System Integration & APIs", path: "/services/cloud-infrastructure/api-development", desc: "Robust data flow between existing enterprise tools", icon: Code },
                          { title: "UI/UX Engineering", path: "/services/product-engineering/ui-ux-engineering", desc: "Design systems & component libraries", icon: Layers },
                          { title: "MVP & Modernization", path: "/services/product-engineering/mvp-development", desc: "From concept scoping to production handover", icon: Sparkles }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Solutions Dropdown */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('solutions'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2.5 py-1.5 rounded-lg ${
                  activeDropdown === 'solutions' || currentPath.startsWith('/solutions')
                    ? 'text-emerald-500 font-bold bg-emerald-500/10'
                    : isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60' : 'hover:text-emerald-600 hover:bg-slate-100/80'
                }`}
              >
                <span>Solutions</span>
              </button>
              {activeDropdown === 'solutions' && (
                <div
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1140px] max-w-[calc(100vw-32px)] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-6 animate-in fade-in zoom-in-95 duration-200 z-50 overflow-hidden ${
                    isDarkNavbar
                      ? 'bg-slate-900 text-white shadow-black/70'
                      : 'bg-white text-slate-900 shadow-slate-900/15'
                  }`}
                >
                  {/* AyaamX Emerald Diamond Caret */}
                  <div className="absolute -top-2 left-[39%] w-4 h-4 rotate-45 bg-emerald-500 border-t border-l border-emerald-500" />

                  {/* 4 Column Layout matching reference screenshot */}
                  <div className="grid grid-cols-4 gap-6">
                    {/* Col 1 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Fintech & Payments</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Digital Payments Gateway", path: "/solutions/fintech/digital-payments", desc: "Deposit address creation, network confirms & settlement", icon: Wallet },
                          { title: "Financial Platforms Core", path: "/solutions/fintech/financial-platforms", desc: "Customer accounts, transaction history & audit trails", icon: LineChart },
                          { title: "Financial Automation Engine", path: "/solutions/fintech/financial-automation", desc: "Intake rules, validation pipelines & ledger sync", icon: Shield }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Forex & Brokerage</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Broker Infrastructure", path: "/solutions/forex-brokerage/broker-infrastructure", desc: "Connect client portal, trading server & CRM feeds", icon: Building },
                          { title: "Brokerage CRM Ecosystem", path: "/solutions/forex-brokerage/brokerage-crm-ecosystem", desc: "Applications, verification results & staff queues", icon: LineChart },
                          { title: "IB & Affiliate Management", path: "/solutions/forex-brokerage/ib-and-affiliate-management", desc: "Multi-tier referral trees & automated commission rules", icon: Layers }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 3 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Prop & Blockchain</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Prop Evaluation Platforms", path: "/solutions/prop-trading/evaluation-platforms", desc: "Challenge rules, trader dashboards & drawdown monitor", icon: Shield },
                          { title: "Challenge & Payout Ops", path: "/solutions/prop-trading/payout-management", desc: "Automated progress tracking & funded trader reviews", icon: Compass },
                          { title: "Digital Assets & Wallets", path: "/solutions/blockchain/digital-assets", desc: "Non-custodial wallets, tokenization & smart contracts", icon: Blocks }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 4 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Enterprise & AI</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Enterprise CRM & ERP", path: "/solutions/enterprise/enterprise-crm", desc: "Consolidated team records, approval pipelines & reports", icon: Building },
                          { title: "Workflow Automation Hub", path: "/solutions/enterprise/workflow-automation", desc: "Automate manual tasks, document review & alerts", icon: Code },
                          { title: "AI Business Assistants", path: "/solutions/ai-business/intelligent-assistants", desc: "Extract documents, answer queries from company data", icon: Brain },
                          { title: "AI Knowledge Management", path: "/solutions/ai-business/knowledge-management-systems", desc: "Vector search & reviewable AI draft pipelines", icon: Sparkles }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Industries Dropdown */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('industries'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2.5 py-1.5 rounded-lg ${
                  activeDropdown === 'industries' || currentPath.startsWith('/industries')
                    ? 'text-emerald-500 font-bold bg-emerald-500/10'
                    : isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60' : 'hover:text-emerald-600 hover:bg-slate-100/80'
                }`}
              >
                <span>Industries</span>
              </button>
              {activeDropdown === 'industries' && (
                <div
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1140px] max-w-[calc(100vw-32px)] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-6 animate-in fade-in zoom-in-95 duration-200 z-50 overflow-hidden ${
                    isDarkNavbar
                      ? 'bg-slate-900 text-white shadow-black/70'
                      : 'bg-white text-slate-900 shadow-slate-900/15'
                  }`}
                >
                  {/* AyaamX Emerald Diamond Caret */}
                  <div className="absolute -top-2 left-[50%] w-4 h-4 rotate-45 bg-emerald-500 border-t border-l border-emerald-500" />

                  {/* 4 Columns Grid matching reference screenshot */}
                  <div className="grid grid-cols-4 gap-6">
                    {/* Col 1 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Financial Markets</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Financial Services", path: "/industries/financial-services", desc: "Digital account management & automated finance reviews", icon: Wallet },
                          { title: "Forex & Brokerage", path: "/industries/forex-brokerage", desc: "Connect client portal, trading server & CRM operations", icon: LineChart }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Trading & Banking</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Proprietary Trading Firms", path: "/industries/prop-trading", desc: "Evaluation challenges, risk surveillance & payout queue", icon: Compass },
                          { title: "Banking & Fintech", path: "/industries/banking-fintech", desc: "Core banking integrations, PSP routing & ledgers", icon: Building }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 3 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Web3 & Digital Assets</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Blockchain & Web3", path: "/industries/blockchain-web3", desc: "Smart contracts, decentralized apps & protocol tooling", icon: Blocks },
                          { title: "Digital Asset Businesses", path: "/industries/digital-asset-businesses", desc: "Non-custodial custody, token transfers & liquidity", icon: Wallet }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 4 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Tech Startups & Enterprise</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "SaaS & Tech Startups", path: "/industries/saas-technology-startups", desc: "Multi-tenant platforms, APIs & rapid MVP release", icon: Code },
                          { title: "Enterprise Businesses", path: "/industries/enterprise-businesses", desc: "Modernize legacy records & automated operations", icon: Layers }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Products Dropdown */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('products'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2.5 py-1.5 rounded-lg ${
                  activeDropdown === 'products' || currentPath.startsWith('/products')
                    ? 'text-emerald-500 font-bold bg-emerald-500/10'
                    : isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60' : 'hover:text-emerald-600 hover:bg-slate-100/80'
                }`}
              >
                <span>Products</span>
              </button>
              {activeDropdown === 'products' && (
                <div
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1140px] max-w-[calc(100vw-32px)] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-6 animate-in fade-in zoom-in-95 duration-200 z-50 overflow-hidden ${
                    isDarkNavbar
                      ? 'bg-slate-900 text-white shadow-black/70'
                      : 'bg-white text-slate-900 shadow-slate-900/15'
                  }`}
                >
                  {/* AyaamX Emerald Diamond Caret */}
                  <div className="absolute -top-2 left-[61%] w-4 h-4 rotate-45 bg-emerald-500 border-t border-l border-emerald-500" />

                  {/* 4 Columns Grid matching reference screenshot */}
                  <div className="grid grid-cols-4 gap-6">
                    {/* Col 1 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Brokerage Platforms</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Forex CRM Platform", path: "/products/forex-crm", desc: "Trader portal, KYC verification & account servicing", icon: LineChart },
                          { title: "Broker Backoffice Platform", path: "/products/broker-backoffice", desc: "Operations queues, multi-tier IB tree & permissions", icon: Building }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Prop & Trading Suites</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Prop Trading Management", path: "/products/prop-trading-management", desc: "Automated challenge surveillance, drawdown & payouts", icon: Compass },
                          { title: "Custom Product Ecosystems", path: "/products/custom-product-ecosystems", desc: "Turnkey multi-product interconnected tech stacks", icon: Layers }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 3 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Enterprise SaaS</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Enterprise SaaS Products", path: "/products/enterprise-saas", desc: "Multi-tenant business software with team workspaces", icon: Building },
                          { title: "AI-Powered Products", path: "/products/ai-powered", desc: "Reviewable AI workflow assistants & extraction tools", icon: Brain }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 4 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Blockchain & Wallets</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Blockchain & Wallet Platforms", path: "/products/blockchain-wallet", desc: "Deposit tracking, multi-chain wallets & settlements", icon: Wallet }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Company */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('company'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2.5 py-1.5 rounded-lg ${
                  activeDropdown === 'company' || currentPath.startsWith('/company')
                    ? 'text-emerald-500 font-bold bg-emerald-500/10'
                    : isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60' : 'hover:text-emerald-600 hover:bg-slate-100/80'
                }`}
              >
                <span>Company</span>
              </button>
              {activeDropdown === 'company' && (
                <div
                  onMouseEnter={() => handleMouseEnter('company')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1140px] max-w-[calc(100vw-32px)] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-6 animate-in fade-in zoom-in-95 duration-200 z-50 overflow-hidden ${
                    isDarkNavbar
                      ? 'bg-slate-900 text-white shadow-black/70'
                      : 'bg-white text-slate-900 shadow-slate-900/15'
                  }`}
                >
                  {/* AyaamX Emerald Diamond Caret */}
                  <div className="absolute -top-2 left-[72%] w-4 h-4 rotate-45 bg-emerald-500 border-t border-l border-emerald-500" />

                  {/* 4 Columns Grid matching reference screenshot */}
                  <div className="grid grid-cols-4 gap-6">
                    {/* Col 1 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">About AayaamX</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "About AayaamX", path: "/company#about", desc: "Software engineering company from Ahmedabad, India", icon: Building },
                          { title: "Our Story", path: "/company#our-story", desc: "From individual tools to connected ecosystems", icon: Compass }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Mission & Method</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Vision & Mission", path: "/company#vision-mission", desc: "Build maintainable software people can rely on", icon: Shield },
                          { title: "Our Approach", path: "/company#our-approach", desc: "Align, build & review, launch and handover", icon: Layers }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 3 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Tech & Architecture</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Technology Expertise", path: "/company#technology-expertise", desc: "Choose technology around what the product needs", icon: Code },
                          { title: "Leadership & Team", path: "/company#leadership-team", desc: "Product, architecture, engineering & delivery roles", icon: Sparkles }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Col 4 */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Careers & Connect</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="space-y-1">
                        {[
                          { title: "Careers", path: "/company#careers", desc: "Join our sales, marketing or instructor teams", icon: Smartphone },
                          { title: "Contact Us", path: "/company#contact", desc: "Share your project brief & discuss requirements", icon: Send }
                        ].map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleNav(item.path)}
                              className={`w-full group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                                isDarkNavbar ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className={`w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center transition-all duration-200 ${
                                isDarkNavbar
                                  ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-950/60 group-hover:scale-105'
                                  : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-105'
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

        </nav>

        {/* Action Buttons on Right - AyaamX Style */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={(e) => toggleTheme(e)}
            aria-label="Toggle Light/Dark Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            <div className="relative w-4 h-4 flex items-center justify-center transition-transform duration-500 hover:rotate-12">
              <Sun className={`w-4 h-4 text-amber-400 absolute transition-all duration-500 transform ${
                theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`} />
              <Moon className={`w-4 h-4 text-slate-600 dark:text-amber-400 absolute transition-all duration-500 transform ${
                theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
              }`} />
            </div>
          </button>

          {/* Share Your Project Brief CTA - AayaamX Core CTA */}
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-sm hover:shadow-emerald-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Share Project Brief</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {!HIDE_BOOK_DEMO && (
            <button
              onClick={onOpenAccount}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-lg shadow-sm shadow-emerald-600/20 transition-all duration-300 ease-in-out flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-3 h-3 shrink-0" />
            </button>
          )}
        </div>

        {/* Mobile Menu & Theme Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={(e) => toggleTheme(e)}
            aria-label="Toggle Theme"
            className="relative p-1.5 transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer flex items-center justify-center bg-transparent border-0 text-slate-600 dark:text-amber-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg overflow-hidden group"
          >
            <div className="relative w-4 h-4 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              <Sun className={`w-4 h-4 text-amber-400 absolute transition-all duration-500 transform ${
                theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`} />
              <Moon className={`w-4 h-4 text-slate-600 dark:text-amber-400 absolute transition-all duration-500 transform ${
                theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
              }`} />
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border cursor-pointer ${
              isDarkNavbar ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Absolute Overlay - never pushes page content down) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 top-16 sm:top-18 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-200"
          />

          {/* Drawer Menu Panel floating directly over page content */}
          <div className={`lg:hidden absolute top-full left-0 right-0 w-full z-50 border-b p-4 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto ${
            isDarkNavbar ? 'bg-[#0d121d] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            {/* Services Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'services' ? null : 'services')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'services' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'services' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                {[
                  { title: "Custom Software Development", path: "/services/custom-software-development" },
                  { title: "SaaS Platform Engineering", path: "/services/saas-development" },
                  { title: "Mobile App Development", path: "/services/mobile-app-development" },
                  { title: "AI Agent Development", path: "/services/ai-agent-development" },
                  { title: "Forex & Broker CRM Systems", path: "/services/forex-crm-development" },
                  { title: "Smart Contracts & Web3 Wallets", path: "/services/smart-contract-development" },
                  { title: "Cloud Hosting & Server Mgmt", path: "/services/hosting-server-management" },
                  { title: "UI/UX & Product Design", path: "/services/ui-ux-engineering" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNav(item.path)}
                    className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${
                      isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'solutions' ? null : 'solutions')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'solutions' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'solutions' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                {[
                  { title: "Fintech & Digital Payments", path: "/solutions/fintech" },
                  { title: "Forex & Brokerage Ecosystem", path: "/solutions/forex-brokerage" },
                  { title: "Prop Trading Evaluation Platforms", path: "/solutions/prop-trading" },
                  { title: "Blockchain & Tokenization", path: "/solutions/blockchain" },
                  { title: "Enterprise Workflow Automation", path: "/solutions/enterprise" },
                  { title: "AI Business Assistants", path: "/solutions/ai-business" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNav(item.path)}
                    className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${
                      isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Industries Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'industries' ? null : 'industries')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Industries</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'industries' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'industries' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                {[
                  { title: "Financial Services", path: "/industries/financial-services" },
                  { title: "Forex & Brokerage", path: "/industries/forex-brokerage" },
                  { title: "Proprietary Trading Firms", path: "/industries/prop-trading" },
                  { title: "Banking & Fintech", path: "/industries/banking-fintech" },
                  { title: "Blockchain & Web3", path: "/industries/blockchain-web3" },
                  { title: "SaaS & Technology Startups", path: "/industries/saas-technology-startups" },
                  { title: "Enterprise Businesses", path: "/industries/enterprise-businesses" },
                  { title: "Digital Asset Businesses", path: "/industries/digital-asset-businesses" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNav(item.path)}
                    className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${
                      isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Products Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'products' ? null : 'products')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Products</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'products' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'products' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                {[
                  { title: "AI-Powered Products", path: "/products/ai-powered" },
                  { title: "Forex CRM Platform", path: "/products/forex-crm" },
                  { title: "Broker Backoffice Platform", path: "/products/broker-backoffice" },
                  { title: "Prop Trading Management Platform", path: "/products/prop-trading-management" },
                  { title: "Enterprise SaaS Products", path: "/products/enterprise-saas" },
                  { title: "Blockchain & Wallet Platforms", path: "/products/blockchain-wallet" },
                  { title: "Custom Product Ecosystems", path: "/products/custom-product-ecosystems" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNav(item.path)}
                    className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${
                      isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Company Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'company' ? null : 'company')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Company</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'company' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'company' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                {[
                  { title: "About AayaamX", path: "/company#about" },
                  { title: "Our Story", path: "/company#our-story" },
                  { title: "Vision & Mission", path: "/company#vision-mission" },
                  { title: "Our Approach", path: "/company#our-approach" },
                  { title: "Technology Expertise", path: "/company#technology-expertise" },
                  { title: "Leadership & Team", path: "/company#leadership-team" },
                  { title: "Careers", path: "/company#careers" },
                  { title: "Contact Us", path: "/company#contact" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNav(item.path)}
                    className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${
                      isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Direct Link: Pricing */}
          <button
            onClick={() => handleNav('/pricing')}
            className="w-full text-left p-2.5 rounded-lg font-bold hover:text-emerald-500 flex items-center justify-between text-xs border-b border-slate-200 dark:border-slate-800/80"
          >
            <span className="font-extrabold uppercase tracking-wider text-xs">Pricing & Plans</span>
            <ArrowRight className="w-4 h-4 text-emerald-500" />
          </button>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                if (onOpenInquiry) onOpenInquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs cursor-pointer shadow-md tracking-wide uppercase flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              Inquire Now
            </button>

            {!HIDE_BOOK_DEMO && (
              <button
                onClick={() => {
                  onOpenAccount();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-center font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs cursor-pointer shadow-md tracking-wide uppercase"
              >
                Book a Technical Demo
              </button>
            )}
          </div>
        </div>
        </>
      )}
    </header>
  );
};
