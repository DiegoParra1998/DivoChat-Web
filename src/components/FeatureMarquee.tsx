"use client";

import React from 'react';
import { 
  Upload, 
  Layout, 
  Code2, 
  Layers,
  Zap,
  Globe,
  Shield,
  MessageSquare
} from 'lucide-react';
import { DIVO_BASE64 } from '@/remotion/assets';

const marqueeFeatures = [
  { title: "Smart Chatbot", icon: MessageSquare, desc: "AI-driven conversations" },
  { title: "Upload Data", icon: Upload, desc: "Train on your files" },
  { title: "Global Scale", icon: Globe, desc: "Multilingual support" },
  { title: "Safe & Secure", icon: Shield, desc: "End-to-end encryption" },
  { title: "Fast Sync", icon: Zap, desc: "Instant platform updates" },
  { title: "Smart Layouts", icon: Layout, desc: "AI visual builder" },
  { title: "Clean Code", icon: Code2, desc: "Exportable snippets" },
  { title: "Any Stack", icon: Layers, desc: "React, Vue, Svelte" },
];

const FeatureMarquee = () => {
  const allFeatures = [...marqueeFeatures, ...marqueeFeatures];

  return (
    <section className="py-20 bg-black overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 mb-12 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
          Experience the <span className="text-primary">Divo Difference</span>
        </h2>
        <p className="text-white/40 max-w-2xl mx-auto">
          Every feature designed to put Divo at the heart of your business growth.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center py-10">
          {allFeatures.map((item, idx) => (
            <div 
              key={idx}
              className="mx-8 group relative"
            >
              <div className="flex items-center gap-6 px-8 py-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:bg-white/[0.05]">
                {/* Divo Background Silhouette */}
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <img src={DIVO_BASE64} alt="" className="w-24 h-24 grayscale" />
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,112,243,0.2)]">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-white/30 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-10">
          {allFeatures.map((item, idx) => (
            <div 
              key={`clone-${idx}`}
              className="mx-8 group relative"
            >
              <div className="flex items-center gap-6 px-8 py-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:bg-white/[0.05]">
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <img src={DIVO_BASE64} alt="" className="w-24 h-24 grayscale" />
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(0,112,243,0.2)]">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-white/30 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureMarquee;
