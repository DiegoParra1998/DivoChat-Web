"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.howItWorks'), href: '#how-it-works' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4 bg-black/40 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link 
            href="/" 
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(0,112,243,0.4)] group-hover:rotate-12 transition-transform">
              <img src="/assets/logo.jpg" alt="DivoChat" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">DivoChat</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-white/50 hover:text-white transition-all hover:tracking-widest uppercase tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button 
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold text-white transition-all"
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          >
            <Globe size={14} className="text-primary" />
            <span className={language === 'en' ? 'text-white' : 'text-white/40'}>EN</span>
            <span className="opacity-30">/</span>
            <span className={language === 'es' ? 'text-white' : 'text-white/40'}>ES</span>
          </button>

          <button className="hidden md:block px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            {t('nav.install')}
          </button>
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-black text-white/70 hover:text-white tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_10px_20px_rgba(0,112,243,0.3)]">
                {t('nav.install')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
