import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface TestimonialCardData {
  stars: number;
  quote: React.ReactNode;
  author: string;
  role: string;
  company: string;
}

const CLIENT_TESTIMONIALS: TestimonialCardData[] = [
  {
    stars: 5,
    quote: (
      <>
        "Over the last three years, <strong className="font-bold text-slate-950 dark:text-white">AyaamX has served as an indispensable pillar of our engineering operations</strong>. Their technical depth in MT5 Manager APIs and low-latency client portals allowed us to scale throughput to over <strong className="font-bold text-slate-950 dark:text-white">$120M+ monthly volume with zero unscheduled downtime</strong>."
      </>
    ),
    author: "Christopher Ward",
    role: "VP of Technology",
    company: "Succeed Capital FX"
  },
  {
    stars: 5,
    quote: (
      <>
        "<strong className="font-bold text-slate-950 dark:text-white">AyaamX's systems engineers integrated seamlessly</strong> with our proprietary trading engine. Their FIX 4.4 order routing protocol and ultra-fast WebSocket execution <strong className="font-bold text-slate-950 dark:text-white">surpassed our internal sub-8ms latency benchmarks</strong>."
      </>
    ),
    author: "Katarina Vance",
    role: "Chief Technology Officer",
    company: "Solitaire Markets"
  },
  {
    stars: 5,
    quote: (
      <>
        "AyaamX delivered our multi-chain crypto payment gateway well ahead of schedule. Rather than behaving like an arms-length vendor, <strong className="font-bold text-slate-950 dark:text-white">they operated with the speed and accountability of founding technical partners</strong>, ensuring instant non-custodial settlements."
      </>
    ),
    author: "Alexander Reed",
    role: "Head of Infrastructure",
    company: "Blockchain Payment Gateway"
  },
  {
    stars: 5,
    quote: (
      <>
        "<strong className="font-bold text-slate-950 dark:text-white">AyaamX engineered our multi-mode crypto exchange from the ground up</strong>, covering Spot, Futures, and P2P escrow trading. Their automated risk controls and wallet architecture kept the platform <strong className="font-bold text-slate-950 dark:text-white">consistently secure under peak trading volatility</strong>."
      </>
    ),
    author: "Dominic Thorne",
    role: "Managing Director",
    company: "Crypto Exchange (Spot & Futures)"
  },
  {
    stars: 5,
    quote: (
      <>
        "In an industry plagued by brittle software, <strong className="font-bold text-slate-950 dark:text-white">AyaamX delivered our high-traffic dispatch and passenger booking engine with pure precision</strong>. Over 25,000+ daily passenger bookings processed without a single concurrency glitch. <strong className="font-bold text-slate-950 dark:text-white">An exceptional engineering partner</strong>."
      </>
    ),
    author: "Erik Lindqvist",
    role: "Director of Fleet Operations",
    company: "ResVIP Mobility Platform"
  }
];

export const HomeTestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50/70 dark:bg-[#070A0F] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 6-Block Asymmetric Grid matching design format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          
          {/* Block 1: Left Anchor Header Card (Clean & Modern) */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white dark:bg-[#0B111B] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-xs"
          >
            {/* Overlapping Executive Client Avatars */}
            <div className="flex items-center justify-center -space-x-3 mb-6">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
                alt="Client Executive"
                className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0B111B] object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
                alt="Client Executive"
                className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0B111B] object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
                alt="Client Executive"
                className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0B111B] object-cover shadow-sm"
              />
            </div>

            {/* Bold Direct Headline */}
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
              What our <br />
              clients say <br />
              about us
            </h2>
          </motion.div>

          {/* Blocks 2 to 6: 5 Detailed Quotation Cards with Stars & Author Footer */}
          {CLIENT_TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: 0.08 * (idx + 1), ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#0B111B] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#1b3995]/40 dark:hover:border-[#438780]/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* 5 Warm Golden Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.stars)].map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className="w-4 h-4 fill-amber-400 stroke-amber-400"
                    />
                  ))}
                </div>

                {/* Quote with Bold Key Takeaways */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Author & Designation Line */}
              <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-xs text-slate-800 dark:text-slate-200 font-medium">
                  <span className="font-bold text-slate-950 dark:text-white">{item.author}</span>
                  <span className="text-slate-400 dark:text-slate-500 mx-1.5">|</span>
                  <span className="text-slate-600 dark:text-slate-400">{item.role}, {item.company}</span>
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
