import React from 'react';
import { ShieldCheck, FileText, Lock, CheckCircle2, Mail, Globe, Server } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const PrivacyPolicyPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const sections = [
    {
      num: "1",
      title: "Who Is Responsible for Your Data (Controller vs Processor)",
      content: "For public website visitors (ayaamx.com) and sales/demo lead enquiries, AyaamX acts as the Data Controller responsible for deciding how personal data is processed. For enterprise software services (e.g. Forex CRM, IB portal, and client area deployment), AyaamX acts as a Data Processor on behalf of the brokerage operator under a Data Processing Agreement (DPA)."
    },
    {
      num: "2",
      title: "Data We Collect — Information You Provide",
      content: "We collect business contact details submitted through forms or meetings, including your name, work email address, phone number, company name, job title, product interest, and demo communications. We explicitly advise users not to submit passwords, API keys, private keys, or end-client financial records through public contact forms."
    },
    {
      num: "3",
      title: "Data We Collect — Technical and Usage Data",
      content: "When you navigate ayaamx.com, we automatically receive technical telemetry such as IP address, browser type, approximate geographic location, referral/UTM parameters, pages viewed, and session interaction metrics through server logs and analytics cookies."
    },
    {
      num: "4",
      title: "How We Use Personal Data",
      content: "We use personal data to arrange product demonstrations, evaluate technical requirements, deliver software proposals, operate and harden website security, measure B2B campaign performance, maintain business records, and send relevant product updates where permitted."
    },
    {
      num: "5",
      title: "Legal Bases for Processing",
      content: "Processing relies on legitimate business interests (B2B sales, security, and product development), pre-contractual steps taken at your request (booking a demo), contract performance for registered operators, and compliance with legal obligations."
    },
    {
      num: "6",
      title: "Marketing Communications & Opt-Out",
      content: "You may opt out of promotional emails at any time using the unsubscribe link or by contacting privacy@ayaamx.com. Operational, transactional, and security notifications regarding active enterprise accounts will continue as necessary."
    },
    {
      num: "7",
      title: "Cookies, Analytics & Campaign Tracking",
      content: "We utilize strictly necessary technical cookies and, subject to your consent where required by law, analytics and marketing campaign measurement technologies (such as Google Analytics 4 and Meta Conversions API) to analyze web traffic and ad effectiveness."
    },
    {
      num: "8",
      title: "Data Sharing & Subprocessors",
      content: "We share data only with authorized infrastructure service providers who support our website hosting, CRM, lead scheduling, security monitoring, and customer support processes. All subprocessors are bound by strict data protection agreements."
    },
    {
      num: "9",
      title: "International Data Transfers",
      content: "AyaamX operates globally with server infrastructure in Equinix LD4 (London) and NY4 (New York). International transfers comply with applicable data transfer mechanisms, including Standard Contractual Clauses (SCCs) where required."
    },
    {
      num: "10",
      title: "Data Retention",
      content: "We retain business lead data only for as long as necessary to fulfill sales evaluation, customer support, and legal recordkeeping requirements. Lead data is reviewed and purged periodically in accordance with internal retention policies."
    },
    {
      num: "11",
      title: "Security Measures",
      content: "We implement technical and organizational controls including 256-bit AES encryption in transit and at rest, zero-trust network access controls, continuous vulnerability monitoring, and co-located datacenter physical security."
    },
    {
      num: "12",
      title: "Your Privacy Rights",
      content: "Depending on your jurisdiction, you may have rights to request access, correction, deletion, restriction, or portability of your personal data. To exercise any data subject rights, please contact privacy@ayaamx.com."
    },
    {
      num: "13",
      title: "Enterprise Customer & End-Client Data",
      content: "When a brokerage customer uses AyaamX software to manage its retail traders or IB affiliates, that brokerage remains the Data Controller for its end-client data. End clients should direct privacy requests to their respective broker operator."
    },
    {
      num: "14",
      title: "Children's Privacy",
      content: "Our website and B2B brokerage software services are strictly intended for business operators and are not directed to individuals under 18 years of age."
    },
    {
      num: "15",
      title: "Third-Party Links",
      content: "ayaamx.com may contain links to external partner platforms, documentation, or social channels. Third-party privacy practices are governed by their own respective notices."
    },
    {
      num: "16",
      title: "Changes to This Privacy Policy",
      content: "We may update this policy to reflect changes in legal requirements, vendors, or product features. The revised version will be published with an updated effective date."
    },
    {
      num: "17",
      title: "Contact & Data Protection Officer",
      content: "For privacy questions, data subject requests, or security inquiries, please contact our Data Protection Team at privacy@ayaamx.com or through our Contact Desk."
    }
  ];

  return (
    <div className="bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
      <section className="relative bg-white dark:bg-[#0E1420] text-slate-900 dark:text-white py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 text-xs font-semibold rounded-md border border-emerald-200 dark:border-emerald-800/50 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            LEGAL & PRIVACY DISCLOSURE
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white font-sans">
            Website &amp; B2B Privacy Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-medium">
            Last Updated: September 2026. Transparent notice on how AyaamX handles business data, cookies, lead information, and enterprise software processing roles.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-[#070B11] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {sections.map((sec) => (
            <div key={sec.num} className="bg-white dark:bg-[#0E1420] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs space-y-2.5">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                  {sec.num}
                </span>
                <span>{sec.title}</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed pl-10 font-normal">
                {sec.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
