import React from 'react';
import { FileText, ShieldCheck, CheckCircle2, Lock, Scale, Building2, HelpCircle } from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';

interface PageProps {
  onOpenAccount: () => void;
}

export const TermsConditionsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  const sections = [
    {
      num: "1",
      title: "Who We Are & Scope of Terms",
      content: "These Terms & Conditions govern your access to and use of ayaamx.com, public marketing content, demonstration request forms, and online developer documentation. Paid software subscriptions, hosting SLAs, bridge connectivity, and custom implementation services are governed by separate signed Master Services Agreements (MSA), Service Level Agreements (SLA), and Order Forms."
    },
    {
      num: "2",
      title: "B2B Technology Provider Position",
      content: "AyaamX operates strictly as a B2B brokerage technology infrastructure vendor. Unless a separate regulated entity and signed agreement expressly state otherwise, AyaamX is not a retail broker, investment adviser, or money manager, and does not hold client deposits, execute retail trades, or issue financial instruments."
    },
    {
      num: "3",
      title: "Acceptance of Terms & Business Authority",
      content: "By accessing this website, requesting a technical demonstration, or communicating with AyaamX, you accept these Terms. If you are acting on behalf of a company or brokerage operator, you represent and warrant that you possess full corporate authority to bind that entity."
    },
    {
      num: "4",
      title: "Permitted Business Use",
      content: "You are permitted to use this website solely for evaluating AyaamX software products, reviewing technical specifications, and communicating with our team. You may not attempt unauthorized access to restricted client portals, inject malicious code, scrap data automatically, or misrepresent entity identity."
    },
    {
      num: "5",
      title: "Product Information & Demo Environments",
      content: "Website product descriptions, screenshots, roadmaps, and metric benchmarks are general marketing information and are subject to change. Actual software features, latency guarantees, and module availability are determined exclusively by your executed enterprise Order Form."
    },
    {
      num: "6",
      title: "No Investment or Regulatory Advice",
      content: "Nothing on this website constitutes financial, trading, legal, tax, or regulatory advice. Content is provided solely for technology education and infrastructure evaluation purposes."
    },
    {
      num: "7",
      title: "Third-Party Platforms & Non-Affiliation",
      content: "AyaamX products interface with third-party trading platforms (such as MetaTrader 4/5, cTrader), liquidity venues, KYC providers, and payment gateways. All third-party trademarks belong to their respective owners. Reference to a third-party platform does not imply official endorsement or corporate affiliation unless explicitly stated."
    },
    {
      num: "8",
      title: "Intellectual Property Rights",
      content: "All website software code, interface designs, architecture diagrams, product branding, documentation, and content are the exclusive intellectual property of AyaamX Technology Ltd. No license or ownership right is granted by accessing the public website."
    },
    {
      num: "9",
      title: "Confidentiality & Demo Form Submissions",
      content: "Please do not transmit production database credentials, API secrets, private keys, or confidential client records through public demo or contact forms. Secret exchange must occur only through secure, approved channels under a non-disclosure agreement (NDA)."
    },
    {
      num: "10",
      title: "Website Availability",
      content: "While we maintain robust infrastructure availability, public website access is provided on an 'as-is' basis without uptime guarantees. Production software SLAs apply exclusively to active contract clients under executed agreements."
    },
    {
      num: "11",
      title: "External Links",
      content: "This website may contain links to third-party portals, developer tools, or social channels. AyaamX is not responsible for external content or privacy practices."
    },
    {
      num: "12",
      title: "Disclaimer of Warranties",
      content: "To the maximum extent permitted by law, public website materials are provided without warranties of any kind. We do not warrant that public content is error-free or suitable for any specific regulatory requirement."
    },
    {
      num: "13",
      title: "Limitation of Liability",
      content: "AyaamX shall not be liable for indirect, incidental, or consequential damages arising solely from use of the public marketing website. Contractual liabilities for enterprise software services are governed by signed MSAs."
    },
    {
      num: "14",
      title: "Privacy & Cookie Governance",
      content: "Collection and processing of lead data and technical cookies are governed by our Privacy Policy (/privacy-policy)."
    },
    {
      num: "15",
      title: "Modifications to Terms",
      content: "We reserve the right to modify these website Terms at any time. Continued use of the site constitutes acceptance of revised terms."
    },
    {
      num: "16",
      title: "Governing Law & Jurisdiction",
      content: "These website Terms are governed by applicable law without regard to conflict of law principles. Legal disputes regarding website use shall be subject to exclusive jurisdiction in designated competent courts."
    },
    {
      num: "17",
      title: "Contact & Security Responsible Disclosure",
      content: "For legal inquiries, contact legal@ayaamx.com. To report a security vulnerability responsibly, submit details to security@ayaamx.com."
    }
  ];

  return (
    <div className="bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
      <section className="relative bg-white dark:bg-[#0E1420] text-slate-900 dark:text-white py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white font-sans">
            Website Terms &amp; Conditions
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-medium">
            Last Updated: September 2026. Governing public website usage, B2B software evaluation, demo requests, and technology provider disclaimers.
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
