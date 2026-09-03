import React from 'react';
import { Network, Users, Award, Zap, Briefcase, ShieldCheck } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const IbPortalPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="Multi-Tier IB & Affiliate Portal"
      heroBadge="MULTI-LEVEL AFFILIATE & REBATE ENGINE"
      heroDescription="Empower your broker partner ecosystem with multi-level introducing broker (IB) trees, automated trade-by-trade rebate calculation, real-time volume telemetry, and instant multi-currency wallet payouts."
      productMetric={{ label: "Rebate Engine Speed", value: "Real-Time", sub: "Trade-by-Trade Automated Lot & Pip Credits" }}
      heroImageDark="/Hero-Images/ib-portal-black.png"
      heroImageLight="/Hero-Images/ib-portal-white.png"
      workflowSteps={[
        { num: '01', title: 'Configure IB Rebates', desc: 'Set per-lot, per-pip, or percentage spread rebates across unlimited master and sub-IB tiers.', icon: Network },
        { num: '02', title: 'Provision Referral Tools', desc: 'Provide partners with unique referral links, QR codes, promo codes, and embedded banner assets.', icon: Users },
        { num: '03', title: 'Track Live Volume', desc: 'Monitor active referred traders, lot volume, net deposits, and sub-IB network performance in real time.', icon: Award },
        { num: '04', title: 'Automate Wallet Payouts', desc: 'Rebates credit automatically into multi-currency IB wallets for instant self-service withdrawal.', icon: Zap }
      ]}
      visualizerTabs={[
        { id: "tree", label: "Multi-Tier IB Hierarchy", previewText: "Configure up to 10 sub-IB levels with customized rebate percentages per lot or pip." },
        { id: "analytics", label: "Real-Time Trader Telemetry", previewText: "Track active referred clients, daily trading volume, and pending commission balances." }
      ]}
      modules={[
        { title: "Multi-Level Sub-IB Hierarchy", desc: "Support up to 10 sub-affiliate tiers with dynamic commission splitting.", icon: Network, highlight: "Up to 10 Tiers" },
        { title: "Instant Trade-by-Trade Rebates", desc: "Commissions are calculated and credited automatically as trades close.", icon: Zap, highlight: "Instant Payout" },
        { title: "Custom Tracking Links & Banners", desc: "IBs generate custom tracking links, promo codes, and landing page banners.", icon: Users, highlight: "Marketing Tools" },
        { title: "Multi-Currency IB Wallets", desc: "IBs can withdraw earnings instantly via bank transfer, crypto, or local PSPs.", icon: Briefcase, highlight: "Instant Withdrawal" }
      ]}
      techSpecs={[
        { label: "Sub-IB Tiers", value: "Up to 10 Levels" },
        { label: "Payout Frequency", value: "Real-Time" },
        { label: "Supported Rebates", value: "Lot, Pip, % Spread" },
        { label: "IB Wallet Specs", value: "Multi-Currency" }
      ]}
      faqs={[
        { q: "How many sub-IB levels can we configure?", a: "The IB Portal supports up to 10 sub-IB hierarchy levels with custom percentage splits per tier." },
        { q: "Are commission payouts credited automatically to IB wallets?", a: "Yes. Rebates can be credited instantly as trades close or calculated on a daily/weekly schedule based on broker preference." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
