import React from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../components/Hero/HeroSection';
import { FeatureStripSection } from '../components/Home/FeatureStripSection';
import { InstitutionalClassyShowcase } from '../components/Home/InstitutionalClassyShowcase';
import { IbkrComparisonTable } from '../components/Home/IbkrComparisonTable';
import { StatsWallSection } from '../components/Home/StatsWallSection';
import { TrustSection } from '../components/Trust/TrustSection';
import { ProductsSection } from '../components/Products/ProductsSection';
import { YieldPricingSection } from '../components/Pricing/YieldPricingSection';
import { TerminalShowcase } from '../components/Platform/TerminalShowcase';
import { GlobalMapSection } from '../components/GlobalPresence/GlobalMapSection';
import { ResearchSection } from '../components/Research/ResearchSection';
import { AccountSection } from '../components/Accounts/AccountSection';
import { AcademySection } from '../components/Education/AcademySection';
import { CaseStudiesSection } from '../components/Home/CaseStudiesSection';
import { FaqSection } from '../components/FAQ/FaqSection';
import { CTASection } from '../components/CTA/CTASection';

interface HomePageProps {
  onOpenAccount: () => void;
  onExplorePlatforms: () => void;
  onOpenInquiry?: () => void;
}

// Varied animation presets to avoid monotony across sections
const fadeUp = { initial: { opacity: 0, y: 36 }, whileInView: { opacity: 1, y: 0 } };
const fadeLeft = { initial: { opacity: 0, x: -36 }, whileInView: { opacity: 1, x: 0 } };
const fadeRight = { initial: { opacity: 0, x: 36 }, whileInView: { opacity: 1, x: 0 } };
const scaleUp = { initial: { opacity: 0, scale: 0.96 }, whileInView: { opacity: 1, scale: 1 } };

const Section: React.FC<{
  children: React.ReactNode;
  anim?: typeof fadeUp;
  delay?: number;
}> = ({ children, anim = fadeUp, delay = 0 }) => (
  <motion.div
    {...anim}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.65, delay, ease: [0.25, 1, 0.5, 1] }}
  >
    {children}
  </motion.div>
);

export const HomePage: React.FC<HomePageProps> = ({ onOpenAccount, onExplorePlatforms, onOpenInquiry }) => {
  return (
    <div className="selection:bg-emerald-500 selection:text-white font-sans overflow-x-hidden bg-white dark:bg-[#090D14] text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* ① & ② INITIAL LANDING VIEWPORT GROUP (Header + Hero + 4 Feature Cards = Exact 100dvh on Mobile) */}
      <div className="flex flex-col min-h-[calc(100dvh-64px)] justify-between lg:block lg:min-h-0">
        {/* ① INSTITUTIONAL HERO SECTION */}
        <HeroSection onOpenAccount={onOpenAccount} onExplorePlatforms={onExplorePlatforms} />

        {/* ② 4-COLUMN INSTITUTIONAL FEATURE STRIP */}
        <FeatureStripSection />
      </div>

      {/* ③ TURNKEY SOFTWARE PRODUCTS & ENTERPRISE SOLUTIONS (6 Product Cards) */}
      <Section anim={fadeUp}>
        <InstitutionalClassyShowcase onOpenAccount={onOpenAccount} />
      </Section>

      {/* ④ INTERACTIVE PLATFORM MODULES (Deep-dive with UI Showcase) */}
      <Section anim={fadeUp}>
        <ProductsSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑤ BRANDED TERMINAL & CLIENT PORTAL SHOWCASE */}
      <Section anim={scaleUp}>
        <TerminalShowcase onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑥ GLOBAL CLOUD DEPLOYMENT & SERVER TOPOLOGY MAP */}
      <Section anim={fadeRight}>
        <GlobalMapSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑦ DATA SOVEREIGNTY, SECURITY & COMPLIANCE PILLARS */}
      <Section anim={fadeUp} delay={0.05}>
        <TrustSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑧ WHY HIGH-GROWTH FIRMS CHOOSE AYAAMX (Comparison Table) */}
      <Section anim={fadeUp}>
        <IbkrComparisonTable onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑨ PRODUCTION DELIVERABLES & CASE STUDIES */}
      <Section anim={fadeUp}>
        <CaseStudiesSection />
      </Section>

      {/* ⑩ TAILORED SOFTWARE LICENSING PACKAGES */}
      <Section anim={fadeRight}>
        <AccountSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑪ TRANSPARENT PRICING & DELIVERY ENGAGEMENT MODELS */}
      <Section anim={fadeLeft}>
        <YieldPricingSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑫ ARCHITECTURAL INSIGHTS & ENGINEERING PLAYBOOKS */}
      <Section anim={scaleUp}>
        <ResearchSection onOpenAccount={onOpenAccount} />
      </Section>

      {/* ⑬ FREQUENTLY ASKED QUESTIONS */}
      <Section anim={fadeLeft}>
        <FaqSection onOpenInquiry={onOpenInquiry} />
      </Section>

      {/* ⑭ FINAL ENTERPRISE CTA */}
      <CTASection variant="light" onOpenAccount={onOpenAccount} />
    </div>
  );
};
