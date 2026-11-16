import React from 'react';
import { ShieldCheck, ShieldAlert, Cpu, Activity, AlertTriangle, Eye, Sliders, Lock, Zap } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const RiskManagementPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="Institutional Risk Management System (RMS)"
      heroBadge="REAL-TIME BROKERAGE RISK CONTROL & RMS ENGINE"
      heroDescription="Enterprise-grade risk engine providing real-time net exposure monitoring, automated A/B/Hybrid book routing, toxic flow protection, and dynamic margin safeguards for broker operators."
      productMetric={{ label: "Exposure Engine Speed", value: "Microsecond", sub: "Real-Time Gross & Net Position Calculations" }}
      heroSlidesDark={[
        "/Hero-Images/risk-management-heroslideone-black.png",
        "/Hero-Images/risk-management-heroslidetwo-black.png",
        "/Hero-Images/risk-management-heroslidethree-black.png"
      ]}
      heroSlidesLight={[
        "/Hero-Images/risk-management-heroslideone-white.png",
        "/Hero-Images/risk-management-heroslidetwo-white.png",
        "/Hero-Images/risk-management-heroslidethree-white.png"
      ]}
      workflowSteps={[
        { num: '01', title: 'Set Risk Parameters', desc: 'Define maximum open exposure per asset, maximum trader drawdown limits, and margin call thresholds.', icon: Sliders },
        { num: '02', title: 'Real-Time Flow Analysis', desc: 'Monitor incoming client orders to instantly flag toxic trading flow, arbitrage strategies, or latency scalping.', icon: Eye },
        { num: '03', title: 'Automated A/B Book Routing', desc: 'Pass high-risk or toxic trades directly to Liquidity Providers (A-Book) while retaining profitable flow (B-Book).', icon: ShieldAlert },
        { num: '04', title: 'Instant Margin & Capital Protection', desc: 'Trigger automated equity stop-outs, dynamic leverage adjustments, and risk notifications to protect broker capital.', icon: Lock }
      ]}
      visualizerTabs={[
        { id: "exposure", label: "Global Exposure Matrix", previewText: "Monitor net open positions, total volume at risk, and LP coverage across all asset classes in real time." },
        { id: "toxic", label: "Toxic Flow & Scalping Monitor", previewText: "Detect high-frequency arbitrage, latency scalping, and news trading algorithms before they impact profitability." }
      ]}
      modules={[
        { title: "Real-Time Net Exposure Tracking", desc: "Live visualization of open buy/sell positions across all client accounts and trading platforms.", icon: Activity, highlight: "Live Net Exposure" },
        { title: "Smart A/B Book Risk Automation", desc: "Set automatic rules to transfer high-profit or toxic traders to LP hedging while keeping stable flow in-house.", icon: ShieldCheck, highlight: "Smart A/B Routing" },
        { title: "Latency & Arbitrage Defense", desc: "Identify and block malicious toxic flow, news-straddling, and price-latency exploitation automatically.", icon: ShieldAlert, highlight: "Toxic Flow Shield" },
        { title: "Dynamic Leverage & Margin Control", desc: "Automatically scale leverage down during high volatility, major news releases, or account size milestones.", icon: Sliders, highlight: "Dynamic Leverage" }
      ]}
      techSpecs={[
        { label: "Calculation Engine", value: "Microsecond Real-Time" },
        { label: "Supported Platforms", value: "MT4, MT5, WebTrader, FIX" },
        { label: "Exposure Monitoring", value: "Net & Gross Multi-Asset" },
        { label: "Alerting System", value: "Webhook / Email / Telegram" }
      ]}
      faqs={[
        { 
          q: "What is AyaamX Risk Management System (RMS)?", 
          a: "AyaamX RMS is a comprehensive risk control software that monitors live trader positions, protects broker capital from toxic flow, and automates A/B book trade hedging." 
        },
        { 
          q: "How does AyaamX RMS protect against toxic trading flow?", 
          a: "It uses real-time behavioral metrics to detect latency arbitrage, news scalping, and coordinated predatory trading, allowing you to automatically route toxic flow to external Liquidity Providers." 
        },
        { 
          q: "Does AyaamX RMS integrate with MetaTrader and WebTrader?", 
          a: "Yes! AyaamX RMS connects seamlessly with MT4, MT5, WebTrader, and custom trading platforms via low-latency API connectors." 
        }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
