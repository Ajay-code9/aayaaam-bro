import React, { useState, useEffect } from 'react';
import { useRouter } from '../router';
import { company, disclaimer } from '../data/aayaamx/company';
import {
  Building2,
  Compass,
  Target,
  Workflow,
  Cpu,
  Users,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  ChevronRight,
  Code2,
  Send,
  Database,
  Lock,
  Globe,
  ArrowUpRight
} from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface CompanyPageProps {
  onOpenAccount: () => void;
  initialTab?: string;
}

export const DedicatedCompanyPage: React.FC<CompanyPageProps> = ({ onOpenAccount, initialTab }) => {
  const { navigate } = useRouter();

  // Project brief form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Software & Product Development',
    budget: 'Select if known',
    deployment: 'Select if known',
    environment: 'Select if known',
    message: ''
  });

  const [briefPrepared, setBriefPrepared] = useState(false);

  const sections = [
    { id: 'about', label: 'About AayaamX', icon: Building2 },
    { id: 'our-story', label: 'Our Story', icon: Compass },
    { id: 'vision-mission', label: 'Vision & Mission', icon: Target },
    { id: 'our-approach', label: 'Our Approach', icon: Workflow },
    { id: 'technology-expertise', label: 'Technology Expertise', icon: Cpu },
    { id: 'leadership-team', label: 'Leadership & Team', icon: Users },
    { id: 'careers', label: 'Careers', icon: Briefcase },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  const scrollToSection = (id: string, smooth: boolean = true) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -140; // generous offset for top header (65px) + sticky sections bar (50px) + spacing
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: smooth ? 'smooth' : 'auto' });
    }
  };

  useEffect(() => {
    // Check initialTab prop or window.location.hash
    const targetId = initialTab || (typeof window !== 'undefined' && window.location.hash ? window.location.hash.replace('#', '') : null);
    if (targetId) {
      const timer = setTimeout(() => {
        scrollToSection(targetId, true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [initialTab]);

  const handlePrepareBrief = (e: React.FormEvent) => {
    e.preventDefault();
    setBriefPrepared(true);

    const subject = encodeURIComponent(`Project Brief: ${formData.interest} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Interest: ${formData.interest}\n` +
      `Estimated Budget: ${formData.budget}\n` +
      `Target Deployment: ${formData.deployment}\n` +
      `Deployment Environment: ${formData.environment}\n\n` +
      `Project Details:\n${formData.message}\n`
    );

    window.location.href = `mailto:support@aayaamx.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* 1. HERO SECTION & TOP STICKY JUMP BAR */}
      <section className="relative isolate overflow-hidden border-b border-slate-200/80 bg-[#f4faf6] dark:border-white/10 dark:bg-[#09110f]">
        <div className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[38rem] w-[38rem] rounded-full bg-emerald-300/20 blur-[110px] dark:bg-emerald-500/10" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-10 lg:pb-20 lg:pt-12">
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <button onClick={() => navigate('/')} className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-300">Home</button>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-slate-800 dark:text-slate-200">Company</span>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl lg:text-[4.2rem]">
              Engineering software around <span className="text-emerald-700 dark:text-emerald-400">real work.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              We help teams turn complex requirements into digital products people can use, operate and grow with—from the first workflow to launch and handover.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button onClick={() => scrollToSection('contact')} className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-[#09110f]">
                Share your project brief <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button onClick={() => scrollToSection('our-story')} className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white/80 hover:text-emerald-800 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-emerald-300">
                Explore our work <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200/80 pt-5 text-xs font-medium text-slate-500 dark:border-white/10 dark:text-slate-400">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Product strategy</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Engineering</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Launch & handover</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-emerald-200/35 blur-2xl dark:bg-emerald-500/10" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-slate-900 shadow-[0_30px_90px_-35px_rgba(15,40,34,0.45)] dark:border-white/10">
              <img src="/company-team-hero.png" alt="A product engineering team collaborating around software dashboards in a modern studio" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
                <div className="flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">One connected product journey</p>
                    <p className="mt-1.5 text-lg font-semibold sm:text-xl">From idea to everyday use</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"><ArrowRight className="h-5 w-5" /></span>
                </div>
              </div>
            </div>
            <div className="absolute -top-5 right-5 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl dark:border-white/10 dark:bg-[#111b18]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"><Workflow className="h-5 w-5" /></span>
              <span><span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">Our way of working</span><span className="mt-0.5 block text-sm font-semibold text-slate-900 dark:text-white">Align · Build · Hand over</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUBMENU NAVIGATION BAR (Jump to Single Page Sections) */}
      <section className="sticky top-[65px] z-30 bg-white/95 dark:bg-[#000000]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#1F1F28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto py-3 no-scrollbar">
            {sections.map((sec) => {
              const Icon = sec.icon;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-[#0D0D12] border border-transparent hover:border-slate-200 dark:hover:border-[#1F1F28] transition-all cursor-pointer shrink-0"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ALL SECTIONS AS CONTIGUOUS HIGH-FIDELITY BLOCKS */}
      <div className="space-y-12 py-10 sm:space-y-16 sm:py-12">

        {/* SECTION 1: ABOUT AYAAMX / WHAT WE BUILD */}
        <section id="about" className="mx-auto max-w-7xl scroll-mt-36 px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                <span className="h-px w-7 bg-emerald-500" /> WHAT WE BUILD & DELIVER
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
                Software Built for Operations. Engineered to Scale.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
              We engineer custom software platforms, turnkey trading infrastructure, and automated operational engines with full source code ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4 xl:gap-6">
            <article className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0D0D12]">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                <img src="/enterprise-saas-hero.png" alt="Multi-tenant enterprise SaaS portal and customer dashboard preview" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.035]" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">SaaS & Client Portals</span>
              </div>
              <div className="flex min-h-[230px] flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">WEB & MOBILE SAAS</span>
                  <Code2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Customer Products & Portals</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Custom customer dashboards, high-converting onboarding flows, and multi-tenant SaaS platforms engineered with sub-second response times.
                </p>
                <button onClick={() => navigate('/services/software-engineering')} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-600 dark:text-emerald-400">
                  Explore Software Engineering <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0D0D12]">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                <img src="/aayaamx-webtrader-desktop.png" alt="Multi-screen professional trading terminal, chart engine, and broker backoffice console" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.035]" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">Fintech & Trading</span>
              </div>
              <div className="flex min-h-[230px] flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">TRADING & FINANCIAL ENGINES</span>
                  <Cpu className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Trading & Financial Platforms</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Turnkey broker CRM ecosystems, MT4/MT5 execution bridges, prop trading challenge platforms, and automated crypto cashier gateways.
                </p>
                <button onClick={() => navigate('/services/trading-technology')} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-600 dark:text-emerald-400">
                  Explore Trading Technology <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0D0D12]">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                <img src="/ai-powered-products-hero.png" alt="Autonomous AI workflow pipeline and data extraction system preview" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.035]" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">AI · Web3 · Integrations</span>
              </div>
              <div className="flex min-h-[230px] flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">AI & WORKFLOW AUTOMATION</span>
                  <Workflow className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">AI, Blockchain & Automation</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Document intelligence pipelines, smart contract tokenization suites, and resilient API bridges that automate high-volume business operations.
                </p>
                <button onClick={() => navigate('/solutions')} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-600 dark:text-emerald-400">
                  Explore Solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* SECTION 2: OUR STORY */}
        <section id="our-story" className="mx-auto max-w-7xl scroll-mt-36 px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#effaf3] via-white to-[#e7f6ec] px-6 py-8 text-slate-950 shadow-[0_24px_70px_-48px_rgba(4,60,35,0.3)] dark:border-white/10 dark:bg-[#0b2019] dark:bg-none dark:text-white dark:shadow-[0_28px_80px_-48px_rgba(4,30,20,0.65)] sm:px-10 sm:py-11 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-80 w-80 rounded-full bg-emerald-300/25 blur-[90px] dark:bg-emerald-400/10" />
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-800 dark:text-emerald-300">
                  <span className="h-px w-7 bg-emerald-600 dark:bg-emerald-400" /> OUR STORY
                </span>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                  From Ahmedabad in 2020 to products built for scale.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
                  Aayaam Nextgen Technologies Private Limited began in Gujarat in 2020. Today, AayaamX builds AI, fintech, enterprise and blockchain software for businesses with complex workflows.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <button onClick={() => navigate('/portfolio')} className="group inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-600">
                    Explore selected work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Aayaam Nextgen Technologies Pvt. Ltd.</span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white/85 px-5 py-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none sm:px-7 sm:py-6">
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-4 dark:border-white/10">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">The work so far</p>
                    <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">Published company figures</p>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="border-b border-r border-slate-200 pb-5 pr-4 pt-5 dark:border-white/10 sm:pr-6">
                    <p className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">120<span className="text-emerald-700 dark:text-emerald-400">+</span></p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">Projects delivered</p>
                  </div>
                  <div className="border-b border-slate-200 pb-5 pl-4 pt-5 dark:border-white/10 sm:pl-6">
                    <p className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">43<span className="text-emerald-700 dark:text-emerald-400">+</span></p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">Enterprise clients</p>
                  </div>
                  <div className="border-r border-slate-200 pr-4 pt-5 dark:border-white/10 sm:pr-6">
                    <p className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">$380M<span className="text-emerald-700 dark:text-emerald-400">+</span></p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">Volume processed</p>
                  </div>
                  <div className="pl-4 pt-5 sm:pl-6">
                    <p className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">99.97<span className="text-emerald-700 dark:text-emerald-400">%</span></p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">System uptime</p>
                  </div>
                </div>
                <a href="https://www.aayaamx.com/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-400 transition-colors hover:text-emerald-700 dark:hover:text-emerald-300">Figures published on aayaamx.com <ExternalLink className="h-3 w-3" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: VISION & MISSION */}
        <section id="vision-mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36 pt-10 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="relative isolate overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] sm:p-10 lg:p-12">
            {/* Subtle background ambient glow */}
            <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px] dark:bg-emerald-500/15" />
            <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px] dark:bg-teal-500/10" />

            {/* Header + Core Mission Banner */}
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 pb-10 border-b border-slate-100 dark:border-white/10">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                  <span className="h-px w-7 bg-emerald-500" /> VISION & PURPOSE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black tracking-tight leading-[1.15] text-slate-950 dark:text-white">
                  Mission-Critical Systems. Built for High-Stakes Operations.
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
                  We empower financial institutions, trading brokerages, and high-growth enterprises with resilient digital infrastructure designed for zero downtime and uncompromised security.
                </p>
              </div>

              {/* Mission Statement Card */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-emerald-500/20 bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-[#11171E] dark:to-[#0C1E17] p-7 shadow-sm">
                <div className="pb-3 border-b border-slate-200/80 dark:border-white/10 mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                    OUR CORE COMMITMENT
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
                  To deliver enterprise software platforms with complete IP ownership, predictable milestones, and zero operational debt.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  <span>Architecture · Execution · 100% Code Ownership</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">AyaamX Engineering Standard</span>
                </div>
              </div>
            </div>

            {/* 3 Value Pillars */}
            <div className="pt-10">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                    HOW WE DELIVER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    Core Engineering Commitments
                  </h3>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
                  Institutional Reliability
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                {/* Pillar 1 */}
                <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                        ARCHITECTURE FIRST
                      </span>
                      <Compass className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Engineered for Scalability
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Every project starts with rigorous technical specifications. We build decoupled, high-throughput microservices capable of handling millions of real-time requests without architectural bottlenecks.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Sub-millisecond latency focus</span>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                        ABSOLUTE TRANSPARENCY
                      </span>
                      <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Predictable Milestone Execution
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Zero black-box engineering. You receive weekly production builds, verified sprint demos, and direct access to senior technical architects throughout the engagement.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Weekly sprint handovers</span>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                        ASSET OWNERSHIP
                      </span>
                      <Target className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      100% Intellectual Property
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      You own 100% of the intellectual property, source repositories, database schemas, and CI/CD pipelines. No recurring per-seat fees or vendor lock-in.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Zero vendor lock-in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: OUR APPROACH / METHODOLOGY */}
        <section id="our-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36 pt-10 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="relative isolate overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] sm:p-10 lg:p-12 space-y-10">
            <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-[90px] dark:bg-teal-500/15" />

            <div className="pb-8 border-b border-slate-100 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                  <span className="h-px w-7 bg-emerald-500" /> DELIVERY METHODOLOGY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Predictable 3-Stage Milestone Execution.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  From architecture blueprints to high-concurrency production deployments — every stage is documented, tested, and handed over with complete source code ownership.
                </p>
              </div>
            </div>

            {/* Stepped Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="group relative rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      PHASE 1
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Architecture Discovery</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Technical Blueprint &amp; Specs
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    We define API contracts, database schemas, security boundaries, and high-throughput trade routing topologies before a single line of code is written.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 space-y-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>System architecture blueprints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>API &amp; database schema contracts</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      PHASE 2
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Sprint Execution</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Core Build &amp; Stress Testing
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Continuous weekly sprint deployments, automated regression testing, high-concurrency order load tests, and bi-weekly executive staging walk-throughs.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 space-y-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Weekly staging sprint demos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Concurrency &amp; latency stress tests</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      PHASE 3
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Production Go-Live</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Deployment &amp; IP Handover
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Zero-downtime production deployment, 24/7 infrastructure APM monitoring setup, full source code handover, and a 30-day post-launch warranty SLA.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 space-y-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>100% Repository &amp; IP ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>30-Day post-launch warranty SLA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Audit Badge Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-slate-50 to-slate-50 dark:from-emerald-950/30 dark:via-[#11171E] dark:to-[#11171E] border border-emerald-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block sm:inline">Institutional Security Built In:</span>
                  <span className="text-slate-600 dark:text-slate-300 sm:ml-1.5">Audited delivery practices adhering to NIST SSDF and SOC-2 Type II standards.</span>
                </div>
              </div>
              <a 
                href="https://csrc.nist.gov/pubs/sp/800/218/final" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-mono font-bold hover:underline shrink-0"
              >
                <span>NIST SSDF Standard</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 5: TECHNOLOGY STACK (ADAPTIVE THEME STYLE) */}
        <section id="technology-expertise" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36 pt-10 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="relative isolate overflow-hidden rounded-[2.2rem] border border-slate-200/90 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50 p-7 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] dark:bg-none sm:p-10 lg:p-12 space-y-10">
            {/* Ambient theme glow */}
            <div className="pointer-events-none absolute -left-20 -top-24 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px] dark:bg-emerald-500/15" />

            <div className="relative z-10 pb-8 border-b border-slate-200/80 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                  <span className="h-px w-7 bg-emerald-500" /> BATTLE-TESTED STACK
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Technology Scoped Around Real Performance.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  We don't chase hype. We architect resilient systems using proven, high-concurrency technologies designed for 99.99% availability and sub-millisecond execution.
                </p>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Stack 1 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">FRONTEND &amp; SAAS</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      Web &amp; Mobile Portals
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      High-converting trader cabinets, institutional backoffices, and responsive mobile trader apps.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">React 19</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Next.js</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">TypeScript</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Tailwind</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/services/software-engineering')}
                  className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 hover:underline cursor-pointer pt-6 border-t border-slate-200/80 dark:border-white/5 mt-4"
                >
                  <span>Explore Software Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Stack 2 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">AI &amp; DATA</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      AI &amp; Automation
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Document intelligence pipelines, knowledge RAG vector engines, and automated triage workers.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Python</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">pgvector</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">LangChain</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">FastAPI</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/services/ai-automation')}
                  className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 hover:underline cursor-pointer pt-6 border-t border-slate-200/80 dark:border-white/5 mt-4"
                >
                  <span>Explore AI &amp; Automation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Stack 3 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">TRADING &amp; WEB3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      Execution &amp; Ledgers
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Sub-millisecond FIX 4.4 routing, MT4/MT5 bridge adapters, non-custodial wallets, and token contracts.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">FIX Protocol</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">WebSockets</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Solidity</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Go</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/solutions')}
                  className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 hover:underline cursor-pointer pt-6 border-t border-slate-200/80 dark:border-white/5 mt-4"
                >
                  <span>Explore Trading Engines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Stack 4 */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">INFRA &amp; CLOUD</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      Cloud &amp; DevOps
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Resilient Kubernetes clusters, partitioned PostgreSQL databases, Redis streams, and CI/CD automation.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Docker</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Kubernetes</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">PostgreSQL</span>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 dark:bg-[#161F28] dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Redis</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/services/cloud-infrastructure')}
                  className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 hover:underline cursor-pointer pt-6 border-t border-slate-200/80 dark:border-white/5 mt-4"
                >
                  <span>Explore Cloud Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Existing Stack Integration Banner */}
            <div className="relative z-10 p-5 rounded-2xl bg-slate-100/80 border border-slate-200 dark:bg-[#11171E] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-950 dark:text-white">Bring the systems you already run.</strong> We review your existing APIs, databases, and third-party vendors to build seamless integration layers.
                </p>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-md shadow-emerald-600/20"
              >
                Discuss Technical Stack
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 6: LEADERSHIP & CORE ENGINEERING DISCIPLINES (ROSTER STYLE) */}
        <section id="leadership-team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36 pt-10 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="relative isolate overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] sm:p-10 lg:p-12 space-y-10">
            <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-[90px] dark:bg-teal-500/15" />

            <div className="pb-8 border-b border-slate-100 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                  <span className="h-px w-7 bg-emerald-500" /> CROSS-FUNCTIONAL TEAMS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Senior Engineering Disciplines on Every Engagement.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  No junior handoffs. Every AyaamX project is spearheaded by dedicated domain architects, lead systems engineers, and quality assurance directors.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Discipline 1 */}
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-b from-slate-50 to-white dark:from-[#11171E] dark:to-[#0D0D12] p-7 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      LEADERSHIP
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    Product &amp; Delivery Directors
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Senior technical leads who translate your commercial goals into strict sprint deliverables, track milestone velocity, and ensure on-time delivery.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 space-y-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Clear scope &amp; sprint roadmaps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Direct executive communication</span>
                  </div>
                </div>
              </div>

              {/* Discipline 2 */}
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-b from-slate-50 to-white dark:from-[#11171E] dark:to-[#0D0D12] p-7 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      CORE ARCHITECTURE
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    Principal Systems Architects
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Specialists in high-frequency trading engines, financial transaction isolation, microservices topologies, and cryptographic key management.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 space-y-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Sub-50ms execution topology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Zero-loss transaction ledgers</span>
                  </div>
                </div>
              </div>

              {/* Discipline 3 */}
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-b from-slate-50 to-white dark:from-[#11171E] dark:to-[#0D0D12] p-7 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      QUALITY &amp; SRE
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    Site Reliability &amp; QA Engineers
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Automated load-testing engineers who simulate thousands of concurrent orders, pen-test endpoints, and write production recovery runbooks.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 space-y-2 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Automated stress &amp; soak testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Complete operational runbooks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: CAREERS / TALENT (HIRING NOTICEBOARD STYLE) */}
        <section id="careers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36 pt-10 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="relative isolate overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] sm:p-10 lg:p-12 space-y-8">
            <div className="pointer-events-none absolute -left-20 -bottom-20 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px] dark:bg-emerald-500/15" />

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 pb-8 border-b border-slate-100 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                  <span className="h-px w-7 bg-emerald-500" /> JOIN OUR TEAM
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Build the Next Generation of Financial Software.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  We are hiring engineers, architects, and technical leaders who want to solve high-frequency, complex engineering problems.
                </p>
              </div>

              <div className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-lg border border-emerald-500/20 shrink-0">
                2 Active Openings
              </div>
            </div>

            {/* Job Openings Noticeboard */}
            <div className="space-y-4">
              {/* Job 1 */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-[#11171E] hover:border-emerald-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">COMMERCIAL &amp; GROWTH</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Ahmedabad / Hybrid</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                    Solutions Architect &amp; Sales Director
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Work directly with institutional clients, hedge funds, and prop trading founders to scope technical architecture requirements and turnkey software licenses.
                  </p>
                </div>
                <a
                  href="mailto:hr@aayaamx.com?subject=Application:%20Solutions%20Architect%20%26%20Sales%20Director"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Job 2 */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-[#11171E] hover:border-emerald-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">ENGINEERING</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Ahmedabad / On-Site</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                    Senior Systems Engineer (Go / TypeScript / Python)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Architect low-latency financial order bridges, real-time WebSockets trade streaming engines, and resilient PostgreSQL/Redis event pipelines.
                  </p>
                </div>
                <a
                  href="mailto:hr@aayaamx.com?subject=Application:%20Senior%20Systems%20Engineer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  <span>Apply for Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Channel Strip */}
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">
                  Don't see your exact role? Send your CV and GitHub portfolio directly to <a href="mailto:hr@aayaamx.com" className="font-mono text-emerald-600 dark:text-emerald-400 font-bold underline">hr@aayaamx.com</a>.
                </span>
              </div>
              <a
                href="mailto:hr@aayaamx.com"
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shrink-0 transition-all cursor-pointer"
              >
                Send CV to HR
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 8: CONTACT US / PREPARE A PROJECT BRIEF */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 pt-4">
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] sm:p-8 lg:p-10 space-y-8">
            <div className="pointer-events-none absolute -right-20 -bottom-20 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px] dark:bg-emerald-500/15" />

            <div className="pb-6 border-b border-slate-100 dark:border-white/10">
              <div className="max-w-2xl space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">GET IN TOUCH</span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Tell Us What You Want to Build.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Tell us what you want to build, who will use it and which tools it needs to connect to. Share any timeline or constraints that will shape the first release.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Contact Details Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-[#11171E] border border-slate-200/90 dark:border-white/10 space-y-4 shadow-sm">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>CORPORATE HEADQUARTERS</span>
                  </h3>

                  <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300 font-mono">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Technical Inquiries</span>
                        <a href="mailto:support@aayaamx.com" className="hover:text-emerald-500 text-slate-950 dark:text-white font-bold text-sm">
                          support@aayaamx.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Phone Desk</span>
                        <a href="tel:+919041671006" className="hover:text-emerald-500 text-slate-950 dark:text-white font-bold text-sm">
                          +91 90416 71006
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/5 space-y-1.5 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] font-mono flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      <span>REGISTERED OFFICE</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-xs">
                      A-1108, Privilon, B/h. Iscon Temple, Ambli-Bopal Road, Bodakdev, Ahmedabad-380054, Gujarat, India
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/5 space-y-1 text-xs font-mono">
                    <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-500" />
                      <span>BUSINESS HOURS</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Mon – Fri: 10:00 AM – 7:00 PM (IST)
                    </div>
                    <div className="text-slate-500 text-[11px]">
                      Sat – Sun: Closed (Emergency P1 On-Call Active)
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50/70 dark:bg-[#11171E] border border-slate-200 dark:border-white/10 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Regulatory &amp; Service Scope:</span> {disclaimer}
                </div>
              </div>

              {/* Prepare a Project Brief Form Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-[#11171E] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-5">
                <div className="space-y-1 pb-3 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
                      Prepare a Project Brief
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold uppercase">Fast Track</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Start with one workflow, a product idea or an existing system you want to improve. Review your brief in your email app before sending.
                  </p>
                </div>

                <form onSubmit={handlePrepareBrief} className="space-y-5 text-sm font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">Your name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#141C24] border border-slate-300/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">Work email *</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#141C24] border border-slate-300/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">Company</label>
                      <input
                        type="text"
                        placeholder="Organization Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#141C24] border border-slate-300/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-xs"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">I’m interested in</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#141C24] border border-slate-300/80 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-xs cursor-pointer"
                      >
                        <option>Software &amp; Product Development</option>
                        <option>AI &amp; Automation</option>
                        <option>Fintech &amp; Trading</option>
                        <option>Blockchain &amp; Web3</option>
                        <option>Cloud &amp; Integration</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Planning */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#141C24]/80 border border-slate-200/90 dark:border-white/10 shadow-xs space-y-3">
                    <div className="flex items-center justify-between pb-1">
                      <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                        <span>PROJECT PLANNING PARAMETERS</span>
                      </div>
                      <span className="text-[11px] font-sans text-slate-500 dark:text-slate-400">Optional</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300">Project Budget (USD)</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#18222C] border border-slate-300/80 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 text-xs transition-colors cursor-pointer"
                        >
                          <option>Select if known</option>
                          <option>$5,000–$24,999</option>
                          <option>$25,000–$49,999</option>
                          <option>$50,000–$249,999</option>
                          <option>$250,000–$999,999</option>
                          <option>$1 million or more</option>
                          <option>Budget under review</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300">Target Deployment</label>
                        <select
                          value={formData.deployment}
                          onChange={(e) => setFormData({ ...formData, deployment: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#18222C] border border-slate-300/80 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 text-xs transition-colors cursor-pointer"
                        >
                          <option>Select if known</option>
                          <option>As soon as possible</option>
                          <option>Within 3 months</option>
                          <option>3–6 months</option>
                          <option>More than 6 months</option>
                          <option>Timeline under review</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300">Environment</label>
                        <select
                          value={formData.environment}
                          onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#18222C] border border-slate-300/80 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 text-xs transition-colors cursor-pointer"
                        >
                          <option>Select if known</option>
                          <option>Cloud (AWS/GCP/Azure)</option>
                          <option>On-premises / Equinix</option>
                          <option>Hybrid Setup</option>
                          <option>To be determined</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-0.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">What would you like to build? *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about the workflows, customer journeys, integrations, or operational bottlenecks you're solving..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#141C24] border border-slate-300/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-xs leading-relaxed"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare My Project Brief</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed font-sans pt-0.5">
                    This form prepares an email draft in your local client. Nothing is sent automatically. You can also email directly at{' '}
                    <a href="mailto:support@aayaamx.com" className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500">
                      support@aayaamx.com
                    </a>.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>

      </div>

    </div>
  );
};
