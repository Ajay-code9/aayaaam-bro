import React from 'react';
import { Star, ShieldCheck, Award, MessageCircle, CheckCircle2, ThumbsUp, Globe, FileText, Lock, Users, Search } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const BrokerReviewPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Broker Review & Online Reputation Management"
      heroBadge="TRUST & VERIFIED SITE INTEGRATION"
      heroDescription="Enhance brand trust and boost trader conversion rates with embedded live Google Reviews, Trustpilot badges, verified Forex directory listings, and authentic client testimonials."
      slaMetric={{ label: "Trader Trust & Conversion Boost", value: "+65% FTD Rate", sub: "Live Google Reviews & Trustpilot Site Integration" }}
      deliverables={[
        { title: "Live Website Widgets", desc: "Embed dynamic Trustpilot, Google, and site-native review widgets inside your website hero and registration pages.", icon: Star, sla: "Instant Embed" },
        { title: "Review Acquisition Campaigns", desc: "Automated post-withdrawal email/SMS prompts inviting happy traders to leave 5-star reviews.", icon: MessageCircle, sla: "Automated Funnel" },
        { title: "Directory Profiling & Badges", desc: "Professional broker review profile creation on major financial portals (Forex Factory, WikiFX, FPA).", icon: ShieldCheck, sla: "Verified Status" },
        { title: "Negative Review Mitigation", desc: "Active resolution team to address trader complaints before they escalate into negative online posts.", icon: Lock, sla: "24/7 Moderation" }
      ]}
      workflowSteps={[
        { step: "01", title: "Reputation Audit", desc: "Complete audit of your broker's online reviews across Trustpilot, Google, and FX forums.", icon: Search },
        { step: "02", title: "Widget Integration", desc: "Install dynamic live-updating review badges on your homepage and landing pages.", icon: Star },
        { step: "03", title: "Review Generation", desc: "Deploy automated post-trade and post-withdrawal review collection workflows.", icon: Users },
        { step: "04", title: "Trust Optimization", desc: "Monitor sentiment and continuously update social proof assets to maximize FTD conversions.", icon: Award }
      ]}
      scopeInclusions={[
        { feature: "Supported Platforms", standard: "Trustpilot & Google", enterprise: "Trustpilot, Google, WikiFX & Forex Peace Army" },
        { feature: "Live Site Integration", standard: "Static Badges", enterprise: "Dynamic S2S Live Review Widgets" },
        { feature: "Review Nurturing", standard: "Email Only", enterprise: "Multichannel SMS + Email CRM Triggers" },
        { feature: "Crisis Mitigation", standard: "Standard Support", enterprise: "24/7 Dedicated Brand Reputation Sentinel" }
      ]}
      specs={[
        { label: "Supported Networks", value: "Trustpilot, Google, FX Portals" },
        { label: "Conversion Lift", value: "+65% FTD Conversion Rate" },
        { label: "Widget Support", value: "React, Next.js, HTML5, WordPress" },
        { label: "Response SLA", value: "Under 1 Hour Mitigation" }
      ]}
      faqs={[
        { q: "Why is online review management so crucial for brokerages?", a: "Over 88% of retail traders check independent reviews on Google and Trustpilot before depositing real capital. Showcasing verified reviews eliminates trader hesitation." },
        { q: "Can review widgets be integrated into custom React/HTML landing pages?", a: "Yes, our review widgets are lightweight, responsive, and easily embeddable into any tech stack with zero impact on page load speed." },
        { q: "How do you generate authentic positive reviews from real traders?", a: "We setup automated CRM webhooks triggered after successful withdrawals or profitable trading milestones, asking satisfied traders for feedback when brand sentiment is highest." },
        { q: "Can you assist with resolving false or unfair negative reviews?", a: "Yes, our team actively engages with reviewers, investigates their account IDs, and works with platform support to flag and resolve illegitimate claims." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};

