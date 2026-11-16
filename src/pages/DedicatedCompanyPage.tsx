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
      <div className="space-y-20 py-14 sm:space-y-28 sm:py-20">

        {/* SECTION 1: ABOUT AYAAMX / WHAT WE BUILD */}
        <section id="about" className="mx-auto max-w-7xl scroll-mt-36 px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                <span className="h-px w-7 bg-emerald-500" /> WHAT WE BUILD
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 dark:text-white sm:text-4xl">
                Products for people. Systems for the work behind them.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
              We design, build and support software that businesses can operate today and adapt as their needs change.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4 xl:gap-6">
            <article className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0D0D12]">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-[#111b22]">
                <img src="/capabilities/customer-products-photo.png" alt="Product designer and engineer reviewing a customer web app on laptop and mobile" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">Software engineering</span>
              </div>
              <div className="flex min-h-[230px] flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-400">01 / CUSTOMER PRODUCTS</span>
                  <Code2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Customer Products</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Build web, mobile and SaaS applications around the tasks customers need to complete.
                </p>
                <button onClick={() => navigate('/services/software-engineering')} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-600 dark:text-emerald-400">
                  Explore Software Engineering <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0D0D12]">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-[#111b22]">
                <img src="/capabilities/trading-platforms-photo.png" alt="Financial technology team reviewing market charts and trading orders across monitors" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">Financial technology</span>
              </div>
              <div className="flex min-h-[230px] flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-400">02 / TRADING SYSTEMS</span>
                  <Cpu className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">Trading & Financial Platforms</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Connect trader portals, brokerage operations and execution systems so teams can follow account and order activity.
                </p>
                <button onClick={() => navigate('/services/trading-technology')} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-600 dark:text-emerald-400">
                  Explore Trading Technology <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0D0D12]">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-[#111b22]">
                <img src="/capabilities/ai-integrations-photo.png" alt="Operations team reviewing an AI-assisted document and validation workflow" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">AI · Blockchain · APIs</span>
              </div>
              <div className="flex min-h-[230px] flex-col p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-400">03 / CONNECTED SYSTEMS</span>
                  <Workflow className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">AI, Blockchain & Integrations</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Add reviewable AI workflows, wallet-enabled features and the APIs that connect them to existing products.
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
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Ahmedabad, India</span>
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider border border-emerald-500/20">
                  <Target className="w-3.5 h-3.5" />
                  <span>VISION &amp; PURPOSE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black tracking-tight leading-[1.12] text-slate-950 dark:text-white">
                  Build Software People Can Rely On.
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
                  Our aim is to help businesses turn ambitious ideas into secure, maintainable digital products that solve problems their customers and teams face every day.
                </p>
              </div>

              {/* Mission Statement Card */}
              <div className="relative overflow-hidden rounded-2xl border border-emerald-600/30 bg-gradient-to-br from-emerald-900/[0.06] via-white to-teal-900/[0.04] p-7 dark:border-emerald-500/25 dark:from-emerald-950/40 dark:via-[#0E151A] dark:to-teal-950/30 shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    OUR CORE MISSION
                  </span>
                  <Sparkles className="w-4 h-4 text-emerald-500 opacity-70" />
                </div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
                  Design, build and support software that businesses can operate today and adapt as their needs change.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  <span>Architecture · Execution · Support</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">AyaamX Quality Standard</span>
                </div>
              </div>
            </div>

            {/* 3 Value Pillars */}
            <div className="pt-10">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    OPERATING PRINCIPLES
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    What Guides the Work
                  </h3>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
                  Engineering Foundations
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                {/* Pillar 1 */}
                <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                        01
                      </div>
                      <Compass className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Innovation With a Purpose
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Start with a problem worth solving. Choose technology based on what it helps the business or user do, rather than adopting trends for their own sake.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Real-world business utility</span>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                        02
                      </div>
                      <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Integrity in Delivery
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Make scope, trade-offs and progress transparent so teams make informed decisions with clear milestones as the product takes shape.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Open, auditable execution</span>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                        03
                      </div>
                      <Target className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Impact People Can See
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Define what should improve quantitatively and review real workflows with end-users before expanding or over-engineering the product.
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Measured performance outcomes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: OUR APPROACH */}
        <section id="our-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36 pt-10 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="relative isolate overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] sm:p-10 lg:p-12 space-y-10">
            <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-[90px] dark:bg-teal-500/15" />

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider border border-emerald-500/20">
                  <Workflow className="w-3.5 h-3.5" />
                  <span>ENGINEERING LIFECYCLE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Know What We’re Building and What Comes Next.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Start with the user, the business goal and the systems involved. Review working software as it takes shape, then plan the transition to everyday use.
                </p>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#11171E] border border-slate-200/80 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>3-Stage Milestone Delivery</span>
              </div>
            </div>

            {/* Stepped Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="group relative rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">01</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">Discovery &amp; Scope</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Align &amp; Scope
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Map the main workflow, agree what belongs in the first release and identify technical dependencies and data boundaries early.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 space-y-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Workflow architecture map</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Sprint zero technical specs</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">02</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">Iterative Sprints</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Build &amp; Review
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Review working versions continuously, test integration APIs and verify how the software handles expected actions, volume, and edge exceptions.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 space-y-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Bi-weekly staging demos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Integration stress tests</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">03</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">Production Rollout</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Launch &amp; Handover
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Agree the rollout sequence, verify the production setup, configure operational monitoring, and share what your team needs to operate the product.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 space-y-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Live environment verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Full code &amp; ops handover</span>
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
                  <span className="font-bold text-slate-900 dark:text-white block sm:inline">Security Built In:</span>
                  <span className="text-slate-600 dark:text-slate-300 sm:ml-1.5">Audited delivery practices incorporating the NIST Framework standards.</span>
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

        {/* SECTION 5: TECHNOLOGY EXPERTISE */}
        <section id="technology-expertise" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36 pt-10 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="relative isolate overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] sm:p-10 lg:p-12 space-y-10">
            <div className="pointer-events-none absolute -left-20 -top-24 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px] dark:bg-emerald-500/15" />

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider border border-emerald-500/20">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>STACK CAPABILITIES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Choose Technology Around What the Product Needs.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  AyaamX works across customer interfaces, backend systems, cloud infrastructure and specialised platforms. We scope the stack around your users, data and existing tools.
                </p>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#11171E] border border-slate-200/80 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 shrink-0">
                <Layers className="w-4 h-4 text-emerald-500" />
                <span>Modern Cloud-Native Tech Stack</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stack 1 */}
              <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">LAYER 01</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Web, Mobile &amp; SaaS
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Build customer portals, mobile applications and multi-tenant workspaces tailored to team roles.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">React 19</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Next.js</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">TypeScript</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Tailwind</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/services/software-engineering')}
                  className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 hover:underline cursor-pointer pt-6 border-t border-slate-200/80 dark:border-white/5 mt-4"
                >
                  <span>Software Engineering</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Stack 2 */}
              <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">LAYER 02</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      AI &amp; Automation
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Connect knowledge sources, extract document fields and route exception cases for human review.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Python</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">pgvector</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">LangChain</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">FastAPI</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/services/ai-automation')}
                  className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 hover:underline cursor-pointer pt-6 border-t border-slate-200/80 dark:border-white/5 mt-4"
                >
                  <span>AI &amp; Automation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Stack 3 */}
              <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">LAYER 03</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Trading &amp; Web3
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Integrate institutional order routing, FIX protocols, wallet events and on-chain settlement states.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">FIX Protocol</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">WebSockets</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Solidity</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Ethers.js</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/solutions')}
                  className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 hover:underline cursor-pointer pt-6 border-t border-slate-200/80 dark:border-white/5 mt-4"
                >
                  <span>Trading &amp; Web3 Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Stack 4 */}
              <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">LAYER 04</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Cloud &amp; APIs
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Deploy resilient backend architectures, CI/CD pipelines, container orchestration and health telemetry.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[11px]">
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Node.js</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Docker</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">PostgreSQL</span>
                    <span className="px-2.5 py-1 rounded-md bg-white dark:bg-[#161F28] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium">Kubernetes</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/services/cloud-infrastructure')}
                  className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 hover:underline cursor-pointer pt-6 border-t border-slate-200/80 dark:border-white/5 mt-4"
                >
                  <span>Cloud &amp; DevOps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Existing Stack Integration Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-slate-50 to-slate-50 dark:from-emerald-950/30 dark:via-[#11171E] dark:to-[#11171E] border border-emerald-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-950 dark:text-white">Bring the systems you already use.</strong> We review existing APIs, databases, and third-party services before proposing integrations or phased modernization.
                </p>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shrink-0 cursor-pointer"
              >
                Discuss Technical Stack
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 6: LEADERSHIP & TEAM */}
        <section id="leadership-team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36 pt-10 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="relative isolate overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] sm:p-10 lg:p-12 space-y-10">
            <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-[90px] dark:bg-teal-500/15" />

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider border border-emerald-500/20">
                  <Users className="w-3.5 h-3.5" />
                  <span>ORGANIZATIONAL GOVERNANCE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Meet the Roles Behind Your Project.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  A software project needs clear ownership across product decisions, technical design and delivery. Here is what those responsibilities look like when you work with AyaamX.
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#11171E] border border-slate-200/80 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Dedicated Technical Ownership</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Role 1 */}
              <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Target className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300">Strategy</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Product &amp; Delivery Management
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Clarify priorities, organise sprint reviews and keep cross-functional engineering teams focused on the agreed first release milestones.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 space-y-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Sprint milestone tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Stakeholder communications</span>
                  </div>
                </div>
              </div>

              {/* Role 2 */}
              <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300">Architecture</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Technical Architecture
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Translate business requirements into robust system boundaries, secure integration contracts, schema models, and cloud infrastructure choices.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 space-y-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Data model &amp; API design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Security &amp; latency SLAs</span>
                  </div>
                </div>
              </div>

              {/* Role 3 */}
              <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300">Execution</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Engineering &amp; Quality
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Build and test user workflows, automate unit and regression suites, perform load testing, and prepare operational runbooks.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 space-y-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Automated test coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Full operational runbooks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: CAREERS */}
        <section id="careers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36 pt-10 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="relative isolate overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] sm:p-10 lg:p-12 space-y-10">
            <div className="pointer-events-none absolute -left-20 -bottom-20 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px] dark:bg-emerald-500/15" />

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider border border-emerald-500/20">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>CAREERS AT AYAAMX</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Help Businesses Build and Use Better Software.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  AyaamX works across custom software, fintech platforms, APIs and digital products. We are continually seeking ambitious engineering talent and technical leaders.
                </p>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#11171E] border border-slate-200/80 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Ahmedabad HQ &amp; Hybrid Opportunities</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Career Path 1 */}
              <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">Commercial &amp; Growth</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Sales, Solutions &amp; Marketing
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Help high-growth firms understand which platforms and engineering services fit their technical requirements, from initial technical discovery to delivery scope agreements.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Location: Ahmedabad / Hybrid</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Actively Hiring</span>
                </div>
              </div>

              {/* Career Path 2 */}
              <div className="group rounded-2xl border border-slate-200/90 bg-slate-50/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-[#11171E] dark:hover:bg-[#141C24] dark:hover:border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">Engineering &amp; Mentorship</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Senior Engineers &amp; Technical Mentors
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Architect mission-critical applications and mentor promising developers across full-stack TypeScript, Go, Python, smart contracts, and microservices.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Location: Ahmedabad / On-Site</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Actively Hiring</span>
                </div>
              </div>
            </div>

            {/* Application Direct Channel */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-slate-50 to-slate-50 dark:from-emerald-950/30 dark:via-[#11171E] dark:to-[#11171E] border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 text-center sm:text-left">
                <div className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">
                  Ready to shape high-throughput systems?
                </div>
                <div>
                  Email your CV &amp; portfolio to <a href="mailto:hr@aayaamx.com" className="font-mono text-emerald-600 dark:text-emerald-400 font-bold underline">hr@aayaamx.com</a> with the target role in your subject line.
                </div>
              </div>

              <a
                href="mailto:hr@aayaamx.com"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20 shrink-0 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send CV to HR</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 8: CONTACT US / PREPARE A PROJECT BRIEF */}
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-36 pt-10 border-t border-slate-200 dark:border-[#1F1F28]">
          <div className="relative isolate overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition-all dark:border-white/10 dark:bg-[#0D0D12] sm:p-10 lg:p-12 space-y-10">
            <div className="pointer-events-none absolute -right-20 -bottom-20 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[90px] dark:bg-emerald-500/15" />

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100 dark:border-white/10">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider border border-emerald-500/20">
                  <Phone className="w-3.5 h-3.5" />
                  <span>START A CONVERSATION</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
                  Tell Us What You Want to Build.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Tell us what you want to build, who will use it and which tools it needs to connect to. Share any timeline or constraints that will shape the first release.
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#11171E] border border-slate-200/80 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 shrink-0">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>Direct Executive Response &lt; 24h</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Contact Details Column */}
              <div className="lg:col-span-5 space-y-5">
                <div className="p-7 rounded-2xl bg-slate-50/70 dark:bg-[#11171E] border border-slate-200/90 dark:border-white/10 space-y-5 shadow-sm">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>CORPORATE HEADQUARTERS</span>
                  </h3>

                  <div className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
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

                  <div className="pt-4 border-t border-slate-200 dark:border-white/5 space-y-2 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] font-mono flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      <span>REGISTERED OFFICE</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-xs">
                      A-1108, Privilon, B/h. Iscon Temple, Ambli-Bopal Road, Bodakdev, Ahmedabad-380054, Gujarat, India
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-white/5 space-y-1 text-xs font-mono">
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
              <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-slate-50/70 dark:bg-[#11171E] border border-slate-200/90 dark:border-white/10 shadow-sm space-y-6">
                <div className="space-y-1.5 pb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      Prepare a Project Brief
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold uppercase">Fast Track</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Start with one workflow, a product idea or an existing system you want to improve. Review your brief in your email app before sending.
                  </p>
                </div>

                <form onSubmit={handlePrepareBrief} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700 dark:text-slate-300">Your name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#141C24] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700 dark:text-slate-300">Work email *</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#141C24] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700 dark:text-slate-300">Company</label>
                      <input
                        type="text"
                        placeholder="Organization Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#141C24] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-700 dark:text-slate-300">I’m interested in</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#141C24] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
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
                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-3">
                    <div className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>PROJECT PLANNING PARAMETERS</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-700 dark:text-slate-300">Project Budget (USD)</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#141C24] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 text-[11px] transition-colors"
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
                        <label className="font-bold text-slate-700 dark:text-slate-300">Target Deployment</label>
                        <select
                          value={formData.deployment}
                          onChange={(e) => setFormData({ ...formData, deployment: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#141C24] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 text-[11px] transition-colors"
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
                        <label className="font-bold text-slate-700 dark:text-slate-300">Deployment Environment</label>
                        <select
                          value={formData.environment}
                          onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#141C24] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 text-[11px] transition-colors"
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

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 dark:text-slate-300">What would you like to build? *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about the workflows, customer journeys, integrations, or operational bottlenecks you're solving..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#141C24] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-emerald-600/25 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Prepare My Project Brief</span>
                  </button>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-relaxed font-mono">
                    This form prepares an email draft in your local client. Nothing is sent automatically. You can also email directly at{' '}
                    <a href="mailto:support@aayaamx.com" className="text-emerald-600 dark:text-emerald-400 font-bold underline">
                      support@aayaamx.com
                    </a>.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* 4. FOOTER CONVERSION CTA */}
      <CTASection onOpenAccount={onOpenAccount} />

    </div>
  );
};
