import React from 'react';
import { useRouter } from '../../router';
import { getProductPage } from '../../data/aayaamx/product-pages';
import { getProductPreview } from '../../data/aayaamx/product-previews';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleDot,
  Clock3,
  Database,
  FileCheck2,
  Layers3,
  LockKeyhole,
  Search,
  ShieldCheck,
  Users,
  WalletCards,
  Workflow,
} from 'lucide-react';
import { CTASection } from '../../components/CTA/CTASection';

interface ProductDetailPageProps {
  onOpenAccount: () => void;
  productKey?: string;
}

const productViews: Record<string, { nav: string[]; icon: React.ElementType; focus: string; summary: Array<[string, string]> }> = {
  'broker-backoffice': {
    nav: ['Review queues', 'Client accounts', 'IB network', 'Team access'],
    icon: WalletCards,
    focus: 'Route account and funding requests to the right reviewer.',
    summary: [['Queue', '12 to review'], ['IB structure', '3 levels'], ['Access', 'Role-based']],
  },
  'prop-trading-management': {
    nav: ['Challenges', 'Trader accounts', 'Rule checks', 'Payout review'],
    icon: Activity,
    focus: 'Follow challenge progress and send exceptions for review.',
    summary: [['Challenges', 'In progress'], ['Rule checks', 'Monitored'], ['Payouts', 'Review queue']],
  },
  'custom-product-ecosystems': {
    nav: ['Customer app', 'Operations', 'Shared services', 'Delivery map'],
    icon: Layers3,
    focus: 'Keep customer, staff and partner workflows in sync.',
    summary: [['Products', 'Customer + staff'], ['Workflows', 'Connected'], ['Services', 'Shared data']],
  },
};

const productHeroArt: Record<string, { src: string; alt: string }> = {
  'broker-backoffice': {
    src: '/broker-backoffice-hero.png',
    alt: 'Broker backoffice dashboard with operations queues, introducing broker network and role permissions',
  },
  'prop-trading-management': {
    src: '/prop-trading-management-hero.png',
    alt: 'Prop trading dashboard with challenge progress, drawdown rule monitoring and payout review',
  },
  'custom-product-ecosystems': {
    src: '/custom-product-ecosystems-hero.png',
    alt: 'Connected product ecosystem across a customer app, team workspace and shared services',
  },
  'enterprise-saas': {
    src: '/enterprise-saas-hero.png',
    alt: 'Multi-tenant enterprise workspace with teams, tasks and role-based permissions',
  },
  'ai-powered': {
    src: '/ai-powered-products-hero.png',
    alt: 'AI workflow assistant with extracted details, draft response and human review',
  },
  'blockchain-wallet': {
    src: '/blockchain-wallet-platforms-hero.png',
    alt: 'Wallet operations dashboard showing multi-chain deposits, confirmations and settlements',
  },
};

const moduleIcons = [Workflow, Users, ShieldCheck];

