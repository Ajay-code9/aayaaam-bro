import React from 'react';
import { DollarSign, PieChart, Target, Zap, BarChart3, TrendingUp, Users, RefreshCw } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const PaidOrganicMarketingPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Paid Media & Organic Hybrid Growth Engine for Brokers"
      heroBadge="PAID PPC & ORGANIC HYBRID SYNERGY"
      heroDescription="Combine rapid paid media acquisition with long-term organic compounding. Maximize FTD volumes using Google Ads, Meta, Native Networks, and strategic organic funnels."
      slaMetric={{ label: "Combined Growth Impact", value: "2.4x FTD Volume", sub: "Lower Paid CAC Balanced with High-Converting Organic Leads" }}
      deliverables={[
        { title: "Paid PPC & Display Management", desc: "Targeted campaigns across Google Search, Bing Ads, Meta, and financial ad networks.", icon: DollarSign, sla: "Daily Optimization" },
        { title: "Native & Programmatic Buying", desc: "Reach active investors via Taboola, Outbrain, and premium financial publisher networks.", icon: Target, sla: "Global Reach" },
        { title: "Organic Funnel Architecture", desc: "Convert cold traffic into active traders with educational webinars, lead magnets, and CRM sequences.", icon: RefreshCw, sla: "Automated Nurture" },
        { title: "Budget & Bid Automation", desc: "AI-driven bid adjustments based on real-time deposit conversion data and broker margins.", icon: PieChart, sla: "Smart Bidding" }
      ]}
      workflowSteps={[
        { step: "01", title: "Funnel Mapping", desc: "Map paid traffic channels directly into high-converting trader registration flows.", icon: Target },
        { step: "02", title: "Creative & Copy Testing", desc: "A/B test ad banners, headlines, video hooks, and landing page angles.", icon: Zap },
        { step: "03", title: "Campaign Execution", desc: "Launch synchronized paid campaigns and organic lead capture mechanisms.", icon: TrendingUp },
        { step: "04", title: "Retargeting & LTV Scaling", desc: "Re-engage unregistered leads and inactive traders to maximize lifetime value.", icon: Users }
      ]}
      scopeInclusions={[
        { feature: "Ad Account Management", standard: "Single Platform", enterprise: "Omnichannel Paid Media Buying" },
        { feature: "Landing Page CRO", standard: "Standard Template", enterprise: "Custom Dynamic FX Landing Pages" },
        { feature: "Organic Funnel Integration", standard: "Email Capture Only", enterprise: "Full CRM Automation & Retargeting" },
        { feature: "Attribution & BI", standard: "Ad Platform Native", enterprise: "Multi-Touch Attribution Dashboard" }
      ]}
      specs={[
        { label: "Paid Platforms", value: "Google, Meta, Native, Display" },
        { label: "Organic Assets", value: "Lead Magnets & Content" },
        { label: "Target Metric", value: "Cost Per FTD (First Deposit)" },
        { label: "Optimization Cycle", value: "Daily Campaign Tuning" }
      ]}
      faqs={[
        { q: "How do you handle ad policy restrictions on Google and Meta for Forex?", a: "We maintain strict compliance with financial ad policies, obtaining required broker certifications and using compliant landing page structures." },
        { q: "What is the benefit of combining Paid and Organic marketing?", a: "Paid ads bring immediate first-time deposits (FTDs), while organic funnels reduce long-term customer acquisition cost (CAC) by nurturing leads without extra ad spend." },
        { q: "What minimum ad budget is recommended?", a: "We recommend starting with a scalable ad spend depending on your target region (e.g., $5,000–$25,000/month) to achieve statistical campaign optimization." },
        { q: "How do you track actual deposits back to ad campaigns?", a: "We integrate server-to-server tracking APIs (Google Conversions API, Meta CAPI, Broker CRM Webhooks) to attribute every deposit to exact keywords and ad creatives." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
