import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useRouter } from '../../router';

interface HeroSectionProps {
  onOpenAccount: () => void;
  onExplorePlatforms: () => void;
}

interface Star {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  twinkleSpeed: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAccount, onExplorePlatforms }) => {
  const { navigate } = useRouter();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive starfield response
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      radius: 200,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Palette: Crisp starlight whites and luminous cyan/blue sparkles matching Swovo
    const starPalette = [
      'rgba(255, 255, 255, ',
      'rgba(245, 250, 255, ',
      'rgba(219, 234, 254, ',
      'rgba(147, 197, 253, ',
      'rgba(96, 165, 250, ',
      'rgba(119, 189, 123, ', // subtle brand teal/green highlight
    ];

    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      // Dense star cluster density (Swovo starfield feeling: 380 - 450 stars)
      const count = Math.min(Math.floor((width * height) / 2800), 420);

      for (let i = 0; i < count; i++) {
        // Skew density toward the left & upper horizon like Swovo
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() < 0.85 ? Math.random() * 1.1 + 0.3 : Math.random() * 1.8 + 1.2;
        const baseAlpha = Math.random() * 0.6 + 0.25;
        const color = starPalette[Math.floor(Math.random() * starPalette.length)];

        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          radius,
          alpha: baseAlpha,
          baseAlpha,
          color,
          twinkleSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    initStars();

    let time = 0;

    const animate = () => {
      time += 0.02;

      // Mouse easing
      if (mouse.targetX !== -9999) {
        if (mouse.x === -9999) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.05;
          mouse.y += (mouse.targetY - mouse.y) * 0.05;
        }
      } else {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      ctx.clearRect(0, 0, width, height);

      // Render Dense Galaxy Starfield
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Gentle cosmic drift
        s.baseX += s.vx;
        s.baseY += s.vy;

        if (s.baseX < 0) s.baseX = width;
        if (s.baseX > width) s.baseX = 0;
        if (s.baseY < 0) s.baseY = height;
        if (s.baseY > height) s.baseY = 0;

        // Subtle twinkling pulse
        s.alpha = s.baseAlpha + Math.sin(time * s.twinkleSpeed * 50 + i) * 0.18;

        // Mouse hover interaction (smooth gravitational push)
        if (mouse.x !== -9999) {
          const dx = mouse.x - s.x;
          const dy = mouse.y - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const pushX = (dx / dist) * force * 38;
            const pushY = (dy / dist) * force * 38;
            s.x -= pushX * 0.1;
            s.y -= pushY * 0.1;
          } else {
            s.x -= (s.x - s.baseX) * 0.03;
            s.y -= (s.y - s.baseY) * 0.03;
          }
        } else {
          s.x -= (s.x - s.baseX) * 0.03;
          s.y -= (s.y - s.baseY) * 0.03;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${Math.max(0.1, Math.min(1, s.alpha))})`;

        // Brightest stars get celestial glow
        if (s.radius > 1.3) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#60a5fa';
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#040814] text-white flex items-center overflow-hidden border-b border-slate-800/80 font-sans select-none min-h-[560px] sm:min-h-[620px] lg:min-h-[690px] pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-18 lg:pb-20"
    >
      {/* ============================================================== */}
      {/* EXACT SWOVO CELESTIAL HORIZON & CURVED ATMOSPHERIC CRESCENT    */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Layer 1: Base Space Deep Royal Navy Void */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 110% 85% at 65% 40%, rgba(15, 36, 92, 0.55) 0%, rgba(7, 18, 48, 0.85) 50%, #030611 100%)',
          }}
        />

        {/* Layer 2: Swovo Iconic Glowing Curved Atmospheric Crescent Arc */}
        {/* Giant diagonal crescent sweeping across center-right from top to bottom */}
        <div
          className="absolute -top-[10%] -right-[8%] w-[850px] sm:w-[1100px] lg:w-[1300px] h-[850px] sm:h-[1100px] lg:h-[1300px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 45% 48%, rgba(59, 130, 246, 0.38) 0%, rgba(27, 57, 149, 0.52) 26%, rgba(67, 135, 128, 0.22) 48%, rgba(4, 8, 20, 0.9) 70%, transparent 78%)',
            filter: 'blur(65px)',
          }}
        />

        {/* Layer 3: Razor-Sharp Celestial Horizon Line Flare (The luminous planet curve edge) */}
        <div
          className="absolute top-0 right-1/4 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full pointer-events-none opacity-45"
          style={{
            border: '2px solid rgba(147, 197, 253, 0.45)',
            boxShadow: '0 0 80px 15px rgba(59, 130, 246, 0.4), inset 0 0 60px 10px rgba(67, 135, 128, 0.3)',
            filter: 'blur(35px)',
            transform: 'translate(10%, -15%) rotate(-12deg)',
          }}
        />

        {/* Layer 4: Deep Teal/Green Brand Hue Glow on Bottom-Center */}
        <div
          className="absolute -bottom-36 left-1/3 w-[600px] h-[450px] rounded-full opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(67, 135, 128, 0.4) 0%, rgba(27, 57, 149, 0.25) 50%, transparent 75%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Layer 5: High-end Subtle Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #60a5fa 1px, transparent 1px), linear-gradient(to bottom, #60a5fa 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* ============================================================== */}
      {/* INTERACTIVE MOUSE-GRAVITY STARFIELD PARTICLES (HTML5 CANVAS)     */}
      {/* ============================================================== */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      />

      {/* ============================================================== */}
      {/* HERO CONTENT: EXACT SWOVO ASYMMETRIC 2-COLUMN BALANCE          */}
      {/* ============================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          
          {/* Left Column: Monumental Bold Headline (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black tracking-tight leading-[1.04] text-white"
            >
              We Build
              <br />
              Software That
              <br />
              Scales Your
              <br />
              Vision
              <br />
              Globally
              <span className="text-[#77bd7b] inline-block ml-1">.</span>
            </motion.h1>
          </div>

          {/* Right Column: Clean Narrative Copy + Actions (5 Cols - Exactly like Swovo) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-7 lg:pl-2 pb-2"
          >
            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
              AyaamX is an institutional software engineering firm architecting autonomous AI systems, ultra-low latency trading platforms, and mission-critical enterprise software. We turn ambitious technical roadmaps into resilient, production-ready systems.
            </p>

            {/* CTAs matching Swovo layout & styling */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenAccount}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#1b3995] via-[#204464] to-[#438780] hover:from-[#204464] hover:to-[#438780] text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-xl shadow-[#1b3995]/30 cursor-pointer flex items-center justify-center gap-2.5 overflow-hidden"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('case-studies');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/portfolio');
                }}
                className="px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-400 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm tracking-wide uppercase backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#77bd7b]" />
                100% IP &amp; Code Handover
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#438780]" />
                SOC-2 &amp; ISO Aligned
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Sub-10ms Low Latency
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
