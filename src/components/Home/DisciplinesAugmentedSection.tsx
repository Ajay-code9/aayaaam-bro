import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Code2, 
  Cpu, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Workflow
} from 'lucide-react';
import { useRouter } from '../../router';

interface DisciplineCard {
  title: string;
  desc: string;
  icon: React.ElementType;
  gradient: string;
  glowColor: string;
  badgeColor: string;
  tags: string[];
  route: string;
}

const DISCIPLINES: DisciplineCard[] = [
  {
    title: 'Front-End Development',
    desc: 'Build modern frontends designed for high performance, accessibility, low memory footprints, and global scale.',
    icon: Code2,
    gradient: 'from-[#1b3995] to-[#204464]',
    glowColor: 'group-hover:shadow-[#1b3995]/25',
    badgeColor: 'text-[#1b3995] dark:text-[#77bd7b]',
    tags: ['Front-End', 'Web Development', 'React 19', 'Next.js', 'Tailwind'],
    route: '/services/web-development/custom-website'
  },
  {
    title: 'Back-End Development',
    desc: 'Develop secure, scalable backends that perform reliably under high-concurrency load and sub-10ms response times.',
    icon: Cpu,
    gradient: 'from-[#204464] to-[#438780]',
    glowColor: 'group-hover:shadow-[#204464]/25',
    badgeColor: 'text-[#204464] dark:text-cyan-400',
    tags: ['Back-End', 'Databases', 'Go', 'Node.js', 'C++', 'Redis'],
    route: '/services/software-engineering/custom-software-development'
  },
  {
    title: 'AI and Machine Learning',
    desc: 'Ship AI capabilities that survive real production — from domain-specialized LLM agent pipelines to predictive risk models.',
    icon: Sparkles,
    gradient: 'from-[#1b3995] via-[#438780] to-[#77bd7b]',
    glowColor: 'group-hover:shadow-[#77bd7b]/25',
    badgeColor: 'text-[#438780] dark:text-[#77bd7b]',
    tags: ['AI Agents', 'Machine Learning', 'Document OCR', 'LLMs', 'Python'],
    route: '/services/ai-automation/ai-agent-development'
  },
  {
    title: 'Mobile Development',
    desc: 'Launch native iOS and Android apps with fluid 60fps animations, stable sessions, offline data sync, and hardware security.',
    icon: Workflow,
    gradient: 'from-[#1b3995] to-[#2563eb]',
    glowColor: 'group-hover:shadow-blue-500/25',
    badgeColor: 'text-blue-600 dark:text-blue-400',
    tags: ['Mobile Applications', 'iOS', 'Android', 'React Native', 'Flutter'],
    route: '/services/software-engineering/mobile-app-development'
  },
  {
    title: 'UX/UI Engineering & Design',
    desc: 'Deliver institutional product designs with clear trader flows, reusable component design systems, and dark/light ergonomics.',
    icon: Layers,
    gradient: 'from-[#204464] to-[#438780]',
    glowColor: 'group-hover:shadow-[#438780]/25',
    badgeColor: 'text-[#438780] dark:text-teal-300',
    tags: ['UX Design', 'UI Systems', 'Trading Terminals', 'Figma', 'Interactive'],
    route: '/services/web-development/custom-website'
  },
  {
    title: 'QA, Security & Performance Testing',
    desc: 'Ship release-ready software with automated end-to-end testing, security pen-testing, and latency stress audits.',
    icon: ShieldCheck,
    gradient: 'from-[#438780] to-[#77bd7b]',
    glowColor: 'group-hover:shadow-[#77bd7b]/25',
    badgeColor: 'text-[#77bd7b] dark:text-emerald-400',
    tags: ['Quality Assurance', 'Security Audit', 'Automated Testing', 'Load Benchmarks'],
    route: '/security'
  }
];

