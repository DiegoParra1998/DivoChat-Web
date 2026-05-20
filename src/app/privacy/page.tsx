"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,112,243,0.3)] group-hover:scale-110 transition-all duration-500">
            <img src="/assets/logo.jpg" alt="DivoChat" className="w-7 h-7 rounded-lg object-contain" />
          </div>
          <span className="text-2xl font-black tracking-tighter group-hover:text-primary transition-colors">DivoChat</span>
        </Link>
        
        <Link 
          href="/" 
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </nav>

      <div className="container mx-auto px-6 pt-40 pb-20 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-8">
          <Shield className="w-4 h-4" />
          Production Environment
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
          Privacy Policy
        </h1>
        <p className="text-white/40 mb-12 text-lg">Last updated: May 4, 2025</p>

        <div className="space-y-12 prose prose-invert prose-headings:tracking-tighter prose-headings:font-black">
          <section>
            <h2 className="text-3xl font-black text-white mb-4">01. Introduction</h2>
            <p className="text-white/60 leading-relaxed">
              DivoChat ("the App") is a Shopify application developed by digiTraffic SAS to add a WhatsApp chat button to merchants' online stores. This Privacy Policy explains how we collect, use, and protect information when you use our App.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-white mb-4">02. Information We Collect</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              When a visitor clicks the WhatsApp button on a merchant's store, DivoChat may collect:
            </p>
            <ul className="space-y-2 text-white/60 list-disc pl-5">
              <li>Anonymous click data (page type, product name, variant)</li>
              <li>UTM parameters (source, medium, campaign, term, content)</li>
              <li>IP address and user agent (for Meta Conversions API events only)</li>
              <li>Facebook browser cookies (fbp, fbc) if present</li>
            </ul>
            <p className="mt-4 text-white/60">
              We do not collect names, emails, phone numbers, or any personally identifiable information from store visitors.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-white mb-4">03. How We Use the Information</h2>
            <p className="text-white/60 leading-relaxed">
              The data collected is used exclusively to:
            </p>
            <ul className="space-y-2 text-white/60 list-disc pl-5 mt-4">
              <li>Provide click analytics to the merchant inside the Shopify admin</li>
              <li>Send conversion events to Meta Conversions API (only if the merchant has configured a Meta Pixel)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-black text-white mb-4">04. Data Sharing</h2>
            <p className="text-white/60 leading-relaxed">
              We do not sell or share data with third parties, except for Meta Platforms (only when enabled by the merchant).
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-white mb-4">05. Data Retention & Security</h2>
            <p className="text-white/60 leading-relaxed">
              Click data is stored securely. All sensitive data like Meta Access Tokens are encrypted using AES-256-GCM. Data is permanently deleted when a merchant uninstalls the App.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-black text-white mb-4">06. Contact</h2>
            <p className="text-white/60 leading-relaxed">
              For privacy-related questions, contact us at our support email listed in the Shopify App Store.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-sm italic">
            Built with ⚡ by digiTraffic SAS
          </p>
          <Link 
            href="/" 
            className="text-primary hover:text-white transition-colors font-bold text-sm"
          >
            divochat.com
          </Link>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-10" />
    </main>
  );
}
