import React from 'react';
import { Users, Zap, ShieldCheck, Activity, Award, BarChart3 } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const SocialTradingPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="White-Label Social & Copy Trading"
      heroBadge="INSTITUTIONAL SIGNAL REPLICATION & COPY ENGINE"
      heroDescription="Turnkey copy trading software for forex and multi-asset brokerages. Enable master traders to broadcast strategies, followers to mirror positions proportionally with sub-80ms execution, and automate High-Watermark performance fee collection."
      productMetric={{ label: "Signal Mirror Latency", value: "< 80 ms", sub: "Microsecond Server-Level Strategy Execution" }}
      heroImageDark="/Hero-Images/social-trading-black.png"
      heroImageLight="/Hero-Images/social-trading-white.png"
      workflowSteps={[
        { num: '01', title: 'Onboard Master Traders', desc: 'Allow top strategy providers to register, build verified performance profiles, and publish track records.', icon: Users },
        { num: '02', title: 'Configure Allocation Modes', desc: 'Followers select Equity Ratio, Fixed Lot, Multiplier, or Risk % modes with custom max drawdown caps.', icon: ShieldCheck },
        { num: '03', title: 'Live Sub-80ms Mirroring', desc: 'Trades mirror instantly across MT4, MT5, and WebTrader server accounts with zero order rejection.', icon: Zap },
        { num: '04', title: 'Automate High-Watermark Fees', desc: 'Performance fees calculate automatically based on net high-watermark profit and distribute to strategy providers.', icon: Award }
      ]}
      visualizerTabs={[
        { id: "leaderboard", label: "Signal Provider Leaderboard", previewText: "Verified performance metrics, win rates, drawdown stats, and equity curve rankings." },
        { id: "copier", label: "Proportional Copy Engine", previewText: "Flexible volume allocation modes: Multiplier, Fixed Lot, Equity Ratio, or Risk Percentage." }
      ]}
      modules={[
        { title: "Sub-100ms Signal Mirroring", desc: "Instant order replication across master and follower accounts with zero slippage.", icon: Zap, highlight: "<80ms Mirroring" },
        { title: "Automated High-Watermark Fees", desc: "Calculates performance fees automatically based on true high-watermark profit.", icon: Award, highlight: "High-Watermark" },
        { title: "Flexible Risk Controls", desc: "Followers can set max drawdown limits, emergency equity stop-loss, and lot caps.", icon: ShieldCheck, highlight: "Risk Controls" },
        { title: "Provider Public Profiles", desc: "Embeddable performance widgets and equity charts for signal provider marketing.", icon: Users, highlight: "Public Pages" }
      ]}
      techSpecs={[
        { label: "Copy Latency", value: "< 80 ms" },
        { label: "Allocation Modes", value: "4 Modes" },
        { label: "Fee Engine", value: "High-Watermark" },
        { label: "Platform Compatibility", value: "MT5 / Web" }
      ]}
      faqs={[
        { q: "How does the Copy Trading engine prevent slippage on follower accounts?", a: "Signals are broadcast via direct memory channels directly on the server level, ensuring follower trades open at identical prices." },
        { q: "How are performance fees collected and paid to strategy providers?", a: "Our automated fee engine computes performance fees at the end of each trading period and handles instant distribution to master strategy accounts." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
