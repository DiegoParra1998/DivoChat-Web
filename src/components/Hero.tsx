"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import InteractiveHeroBackground from './InteractiveHeroBackground';

import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const [isClient, setIsClient] = React.useState(false);
  const [mousePos, setMousePos] = React.useState({ x: 960, y: 540 });

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 1920;
      const y = (e.clientY / window.innerHeight) * 1080;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
    ).fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' },
      "-=0.5"
    );

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[110vh] md:min-h-[120vh] w-full flex items-center justify-center py-20 overflow-hidden">
      <InteractiveHeroBackground />
      


      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl pt-10 md:pt-20">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent leading-tight md:leading-[1.1]"
        >
          {t('hero.title')}
        </h1>
        <p 
          ref={subRef}
          className="text-lg md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed px-4"
        >
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
          <a href="https://apps.shopify.com/whatschatapp?locale=es&preferred_listing_locale=en#adp-details-section" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all shadow-[0_0_30px_rgba(0,112,243,0.4)] text-center">
            {t('hero.cta.primary')}
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all">
            {t('hero.cta.secondary')}
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
