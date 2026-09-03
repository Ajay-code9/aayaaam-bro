import React from 'react';
import { Cpu, Server, Zap, ShieldCheck, Code2, Layers } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const PluginsPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="Enterprise MT5 Server Plugins"
      heroBadge="NATIVE C++ MT5 SERVER API EXTENSIONS"
      heroDescription="High-performance MetaTrader 5 server plugins, virtual dealer engines, dynamic spread markups, leverage controllers, and automated swap managers built in native C++ for sub-0.5ms server execution."
      heroImage="/module-showcase.webp"
      productMetric={{ label: "Server Execution Overhead", value: "< 0.5 ms", sub: "Native C++ MT5 Server API Add-Ons" }}
      workflowSteps={[
        { num: '01', title: 'Select Server Plugins', desc: 'Choose from Virtual Dealer, Dynamic Swap Manager, Margin Protection, and Multi-Asset FIX Bridge plugins.', icon: Cpu },
        { num: '02', title: 'Configure Dealer Rules', desc: 'Define per-group spread markups, toxic scalping flags, max slippage limits, and swap rates.', icon: Code2 },
        { num: '03', title: 'Dynamic Hot-Load Deployment', desc: 'Hot-load compiled C++ DLL modules into MT5 Trade Server Manager without requiring server restarts.', icon: Server },
        { num: '04', title: 'Live Microsecond Processing', desc: 'Execute order rules, margin checks, and hedging signals in sub-0.5ms latency without dealer delay.', icon: Zap }
      ]}
      visualizerTabs={[
        { id: "risk", label: "Margin & Liquidation Plugin", previewText: "Monitors client margins in microsecond intervals and executes partial liquidations before negative balance occurs." },
        { id: "bridge", label: "FIX Liquidity Bridge Gateway", previewText: "Direct FIX 4.4 bridge connecting MT5 trade server directly to institutional LPs." }
      ]}
      modules={[
        { title: "Automated Margin Risk Plugin", desc: "Prevents negative balance and manages microsecond stop-outs without dealer lag.", icon: Cpu, highlight: "Microsecond Risk" },
        { title: "A/B Book Hybrid Router", desc: "Automated volume-based order routing between B-book internalizer and A-book FIX bridge.", icon: Zap, highlight: "Hybrid Routing" },
        { title: "Dynamic Spread & Swap Plugin", desc: "Automate dynamic spread markups based on market volatility and asset class.", icon: Layers, highlight: "Dynamic Swaps" },
        { title: "Multi-Asset FIX Bridge Add-On", desc: "Connect MT5 directly to Tier-1 banks, LMAX, Finalto, and CME Group.", icon: Server, highlight: "FIX 4.4 Bridge" }
      ]}
      techSpecs={[
        { label: "Core Language", value: "Native C++" },
        { label: "API Standard", value: "MT5 Server API" },
        { label: "Execution Overhead", value: "< 0.5 ms" },
        { label: "Compatibility", value: "MT5 Build 4000+" }
      ]}
      faqs={[
        { q: "Are your plugins built in native C++ for MT5?", a: "Yes. All BrokerBros server plugins are written in optimized native C++ using the official MetaTrader 5 Server API for sub-millisecond execution." },
        { q: "Will installing plugins require restarting our MT5 trade server?", a: "Most plugins can be loaded dynamically via MT5 Server Manager without interrupting live client trading." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