export const UniversalProductPlatformDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenAccount, productKey }) => {
  const { currentPath, navigate } = useRouter();
  const path = productKey || currentPath;
  const data = getProductPage(path);
  const preview = getProductPreview(path);
  const slug = path.slice('/products/'.length);
  const heroArt = productHeroArt[slug];
  const fullScreenHero = ['broker-backoffice', 'ai-powered', 'blockchain-wallet'].includes(slug);
  const view = productViews[slug] || {
    nav: ['Overview', 'Workflows', 'Integrations', 'Access'],
    icon: Layers3,
    focus: 'Connect the key steps in your team’s workflow.',
    summary: [['Workspace', 'Configured'], ['Workflows', 'Connected'], ['Access', 'Role-based']],
  };
  const PreviewIcon = view.icon;

  if (!data || !preview) {
    return (
      <div className="min-h-[60vh] grid place-items-center px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Product page unavailable</h1>
          <button onClick={() => navigate('/products')} className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white">
            Browse products <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans text-slate-900 dark:bg-[#090e13] dark:text-slate-100">
      <section className={`relative isolate overflow-hidden bg-[#f5faf7] dark:bg-[#0b1217] ${fullScreenHero ? 'min-h-[calc(100svh-4rem)]' : ''}`}>
        <div className="pointer-events-none absolute -right-24 -top-36 -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald-300/20 blur-[110px] dark:bg-emerald-500/10" />
        <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-teal-200/25 blur-[100px] dark:bg-teal-500/10" />
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-4 sm:px-8 sm:pb-12 sm:pt-6 lg:px-10 lg:pb-14 lg:pt-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 sm:mb-6">
            <button onClick={() => navigate('/')} className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-300">Home</button>
            <ChevronRight className="h-3.5 w-3.5" />
            <button onClick={() => navigate('/products')} className="transition-colors hover:text-emerald-700 dark:hover:text-emerald-300">Products</button>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="truncate text-slate-800 dark:text-slate-200">{data.title}</span>
          </div>

          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12 xl:gap-14">
            <div className="max-w-2xl">
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl lg:text-[3.65rem]">
                {data.headline}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
                {data.intro}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
                <button onClick={onOpenAccount} className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-[#0b1217]">
                  Talk through your workflow <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                {data.related && (
                  <button onClick={() => navigate(data.related)} className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white/80 hover:text-emerald-800 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-emerald-300">
                    View related architecture <ArrowUpRight className="h-4 w-4" />
                  </button>
                )}
              </div>

              {!fullScreenHero && (
                <div className="mt-6 flex items-start gap-3 border-t border-slate-200/80 pt-4 dark:border-white/10 sm:mt-7 sm:pt-4">
                  <div className="mt-0.5 rounded-lg bg-white p-2 text-emerald-700 shadow-sm dark:bg-white/5 dark:text-emerald-300"><BadgeCheck className="h-4 w-4" /></div>
                  <p className="max-w-lg text-xs leading-5 text-slate-500 dark:text-slate-400"><span className="font-semibold text-slate-800 dark:text-slate-200">Built around your operating model.</span> {data.audience}</p>
                </div>
              )}
            </div>

            {heroArt ? (
              <div className="mx-auto w-full max-w-[46rem] lg:ml-auto lg:-translate-y-4 xl:-translate-y-6">
                <div className="flex aspect-[16/10] w-full items-center justify-center">
                  <img src={heroArt.src} alt={heroArt.alt} className="block h-full w-full object-contain drop-shadow-sm" />
                </div>
              </div>
            ) : (
            <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-200/40 via-white/0 to-teal-200/50 blur-2xl dark:from-emerald-500/10 dark:to-teal-500/10" />
              <div className="relative rounded-t-[1.55rem] border-x-[7px] border-t-[7px] border-[#172128] bg-[#172128] p-[7px] pb-[9px] shadow-[0_28px_75px_-32px_rgba(15,40,34,0.4)] dark:border-[#263139] dark:bg-[#263139]">
                <span aria-hidden="true" className="absolute left-1/2 top-[2px] h-1 w-1 -translate-x-1/2 rounded-full bg-slate-500" />
                <div className="overflow-hidden rounded-t-[1rem] bg-white dark:bg-[#101920]">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/10 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"><PreviewIcon className="h-5 w-5" /></div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{preview.title}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">Sample workspace · {preview.reference}</p>
                    </div>
                  </div>
                  <button aria-label="Search sample workspace" className="rounded-lg border border-slate-200 p-2 text-slate-500 dark:border-white/10 dark:text-slate-400"><Search className="h-4 w-4" /></button>
                </div>

                <div className="grid grid-cols-3 gap-2 px-4 pt-4 sm:px-5">
                  {view.summary.map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-slate-100 bg-[#fbfdfc] px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.025]">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">{label}</p>
                      <p className="mt-1 text-[11px] font-semibold text-slate-800 dark:text-slate-200">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid min-h-[330px] sm:grid-cols-[158px_1fr]">
                  <aside className="hidden border-r border-slate-100 bg-slate-50/70 p-3 dark:border-white/10 dark:bg-white/[0.025] sm:block">
                    <div className="px-2 pb-3 pt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">Workspace</div>
                    <div className="space-y-1">
                      {view.nav.map((item, index) => (
                        <div key={item} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium ${index === 0 ? 'bg-emerald-100/80 text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-200' : 'text-slate-500 dark:text-slate-400'}`}>
                          {index === 0 ? <CircleDot className="h-3.5 w-3.5" /> : <span className="h-3.5 w-3.5 rounded border border-current opacity-60" />}
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-7 rounded-xl bg-white p-3 dark:bg-white/[0.04]">
                      <div className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-slate-400"><LockKeyhole className="h-3 w-3" /> Access</div>
                      <div className="mt-2 text-[11px] font-semibold text-slate-700 dark:text-slate-200">Role controlled</div>
                      <div className="mt-1 text-[10px] leading-4 text-slate-500">Actions follow your approval rules.</div>
                    </div>
                  </aside>

                  <div className="p-4 sm:p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-400">Current workflow</p>
                        <p className="mt-1.5 max-w-sm text-sm font-semibold text-slate-900 dark:text-white">{view.focus}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Example flow</span>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {preview.states.map((state, index) => (
                        <div key={state} className="rounded-xl border border-slate-100 bg-slate-50/70 px-2.5 py-3 dark:border-white/10 dark:bg-white/[0.025]">
                          <div className={`mb-2 grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold ${index === preview.states.length - 1 ? 'bg-emerald-600 text-white' : 'bg-white text-slate-500 dark:bg-white/10 dark:text-slate-300'}`}>{index === preview.states.length - 1 ? <Check className="h-3.5 w-3.5" /> : `0${index + 1}`}</div>
                          <p className="text-[10px] font-semibold leading-4 text-slate-700 dark:text-slate-200">{state}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-xl border border-slate-100 dark:border-white/10">
                      <div className="flex items-center justify-between border-b border-slate-100 px-3.5 py-2.5 dark:border-white/10">
                        <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300">Activity record</span>
                        <span className="inline-flex items-center gap-1 text-[9px] text-slate-400"><Clock3 className="h-3 w-3" /> Review trail</span>
                      </div>
                      {preview.records.map((record, index) => (
                        <div key={record} className="flex items-start gap-2.5 px-3.5 py-2.5">
                          <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${index === 0 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300' : 'bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400'}`}>
                            {index === 0 ? <FileCheck2 className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                          </span>
                          <p className="text-[10px] leading-4 text-slate-600 dark:text-slate-300">{record}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {preview.actions.map(action => <span key={action} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-[9px] font-semibold text-white dark:bg-emerald-600">{action}<ArrowRight className="h-3 w-3" /></span>)}
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div aria-hidden="true" className="relative mx-[-4%] h-4 rounded-b-[50%] border-x border-b border-slate-300 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 shadow-md dark:border-slate-600 dark:from-slate-500 dark:via-slate-400 dark:to-slate-600" />
              <div aria-hidden="true" className="mx-[43%] h-[3px] rounded-b-full bg-slate-300 dark:bg-slate-500" />
              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-slate-400"><Database className="h-3 w-3" /> Illustrative workflow preview · Sample data</div>
            </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white dark:border-white/10 dark:bg-[#090e13]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-5 py-6 sm:grid-cols-3 sm:px-8 lg:px-10">
          {[
            { icon: ShieldCheck, title: 'Clear ownership', text: 'Define who can view, review and update each record.' },
            { icon: Workflow, title: 'Connected handoffs', text: 'Keep teams aligned as work moves between systems.' },
            { icon: LockKeyhole, title: 'Reviewable activity', text: 'Keep decisions and exceptions visible to the right people.' },
          ].map((item, index) => {
            const Icon = item.icon;
            return <div key={item.title} className={`flex items-start gap-3 py-4 sm:px-5 ${index > 0 ? 'sm:border-l sm:border-slate-100 dark:sm:border-white/10' : ''}`}>
              <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"><Icon className="h-4 w-4" /></div>
              <div><p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p><p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{item.text}</p></div>
            </div>;
          })}
        </div>
      </section>

      <section className="bg-[#fafcfb] py-16 dark:bg-[#0b1116] sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">A practical operating flow</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">From first request to a recorded outcome.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">Start with one real workflow. Make the handoffs, permissions and exceptions clear before connecting more systems.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {data.demo.map((step, index) => (
              <article key={step[0]} className="relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_-24px_rgba(15,23,42,0.24)] dark:border-white/10 dark:bg-[#101920] sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-300">STEP 0{index + 1}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">{index === 0 ? <CircleDot className="h-4 w-4" /> : index === 1 ? <Users className="h-4 w-4" /> : <Check className="h-4 w-4" />}</span>
                </div>
                <h3 className="mt-7 text-lg font-semibold text-slate-900 dark:text-white">{step[0]}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{step[1]}</p>
                {index < data.demo.length - 1 && <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-1 text-slate-400 dark:border-white/10 dark:bg-[#101920] md:block"><ChevronRight className="h-4 w-4" /></div>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-[#090e13] sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">Platform capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">The parts your team needs to work together.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {data.modules.map((module, index) => {
              const Icon = moduleIcons[index % moduleIcons.length];
              return <article key={module[0]} className="rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/[0.04] dark:border-white/10 dark:bg-[#101920] dark:hover:shadow-black/20">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-base font-semibold text-slate-900 dark:text-white">{module[0]}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{module[1]}</p>
              </article>;
            })}
          </div>

          <div className="mt-6 grid gap-5 rounded-2xl bg-[#10231d] p-6 text-white sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <div className="hidden rounded-xl bg-white/10 p-3 text-emerald-300 sm:block"><Database className="h-5 w-5" /></div>
              <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">Integration planning</p><p className="mt-2 max-w-3xl text-sm leading-6 text-white/75">{data.integration}</p></div>
            </div>
            <button onClick={onOpenAccount} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-50">Plan the first workflow <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#fafcfb] py-14 dark:border-white/10 dark:bg-[#0b1116] sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">A few details</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Questions before we scope it?</h2>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-[#101920] sm:p-8">
            <div className="flex items-start gap-3"><div className="mt-0.5 rounded-lg bg-emerald-50 p-2 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"><ShieldCheck className="h-4 w-4" /></div><div><h3 className="text-base font-semibold text-slate-900 dark:text-white">{data.question}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{data.answer}</p></div></div>
          </div>
        </div>
      </section>

      <CTASection onOpenAccount={onOpenAccount} />
    </div>
  );
};
