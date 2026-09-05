import React from 'react';
import { Share2, Youtube, Send, Instagram, Facebook, Users, MessageCircle, TrendingUp, Award, Zap } from 'lucide-react';
import { ServiceMasterPageTemplate } from '../../components/Services/ServiceMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const SocialMediaMarketingPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ServiceMasterPageTemplate
      serviceTitle="Trader Social Media Community & Growth (FB, Insta, YT, Telegram)"
      heroBadge="SOCIAL VIRALITY & TRADER COMMUNITY BUILDING"
      heroDescription="Build an engaged community of active traders across Facebook, Instagram, YouTube, and Telegram. High-converting financial video content, daily market signals, and community moderation."
      slaMetric={{ label: "Trader Community Retention", value: "+450% Engagement", sub: "Daily Market Signals, Video Reels & Active Telegram Channels" }}
      deliverables={[
        { title: "Telegram Signals & VIP Channels", desc: "Build & manage high-converting Telegram channels with daily market signals, analysis, and broker promos.", icon: Send, sla: "Daily Broadcasts" },
        { title: "YouTube Financial Content & Shorts", desc: "Professional YouTube trading video production, market breakdowns, tutorial shorts, and live streams.", icon: Youtube, sla: "Weekly Episodes" },
        { title: "Facebook & Instagram Reels & Growth", desc: "High-impact visual content, market memes, education carousels, and targeted ad funnels.", icon: Instagram, sla: "Daily Posts" },
        { title: "Community Management & Moderation", desc: "24/7 moderation of social groups, responding to trader inquiries, and maintaining high brand sentiment.", icon: Users, sla: "24/7 Moderation" }
      ]}
      workflowSteps={[
        { step: "01", title: "Channel Architecture", desc: "Setup & branded verification for Facebook, Instagram, YouTube, and Telegram.", icon: Share2 },
        { step: "02", title: "Content Calendar & Production", desc: "Design daily market charts, YouTube breakdown scripts, and Reels.", icon: Youtube },
        { step: "03", title: "Community Broadcasting", desc: "Broadcast daily market news, technical signals, and IB promotion campaigns.", icon: Send },
        { step: "04", title: "Engagement & Conversion", desc: "Convert social followers into active trading accounts via dedicated landing links.", icon: TrendingUp }
      ]}
      scopeInclusions={[
        { feature: "Supported Channels", standard: "Facebook & Instagram", enterprise: "FB, Instagram, YouTube, Telegram & TikTok" },
        { feature: "Video Production", standard: "2 Shorts / Week", enterprise: "Daily Reels/Shorts + 2 Long-Form YT Videos" },
        { feature: "Telegram Signal Channel", standard: "Basic Community", enterprise: "Managed VIP Telegram Signal & Promo Channel" },
        { feature: "Community Moderation", standard: "8/5 Moderation", enterprise: "24/7 Active Group Moderation & Spam Shield" }
      ]}
      specs={[
        { label: "Key Networks", value: "Facebook, Instagram, YouTube, Telegram" },
        { label: "Content Formats", value: "Video Reels, Signals, Carousels" },
        { label: "Community Support", value: "24/7 Moderation & Bot Setup" },
        { label: "Growth Target", value: "High Trader Conversion & Retention" }
      ]}
      faqs={[
        { q: "Why is Telegram so essential for Forex brokerages?", a: "Telegram is the primary instant communication platform for active traders, signal providers, and IBs. A managed Telegram channel provides direct, unfiltered communication that converts leads into active depositors." },
        { q: "Do you produce original financial video content for YouTube?", a: "Yes, our team scripts, edits, and produces professional market overview videos, platform tutorials, and viral YouTube Shorts customized with your broker branding." },
        { q: "How do you protect Telegram & Facebook communities from spam and scammers?", a: "We deploy automated anti-spam bots, strict keyword filtering, and 24/7 human moderators to ensure your community remains safe and trustworthy." },
        { q: "Can social media content directly generate real FTDs?", a: "Absoluty. By linking social content and Telegram market updates directly to your WebTrader or CRM registration page, social traffic delivers highly qualified active traders." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