// High-fidelity inline SVG brand logos
const BrandIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'TypeScript':
      return (
        <svg className="w-5 h-5 rounded-xs shrink-0" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="3" fill="#3178C6" />
          <path d="M11.5 15.7h-2v-6H7V8.2h5v1.5h-2v6h1.5v0zm3.8-1.4c.5.4 1.1.6 1.8.6.6 0 1-.2 1-.5 0-.4-.5-.6-1.2-.9-1.2-.5-1.9-1.1-1.9-2 0-1.3 1-2.1 2.5-2.1.8 0 1.5.2 2 .5l-.5 1.4c-.4-.3-.9-.5-1.5-.5-.6 0-.9.2-.9.5 0 .3.4.5 1.1.8 1.3.5 2 1.1 2 2.1 0 1.3-1 2.2-2.7 2.2-.9 0-1.8-.2-2.3-.6l.6-1.5z" fill="#ffffff" />
        </svg>
      );
    case 'React 19':
    case 'React Native':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#0284c7" strokeWidth="1.6" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#0284c7" strokeWidth="1.6" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#0284c7" strokeWidth="1.6" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.6" fill="#0284c7" />
        </svg>
      );
    case 'Next.js 15':
      return (
        <svg className="w-5 h-5 shrink-0 rounded-full" viewBox="0 0 24 24" fill="#000000">
          <circle cx="12" cy="12" r="11" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
          <path d="M7 7h2v10H7V7zm3.5 0h1.8l4.7 6.8V7H19v10h-1.8l-4.7-6.8V17h-2V7z" fill="#fff" />
        </svg>
      );
    case 'Node.js':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#5FA04E">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L5.34 8.15v7.7L12 19.69l6.66-3.84v-7.7L12 4.31z" />
          <path d="M12 7.5a4.5 4.5 0 014.5 4.5c0 2.49-2.01 4.5-4.5 4.5S7.5 14.49 7.5 12c0-2.49 2.01-4.5 4.5-4.5z" />
        </svg>
      );
    case 'Python':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
          <path d="M11.87 2c-3.1 0-2.9 1.34-2.9 1.34l.01 1.4h2.95v.42H6.07S3.8 5 3.8 8.16s2 3.09 2 3.09h1.19v-1.68c0-1.92 1.63-1.8 1.63-1.8h2.82c1.78 0 1.73-1.6 1.73-1.6V3.88s.22-1.88-1.3-1.88zm-1.6 1.05a.65.65 0 110 1.3.65.65 0 010-1.3z" fill="#3776AB" />
          <path d="M12.13 22c3.1 0 2.9-1.34 2.9-1.34l-.01-1.4H12.07v-.42h5.86s2.27.17 2.27-2.99-2-3.09-2-3.09h-1.19v1.68c0 1.92-1.63 1.8-1.63 1.8h-2.82c-1.78 0-1.73 1.6-1.73 1.6v2.29s-.22 1.87 1.3 1.87zm1.6-1.05a.65.65 0 110-1.3.65.65 0 010 1.3z" fill="#EAB308" />
        </svg>
      );
    case 'Go':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#00ADD8">
          <path d="M1.5 10.5h4v1.8h-4v-1.8zm0 3.2h3v1.8h-3v-1.8zm6.5-6.2h14v1.8H8V7.5zm0 4.2h12.5v1.8H8v-1.8zm0 4.2h10.5v1.8H8v-1.8z" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#0284c7">
          <path d="M12 6c-3 0-4.5 1.5-4.5 4.5 1-1.5 2.25-2 3.75-1.5 1.05.35 1.8 1.1 2.65 1.95C15.2 12.3 16.9 14 21 14c3 0 4.5-1.5 4.5-4.5-1 1.5-2.25 2-3.75 1.5-1.05-.35-1.8-1.1-2.65-1.95C17.8 7.7 16.1 6 12 6zm-9 8c-3 0-4.5 1.5-4.5 4.5 1-1.5 2.25-2 3.75-1.5 1.05.35 1.8 1.1 2.65 1.95C6.2 20.3 7.9 22 12 22c3 0 4.5-1.5 4.5-4.5-1 1.5-2.25 2-3.75 1.5-1.05-.35-1.8-1.1-2.65-1.95C8.8 15.7 7.1 14 3 14z" />
        </svg>
      );
    case 'PostgreSQL':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#4169E1">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5h-2v-1.5h2v1.5zm1.5-3.5h-5c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
        </svg>
      );
    case 'Redis Streams':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#DC382D">
          <path d="M2 17l10 5 10-5-10-5-10 5zm0-6l10 5 10-5-10-5-10 5zm10-9L2 7l10 5 10-5-10-5z" />
        </svg>
      );
    case 'Docker':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#2496ED">
          <path d="M13.98 11.08h-2.12v2.12h2.12v-2.12zm-3.18 0H8.68v2.12h2.12v-2.12zm-3.18 0H5.5v2.12h2.12v-2.12zm6.36-3.18h-2.12v2.12h2.12V7.9zm-3.18 0H8.68v2.12h2.12V7.9zm6.36 3.18h-2.12v2.12h2.12v-2.12zm-3.18-6.36h-2.12v2.12h2.12V4.72zm9.84 8.78c-.46-.32-1.42-.42-2.2-.24-.22-1.38-1.32-2.14-1.32-2.14s-.54.92-.3 1.98c-.64.38-1.56.46-2.16.2-.24.52-.3 1.18-.3 1.84 0 3.86 3.36 6.86 8.5 6.86 5.6 0 9.24-3.4 9.24-7.44 0-1.74-.84-2.88-1.46-3.06z" />
        </svg>
      );
    case 'Kubernetes':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#326CE5">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.2l6.5 3.8v7.6L12 19.4l-6.5-3.8V8L12 4.2z" />
          <circle cx="12" cy="12" r="3" fill="#326CE5" />
        </svg>
      );
    case 'AWS Cloud':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#EA580C">
          <path d="M6.2 12.8c-.8 0-1.4.3-1.8.8l-.4-.6c-.2-.2-.5-.3-.8-.3h-.8c-.3 0-.5.2-.5.5v6.5c0 .3.2.5.5.5h1.2c.3 0 .5-.2.5-.5v-3c.4.4 1 .6 1.7.6 1.7 0 2.9-1.2 2.9-3.2 0-2-1.1-3.3-2.8-3.3zm-.3 4.9c-.8 0-1.4-.6-1.4-1.7 0-1 .6-1.7 1.4-1.7s1.4.6 1.4 1.7c0 1-.6 1.7-1.4 1.7zm15.7 1.1c-2.3 1.5-5.2 2.3-8.3 2.3-4.2 0-8-1.6-10.9-4.3-.3-.3-.2-.7.2-.9.4-.2.8-.1 1.1.2 2.6 2.4 6 3.8 9.6 3.8 2.7 0 5.2-.7 7.3-2 .4-.3.9-.1 1.1.3.2.3.1.5-.1.6z" />
        </svg>
      );
    case 'Google Cloud Platform':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
        </svg>
      );
    case 'Microsoft Azure':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#0078D4">
          <path d="M5.4 20L13 3h5.6L11 20H5.4zm7.8-13.4l2.4-4.6h3L11 20H8l5.2-13.4z" />
        </svg>
      );
    case 'GitHub Actions':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
        </svg>
      );
    case 'Postman':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#FF6C37">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07A6.002 6.002 0 016.07 13H5v-2h1.07A6.002 6.002 0 0111 6.07V5h2v1.07A6.002 6.002 0 0117.93 11H19v2h-1.07A6.002 6.002 0 0113 16.93z" />
        </svg>
      );
    case 'Sentry':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#8B5CF6">
          <path d="M13.2 2.5a2 2 0 00-2.4 0L2.5 8.7a2 2 0 00-.9 1.6v8.4a2 2 0 00.9 1.6l8.3 6.2a2 2 0 002.4 0l8.3-6.2a2 2 0 00.9-1.6v-8.4a2 2 0 00-.9-1.6L13.2 2.5z" />
        </svg>
      );
    case 'Terraform':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#7B42BC">
          <path d="M1.5 3.5l6.5 3.8v7.5l-6.5-3.8V3.5zm7.5 4.4l6.5-3.8v7.5l-6.5 3.8V7.9zm7.5-4.4l6.5 3.8v7.5l-6.5-3.8V3.5zm-7.5 12.6l6.5-3.8v7.5l-6.5 3.8v-7.5z" />
        </svg>
      );
    case 'TradingView':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#2563eb">
          <path d="M3 17h3v4H3v-4zm5-6h3v10H8V11zm5-8h3v18h-3V3zm5 4h3v14h-3V7z" />
        </svg>
      );
    case 'C++ FIX 4.4':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#00599C">
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 3.3L5.5 9v6L12 18.7 18.5 15V9L12 5.3zm4.5 5.7h-1.5v-1.5h-1.5V11H12v1.5h1.5V14h1.5v-1.5h1.5V11zm-6 0H9v-1.5H7.5V11H6v1.5h1.5V14H9v-1.5h1.5V11z" />
        </svg>
      );
    case 'Solidity / Web3':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#627EEA">
          <path d="M12 2L4.5 14.5 12 19l7.5-4.5L12 2zm0 4.5l4.5 7.5L12 16.5 7.5 14 12 6.5z" />
        </svg>
      );
    case 'TimescaleDB':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#EAB308">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
        </svg>
      );
    case 'WebSockets':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#0284c7">
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'MetaTrader 5 API':
      return (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#1B3995">
          <rect width="24" height="24" rx="4" fill="#1B3995" />
          <path d="M6 16V8l6 4-6 4zm6 0V8l6 4-6 4z" fill="#ffffff" />
        </svg>
      );
    default:
      return (
        <div className="w-4 h-4 rounded-full bg-[#438780] shrink-0" />
      );
  }
};

