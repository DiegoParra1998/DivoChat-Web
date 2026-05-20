"use client";

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import StackedFeatures from '@/components/StackedFeatures';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <InteractiveFeatures />
      <StackedFeatures />
      <HowItWorks />
      <Partners />
      <PricingSection />
      <FAQ />
      
      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-t from-dark-blue to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://apps.shopify.com/whatschatapp?locale=es&preferred_listing_locale=en#adp-details-section" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all shadow-[0_0_30px_rgba(0,112,243,0.4)] whitespace-nowrap">
              {t('cta.button')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
