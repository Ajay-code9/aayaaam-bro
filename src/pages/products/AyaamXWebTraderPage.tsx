import React from 'react';
import { Globe, Cpu, Zap, ShieldCheck, BarChart3, Activity, Settings, SlidersHorizontal, Users } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const AyaamXWebTraderPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="Flagship HTML5 WebTrader Terminal"
      heroBadge="ZERO-INSTALL HTML5 WEB TRADING PLATFORM"
      heroDescription="Provide your traders with a flagship browser trading terminal featuring sub-3.8ms execution, 120+ TradingView indicators, Level-2 Depth of Market (DOM), and 100% white-label custom domain branding."
      heroImageDark="/Hero-Images/web-trader-hero-black.png"
      heroImageLight="/Hero-Images/web-trader-hero-white.png"
      productMetric={{ label: "Web Execution Speed", value: "< 3.8 ms", sub: "Equinix LD4 / NY4 Direct Fiber WebSocket Streaming" }}
      workflowSteps={[
        { num: '01', title: 'One-Click Deployment', desc: 'Set up your branded WebTrader terminal domain (e.g. trader.yourbroker.com) and link your CRM & liquidity feeds in minutes.', icon: Settings },
        { num: '02', title: 'Custom Web Branding', desc: 'Customize layout themes, logo, color schemes, default watchlists, and supported languages for your traders.', icon: SlidersHorizontal },
        { num: '03', title: 'Instant Trader Access', desc: 'Enable zero-download browser trading for your clients with direct login from your client portal or website.', icon: Users },
        { num: '04', title: 'Real-Time Risk & Volume', desc: 'Monitor live trading activity, active web sessions, execution speeds, and market exposure in real time.', icon: BarChart3 }
      ]}
      visualizerTabs={[
        { id: "workstation", label: "Multi-Chart Web Workspace", previewText: "Trade directly in your browser with up to 8 live chart grids, 120+ TradingView indicators, drawing tools, and real-time streaming market data." },
        { id: "dom", label: "Real-Time Order Book (DOM)", previewText: "View full Level-2 Depth of Market showing top 10 bid and ask price levels, market volume distribution, and one-click execution buttons." },
        { id: "routing", label: "Sub-4ms Order Execution", previewText: "Execute market, limit, stop, and OCO orders in under 4 milliseconds with built-in slippage protection and automated risk safeguards." }
      ]}
      modules={[
        { title: "Browser-Based Trading (No Download)", desc: "Access the full trading terminal directly on Chrome, Safari, Edge, or mobile browsers with zero downloads or plugin installations.", icon: Globe, highlight: "No Download Needed" },
        { title: "Ultra-Fast Order Execution", desc: "Stream live tick data and execute orders in under 4 milliseconds via direct fiber co-location at Equinix datacenters.", icon: Zap, highlight: "< 3.8ms Latency" },
        { title: "TradingView Charting Suite", desc: "Analyze market trends using 120+ technical indicators, multiple timeframes, and interactive drawing tools built directly into the web app.", icon: Activity, highlight: "120+ Indicators" },
        { title: "100% White-Label Customization", desc: "Personalize the WebTrader with your brokerage logo, brand colors, custom domain (trader.yourbroker.com), and multi-language support.", icon: Cpu, highlight: "Fully Branded" },
        { title: "Real-Time Depth of Market (DOM)", desc: "View live order book liquidity and market depth to make precision entries and exits with one-click trading shortcuts.", icon: BarChart3, highlight: "Order Book Depth" },
        { title: "Bank-Grade Encryption & 2FA", desc: "Keep trader accounts safe with TLS 1.3 encryption, two-factor authentication (2FA), and secure web session management.", icon: ShieldCheck, highlight: "TLS 1.3 & 2FA" }
      ]}
      techSpecs={[
        { label: "Platform Tech", value: "HTML5 / React / WebSockets" },
        { label: "Average Latency", value: "< 3.8 ms" },
        { label: "Infrastructure Venue", value: "Equinix LD4 / NY4 Datacenters" },
        { label: "Chart Engine", value: "TradingView API + 120+ Indicators" },
        { label: "Security Standard", value: "TLS 1.3 + Biometric 2FA" }
      ]}
      faqs={[
        { q: "What is AyaamX WebTrader?", a: "AyaamX WebTrader is a powerful, browser-based trading terminal that allows your brokerage clients to analyze markets and execute trades instantly without installing software." },
        { q: "Do my clients need to install any software or plugins?", a: "No. WebTrader is 100% web-based and runs smoothly on Chrome, Safari, Edge, and mobile browsers on any device." },
        { q: "Can we customize WebTrader with our brokerage logo and custom domain?", a: "Yes! You can fully brand WebTrader with your logo, brand colors, custom domain (trader.yourbroker.com), default watchlists, and localized languages." },
        { q: "How does WebTrader connect to our CRM and liquidity providers?", a: "WebTrader connects seamlessly to your AyaamX CRM, MetaTrader 5 / FIX API gateways, and Tier-1 liquidity providers via real-time WebSocket feeds." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