const TECH_PILLS = [
  'TypeScript',
  'React 19',
  'Next.js 15',
  'Node.js',
  'C++ FIX 4.4',
  'Python',
  'Go',
  'WebSockets',
  'Tailwind CSS',
  'React Native',
  'PostgreSQL',
  'Redis Streams',
  'TimescaleDB',
  'Docker',
  'Kubernetes',
  'AWS Cloud',
  'Google Cloud Platform',
  'Microsoft Azure',
  'MetaTrader 5 API',
  'TradingView',
  'Solidity / Web3',
  'Sentry',
  'Terraform',
  'GitHub Actions',
  'Postman'
];

export const DisciplinesAugmentedSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="py-20 lg:py-24 bg-white dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header matching user image layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
              Full-Stack Engineering, <br />
              <span className="text-slate-500 dark:text-slate-400 font-extrabold">
                Powered by AI at every step<span className="text-[#77bd7b]">.</span>
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              From intuitive UI/UX design to robust backend architecture and security audits — our engineers leverage AI acceleration to ship reliable software faster.
            </p>
          </div>

          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-slate-200 hover:text-[#1b3995] dark:hover:text-[#77bd7b] transition-colors group cursor-pointer shrink-0 pb-1 border-b border-slate-300 dark:border-slate-700 hover:border-[#1b3995]"
          >
            <span>Everything we do</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* 6 Clean Discipline Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCIPLINES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.08 * idx, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => navigate(item.route)}
                className="relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between cursor-pointer border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B111B] text-slate-900 dark:text-slate-100 hover:text-white hover:border-transparent hover:shadow-2xl hover:shadow-[#1b3995]/30 -translate-y-0 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Radial Color Bloom expanding smoothly from behind the center of the icon - Brand Theme Gradient */}
                <div 
                  className="absolute top-[52px] left-[52px] w-16 h-16 rounded-full -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-[34] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center pointer-events-none will-change-transform z-0 shadow-2xl" 
                  style={{
                    background: 'radial-gradient(circle at 20% 20%, #1b3995 0%, #204464 35%, #438780 75%, #183354 100%)'
                  }}
                />

                {/* Subtle Brand Green/Teal Light Bloom & Elegant Wave Lines overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-800 delay-150 pointer-events-none z-0"
                  style={{
                    backgroundImage: `radial-gradient(ellipse at 85% 15%, rgba(119, 189, 123, 0.45) 0%, transparent 65%), radial-gradient(circle at 15% 85%, rgba(67, 135, 128, 0.35) 0%, transparent 60%), repeating-linear-gradient(45deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 14px)`
                  }}
                />

                <div className="space-y-4 relative z-10">
                  {/* Clean Icon Container with Fluid State Change */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-[#1b3995] dark:text-[#77bd7b] group-hover:bg-white group-hover:text-[#1b3995] group-hover:border-white/90 group-hover:shadow-lg group-hover:shadow-black/20 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white group-hover:text-white transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-50/90 leading-relaxed font-normal transition-colors duration-200">
                    {item.desc}
                  </p>
                </div>

                {/* Pill Tags with Hover Adaptivity */}
                <div className="pt-6 mt-4 flex flex-wrap gap-1.5 border-t border-slate-200/60 dark:border-slate-800/60 group-hover:border-white/20 relative z-10 transition-colors duration-200">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100/80 dark:bg-slate-900 text-[#1b3995] dark:text-blue-300 border border-slate-200/80 dark:border-slate-800 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/30 backdrop-blur-xs shadow-2xs transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Seamless Technology Stack Pill Badges with Real SVG Brand Logos */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800/80 space-y-6">
          <div className="text-center text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            ENTERPRISE PLATFORMS &amp; PROTOCOLS WE DEPLOY WITH
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 max-w-6xl mx-auto">
            {TECH_PILLS.map((name, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl text-sm font-mono font-semibold bg-white dark:bg-[#0B111B] text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-slate-800 hover:border-[#1b3995] dark:hover:border-[#438780] hover:text-[#1b3995] dark:hover:text-[#77bd7b] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default shadow-xs flex items-center gap-3"
              >
                <BrandIcon name={name} />
                <span className="tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
