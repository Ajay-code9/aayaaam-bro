import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  Lock,
  Landmark,
  ChevronRight,
  Scale,
  Building2,
  CheckCircle2,
  Shield,
  Percent,
  Coins,
  BadgeCheck,
  PieChart,
  Download,
  Zap,
  Globe2,
  DollarSign,
  Check
} from 'lucide-react';

interface TrustSectionProps {
  onOpenAccount: () => void;
}

type StoryKey = 'routing' | 'capital' | 'insurance' | 'rating';

const STORY_KEYS: StoryKey[] = ['routing', 'capital', 'insurance', 'rating'];

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenAccount }) => {
  const [activeTab, setActiveTab] = useState<StoryKey>('routing');
  const [hasCompletedStory, setHasCompletedStory] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isLockedRef = useRef(false);

  const tabData = {
    routing: {
      badge: 'DATA SOVEREIGNTY',
      amount: '100% Client Data Ownership',
      lastAudited: 'Zero Vendor Lock-In',
      verifiedStatus: 'Isolated Dedicated Databases',
      heading: 'Your Client Data & IP Belong 100% to Your Firm',
      paragraph:
        'AyaamX delivers software on isolated, dedicated infrastructure. We never share, co-mingle, or monetize your operator database, user records, or trading logs. You retain complete intellectual property ownership.',
      imagePath: '/section-one.png',
      placeholderLabel: 'Data Sovereignty & Isolated Architecture',
      metrics: [
        {
          title: 'Database Isolation',
          value: '100% Dedicated',
          subtitle: 'Single-tenant private database instances',
          icon: Lock,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'IP Ownership',
          value: 'Full Handover',
          subtitle: 'Complete source code and architecture rights',
          icon: ShieldCheck,
          highlight: 'bg-blue-50 text-blue-700 border-blue-200'
        },
        {
          title: 'Cloud Infrastructure',
          value: 'Your Cloud / AWS',
          subtitle: 'Deploy directly inside your company cloud',
          icon: Landmark,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Backup & Recovery',
          value: 'Daily Automated',
          subtitle: 'Automated encrypted snapshot archives',
          icon: BadgeCheck,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }
      ]
    },
    capital: {
      badge: 'ROLE-BASED GOVERNANCE',
      amount: 'Tamper-Proof Audit History',
      lastAudited: 'Continuous Event Tracking',
      verifiedStatus: 'Granular Admin Permissions',
      heading: 'Complete Transparency Across Operator & Staff Actions',
      paragraph:
        'Maintain absolute visibility over every internal decision. Automated audit logs track deposit approvals, withdrawal processing, KYC state changes, and risk rule adjustments by staff member and timestamp.',
      imagePath: '/section-second.png',
      placeholderLabel: 'Immutable Audit Logging Illustration',
      metrics: [
        {
          title: 'Audit Logging',
          value: '100% Traceable',
          subtitle: 'Every staff action logged with immutable timestamp',
          icon: ShieldCheck,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'Staff Access Roles',
          value: 'Granular RBAC',
          subtitle: 'Custom manager, compliance & finance roles',
          icon: Scale,
          highlight: 'bg-blue-50 text-blue-700 border-blue-200'
        },
        {
          title: 'Compliance Reports',
          value: '1-Click Export',
          subtitle: 'Standardized CSV & XML regulator ledger feeds',
          icon: Download,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Log Preservation',
          value: 'Cryptographic',
          subtitle: 'Append-only audit queues prevent log alteration',
          icon: Shield,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }
      ]
    },
    insurance: {
      badge: 'ENTERPRISE DEVSECOPS',
      amount: '99.99% Production Uptime SLA',
      lastAudited: 'Enterprise Grade 2026',
      verifiedStatus: 'End-to-End Encryption',
      heading: 'Resilient Cloud Systems Built for Continuous Operation',
      paragraph:
        'All client endpoints, CRM portals, and API hooks run with AES-256 encryption at rest and TLS 1.3 in transit. Redundant microservices ensure zero disruption during high-volatility market events.',
      imagePath: '/section-third.webp',
      placeholderLabel: 'Cyber Security Architecture Illustration',
      metrics: [
        {
          title: 'Transit & Rest Security',
          value: '256-Bit TLS 1.3',
          subtitle: 'End-to-end encrypted API & socket feeds',
          icon: Shield,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'System Uptime SLA',
          value: '99.99% SLA',
          subtitle: 'Multi-zone cloud failover & load balancing',
          icon: Zap,
          highlight: 'bg-blue-50 text-blue-700 border-blue-200'
        },
        {
          title: 'Network Defense',
          value: 'DDoS Shield',
          subtitle: 'Automated edge rate-limiting & bot mitigation',
          icon: Lock,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Disaster Recovery',
          value: '< 5 min RTO',
          subtitle: 'Automated failover across standby regions',
          icon: Landmark,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }
      ]
    },
    rating: {
      badge: 'REGULATORY COMPLIANCE ARCHITECTURE',
      amount: 'Multi-Jurisdiction Ready',
      lastAudited: 'Standardized Data Schemas',
      verifiedStatus: 'KYC & AML Integrated Queues',
      heading: 'Built to Meet Global Financial Reporting Standards',
      paragraph:
        'Software pre-configured for brokerage licensing requirements across onshore and offshore jurisdictions. Includes automated KYC document workflows, AML watchlist checks, and audit-ready data structures.',
      imagePath: '/section-fourth.png',
      placeholderLabel: 'Regulatory Compliance Framework Illustration',
      metrics: [
        {
          title: 'Compliance Workflows',
          value: 'Global Ready',
          subtitle: 'Built for FCA, CySEC, ASIC, VFSC & FSA rules',
          icon: Award,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        },
        {
          title: 'KYC Verification',
          value: 'Automated Queue',
          subtitle: 'Automated document extraction and review states',
          icon: ShieldCheck,
          highlight: 'bg-blue-50 text-blue-700 border-blue-200'
        },
        {
          title: 'AML Sanction Checks',
          value: 'API Hook Ready',
          subtitle: 'Connects with Sumsub, Shufti Pro & Ondato',
          icon: BadgeCheck,
          highlight: 'bg-slate-50 text-slate-700 border-slate-200'
        },
        {
          title: 'Audit-Ready Schemas',
          value: 'Standardized',
          subtitle: 'Instant export for periodic regulatory filings',
          icon: Scale,
          highlight: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        }
      ]
    }
  };

  const currentContent = tabData[activeTab];
  const currentIndex = STORY_KEYS.indexOf(activeTab);

  // Wheel listener for desktop sticky storytelling (DOWNWARD ONLY)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Desktop screens (>=1024px) only
      if (window.innerWidth < 1024) return;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isScrollUp = e.deltaY < 0;
      const isScrollDown = e.deltaY > 0;

      // 1. CRITICAL: If scrolling UP, NEVER intercept or lock scroll!
      if (isScrollUp) {
        // If user scrolled all the way back above the section top, reset completion flag for next downward pass
        if (rect.top > 100) {
          setHasCompletedStory(false);
          setActiveTab(STORY_KEYS[0]);
        }
        return; // Allow native upward scroll without trapping
      }

      // 2. If scrolling DOWN: Check if section header top is aligned at top of viewport (0px to 40px)
      const isSectionAtTop = rect.top >= -20 && rect.top <= 80;

      if (isScrollDown && isSectionAtTop && !hasCompletedStory) {
        if (currentIndex < STORY_KEYS.length - 1) {
          // Lock viewport scroll while stepping through stories 1 -> 4
          e.preventDefault();
          if (!isLockedRef.current) {
            isLockedRef.current = true;
            setActiveTab(STORY_KEYS[currentIndex + 1]);
            setTimeout(() => {
              isLockedRef.current = false;
            }, 450);
          }
        } else if (currentIndex === STORY_KEYS.length - 1) {
          // Finished 4th story: Immediately mark completed and release lock to allow natural downward scroll
          setHasCompletedStory(true);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, hasCompletedStory]);

  return (
    <section
      ref={sectionRef}
      id="trust"
      className="py-6 lg:py-10 bg-white dark:bg-[#000000] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-[#1F1F28] relative overflow-hidden font-sans transition-colors duration-300"
    >
      {/* Subtle Static Background Grid (Opacity < 5%) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.035]">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px]"></div>
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500 via-teal-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-[#1F1F28] pb-4">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-sans">
              Enterprise Software Security & Compliance Architecture
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md font-sans font-medium">
            Engineered on isolated cloud architecture, immutable audit logging, and automated compliance pipelines required to operate regulated brokerages and high-throughput prop trading firms.
          </p>
        </div>

        <div className="bg-white dark:bg-[#0D0D12] rounded-2xl border border-slate-200 dark:border-[#1F1F28] shadow-lg shadow-slate-200/40 dark:shadow-none overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">

          {/* LEFT STICKY NAVIGATION PANEL (Light in Light Mode, Smoke Black in Dark Mode) */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-[#0D0D12] text-slate-900 dark:text-white p-5 space-y-4 flex flex-col justify-between relative overflow-hidden border-r border-slate-200 dark:border-[#1F1F28]">
            <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-30 dark:opacity-50 pointer-events-none"></div>

            <div className="relative z-10 space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  INFRASTRUCTURE SECURITY PILLARS
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans leading-snug">
                  Select a pillar below to review how AyaamX protects your operators' client capital and keeps your infrastructure audit-ready:
                </p>
              </div>

              {/* STORY PROGRESS BAR & CARDS */}
              <div className="relative space-y-2 pt-1">
                {/* Thin vertical progress line */}
                <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-slate-200 dark:bg-slate-800 rounded-full z-0 hidden lg:block">
                  <motion.div
                    className="w-full bg-emerald-500 rounded-full"
                    animate={{ height: `${((currentIndex + 1) / STORY_KEYS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {[
                  {
                    id: 'routing' as StoryKey,
                    title: '100% Data Sovereignty',
                    badge: 'Zero Vendor Lock-In & Dedicated DBs',
                    icon: Lock
                  },
                  {
                    id: 'capital' as StoryKey,
                    title: 'Role-Based Governance',
                    badge: 'Tamper-Proof Audit Logging',
                    icon: Landmark
                  },
                  {
                    id: 'insurance' as StoryKey,
                    title: 'Enterprise DevSecOps',
                    badge: '256-Bit SSL & 99.99% Uptime SLA',
                    icon: ShieldCheck
                  },
                  {
                    id: 'rating' as StoryKey,
                    title: 'Compliance Architecture',
                    badge: 'Global Regulatory Data Schemas',
                    icon: Award
                  }
                ].map((tab, idx) => {
                  const isSelected = activeTab === tab.id;
                  const isCompleted = STORY_KEYS.indexOf(tab.id) < currentIndex;
                  const IconComponent = tab.icon;

                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ x: 3, y: -1 }}
                      transition={{ duration: 0.15 }}
                      className={`w-full p-3 rounded-xl text-left transition-all duration-300 cursor-pointer relative overflow-hidden border group ${isSelected
                        ? 'bg-white dark:bg-[#15151D] border-emerald-500 dark:border-emerald-500 text-slate-900 dark:text-white shadow-md ring-1 ring-emerald-500/40'
                        : 'bg-white/80 dark:bg-[#07070A] border-slate-200 dark:border-[#1F1F28] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-[#121218] hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeTabGlow"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                        />
                      )}

                      <div className="flex items-center justify-between gap-2.5 relative z-10">
                        <div className="flex items-center gap-2.5">
                          {/* Progress indicator dot / check */}
                          <div className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono">
                            {isCompleted ? (
                              <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 stroke-[3]" />
                            ) : isSelected ? (
                              <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                            )}
                          </div>

                          <div
                            className={`p-1.5 rounded-lg transition-colors ${isSelected
                              ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200'
                              }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div
                              className={`text-xs font-bold font-sans tracking-tight ${isSelected ? 'text-slate-900 dark:text-white font-extrabold' : 'text-slate-700 dark:text-slate-300'
                                }`}
                            >
                              {tab.title}
                            </div>
                            <div
                              className={`text-[10px] font-mono font-medium mt-0.5 ${isSelected ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500'
                                }`}
                            >
                              {tab.badge}
                            </div>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isSelected
                            ? 'translate-x-1 text-emerald-600 dark:text-emerald-400'
                            : 'text-slate-400 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-400 group-hover:translate-x-0.5'
                            }`}
                        />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 pt-3 border-t border-slate-200 dark:border-[#1F1F28] flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                SOC THREAT DEFENSE
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold tracking-wider">256-BIT ENCRYPTED</span>
            </div>
          </div>

          {/* RIGHT STORY CONTENT PANEL (SMOOTH ANIMATED TRANSITION) */}
          <div className="lg:col-span-8 p-5 sm:p-6 flex flex-col justify-between space-y-5 bg-white dark:bg-[#0D0D12]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                {/* Top Badge & Audit Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-[#1F1F28] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/80 shadow-2xs">
                      {currentContent.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      {currentContent.verifiedStatus}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-slate-400 dark:text-slate-500">
                    {currentContent.lastAudited}
                  </span>
                </div>

                {/* Main Story Info & Image Crossfade */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                  <div className="lg:col-span-7 space-y-2.5">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                        Verified Trust Standard
                      </div>
                      <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-900 dark:text-emerald-400">
                        {currentContent.amount}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-sans text-slate-900 dark:text-white leading-snug">
                      {currentContent.heading}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {currentContent.paragraph}
                    </p>
                  </div>

                  {/* Image Crossfade with Scale & Translate */}
                  <div className="lg:col-span-5 flex items-center justify-center">
                    <div className="relative w-full flex items-center justify-center overflow-hidden">
                      <motion.img
                        key={currentContent.imagePath}
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        src={currentContent.imagePath}
                        alt={currentContent.placeholderLabel}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                          const parent = (e.target as HTMLElement).parentElement;
                          if (parent) {
                            const placeholderDiv = parent.querySelector('.placeholder-info');
                            if (placeholderDiv) placeholderDiv.classList.remove('hidden');
                          }
                        }}
                        className="w-full h-auto max-h-[200px] object-contain select-none scale-105"
                      />
                      <div className="placeholder-info hidden w-full aspect-[4/3] rounded-xl border-2 border-dashed border-slate-300 dark:border-[#1F1F28] bg-slate-50/80 dark:bg-[#07070A] flex flex-col items-center justify-center p-4 text-center">
                        <div className="p-2 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/80 mb-1.5">
                          <PieChart className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                          {currentContent.placeholderLabel}
                        </span>
                        <span className="text-[10px] font-sans text-slate-500 dark:text-slate-400 mt-0.5">
                          Path: {currentContent.imagePath}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Staggered Metric Cards */}
                <div className="pt-1">
                  <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    KEY PROTECTION & EXECUTION HIGHLIGHTS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {currentContent.metrics.map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.06 }}
                          className="px-2.5 py-2 rounded-lg border border-slate-200 dark:border-[#1F1F28] bg-slate-50/70 dark:bg-[#121218] hover:bg-white dark:hover:bg-[#161620] hover:border-emerald-300 dark:hover:border-emerald-500/50 hover:shadow-xs transition-all duration-200 space-y-0.5 group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[130px]">
                              {metric.title}
                            </span>
                            <div className={`p-0.5 rounded border text-[9px] ${metric.highlight}`}>
                              <MetricIcon className="w-2.5 h-2.5" />
                            </div>
                          </div>
                          <div className="text-sm font-black font-mono text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {metric.value}
                          </div>
                          <div className="text-[9.5px] font-sans text-slate-500 dark:text-slate-400 leading-tight truncate">
                            {metric.subtitle}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Regulatory Footer Strip */}
            <div className="pt-2.5 border-t border-slate-200 dark:border-[#1F1F28] space-y-2.5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center">
                <div className="py-1 px-2 rounded-md bg-slate-50 dark:bg-[#121218] border border-slate-200/70 dark:border-[#1F1F28] flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-slate-800 dark:text-slate-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>256-Bit Encrypted</span>
                </div>
                <div className="py-1 px-2 rounded-md bg-slate-50 dark:bg-[#121218] border border-slate-200/70 dark:border-[#1F1F28] flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Zero Vendor Lock-In</span>
                </div>
                <div className="py-1 px-2 rounded-md bg-slate-50 dark:bg-[#121218] border border-slate-200/70 dark:border-[#1F1F28] flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-slate-800 dark:text-slate-200">
                  <BadgeCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Audit-Ready Schemas</span>
                </div>
                <div className="py-1 px-2 rounded-md bg-slate-50 dark:bg-[#121218] border border-slate-200/70 dark:border-[#1F1F28] flex items-center justify-center gap-1.5 text-[10px] font-mono font-bold text-slate-800 dark:text-slate-200">
                  <Lock className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100% IP & Data Ownership</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-0.5">
                <button
                  onClick={onOpenAccount}
                  className="flex items-center gap-1.5 text-[10.5px] font-mono font-bold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#121218] hover:bg-slate-200 dark:hover:bg-[#1A1A24] px-3 py-2 rounded-lg border border-slate-300/80 dark:border-[#1F1F28] transition-all justify-center cursor-pointer"
                >
                  <Download className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Download Architecture & Security Whitepaper →</span>
                </button>

                <motion.button
                  onClick={onOpenAccount}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[11px] rounded-lg shadow-sm shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer group"
                >
                  <span>Request Custom Technical Consultation →</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
