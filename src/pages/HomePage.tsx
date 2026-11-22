import React from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../components/Hero/HeroSection';
import { CustomSoftwareServicesSection } from '../components/Home/CustomSoftwareServicesSection';
import { CaseStudiesSection } from '../components/Home/CaseStudiesSection';
import { DisciplinesAugmentedSection } from '../components/Home/DisciplinesAugmentedSection';
import { IndustriesSection } from '../components/Home/IndustriesSection';
import { EngineeringWorkflowSection } from '../components/Home/EngineeringWorkflowSection';
import { HomeTestimonialsSection } from '../components/Home/HomeTestimonialsSection';
import { CTASection } from '../components/CTA/CTASection';

interface HomePageProps {
  onOpenAccount: () => void;
  onExplorePlatforms: () => void;
  onOpenInquiry?: () => void;
}

const scrollRevealVariant = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 }
};

const Section: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => (
  <motion.div
    {...scrollRevealVariant}
    viewport={{ once: true, margin: '-60px 0px -20px 0px', amount: 0.1 }}
    transition={{ 
      duration: 0.7, 
      delay, 
      ease: [0.16, 1, 0.3, 1]
    }}
  >
    {children}
  </motion.div>
);

export const HomePage: React.FC<HomePageProps> = ({ onOpenAccount, onExplorePlatforms, onOpenInquiry }) => {
  const handleInquire = onOpenInquiry || onOpenAccount;

  return (
    <div className="selection:bg-[#1b3995] selection:text-white font-sans overflow-x-clip bg-white dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* 1. HERO: Clear positioning + short supporting line + 2 CTAs */}
      <HeroSection onOpenAccount={handleInquire} onExplorePlatforms={onExplorePlatforms} />

      {/* 2. WHAT WE BUILD: 5 Main Capabilities */}
      <Section>
        <CustomSoftwareServicesSection />
      </Section>

      {/* 3. FEATURED WORK: 4 Large Case-Study Cards with Real Product UI */}
      <Section>
        <CaseStudiesSection />
      </Section>

      {/* 4. EVERY DISCIPLINE, AI-AUGMENTED + Enterprise Tech Badges with Real SVG Logos */}
      <Section>
        <DisciplinesAugmentedSection />
      </Section>

      {/* 5. INDUSTRIES: FinTech & Capital Markets | AI & Automation | SaaS & Enterprise | Blockchain */}
      <Section>
        <IndustriesSection />
      </Section>

      {/* 6. THE AYAAMX WAY OF ENGINEERING: 7-Step Connected Lifecycle Roadmap */}
      <Section>
        <EngineeringWorkflowSection onOpenAccount={handleInquire} />
      </Section>

      {/* 7. TESTIMONIALS: 6-Card Asymmetric Showcase Matching Design Reference */}
      <Section>
        <HomeTestimonialsSection />
      </Section>

      {/* 8. FINAL CTA: Have a Complex Idea? Let's Engineer It. / Discuss Your Project */}
      <Section>
        <CTASection onOpenAccount={handleInquire} />
      </Section>
    </div>
  );
};
