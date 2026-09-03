import React, { useState } from 'react';
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
  Monitor
} from 'lucide-react';
import { useRouter } from '../../router';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenAccount: () => void;
  onLogin: () => void;
  onOpenSearch: () => void;
  selectedSegment: 'individual' | 'institutional';
  setSelectedSegment: (seg: 'individual' | 'institutional') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAccount,
  onLogin,
  onOpenSearch,
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
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[860px] rounded-2xl shadow-2xl border border-t-2 border-t-emerald-600 p-4.5 grid grid-cols-4 gap-4 animate-in fade-in duration-150 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#131926] border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  {/* Upward pointing pointer arrow */}
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  {PRODUCT_CATEGORIES.map((cat, cIdx) => (
                    <div key={cIdx} className="space-y-2">
                      <div className="text-[10px] font-mono font-extrabold uppercase text-emerald-500 tracking-wider pb-1.5 border-b border-slate-200 dark:border-slate-800/80">
                        {cat.category}
                      </div>
                      <div className="space-y-1">
                        {cat.items.map((prod, pIdx) => {
                          const IconComp = prod.icon;
                          return (
                            <button
                              key={pIdx}
                              onClick={() => handleNav(prod.path)}
                              className={`p-2 rounded-xl transition-all text-left cursor-pointer flex items-start gap-2.5 group w-full ${
                                isDarkNavbar
                                  ? 'hover:bg-slate-800/80 hover:text-emerald-400'
                                  : 'hover:bg-emerald-50/60 hover:text-emerald-600'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg shrink-0 transition-transform group-hover:scale-110 mt-0.5 ${
                                isDarkNavbar ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-100/70 text-emerald-700'
                              }`}>
                                <IconComp className="w-3.5 h-3.5" />
                              </div>
                              <div className="space-y-0.5 min-w-0">
                                <div className="text-[11.5px] font-bold font-sans tracking-tight leading-tight group-hover:text-emerald-500 transition-colors">
                                  {prod.title}
                                </div>
                                <div className="text-[9.5px] text-slate-500 dark:text-slate-400 font-sans line-clamp-2 leading-tight">
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
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-72 rounded-none shadow-2xl border border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#131926] border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/services/technical-support')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer flex items-center justify-between ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    <span>24/7 Technical Support</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded">SLA</span>
                  </button>
                  <button onClick={() => handleNav('/services/success-manager')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Dedicated Success Manager
                  </button>
                  <button onClick={() => handleNav('/services/hosting-server-management')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Hosting & Server Management
                  </button>
                  <button onClick={() => handleNav('/services/cyber-security-ddos')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    DDoS Protection & Cyber Services
                  </button>
                  <button onClick={() => handleNav('/services/website-ux-ui')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Website UX/UI Development
                  </button>
                  <button onClick={() => handleNav('/services/user-training')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    User Training & Onboarding
                  </button>
                  <button onClick={() => handleNav('/services/custom-system-development')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Custom System Development
                  </button>
                  <button onClick={() => handleNav('/solutions/fix-api-liquidity')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    FIX API & Liquidity Engine
                  </button>
                  <button onClick={() => handleNav('/security/regulation')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer flex items-center justify-between ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    <span>Data Security &amp; Compliance</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded">SECURE</span>
                  </button>
                </div>
              )}
            </div>

            {/* 4. Platforms Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('platforms')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleMouseEnter('platforms');
                }}
                className={`transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap flex items-center ${
                  activeDropdown === 'platforms'
                    ? 'text-emerald-500 font-bold'
                    : isDarkNavbar ? 'hover:text-emerald-400' : 'hover:text-emerald-700'
                }`}
              >
                <span>Platforms</span>
              </button>
              {activeDropdown === 'platforms' && (
                <div
                  onMouseEnter={() => handleMouseEnter('platforms')}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-64 rounded-none shadow-2xl border border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#131926] border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/platforms')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer flex items-center justify-between ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    <span>Platforms Overview &amp; Architecture</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-mono px-1.5 py-0.5 rounded">All</span>
                  </button>
                  <button onClick={() => handleNav('/products/web-trader')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    WebTrader Terminal
                  </button>
                  <button onClick={() => handleNav('/products/mobile-app')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Mobile Trading Apps
                  </button>
                  <button onClick={() => handleNav('/platforms/desktop')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Desktop Workstation
                  </button>
                  <button onClick={() => handleNav('/products/plugins')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    MT5 &amp; Server Plugins
                  </button>
                  <button onClick={() => handleNav('/api-integrations')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    API Integrations &amp; Docs
                  </button>
                </div>
              )}
            </div>

            {/* 5. Pricing Dropdown */}
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
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-64 rounded-none shadow-2xl border border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#131926] border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/pricing')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Turnkey SaaS Packages (Flat Monthly)
                  </button>
                  <button onClick={() => handleNav('/pricing/commissions')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Volume &amp; FIX Bridge Execution Fees
                  </button>
                  <button onClick={() => handleNav('/services/hosting-server-management')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Hosting &amp; Equinix Co-Location Costs
                  </button>
                  <button onClick={() => handleNav('/pricing/market-data')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Market Data &amp; News Subscriptions
                  </button>
                  <button onClick={() => handleNav('/partner')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Partner &amp; IB Rebate Earnings
                  </button>
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
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-64 rounded-none shadow-2xl border border-t-2 border-t-emerald-600 p-2 grid grid-cols-1 gap-1 animate-in fade-in duration-150 z-50 ${
                    isDarkNavbar
                      ? 'bg-[#131926] border-slate-800 text-white'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-emerald-600" />

                  <button onClick={() => handleNav('/education/academy')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Brokerage Launch Academy
                  </button>
                  <button onClick={() => handleNav('/api-integrations')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    API &amp; Developer Documentation
                  </button>
                  <button onClick={() => handleNav('/research/news')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    News &amp; Market Insights
                  </button>
                  <button onClick={() => handleNav('/help')} className={`px-3 py-2 text-xs font-semibold transition-colors text-left cursor-pointer ${isDarkNavbar ? 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60' : 'text-slate-800 hover:text-emerald-600 hover:bg-slate-50'}`}>
                    Help &amp; Support Knowledgebase
                  </button>
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
            onClick={onLogin}
            className={`px-2 py-1.5 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              isDarkNavbar
                ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span className="hidden xl:inline">Client Portal </span>Login
          </button>

          <button
            onClick={onOpenAccount}
            className="px-2.5 sm:px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] rounded-lg shadow-sm shadow-emerald-600/20 transition-all duration-300 ease-in-out flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Book a Technical Demo</span>
            <ArrowRight className="w-3 h-3 shrink-0" />
          </button>
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

          {/* 3. Services Accordion */}
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
                onOpenAccount();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs cursor-pointer shadow-md tracking-wide uppercase"
            >
              Book a Technical Demo
            </button>
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
          </div>
        </div>
      )}
    </header>
  );
};
