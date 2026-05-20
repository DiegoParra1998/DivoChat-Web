"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Zap,
  MessageSquare,
  BarChart3,
  Target,
  Sparkles
} from 'lucide-react';
import { DIVO_BASE64 } from '@/remotion/assets';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ title, description, icon: Icon, className }: any) => (
  <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl group hover:border-primary/50 transition-colors duration-500 ${className}`}>
    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
      <Icon className="text-primary w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/60 text-sm leading-relaxed">{description}</p>
  </div>
);

const InteractiveFeatures = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const features = [
    {
      title: t('feat.1.title'),
      description: t('feat.1.desc'),
      icon: Zap,
    },
    {
      title: t('feat.2.title'),
      description: t('feat.2.desc'),
      icon: MessageSquare,
    },
    {
      title: t('feat.3.title'),
      description: t('feat.3.desc'),
      icon: BarChart3,
    },
    {
      title: t('feat.4.title'),
      description: t('feat.4.desc'),
      icon: Target,
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const rawX = (e.clientX - rect.left - rect.width / 2) * 0.1;
      const rawY = (e.clientY - rect.top - rect.height / 2) * 0.1;
      const x = Math.max(-30, Math.min(30, rawX));
      const y = Math.max(-30, Math.min(30, rawY));
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Pin the section for a while
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500",
        pin: true,
        scrub: 1,
      });

      // Initial state
      gsap.set(mascotRef.current, { scale: 0.5, opacity: 0 });
      gsap.set(".feature-card", { opacity: 0, x: (i) => (i % 2 === 0 ? -100 : 100), y: (i) => (i < 2 ? -50 : 50) });
      gsap.set(".connection-path", { strokeDasharray: 1000, strokeDashoffset: 1000 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });

      tl.to(mascotRef.current, { scale: 1, opacity: 1, duration: 1 })
        .to(".feature-card", { opacity: 1, x: 0, y: 0, stagger: 0.2, duration: 1 }, "-=0.5")
        .to(".connection-path", { strokeDashoffset: 0, stagger: 0.1, duration: 1.5 }, "-=1");
    });

    return () => {
      mm.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="features" ref={containerRef} className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 px-4">
      {/* Top Gradient Transition */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.1)_0%,transparent_70%)]" />

      {/* Title for mobile visibility */}
      <div className="md:hidden text-center mb-12 relative z-10">
        <h2 className="text-3xl font-black text-white tracking-tighter mb-4">{t('nav.features')}</h2>
        <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="relative w-full max-w-6xl md:h-[700px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
        
        {/* SVG Connections Layer (Desktop Only) */}
        <svg ref={svgRef} className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 700">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          <path className="connection-path opacity-20" d="M 500 350 Q 400 350, 250 150" stroke="#3b82f6" strokeWidth="1" fill="none" />
          <path className="connection-path opacity-20" d="M 500 350 Q 600 350, 750 150" stroke="#3b82f6" strokeWidth="1" fill="none" />
          <path className="connection-path opacity-20" d="M 500 350 Q 400 350, 250 550" stroke="#3b82f6" strokeWidth="1" fill="none" />
          <path className="connection-path opacity-20" d="M 500 350 Q 600 350, 750 550" stroke="#3b82f6" strokeWidth="1" fill="none" />

          <path className="connection-path flow-line" d="M 500 350 Q 400 350, 250 150" stroke="url(#lineGradient)" strokeWidth="3" fill="none" filter="url(#glow)" />
          <path className="connection-path flow-line" d="M 500 350 Q 600 350, 750 150" stroke="url(#lineGradient)" strokeWidth="3" fill="none" filter="url(#glow)" />
          <path className="connection-path flow-line" d="M 500 350 Q 400 350, 250 550" stroke="url(#lineGradient)" strokeWidth="3" fill="none" filter="url(#glow)" />
          <path className="connection-path flow-line" d="M 500 350 Q 600 350, 750 550" stroke="url(#lineGradient)" strokeWidth="3" fill="none" filter="url(#glow)" />
        </svg>

        {/* Central Mascot */}
        <div 
          ref={mascotRef} 
          className="relative z-10 w-48 h-48 md:w-72 md:h-72 flex items-center justify-center mb-8 md:mb-0"
        >
          <div className="absolute inset-0 bg-blue-500/5 blur-[80px] md:blur-[120px] rounded-full" />
          
          <div className="relative p-6 md:p-10 rounded-full bg-black/50 border border-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <div className="relative">
              <img 
                src={DIVO_BASE64} 
                alt="Divo" 
                className="w-24 h-24 md:w-40 md:h-40 object-contain transition-transform duration-300 ease-out"
                style={{
                  transform: `
                    translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px) 
                    rotateY(${mousePos.x * 1.5}deg) 
                    rotateX(${-mousePos.y * 1.5}deg)
                    scale(1.15)
                  `,
                  perspective: '1200px'
                }}
              />
              <div 
                className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen blur-[1px]"
                style={{
                  background: `radial-gradient(circle at ${50 + mousePos.x * 0.3}% ${50 + mousePos.y * 0.3}%, rgba(255,255,255,0.5) 0%, transparent 25%)`,
                  transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Features Layout */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 md:absolute md:top-0 md:left-0 md:w-full md:h-full pointer-events-none">
          <div className="md:absolute md:top-[2%] md:left-[2%] w-full md:w-72 feature-card pointer-events-auto">
            <FeatureCard {...features[0]} />
          </div>
          <div className="md:absolute md:top-[2%] md:right-[2%] w-full md:w-72 feature-card pointer-events-auto">
            <FeatureCard {...features[1]} />
          </div>
          <div className="md:absolute md:bottom-[2%] md:left-[2%] w-full md:w-72 feature-card pointer-events-auto">
            <FeatureCard {...features[2]} />
          </div>
          <div className="md:absolute md:bottom-[2%] md:right-[2%] w-full md:w-72 feature-card pointer-events-auto">
            <FeatureCard {...features[3]} />
          </div>
        </div>

      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default InteractiveFeatures;
