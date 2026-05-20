"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Sparkles,
  Globe,
  Shield,
  Zap,
  Repeat
} from 'lucide-react';
import { DIVO_BASE64 } from '@/remotion/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const FeatureBox = ({ title, desc, icon: Icon, position, t }: any) => (
  <div className={`absolute ${position} w-60 p-6 rounded-3xl bg-[#0a0c10]/80 border border-white/10 backdrop-blur-2xl z-10 transition-all hover:bg-white/[0.05] hover:border-primary/40 group shadow-2xl`}>
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform shadow-[inset_0_0_20px_rgba(0,112,243,0.1)]">
        <Icon size={24} />
      </div>
      <h4 className="text-white text-base font-bold mb-2 tracking-tight">{t(title)}</h4>
      <p className="text-white/40 text-xs leading-relaxed font-medium">{t(desc)}</p>
    </div>
  </div>
);

const PricingSection = () => {
  const { t } = useLanguage();
  const [isHappy, setIsHappy] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      
      if (
        e.clientX >= rect.left && 
        e.clientX <= rect.right && 
        e.clientY >= rect.top && 
        e.clientY <= rect.bottom
      ) {
        setIsVisible(true);
        setMousePos({ x: e.clientX, y: e.clientY });
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const plans = [
    {
      name: "price.free.name",
      price: "0",
      features: t('price.features.free').split(','),
      cta: "price.cta.free",
      recommended: false
    },
    {
      name: "price.premium.name",
      price: "10",
      features: t('price.features.premium').split(','),
      cta: "price.cta.premium",
      recommended: true
    }
  ];

  const corners = [
    { title: "feat.4.title", desc: "feat.4.desc", icon: Globe, position: "-top-20 -left-48" },
    { title: "feat.5.title", desc: "feat.5.desc", icon: Shield, position: "-top-20 -right-48" },
    { title: "feat.1.title", desc: "feat.1.desc", icon: Zap, position: "bottom-0 -left-48" },
    { title: "feat.6.title", desc: "feat.6.desc", icon: Sparkles, position: "bottom-0 -right-48" },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-24 md:py-60 bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,112,243,0.08)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 md:mb-36">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 md:mb-8 text-white px-4"
          >
            {t('price.title').split('Plan').map((part: string, i: number) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Plan</span>}
              </React.Fragment>
            ))}
          </motion.h2>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium tracking-tight">
            {t('price.subtitle')}
          </p>
        </div>

        {/* Central Layout Container */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Corner Features (Desktop Only) */}
          <div className="absolute inset-0 -z-10 pointer-events-none hidden lg:block">
            {corners.map((corner, idx) => (
              <FeatureBox key={idx} {...corner} t={t} />
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative z-20 w-full max-w-3xl px-4">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className={`relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border transition-all duration-700 flex flex-col group ${
                  plan.recommended 
                    ? 'bg-white/[0.04] border-primary/40 shadow-[0_0_100px_rgba(0,112,243,0.2)]' 
                    : 'bg-white/[0.02] border-white/10'
                }`}
              >
                {plan.recommended && (
                  <>
                    <div className="absolute -inset-px rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-primary/50 opacity-100 animate-pulse-glow" />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full shadow-[0_0_30px_rgba(0,112,243,0.5)] z-30 whitespace-nowrap">
                      {t('price.trial')}
                    </div>
                  </>
                )}
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">{t(plan.name)}</h3>
                  <div className="flex items-baseline gap-2 mb-8 md:mb-10">
                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">${plan.price}</span>
                    <span className="text-white/30 text-lg md:text-xl font-bold">/mo</span>
                  </div>

                  <div className="space-y-4 md:space-y-6 mb-10 md:mb-12 flex-grow">
                    {plan.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 md:gap-4 text-sm md:text-base font-semibold text-white/50 group-hover:text-white/80 transition-colors">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onMouseEnter={() => setIsHappy(true)}
                    onMouseLeave={() => setIsHappy(false)}
                    className={`w-full py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-500 transform active:scale-95 ${
                      plan.recommended 
                        ? 'bg-primary text-white shadow-[0_25px_50px_-12px_rgba(0,112,243,0.6)] hover:bg-secondary hover:-translate-y-1' 
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'
                    }`}
                  >
                    {t(plan.cta)}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          </div>

          {/* Divo Mascot following the mouse literally */}
          <div 
            className={`fixed inset-0 pointer-events-none z-50 hidden lg:block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              transform: `translate(${mousePos.x + 80}px, ${mousePos.y + 80}px)`,
              transition: 'transform 0.25s ease-out, opacity 0.5s ease'
            }}
          >
            <div className="absolute">
               {/* Happiness Glow */}
               <AnimatePresence mode="wait">
                  {isHappy && (
                    <motion.div 
                      key="glow"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 2, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="absolute inset-0 bg-primary/40 blur-[100px] rounded-full -z-10"
                    />
                  )}
               </AnimatePresence>

               <div className="relative group">
                  <img 
                    src={DIVO_BASE64} 
                    alt="Divo" 
                    className={`w-40 h-40 object-contain transition-all duration-300 ${
                      isHappy ? 'brightness-125 drop-shadow-[0_0_50px_rgba(0,112,243,0.6)] scale-110' : 'brightness-110 drop-shadow-[0_0_20px_rgba(0,112,243,0.2)]'
                    }`}
                  />
                  
                  {/* Subtle Pedestal / Light below Divo as he moves */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary/20 blur-xl rounded-full opacity-50" />
               </div>
            </div>
          </div>

        </div>
    </section>
  );
};

export default PricingSection;
