import React, { useState } from 'react';
import { HIDE_CLIENT_PORTAL_LOGIN, HIDE_BOOK_DEMO } from '../../config/flags';
import {
  ChevronDown,
  Search,
  Globe,
  UserCheck,
  Building2,
  ShieldCheck,
  TrendingUp,
  Cpu,
  BarChart3,
  BookOpen,
  HelpCircle,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Lock,
  Layers,
  Wallet,
  Zap,
  Briefcase,
  Sun,
  Moon,
  Smartphone,
  Users,
  PieChart,
  Activity,
  Coins,
  Network,
  LayoutGrid,
  Monitor,
  Headphones,
  Server,
  DollarSign,
  Megaphone,
  Send
} from 'lucide-react';
import { useRouter } from '../../router';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenAccount: () => void;
  onLogin: () => void;
  onOpenSearch: () => void;
  onOpenInquiry?: () => void;
  selectedSegment: 'individual' | 'institutional';
  setSelectedSegment: (seg: 'individual' | 'institutional') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAccount,
  onLogin,
  onOpenSearch,
  onOpenInquiry,
  selectedSegment,
  setSelectedSegment
}) => {
  const { currentPath, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>('products');
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const isSolutionsPage = Boolean(currentPath && currentPath.startsWith('/solutions/'));
  const isDarkNavbar = theme === 'dark';

  const PRODUCT_CATEGORIES = [
    {
      category: "Client & Operations",
      items: [
        { title: "Forex CRM & Back Office", path: "/products/forex-crm", desc: "Multi-tier broker CRM & client portal", icon: Briefcase },
        { title: "IB & Affiliate Management", path: "/products/ib-portal", desc: "Multi-level affiliate & rebate engine", icon: Network },
        { title: "Social & Copy Trading", path: "/products/social-trading", desc: "Provider discovery & automated copying", icon: Users },
        { title: "PAMM / MAM System", path: "/products/pamm-mam", desc: "Multi-account manager allocation", icon: PieChart }
      ]
    },
    {
      category: "Trading Experience",
      items: [
        { title: "WebTrader Terminal", path: "/products/web-trader", desc: "Flagship institutional web platform", icon: Globe },
        { title: "Mobile Trading Apps", path: "/products/mobile-app", desc: "Native iOS & Android trading apps", icon: Smartphone },
        { title: "Desktop Workstation", path: "/platforms/desktop", desc: "Pro multi-screen desktop terminal", icon: Monitor },
        { title: "Financial Charts & Widgets", path: "/products/financial-charts", desc: "HTML5 charting & embeddable tickers", icon: BarChart3 }
      ]
    },
    {
      category: "Execution & Risk",
      items: [
        { title: "FIX Bridge Connectivity", path: "/products/bridge", desc: "Institutional liquidity bridge & FIX", icon: Cpu },
        { title: "Risk Management (RMS)", path: "/products/risk-management", desc: "Real-time A/B/Hybrid risk control", icon: ShieldCheck },
        { title: "MT5 & Server Plugins", path: "/products/plugins", desc: "MT5 server hooks & plugins", icon: Layers }
      ]
    },
    {
      category: "Turnkey & Custom",
      items: [
        { title: "Turnkey White Label Stack", path: "/solutions/broker-crm", desc: "Integrated CRM, trader apps & FIX", icon: Building2 },
        { title: "Custom System Development", path: "/services/custom-system-development", desc: "Bespoke broker portals & APIs", icon: Zap }
      ]
    }
  ];

  const PRODUCTS_MENU = PRODUCT_CATEGORIES.flatMap(cat => cat.items);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    navigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isDarkNavbar
        ? isScrolled
          ? 'bg-[#0d121d]/95 backdrop-blur-md border-b border-slate-800/80 text-white shadow-xl'
          : 'bg-[#0d121d] border-b border-transparent text-white'
        : isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-md'
          : 'bg-white border-b border-transparent text-slate-900'
    }`}>
      {/* Container matching sleek institutional header */}
      <div className={`w-full max-w-[1536px] mx-auto px-3 sm:px-4 lg:px-5 xl:px-8 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'h-13 sm:h-15' : 'h-16 sm:h-18'
      }`}>
        <button onClick={() => handleNav('/')} className="flex items-center group shrink-0 text-left cursor-pointer py-1">
          <div className={`relative flex items-center transition-all duration-300 ${
            isScrolled ? 'h-7 sm:h-8 lg:h-8.5 xl:h-9' : 'h-8.5 sm:h-9.5 lg:h-10 xl:h-11'
          }`}>
            <img
              src="/logo-black.png"
              alt="BrokerBros"
              className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-0 dark:opacity-100 group-hover:scale-[1.01]"
            />
            <img
              src="/logo-white.png"
              alt="BrokerBros"
              className="h-full w-auto object-contain transition-opacity duration-300 ease-in-out opacity-100 dark:opacity-0 absolute inset-0 group-hover:scale-[1.01]"
            />
          </div>
        </button>

        {/* Centered Navigation Links */}
        <nav className={`hidden lg:flex items-center justify-center flex-1 mx-1 lg:mx-2 xl:mx-3 gap-1 lg:gap-2 xl:gap-3.5 text-[10.5px] lg:text-[11px] xl:text-xs font-semibold ${
          isDarkNavbar ? 'text-slate-200' : 'text-slate-700'
        }`}>
            
            {/* 1. Why BrokerBros Direct Link */}
            <button
              type="button"
              onClick={() => handleNav('/why-brokerbros')}
              className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                currentPath === '/why-brokerbros' || currentPath.startsWith('/why-brokerbros/')
                  ? 'text-emerald-500 font-bold'
                  : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
              }`}
            >
              <span>Why BrokerBros</span>
            </button>

            {/* 2. Products Dropdown (NEW!) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('products');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'products'
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Products</span>
              </button>
              {activeDropdown === 'products' && (
                <div
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-0 mt-2 w-[86vw] max-w-[760px] lg:max-w-[800px] rounded-2xl shadow-2xl border border-t-2 border-t-emerald-500 p-4.5 sm:p-5 animate-in fade-in zoom-in-95 duration-200 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#111723]/98 backdrop-blur-xl border-slate-800/90 text-white shadow-emerald-950/20'
                      : 'bg-white/98 backdrop-blur-xl border-slate-200/90 text-slate-900 shadow-slate-900/10'
                  }`}
                >
                  {/* Upward pointing pointer arrow */}
                  <div className="absolute -top-[7px] left-6 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-500" />

                  {/* Main 4-Column Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                    {PRODUCT_CATEGORIES.map((cat, cIdx) => (
                      <div key={cIdx} className="space-y-2 flex flex-col justify-start">
                        <div className="text-[10px] font-mono font-extrabold uppercase text-emerald-500 tracking-wider pb-1.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                          <span>{cat.category}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 inline-block"></span>
                        </div>
                        <div className="space-y-1 flex-1">
                          {cat.items.map((prod, pIdx) => {
                            const IconComp = prod.icon;
                            return (
                              <button
                                key={pIdx}
                                onClick={() => handleNav(prod.path)}
                                className={`p-1.5 sm:p-2 rounded-xl transition-all duration-200 text-left cursor-pointer flex items-start gap-2 group w-full ${
                                  isDarkNavbar
                                    ? 'hover:bg-slate-800/80 hover:text-emerald-400 border border-transparent hover:border-slate-700/60'
                                    : 'hover:bg-emerald-50/70 hover:text-emerald-600 border border-transparent hover:border-emerald-100'
                                }`}
                              >
                                <div className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-110 mt-0.5 ${
                                  isDarkNavbar 
                                    ? 'bg-slate-800/90 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950' 
                                    : 'bg-emerald-100/70 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white'
                                }`}>
                                  <IconComp className="w-3.5 h-3.5 transition-colors" />
                                </div>
                                <div className="space-y-0.5 min-w-0 flex-1">
                                  <div className="text-[11px] font-bold font-sans tracking-tight leading-snug group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                                    <span className="truncate">{prod.title}</span>
                                  </div>
                                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-sans leading-tight line-clamp-2">
                                    {prod.desc}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dedicated PLATFORMS Row inside Products Container */}
                  <div className="pt-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] font-mono font-extrabold uppercase text-emerald-500 tracking-wider flex items-center gap-1.5">
                        <Monitor className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Trading Platforms & Ecosystem</span>
                      </div>
                      <button
                        onClick={() => handleNav('/platforms')}
                        className="text-[10px] font-bold text-emerald-500 hover:text-emerald-400 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>View All Platforms</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {[
                        { title: "WebTrader Terminal", desc: "Browser institutional terminal", path: "/products/web-trader", icon: Globe },
                        { title: "Mobile Trading Apps", desc: "Native iOS & Android trading", path: "/products/mobile-app", icon: Smartphone },
                        { title: "Desktop Workstation", desc: "Multi-screen pro workstation", path: "/platforms/desktop", icon: Monitor },
                        { title: "MT5 & Server Plugins", desc: "Server hooks & execution bridge", path: "/products/plugins", icon: Layers }
                      ].map((item, idx) => {
                        const IconComp = item.icon;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleNav(item.path)}
                            className={`p-2 rounded-xl border transition-all duration-200 text-left cursor-pointer flex items-center gap-2.5 group ${
                              isDarkNavbar
                                ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/90'
                                : 'bg-slate-50/90 border-slate-200 hover:border-emerald-500/50 hover:bg-emerald-50/50'
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                              isDarkNavbar ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                            }`}>
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-[11px] font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-emerald-500 transition-colors truncate">
                                {item.title}
                              </div>
                              <div className="text-[9px] text-slate-500 dark:text-slate-400 truncate">
                                {item.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('services');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'services' || (isSolutionsPage && isDarkNavbar)
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Services</span>
              </button>
              {activeDropdown === 'services' && (
                <div
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[760px] rounded-2xl shadow-2xl border border-t-2 border-t-emerald-500 p-5 grid grid-cols-3 gap-3.5 animate-in fade-in zoom-in-95 duration-200 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#111723]/98 backdrop-blur-xl border-slate-800/90 text-white shadow-emerald-950/20'
                      : 'bg-white/98 backdrop-blur-xl border-slate-200/90 text-slate-900 shadow-slate-900/10'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-500" />

                  {[
                    { title: "24/7 Technical Support", path: "/services/technical-support", desc: "War-room response & sub-15min SLA desk", icon: Headphones, badge: "SLA" },
                    { title: "Dedicated Success Manager", path: "/services/success-manager", desc: "1-on-1 account optimization & advice", icon: UserCheck },
                    { title: "Hosting & Server Management", path: "/services/hosting-server-management", desc: "Equinix NY4/LD4 low-latency servers", icon: Server },
                    { title: "DDoS Protection & Cyber", path: "/services/cyber-security-ddos", desc: "Enterprise mitigation & security shield", icon: ShieldCheck },
                    { title: "Website UX/UI Development", path: "/services/website-ux-ui", desc: "High-converting broker web design", icon: Globe },
                    { title: "User Training & Onboarding", path: "/services/user-training", desc: "Full staff training & CRM workflows", icon: BookOpen },
                    { title: "Custom System Development", path: "/services/custom-system-development", desc: "Bespoke broker portals & APIs", icon: Zap },
                    { title: "FIX API & Liquidity Engine", path: "/solutions/fix-api-liquidity", desc: "Institutional liquidity & FIX bridges", icon: Cpu },
                    { title: "Data Security & Compliance", path: "/security/regulation", desc: "Regulatory audit & client protection", icon: Lock, badge: "SECURE" }
                  ].map((srv, idx) => {
                    const IconComp = srv.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleNav(srv.path)}
                        className={`p-2.5 rounded-xl transition-all duration-200 text-left cursor-pointer flex items-start gap-2.5 group w-full ${
                          isDarkNavbar
                            ? 'hover:bg-slate-800/80 hover:text-emerald-400 border border-transparent hover:border-slate-700/60'
                            : 'hover:bg-emerald-50/70 hover:text-emerald-600 border border-transparent hover:border-emerald-100'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-110 mt-0.5 ${
                          isDarkNavbar 
                            ? 'bg-slate-800/90 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950' 
                            : 'bg-emerald-100/70 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white'
                        }`}>
                          <IconComp className="w-4 h-4 transition-colors" />
                        </div>
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <div className="text-[11.5px] font-bold font-sans tracking-tight leading-snug group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                            <span className="truncate">{srv.title}</span>
                            {srv.badge && (
                              <span className="text-[8.5px] bg-emerald-500/20 text-emerald-400 font-mono px-1 py-0.2 rounded shrink-0 ml-1">
                                {srv.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[9.5px] text-slate-500 dark:text-slate-400 font-sans leading-tight line-clamp-2">
                            {srv.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 4. Pricing Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('pricing')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('pricing');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'pricing'
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Pricing</span>
              </button>
              {activeDropdown === 'pricing' && (
                <div
                  onMouseEnter={() => handleMouseEnter('pricing')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] rounded-2xl shadow-2xl border border-t-2 border-t-emerald-500 p-4.5 grid grid-cols-2 gap-3 animate-in fade-in zoom-in-95 duration-200 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#111723]/98 backdrop-blur-xl border-slate-800/90 text-white shadow-emerald-950/20'
                      : 'bg-white/98 backdrop-blur-xl border-slate-200/90 text-slate-900 shadow-slate-900/10'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-500" />

                  {[
                    { title: "Turnkey SaaS Packages", path: "/pricing", desc: "Flat monthly pricing plans for FX CRM & Trader apps", icon: Building2, badge: "FLAT FEE" },
                    { title: "Volume & Execution Fees", path: "/pricing/commissions", desc: "Tiered volume & FIX bridge routing rates", icon: DollarSign },
                    { title: "Hosting & Co-Location", path: "/services/hosting-server-management", desc: "Equinix NY4/LD4 dedicated server costs", icon: Server },
                    { title: "Market Data & News", path: "/pricing/market-data", desc: "Real-time quote feeds & news feeds", icon: BarChart3 },
                    { title: "Partner & IB Rebate Plans", path: "/partner", desc: "Multi-level IB revenue share models", icon: Network, badge: "REBATES" }
                  ].map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleNav(item.path)}
                        className={`p-2.5 rounded-xl transition-all duration-200 text-left cursor-pointer flex items-start gap-2.5 group w-full ${
                          isDarkNavbar
                            ? 'hover:bg-slate-800/80 hover:text-emerald-400 border border-transparent hover:border-slate-700/60'
                            : 'hover:bg-emerald-50/70 hover:text-emerald-600 border border-transparent hover:border-emerald-100'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-110 mt-0.5 ${
                          isDarkNavbar 
                            ? 'bg-slate-800/90 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950' 
                            : 'bg-emerald-100/70 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white'
                        }`}>
                          <IconComp className="w-4 h-4 transition-colors" />
                        </div>
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <div className="text-[11.5px] font-bold font-sans tracking-tight leading-snug group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                            <span className="truncate">{item.title}</span>
                            {item.badge && (
                              <span className="text-[8px] bg-emerald-500/20 text-emerald-400 font-mono px-1 py-0.2 rounded shrink-0 ml-1">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[9.5px] text-slate-500 dark:text-slate-400 font-sans leading-tight line-clamp-2">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 5. Marketing Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('marketing')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('marketing');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'marketing' || currentPath.startsWith('/services/marketing')
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Marketing</span>
              </button>
              {activeDropdown === 'marketing' && (
                <div
                  onMouseEnter={() => handleMouseEnter('marketing')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] rounded-2xl shadow-2xl border border-t-2 border-t-emerald-500 p-4.5 grid grid-cols-2 gap-3.5 animate-in fade-in zoom-in-95 duration-200 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#111723]/98 backdrop-blur-xl border-slate-800/90 text-white shadow-emerald-950/20'
                      : 'bg-white/98 backdrop-blur-xl border-slate-200/90 text-slate-900 shadow-slate-900/10'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-500" />

                  {[
                    { title: "Complete Digital Marketing", path: "/services/marketing/complete-digital-marketing", desc: "360° broker growth & trader acquisition", icon: Megaphone },
                    { title: "SEO & LLM Discovery", path: "/services/marketing/seo", desc: "Rankings on Google, ChatGPT & Perplexity", icon: Search, badge: "AI READY" },
                    { title: "Paid / Organic Marketing", path: "/services/marketing/paid-organic", desc: "PPC ads, native networks & conversion CRO", icon: BarChart3 },
                    { title: "Social Media Marketing", path: "/services/marketing/social-media", desc: "FB, Instagram, YouTube & Telegram signals", icon: Users },
                    { title: "Broker Review Management", path: "/services/marketing/broker-review", desc: "Google & Trustpilot site integration", icon: Sparkles, badge: "TRUST" }
                  ].map((mkt, idx) => {
                    const IconComp = mkt.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleNav(mkt.path)}
                        className={`p-2.5 rounded-xl transition-all duration-200 text-left cursor-pointer flex items-start gap-2.5 group w-full ${
                          isDarkNavbar
                            ? 'hover:bg-slate-800/80 hover:text-emerald-400 border border-transparent hover:border-slate-700/60'
                            : 'hover:bg-emerald-50/70 hover:text-emerald-600 border border-transparent hover:border-emerald-100'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-110 mt-0.5 ${
                          isDarkNavbar 
                            ? 'bg-slate-800/90 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950' 
                            : 'bg-emerald-100/70 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white'
                        }`}>
                          <IconComp className="w-4 h-4 transition-colors" />
                        </div>
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <div className="text-[11.5px] font-bold font-sans tracking-tight leading-snug group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                            <span className="truncate">{mkt.title}</span>
                            {mkt.badge && (
                              <span className="text-[8px] bg-emerald-500/20 text-emerald-400 font-mono px-1 py-0.2 rounded shrink-0 ml-1">
                                {mkt.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[9.5px] text-slate-500 dark:text-slate-400 font-sans leading-tight line-clamp-2">
                            {mkt.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 6. Resources & Docs Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('education')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('education');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'education'
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Resources &amp; Docs</span>
              </button>
              {activeDropdown === 'education' && (
                <div
                  onMouseEnter={() => handleMouseEnter('education')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] rounded-2xl shadow-2xl border border-t-2 border-t-emerald-500 p-4.5 grid grid-cols-2 gap-3.5 animate-in fade-in zoom-in-95 duration-200 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#111723]/98 backdrop-blur-xl border-slate-800/90 text-white shadow-emerald-950/20'
                      : 'bg-white/98 backdrop-blur-xl border-slate-200/90 text-slate-900 shadow-slate-900/10'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-500" />

                  {[
                    { title: "Brokerage Launch Academy", path: "/education/academy", desc: "Step-by-step guides to launching a Forex broker", icon: BookOpen, badge: "GUIDES" },
                    { title: "API & Developer Docs", path: "/api-integrations", desc: "FIX API, WebSockets & CRM REST endpoints", icon: Cpu, badge: "DEV" },
                    { title: "News & Market Insights", path: "/research/news", desc: "Daily market commentary & economic analysis", icon: TrendingUp },
                    { title: "Help & Support Desk", path: "/help", desc: "24/7 Knowledgebase & technical ticket desk", icon: HelpCircle }
                  ].map((res, idx) => {
                    const IconComp = res.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleNav(res.path)}
                        className={`p-2.5 rounded-xl transition-all duration-200 text-left cursor-pointer flex items-start gap-2.5 group w-full ${
                          isDarkNavbar
                            ? 'hover:bg-slate-800/80 hover:text-emerald-400 border border-transparent hover:border-slate-700/60'
                            : 'hover:bg-emerald-50/70 hover:text-emerald-600 border border-transparent hover:border-emerald-100'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-110 mt-0.5 ${
                          isDarkNavbar 
                            ? 'bg-slate-800/90 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950' 
                            : 'bg-emerald-100/70 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white'
                        }`}>
                          <IconComp className="w-4 h-4 transition-colors" />
                        </div>
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <div className="text-[11.5px] font-bold font-sans tracking-tight leading-snug group-hover:text-emerald-500 transition-colors flex items-center justify-between">
                            <span className="truncate">{res.title}</span>
                            {res.badge && (
                              <span className="text-[8px] bg-emerald-500/20 text-emerald-400 font-mono px-1 py-0.2 rounded shrink-0 ml-1">
                                {res.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[9.5px] text-slate-500 dark:text-slate-400 font-sans leading-tight line-clamp-2">
                            {res.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

        </nav>

        {/* Action Buttons on Right */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 shrink-0">
          <button
            onClick={onOpenSearch}
            title="Search"
            className={`flex items-center gap-1 px-2 py-1.5 text-[11px] font-medium rounded-lg border transition-all duration-300 ease-in-out cursor-pointer ${
              isDarkNavbar
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
            }`}
          >
            <Search className="w-3 h-3" />
            <span className="hidden xl:inline">Search...</span>
          </button>

          {/* Universal Theme Toggle Button */}
          <button
            onClick={(e) => toggleTheme(e)}
            aria-label="Toggle Light/Dark Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="relative p-1.5 transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer flex items-center justify-center bg-transparent border-0 text-slate-600 dark:text-amber-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg overflow-hidden group"
          >
            <div className="relative w-3.5 h-3.5 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              <Sun className={`w-3.5 h-3.5 text-amber-400 absolute transition-all duration-500 transform ${
                theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`} />
              <Moon className={`w-3.5 h-3.5 text-slate-600 dark:text-amber-400 absolute transition-all duration-500 transform ${
                theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
              }`} />
            </div>
          </button>

          <button
            onClick={onOpenInquiry}
            className="px-3 sm:px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] sm:text-xs rounded-lg shadow-sm shadow-emerald-600/20 transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 group"
          >
            <Send className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Inquire Now</span>
          </button>

          {!HIDE_CLIENT_PORTAL_LOGIN && (
            <button
              onClick={onLogin}
              className={`px-2 py-1.5 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                isDarkNavbar
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span className="hidden xl:inline">Client Portal </span>Login
            </button>
          )}

          {!HIDE_BOOK_DEMO && (
            <button
              onClick={onOpenAccount}
              className="px-2.5 sm:px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] rounded-lg shadow-sm shadow-emerald-600/20 transition-all duration-300 ease-in-out flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Book a Technical Demo</span>
              <ArrowRight className="w-3 h-3 shrink-0" />
            </button>
          )}
        </div>

        {/* Mobile Menu & Theme Controls */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Theme Switcher */}
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
              isDarkNavbar
                ? 'bg-slate-900 border-slate-800 text-white'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b p-4 space-y-3 animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto ${
          isDarkNavbar ? 'bg-[#0d121d] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          {/* 1. Why BrokerBros Direct Link */}
          <button
            onClick={() => handleNav('/why-brokerbros')}
            className="w-full text-left p-2.5 rounded-lg font-bold hover:text-emerald-500 flex items-center justify-between text-xs border-b border-slate-200 dark:border-slate-800/80"
          >
            <span className="text-emerald-500 font-extrabold text-sm">Why BrokerBros</span>
            <ArrowRight className="w-4 h-4 text-emerald-500" />
          </button>

          {/* 2. Products Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'products' ? null : 'products')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Products & Stack</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'products' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'products' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                {PRODUCTS_MENU.map((item, idx) => (
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

          {/* 3. Marketing Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'marketing' ? null : 'marketing')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Broker Marketing</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'marketing' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'marketing' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                <button onClick={() => handleNav('/services/marketing/complete-digital-marketing')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Complete Digital Marketing</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/services/marketing/seo')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>SEO & LLM Discovery</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/services/marketing/paid-organic')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Paid / Organic Marketing</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/services/marketing/social-media')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Social Media Marketing</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/services/marketing/broker-review')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Broker Review Management</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
              </div>
            )}
          </div>

          {/* 4. Services Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'services' ? null : 'services')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Managed Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'services' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'services' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                <button onClick={() => handleNav('/services/technical-support')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>24/7 Technical Support</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/services/success-manager')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Dedicated Success Manager</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/services/hosting-server-management')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Hosting & Server Management</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/services/cyber-security-ddos')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>DDoS Protection & Cyber Services</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/services/website-ux-ui')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Website UX/UI Development</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/services/custom-system-development')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Custom System Development</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/solutions/fix-api-liquidity')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>FIX API & Liquidity Engine</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
              </div>
            )}
          </div>

          {/* 4. Platforms Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'platforms' ? null : 'platforms')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Platforms & Tools</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'platforms' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'platforms' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                <button onClick={() => handleNav('/products/web-trader')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>WebTrader Terminal</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/products/mobile-app')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Mobile Trading Apps</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/platforms/desktop')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Desktop Workstation</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/products/plugins')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>MT5 & Server Plugins</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/api-integrations')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>API Integrations & Docs</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
              </div>
            )}
          </div>

          {/* 5. Pricing Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => handleNav('/pricing')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Pricing & Plans</span>
              <ArrowRight className="w-4 h-4 text-emerald-500" />
            </button>
          </div>

          {/* 6. Education Accordion */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-2">
            <button
              onClick={() => setExpandedMobileSection(expandedMobileSection === 'education' ? null : 'education')}
              className="w-full text-left p-2.5 rounded-lg font-bold flex items-center justify-between text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/50"
            >
              <span className="font-extrabold uppercase tracking-wider text-xs">Education & Resources</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSection === 'education' ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
            </button>
            {expandedMobileSection === 'education' && (
              <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-emerald-500/40 ml-2 mt-1">
                <button onClick={() => handleNav('/education/academy')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>Brokerage Launch Academy</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/api-integrations')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>API & Developer Docs</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button onClick={() => handleNav('/research/news')} className={`w-full text-left py-2 px-2.5 rounded-md text-xs font-medium transition-colors flex items-center justify-between ${isDarkNavbar ? 'hover:text-emerald-400 hover:bg-slate-800/60 text-slate-300' : 'hover:text-emerald-600 hover:bg-slate-100 text-slate-700'}`}>
                  <span>News & Market Insights</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
              </div>
            )}
          </div>

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
            {!HIDE_CLIENT_PORTAL_LOGIN && (
              <button
                onClick={() => {
                  onLogin();
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-2.5 text-center font-semibold text-xs cursor-pointer rounded-xl border transition-colors ${
                  isDarkNavbar ? 'border-slate-800 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Client Portal Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
