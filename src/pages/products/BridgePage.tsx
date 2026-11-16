import React from 'react';
import { Network, Cpu, ShieldCheck, Layers, Zap, Sliders, LineChart, Server } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const BridgePage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="AyaamX Bridge"
      heroBadge="TURNKEY BROKERAGE LIQUIDITY BRIDGE"
      heroDescription="Connect your MetaTrader, cTrader, or custom web platform directly to top Liquidity Providers (LPs) for ultra-fast, sub-millisecond order execution."
      heroImage="/fix-bridge-showcase.png"
      productMetric={{ label: "Routing Latency", value: "< 1ms", sub: "Ultra-Fast Direct LP Execution" }}
      visualizerTabs={[
        { id: "routing", label: "Smart Order Router (SOR)", previewText: "Combines liquidity from multiple providers to get your traders the best possible spread and execution price." },
        { id: "risk", label: "A/B Book Risk Engine", previewText: "Automatically routes orders to liquidity providers (A-Book) or internal risk (B-Book) based on broker rules." }
      ]}
      workflowSteps={[
        { num: "01", title: "Instant LP Connection", desc: "Link your existing MetaTrader or custom platform to leading LP feeds using pre-built FIX connectors.", icon: Network },
        { num: "02", title: "Configure Risk Rules", desc: "Set up A-Book routing, toxic flow protections, markups, and max slippage tolerances with easy controls.", icon: ShieldCheck },
        { num: "03", title: "Live Execution", desc: "Orders are automatically matched and routed in less than 1 millisecond with zero order rejections.", icon: Cpu },
        { num: "04", title: "Real-Time Monitoring", desc: "Track liquidity depth, execution latency, LP performance, and risk exposure from a unified dashboard.", icon: Server }
      ]}
      modules={[
        { title: "Multi-LP Aggregation", desc: "Combine price feeds from multiple top banks and liquidity providers into one super-tight order book.", icon: Network, highlight: "Multi-LP Feed" },
        { title: "Sub-Millisecond FIX Bridge", desc: "Ultra-low latency FIX 4.4 engine ensures lightning-fast execution for scalpers and high-volume traders.", icon: Cpu, highlight: "< 1ms Latency" },
        { title: "Smart A/B Book Routing", desc: "Automate trade management by easily passing trades to LPs or managing them in-house safely.", icon: ShieldCheck, highlight: "Automated Risk" },
        { title: "Plug & Play Platform Support", desc: "Works seamlessly with MT4, MT5, cTrader, and custom web/mobile trading applications.", icon: Layers, highlight: "MT4 / MT5 / Web" }
      ]}
      techSpecs={[
        { label: "Supported Protocol", value: "FIX 4.4 / REST / WebSocket" },
        { label: "Execution Latency", value: "< 1 ms" },
        { label: "Order Capacity", value: "100,000 / Sec" },
        { label: "Platform Compatibility", value: "MT4, MT5, Web, Mobile" }
      ]}
      faqs={[
        { 
          q: "What is AyaamX Bridge?", 
          a: "AyaamX Bridge is a smart software engine that connects trading platforms (like MT4/MT5 or WebTrader) directly to liquidity providers (banks and prime brokers) to execute trades at lightning speed with minimal spread." 
        },
        { 
          q: "How does it help manage broker risk and liquidity?", 
          a: "It automatically aggregates prices from multiple providers for best prices and allows brokers to set instant A/B book routing rules to manage exposure and protect profitability." 
        },
        { 
          q: "Can I connect custom liquidity providers to the bridge?", 
          a: "Yes! AyaamX Bridge supports all standard FIX protocol feeds and can connect to any prime broker or liquidity venue worldwide." 
        }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
