import React from 'react';
import { Megaphone, Target, BarChart2, TrendingUp, Share2, Award, Zap, CheckCircle2, Globe, Search, MessageSquare, Star } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const DigitalMarketingPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="360° Complete Digital Marketing for Forex & CFD Brokers"
      heroBadge="FULL-STACK BROKERAGE GROWTH & ACQUISITION"
      heroDescription="End-to-end digital marketing solutions built specifically for FX/CFD brokerages, Prop firms, and crypto exchanges. Drive high-LTV trader acquisition, lower CAC, and scale global brand authority."
      slaMetric={{ label: "Trader Acquisition Efficiency", value: "3.5x ROI", sub: "Data-Driven Multichannel Broker Growth Engine" }}
      deliverables={[
        { title: "Full-Funnel Campaign Architecture", desc: "Targeted trader acquisition strategies from awareness to first-time deposit (FTD).", icon: Target, sla: "Custom Strategy" },
        { title: "Multi-Channel Media Buying", desc: "PPC, programmatic, display, and affiliate network management optimized for conversion.", icon: Megaphone, sla: "Active Optimization" },
        { title: "Content & Brand Positioning", desc: "Financial content marketing, press releases, and market commentary tailored to active traders.", icon: Share2, sla: "Weekly Content" },
        { title: "Performance Analytics & Attribution", desc: "Real-time tracking of CAC, LTV, FTD rates, and channel ROI via custom BI dashboards.", icon: BarChart2, sla: "Live Dashboards" }
      ]}
      workflowSteps={[
        { step: "01", title: "Audit & Strategy Setup", desc: "In-depth audit of current marketing channels, CAC, and competitor positioning.", icon: Search },
        { step: "02", title: "Campaign Launch", desc: "Deploy targeted paid ads, SEO assets, social channels, and affiliate funnels.", icon: Zap },
        { step: "03", title: "Conversion Optimization", desc: "A/B test landing pages, registration forms, and trader onboarding flows.", icon: TrendingUp },
        { step: "04", title: "Scale & Revenue Growth", desc: "Maximize FTD volume and scale budget on high-performing global channels.", icon: Award }
      ]}
      scopeInclusions={[
        { feature: "Marketing Channels", standard: "PPC & Social Ads", enterprise: "360° Omnichannel Execution & PR" },
        { feature: "Conversion Funnel Audit", standard: "Quarterly Review", enterprise: "Continuous Live CRO & Testing" },
        { feature: "Dedicated Growth Lead", standard: "Shared Account Lead", enterprise: "Dedicated Senior FX Marketing Strategist" },
        { feature: "Custom BI Reporting", standard: "Monthly Reports", enterprise: "Real-Time Attribution Dashboard" }
      ]}
      specs={[
        { label: "Target Audience", value: "Retail & VIP Traders" },
        { label: "Channel Coverage", value: "Global 360° Digital" },
        { label: "Primary KPI Focus", value: "Lower CAC & High FTD" },
        { label: "Reporting Frequency", value: "Real-Time Live BI" }
      ]}
      faqs={[
        { q: "Why choose specialized Forex digital marketing over standard agencies?", a: "Forex and CFD marketing requires deep compliance knowledge, understanding of ad network restrictions (Google, Meta), and expertise in trader unit economics (CAC vs LTV)." },
        { q: "How do you help lower our trader CAC (Cost Per Acquisition)?", a: "We optimize ad copy, target high-intent trader segments, design high-converting landing pages, and implement automated lead nurturing via CRM retargeting." },
        { q: "Which geographic regions do you target?", a: "We run localized campaigns across LATAM, SEA, MENA, Europe, and Asia-Pacific with multi-language ad copy and regional media buys." },
        { q: "How fast can we launch campaigns?", a: "Full campaign strategy, ad creatives, and tracking setup can be deployed in as little as 7-10 business days." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
