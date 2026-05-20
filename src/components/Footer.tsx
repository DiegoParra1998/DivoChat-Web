"use client";

import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link 
              href="/" 
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-3 mb-6 group"
            >
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,112,243,0.3)] group-hover:scale-110 transition-all duration-500">
                <img src="/assets/logo.jpg" alt="DivoChat" className="w-7 h-7 rounded-lg object-contain" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">DivoChat</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="/assets/shopify_logo.png" alt="Shopify" className="h-6 object-contain" />
              <img src="/assets/WordPress_blue_logo.svg.png" alt="WordPress" className="h-6 object-contain" />
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.product')}</h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="text-white/40 hover:text-primary transition-colors">{t('nav.features')}</Link></li>
              <li><Link href="#how-it-works" className="text-white/40 hover:text-primary transition-colors">{t('nav.howItWorks')}</Link></li>
              <li><Link href="#pricing" className="text-white/40 hover:text-primary transition-colors">{t('nav.pricing')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.support')}</h4>
            <ul className="space-y-4">
              <li><Link href="mailto:support@divochat.com" className="text-white/40 hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-white/40 hover:text-primary transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link href="/terms" className="text-white/40 hover:text-primary transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-white/20 text-xs tracking-widest uppercase font-medium">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
