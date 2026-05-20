"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MessageSquare, Zap, Shield, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Automated Chat',
    desc: 'Divo handles your customers 24/7 with human-like precision.',
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Instant Sync',
    desc: 'Your catalog and data synced across Shopify and WordPress in seconds.',
    icon: <Zap className="w-8 h-8 text-secondary" />,
  },
  {
    title: 'Safe & Secure',
    desc: 'Enterprise-grade encryption for all your WhatsApp communications.',
    icon: <Shield className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Global Reach',
    desc: 'Connect with customers worldwide in their preferred language.',
    icon: <Globe className="w-8 h-8 text-secondary" />,
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1,
          }
        );
      }
    });
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Powerful Features for <br /> Modern Businesses
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el as HTMLDivElement; }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group hover:border-primary/50 relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all" />
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
