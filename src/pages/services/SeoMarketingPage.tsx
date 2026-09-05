import React from 'react';
import { Search, TrendingUp, Globe, FileText, Link, Award, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const SeoMarketingPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Institutional Forex & CFD SEO Strategy & LLM Discovery"
      heroBadge="ORGANIC RANKINGS & AI SEARCH DISCOVERY"
      heroDescription="Dominate Google organic search results and next-gen AI search engines (ChatGPT, Perplexity, Gemini). Specialized Technical SEO, high-authority financial link building, and financial content optimization."
      slaMetric={{ label: "Organic Organic Traffic Increase", value: "+280% Average", sub: "Top 3 Rankings for High-Intent Financial Keywords" }}
      deliverables={[
        { title: "Technical Financial SEO Audit", desc: "Fix crawl errors, JavaScript rendering, site speed, and indexability for financial domain authority.", icon: Search, sla: "Comprehensive" },
        { title: "LLM & AEO Discovery Optimization", desc: "Optimize your brand for ChatGPT, Perplexity, and Google AI Overviews to capture AI search intent.", icon: Cpu, sla: "Next-Gen SEO" },
        { title: "Financial Content & Keyword Strategy", desc: "Target high-converting transactional keywords (e.g., best forex broker, low spread EURUSD).", icon: FileText, sla: "Monthly Content" },
        { title: "High-Authority FinTech Backlinks", desc: "Ethical link building from top financial news sites, market blogs, and industry directories.", icon: Link, sla: "DR 60+ Backlinks" }
      ]}
      workflowSteps={[
        { step: "01", title: "Technical Site Audit", desc: "Full audit of page speed, schema markups, mobile UX, and crawl health.", icon: Search },
        { step: "02", title: "Keyword & Entity Mapping", desc: "Map high-converting keywords to specialized landing pages.", icon: TrendingUp },
        { step: "03", title: "Content & On-Page Execution", desc: "Publish institutional-grade market research, guides, and SEO copy.", icon: FileText },
        { step: "04", title: "Authority & Link Building", desc: "Secure editorial links and media mentions from authoritative financial hubs.", icon: Globe }
      ]}
      scopeInclusions={[
        { feature: "Technical SEO Audits", standard: "Quarterly", enterprise: "Continuous Real-Time Auditing" },
        { feature: "AI Search Engine Optimization", standard: "Basic Schema", enterprise: "Full AEO & LLM Optimization" },
        { feature: "Backlink Acquisition", standard: "5 High-DR Links/Mo", enterprise: "15+ Institutional DR 70+ Links/Mo" },
        { feature: "Multilingual SEO Support", standard: "Single Language", enterprise: "Multi-Region & Hreflang SEO" }
      ]}
      specs={[
        { label: "Target Engines", value: "Google, Bing, ChatGPT, Perplexity" },
        { label: "Target Keywords", value: "High-Intent B2B & Retail FX" },
        { label: "Content Standard", value: "E-E-A-T Compliant Financial" },
        { label: "Ranking Reporting", value: "Weekly Keyword Tracker" }
      ]}
      faqs={[
        { q: "How long does it take to see results from Forex SEO?", a: "Initial technical fixes and indexation improvements show results in 4-6 weeks. Competitive organic ranking gains typically materialize in 3 to 6 months." },
        { q: "What is AEO / LLM Search Optimization?", a: "AI Engine Optimization ensures your brokerage is cited as a trusted source by AI platforms like ChatGPT Search, Perplexity, and Google Gemini when traders ask for recommendations." },
        { q: "Do you guarantee high DA/DR backlinks?", a: "Yes, we exclusively build contextual links on real financial news publications, trading forums, and market blogs with high Domain Rating (DR 60+)." },
        { q: "Can you handle international multi-language SEO?", a: "Yes, we implement full hreflang architecture and localized keyword strategies across 15+ languages." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
