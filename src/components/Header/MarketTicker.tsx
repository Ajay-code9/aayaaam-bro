import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cpu, Code2, Globe, Layers, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface MarketTickerProps {
  onSelectTicker?: (item: any) => void;
}

export const MarketTicker: React.FC<MarketTickerProps> = () => {
  const [activeMetricIndex, setActiveMetricIndex] = useState(0);

  const capabilities = [
    { label: 'ENTERPRISE SAAS & APPS', desc: 'Custom Web & Mobile Portals' },
    { label: 'AI AGENTS & PIPELINES', desc: 'Autonomous Workflow Engines' },
    { label: 'FINTECH & TRADING TECH', desc: 'FIX Bridges, WebTrader & CRM' },
    { label: 'WEB3 & BLOCKCHAIN', desc: 'Smart Contracts & Payment Rails' },
    { label: 'CLOUD & DEVOPS', desc: 'Kubernetes & 99.99% Uptime SLAs' },
    { label: 'IP & CODE OWNERSHIP', desc: '100% Transfer to Client' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetricIndex((prev) => (prev + 1) % capabilities.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [capabilities.length]);

  return (
    <div className="bg-slate-950 text-slate-300 border-b border-slate-800 text-[11px] py-1.5 px-4 select-none overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Operational Trust Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            AYAAMX ENGINEERING
          </span>
          <span className="hidden sm:inline-block text-slate-700">|</span>
          <span className="hidden sm:flex items-center gap-1.5 text-slate-400 font-mono text-[10px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            SOC-2 READY ARCHITECTURE
          </span>
        </div>

        {/* Dynamic Capability Stream / Ticker */}
        <div className="relative overflow-hidden flex-1 group no-scrollbar">
          <div className="flex gap-8 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] items-center">
            {[...capabilities, ...capabilities, ...capabilities].map((cap, idx) => (
              <div
                key={`${cap.label}-${idx}`}
                className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md hover:bg-slate-900/80 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                <span className="font-bold text-slate-100 font-mono tracking-tight text-[10px]">{cap.label}</span>
                <span className="text-slate-400 text-[10.5px]">· {cap.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Service Standard & SLA Pill */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 text-slate-400 text-[11px] font-mono">
          <span className="flex items-center gap-1">
            <span className="text-slate-500">IP:</span> <strong className="text-emerald-400">100% OWNED</strong>
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1">
            <span className="text-slate-500">SLA:</span> <strong className="text-emerald-400">99.99% UPTIME</strong>
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1">
            <span className="text-slate-500">DELIVERY:</span> <strong className="text-slate-200">SPRINT-BASED</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
