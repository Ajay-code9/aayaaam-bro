import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useRouter } from '../../router';
import { HIDE_CLIENT_PORTAL_LOGIN, HIDE_BOOK_DEMO } from '../../config/flags';
import { WebMobileMegaMenu } from './WebMobileMegaMenu';
import { FintechTradingMegaMenu } from './FintechTradingMegaMenu';
import { AiAutomationMegaMenu } from './AiAutomationMegaMenu';
import { MarketplaceMegaMenu } from './MarketplaceMegaMenu';
import { EducationMegaMenu } from './EducationMegaMenu';
import { ApiWebsocketMegaMenu } from './ApiWebsocketMegaMenu';
import { API_WEBSOCKET_CATEGORIES } from '../../data/apiWebsocketNavData';
import { EDUCATION_CATEGORIES } from '../../data/educationNavData';
import { MARKETPLACE_CATEGORIES } from '../../data/marketplaceNavData';
import { AI_AUTOMATION_CATEGORIES } from '../../data/aiAutomationNavData';
import { FINTECH_TRADING_CATEGORIES } from '../../data/fintechTradingNavData';
import { WEB_MOBILE_CATEGORIES } from '../../data/webMobileNavData';
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
      <div className="w-full max-w-[1720px] mx-auto px-2 sm:px-4 lg:px-4 xl:px-6 flex items-center justify-between h-16 relative">
        <button onClick={() => handleNav('/')} className="flex items-center group shrink-0 text-left cursor-pointer py-1">
          <div className="relative flex items-center h-10 sm:h-11 lg:h-11">
            {/* Dark Theme Logo (Crisp White 'AAYAAMX' Text) */}
            <img
              src="/logo-white.png?v=4"
              alt="AyaamX"
              className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-0 dark:opacity-100 group-hover:scale-[1.02]"
            />
            {/* Light Theme Logo (Original Navy 'AAYAAMX' Text) */}
            <img
              src="/logo-black.png"
              alt="AyaamX"
              className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-100 dark:opacity-0 absolute inset-0 group-hover:scale-[1.02]"
            />
          </div>
        </button>

        {/* Centered Navigation Links - AYAAMX ARCHITECTURE */}
        <nav className={`hidden lg:flex items-center justify-center flex-1 mx-1 lg:mx-2 xl:mx-2 gap-1 xl:gap-1.5 text-[11px] xl:text-[11.5px] font-medium tracking-tight ${
          isDarkNavbar ? 'text-slate-200' : 'text-slate-700'
        }`}>


            {/* 1. Web & Mobile Development Dropdown (Client's Interactive Master-Detail Menu) */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('services'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2 py-1 rounded-md text-[11px] xl:text-[11.5px] ${
                  activeDropdown === 'services' || currentPath.startsWith('/services/web') || currentPath.startsWith('/services/mobile')
                    ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                    : isDarkNavbar ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                <span>Web &amp; Mobile Development</span>
              </button>
              {activeDropdown === 'services' && (
                <WebMobileMegaMenu
                  onNavigate={handleNav}
                  isDark={isDarkNavbar}
                />
              )}
            </div>

            {/* 2. Fintech & Trading Dropdown (Client's Interactive Master-Detail Menu) */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('solutions'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2 py-1 rounded-md text-[11px] xl:text-[11.5px] ${
                  activeDropdown === 'solutions'
                    ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                    : isDarkNavbar ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                <span>Fintech &amp; Trading</span>
              </button>
              {activeDropdown === 'solutions' && (
                <FintechTradingMegaMenu
                  onNavigate={handleNav}
                  isDark={isDarkNavbar}
                />
              )}
            </div>

            {/* 3. AI & Automation Dropdown (Client's Interactive Master-Detail Menu) */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('industries'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2 py-1 rounded-md text-[11px] xl:text-[11.5px] ${
                  activeDropdown === 'industries' || currentPath.startsWith('/services/ai-automation')
                    ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                    : isDarkNavbar ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                <span>AI &amp; Automation</span>
              </button>
              {activeDropdown === 'industries' && (
                <AiAutomationMegaMenu
                  onNavigate={handleNav}
                  isDark={isDarkNavbar}
                />
              )}
            </div>

            {/* 4. Marketplace Dropdown (Client's Interactive Master-Detail Menu) */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('products'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2 py-1 rounded-md text-[11px] xl:text-[11.5px] ${
                  activeDropdown === 'products' || currentPath.startsWith('/marketplace')
                    ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                    : isDarkNavbar ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                <span>Marketplace</span>
              </button>
              {activeDropdown === 'products' && (
                <MarketplaceMegaMenu
                  onNavigate={handleNav}
                  isDark={isDarkNavbar}
                />
              )}
            </div>

            {/* 5. Education Dropdown (Client's Interactive Master-Detail Menu) */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('education')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('education'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2 py-1 rounded-md text-[11px] xl:text-[11.5px] ${
                  activeDropdown === 'education' || currentPath.startsWith('/education')
                    ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                    : isDarkNavbar ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                <span>Education</span>
              </button>
              {activeDropdown === 'education' && (
                <EducationMegaMenu
                  onNavigate={handleNav}
                  isDark={isDarkNavbar}
                />
              )}
            </div>

            {/* 6. APIs & WebSockets Dropdown (Client's Interactive Master-Detail Menu) */}
            <div
              className="py-2"
              onMouseEnter={() => handleMouseEnter('api-websockets')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); handleMouseEnter('api-websockets'); }}
                className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2 py-1 rounded-md text-[11px] xl:text-[11.5px] ${
                  activeDropdown === 'api-websockets'
                    ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                    : isDarkNavbar ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                <span>APIs &amp; WebSockets</span>
              </button>
              {activeDropdown === 'api-websockets' && (
                <ApiWebsocketMegaMenu
                  onNavigate={handleNav}
                  isDark={isDarkNavbar}
                />
              )}
            </div>

            {/* 7. Portfolio Direct Link */}
            <button
              type="button"
              onClick={() => handleNav('/#case-studies')}
              className={`transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap flex items-center px-2 py-1 rounded-md text-[11px] xl:text-[11.5px] font-bold ${
                currentPath === '/portfolio' || currentPath.includes('case-studies')
                  ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/80 dark:bg-emerald-950/40'
                  : 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 hover:bg-emerald-500/10'
              }`}
            >
              <span>Portfolio</span>
            </button>

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

          {/* Discuss Your Project CTA - AayaamX Core CTA */}
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm hover:shadow-emerald-600/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Discuss Your Project</span>
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
            {/* Web & Mobile Development Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'services' ? null : 'services')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Web &amp; Mobile Development</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'services' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'services' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                {WEB_MOBILE_CATEGORIES.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleNav(cat.items[0]?.path || '/services')}
                      className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-semibold transition-colors flex items-center justify-between ${
                        isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-200' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <CatIcon className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{cat.title}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 opacity-60 text-emerald-500" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Fintech & Trading Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'solutions' ? null : 'solutions')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Fintech &amp; Trading</span>
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

          {/* AI & Automation Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'industries' ? null : 'industries')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">AI &amp; Automation</span>
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

          {/* Marketplace Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'products' ? null : 'products')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Marketplace</span>
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

          {/* Education Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'education' ? null : 'education')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Education</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'education' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'education' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                {EDUCATION_CATEGORIES.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleNav('/education')}
                      className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-semibold transition-colors flex items-center justify-between ${
                        isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-200' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <CatIcon className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{cat.title}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 opacity-60 text-emerald-500" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* APIs & WebSockets Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'api-websockets' ? null : 'api-websockets')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">APIs &amp; WebSockets</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'api-websockets' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'api-websockets' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                {API_WEBSOCKET_CATEGORIES.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleNav(cat.items[0]?.path || '/api-integrations')}
                      className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-semibold transition-colors flex items-center justify-between ${
                        isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-200' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <CatIcon className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{cat.title}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 opacity-60 text-emerald-500" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Portfolio Mobile Link */}
          <button
            onClick={() => handleNav('/#case-studies')}
            className="w-full text-left p-2.5 rounded-lg font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 flex items-center justify-between text-xs border-b border-slate-200 dark:border-slate-800/80"
          >
            <span className="font-extrabold uppercase tracking-wider text-xs">Portfolio</span>
            <ArrowRight className="w-4 h-4 text-emerald-500" />
          </button>

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
              Discuss Your Project
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
