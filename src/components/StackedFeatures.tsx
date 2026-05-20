"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DIVO_BASE64 } from '@/remotion/assets';
import { Sparkles, Zap, Shield, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "stacked.1.title",
    subtitle: "stacked.1.subtitle",
    desc: "stacked.1.desc",
    icon: Zap,
    image: "/assets/feat_catalog.png",
    color: "from-purple-900/40 to-black",
    divoStyle: "shadow-[0_0_150px_rgba(168,85,247,0.6)]"
  },
  {
    title: "stacked.2.title",
    subtitle: "stacked.2.subtitle",
    desc: "stacked.2.desc",
    icon: Shield,
    image: "/assets/feat_config.png",
    color: "from-blue-900/40 to-black",
    divoStyle: "shadow-[0_0_150px_rgba(0,112,243,0.6)]"
  },
  {
    title: "stacked.3.title",
    subtitle: "stacked.3.subtitle",
    desc: "stacked.3.desc",
    icon: Sparkles,
    image: "/assets/feat_personalizacion.png",
    color: "from-orange-900/40 to-black",
    divoStyle: "shadow-[0_0_150px_rgba(249,115,22,0.6)]",
    isRainbow: true
  },
  {
    title: "stacked.4.title",
    subtitle: "stacked.4.subtitle",
    desc: "stacked.4.desc",
    icon: Globe,
    image: "/assets/feat_tracking.png",
    color: "from-emerald-900/40 to-black",
    divoStyle: "shadow-[0_0_150px_rgba(16,185,129,0.6)]"
  }
];

const StackedFeatures = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: "bottom bottom",
        });

        gsap.to(card, {
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
          scale: 0.9,
          opacity: 0,
          filter: "blur(20px)"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black">
      {features.map((feature, i) => (
        <div 
          key={i}
          ref={(el) => { if (el) cardsRef.current[i] = el; }}
          className="h-screen w-full flex items-center justify-center p-6 sticky top-0 pt-24"
        >
          <div className={`relative w-full max-w-6xl min-h-[70vh] md:min-h-[85vh] py-8 md:py-12 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 bg-gradient-to-br ${feature.color} backdrop-blur-3xl flex flex-col items-center justify-center text-center px-6 md:px-20 group`}>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.1)_0%,transparent_70%)]" />

            {/* Content Container */}
            <div className="relative z-10 max-w-3xl flex flex-col items-center">
              {/* Subtitle Pill */}
              <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-8 md:mb-12 transform group-hover:scale-105 transition-transform">
                <feature.icon size={12} className="animate-pulse" />
                {t(feature.subtitle)}
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl font-black text-white mb-2 md:mb-6 tracking-tighter leading-[1.1] md:leading-none px-2">
                {t(feature.title)}
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg lg:text-2xl text-white/40 leading-relaxed mb-4 md:mb-8 max-w-2xl font-medium px-4">
                {t(feature.desc)}
              </p>

              {/* Divo Mascot (The Hero of the card) */}
              <div className="relative mt-2 md:mt-4">
                <div className={`absolute inset-0 blur-[80px] md:blur-[140px] rounded-full transition-all duration-1000 ${feature.divoStyle} ${feature.isRainbow ? 'animate-rainbow-glow opacity-80' : 'opacity-40'}`} />
                <img 
                  src={feature.image || DIVO_BASE64} 
                  alt="Divo" 
                  className={`w-28 h-28 md:w-36 lg:w-44 xl:w-64 md:h-36 lg:h-44 xl:h-64 object-contain relative z-10 animate-float 
                    ${feature.isRainbow ? 'brightness-125 drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]' : 'drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]'}`}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      

    </section>
  );
};

export default StackedFeatures;
