"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Download, Settings, ToggleRight, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const steps = [
  {
    number: "1",
    title: "how.step1.title",
    desc: "how.step1.desc",
    icon: Download,
    color: "from-blue-500 to-blue-600",
    glow: "rgba(59, 130, 246, 0.5)"
  },
  {
    number: "2",
    title: "how.step2.title",
    desc: "how.step2.desc",
    icon: Settings,
    color: "from-purple-500 to-purple-600",
    glow: "rgba(168, 85, 247, 0.5)"
  },
  {
    number: "3",
    title: "how.step3.title",
    desc: "how.step3.desc",
    icon: ToggleRight,
    color: "from-pink-500 to-pink-600",
    glow: "rgba(236, 72, 153, 0.5)"
  },
  {
    number: "4",
    title: "how.step4.title",
    desc: "how.step4.desc",
    icon: BarChart3,
    color: "from-emerald-500 to-emerald-600",
    glow: "rgba(16, 185, 129, 0.5)"
  }
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Flow line fill
  const pathLength = useTransform(smoothProgress, [0.2, 0.8], [0, 1]);

  return (
    <section id="how-it-works" ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 tracking-tighter text-white px-4"
          >
            {t('nav.howItWorks')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            {t('how.subtitle')}
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 overflow-hidden">
            <motion.div 
              style={{ scaleX: pathLength }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <StepItem key={index} step={step} index={index} progress={smoothProgress} t={t} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Abstract Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
    </section>
  );
}

function StepItem({ step, index, progress, t }: { step: any, index: number, progress: any, t: any }) {
  const threshold = (index + 1) / 5;
  const isActive = useTransform(progress, [threshold - 0.1, threshold], [0, 1]);
  
  const y = useTransform(progress, [0, 1], [0, index % 2 === 0 ? -20 : 20]);

  return (
    <motion.div 
      style={{ y }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Circle Number */}
      <div className="relative mb-8">
        <motion.div 
          initial={false}
          style={{ 
            scale: useTransform(progress, [threshold - 0.1, threshold], [1, 1.2]),
            borderColor: useTransform(progress, [threshold - 0.1, threshold], ["rgba(255,255,255,0.1)", "rgba(59, 130, 246, 1)"])
          }}
          className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-black/50 backdrop-blur-xl relative z-10"
        >
          <span className="text-xl font-bold text-white">{step.number}</span>
        </motion.div>
        
        {/* Glow behind circle */}
        <motion.div 
          style={{ opacity: isActive }}
          className="absolute inset-0 blur-2xl rounded-full"
          animate={{
            backgroundColor: ["rgba(0,112,243,0.3)", "rgba(168,85,247,0.3)", "rgba(0,112,243,0.3)"]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all group"
      >
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg shadow-black/50`}>
          <step.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{t(step.title)}</h3>
        <p className="text-sm text-white/40 leading-relaxed">{t(step.desc)}</p>
      </motion.div>

      {/* Abstract Visualization Mini-Component (Inspired by user image) */}
      <div className="mt-8 opacity-20 group-hover:opacity-100 transition-opacity">
        <AbstractVisual index={index} />
      </div>
    </motion.div>
  );
}

function AbstractVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="flex gap-1 h-8 items-end">
        {[4, 7, 5, 8, 3].map((h, i) => (
          <motion.div 
            key={i}
            animate={{ height: [h*2, h*4, h*2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            className="w-1 bg-blue-500 rounded-full"
          />
        ))}
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="relative w-12 h-8">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-dashed border-purple-500/50 rounded-full"
        />
        <div className="absolute inset-2 bg-purple-500 rounded-full blur-sm" />
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="flex gap-2">
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-pink-500" 
        />
        <div className="w-2 h-2 rounded-full bg-pink-500/20" />
        <div className="w-2 h-2 rounded-full bg-pink-500/20" />
      </div>
    );
  }
  return (
    <div className="relative w-12 h-8 flex items-center justify-center">
      <motion.div 
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-6 h-1 bg-emerald-500 rounded-full"
      />
      <motion.div 
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-4 h-4 border border-emerald-500 rounded-lg"
      />
    </div>
  );
}
