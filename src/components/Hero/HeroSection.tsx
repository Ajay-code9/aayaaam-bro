import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HIDE_BOOK_DEMO } from '../../config/flags';

interface HeroSectionProps {
  onOpenAccount: () => void;
  onExplorePlatforms: () => void;
}

interface SlideItem {
  id: number;
  bgImage: string;
  badge: string;
  headline: string;
  subtext: string;
  buttonText: string;
  actionType: 'platforms' | 'crm' | 'institutional';
  textColor: 'black' | 'white';
}

const HERO_SLIDES: SlideItem[] = [
  {
    id: 1,
    bgImage: '/Homepage/hero-one.webp',
    badge: 'TURNKEY PRODUCT ENGINEERING',
    headline: 'We Build & License High-Performance\nSoftware, Trading Systems & AI',
    subtext: 'AyaamX delivers production-ready trading platforms, broker backoffices, proprietary firm engines, and enterprise AI automation — custom engineered and deployed directly for your brand.',
    buttonText: 'REQUEST SOFTWARE DEMO',
    actionType: 'crm',
    textColor: 'black',
  },
  {
    id: 2,
    bgImage: '/Homepage/hero-two.webp',
    badge: 'TURNKEY BROKER & PROP FIRM PLATFORMS',
    headline: 'Turnkey Trading Platforms &\nBroker Backoffice Software',
    subtext: 'Ready-to-deploy client portals, multi-tier IB commission engines, and automated prop firm risk management — pre-integrated with MT4, MT5, cTrader, and Tier-1 liquidity under your brand.',
    buttonText: 'REQUEST PLATFORM DEMO',
    actionType: 'crm',
    textColor: 'white',
  },
  {
    id: 3,
    bgImage: '/Homepage/hero-three.webp',
    badge: 'ENTERPRISE AI & DIGITAL ENGINEERING',
    headline: 'Custom AI Automation, Web3 &\nEnterprise Cloud Architecture',
    subtext: 'We architect and build tailored digital products, document processing pipelines, multi-chain crypto gateways, and scalable cloud microservices for global financial enterprises.',
    buttonText: 'CONSULT LEAD ARCHITECTS',
    actionType: 'institutional',
    textColor: 'black',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAccount, onExplorePlatforms }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = HERO_SLIDES[currentSlide];
  const isWhiteText = slide.textColor === 'white';

  const handleAction = (type: string) => {
    if (type === 'crm') {
      window.location.hash = '/solutions/broker-crm';
    } else if (type === 'institutional') {
      window.location.hash = '/institutional';
    } else {
      onExplorePlatforms();
    }
  };

  return (
    <section
      className="relative bg-slate-900 text-white flex-1 flex items-center overflow-hidden border-b border-slate-800 font-sans select-none sm:min-h-[520px] py-4 sm:py-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Original Still Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full no-theme-transition">
        {HERO_SLIDES.map((item, idx) => (
          <img
            key={item.id}
            src={item.bgImage}
            alt={`AyaamX Hero Slide ${item.id}`}
            className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-500 ease-in-out no-theme-transition ${
              currentSlide === idx ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
          />
        ))}
        {/* Soft gradient mask for mobile legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:hidden pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-4 pb-10 sm:py-16">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="space-y-3 sm:space-y-4"
            >
              {/* Headline - Dynamic Black or White based on slide background */}
              <h1 className={`text-[1.35rem] leading-[1.22] sm:text-4xl lg:text-5xl font-black tracking-tight sm:whitespace-pre-line break-words max-w-full font-sans ${
                isWhiteText ? 'text-white drop-shadow-md' : 'text-slate-950'
              }`}>
                {slide.headline}
              </h1>

              {/* Subtext */}
              <p className={`text-xs sm:text-base leading-relaxed font-normal sm:font-medium max-w-xl font-sans ${
                isWhiteText ? 'text-slate-100 drop-shadow-sm' : 'text-slate-800'
              }`}>
                {slide.subtext}
              </p>

              {/* Action Buttons */}
              <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-stretch sm:items-center">
                {!(HIDE_BOOK_DEMO && slide.buttonText.includes('DEMO')) && (
                  <button
                    onClick={() => handleAction(slide.actionType)}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-7 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all cursor-pointer text-xs sm:text-sm tracking-wider uppercase font-sans shadow-md text-center"
                  >
                    {slide.buttonText}
                  </button>
                )}
                <button
                  onClick={onExplorePlatforms}
                  className={`w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3.5 border rounded-lg text-xs sm:text-sm tracking-wider uppercase font-bold transition-all cursor-pointer text-center ${
                    isWhiteText
                      ? 'border-white/80 text-white bg-black/20 backdrop-blur-xs hover:bg-white hover:text-slate-900'
                      : 'border-slate-900 text-slate-950 bg-white/40 backdrop-blur-xs hover:bg-slate-950 hover:text-white'
                  }`}
                >
                  EXPLORE PRODUCTS
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation Controls & Indicators */}
      <div className="absolute bottom-5 left-4 sm:left-8 lg:left-12 z-20 flex items-center gap-4">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                currentSlide === idx
                  ? 'w-8 bg-emerald-600'
                  : isWhiteText
                  ? 'w-3 bg-white/40 hover:bg-white/70'
                  : 'w-3 bg-slate-400/60 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div className={`flex items-center gap-1 border-l pl-3 ${isWhiteText ? 'border-white/30' : 'border-slate-300'}`}>
          <button
            onClick={() => setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className={`p-1.5 transition-colors cursor-pointer ${
              isWhiteText ? 'text-white hover:text-emerald-400' : 'text-slate-800 hover:text-emerald-700'
            }`}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length)}
            className={`p-1.5 transition-colors cursor-pointer ${
              isWhiteText ? 'text-white hover:text-emerald-400' : 'text-slate-800 hover:text-emerald-700'
            }`}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
