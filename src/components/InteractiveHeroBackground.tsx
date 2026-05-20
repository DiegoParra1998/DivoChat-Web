"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const InteractiveHeroBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 100;
        const y = (clientY / window.innerHeight - 0.5) * 100;

        gsap.to(".bg-blob", {
          x: (i) => x * (i + 1),
          y: (i) => y * (i + 1),
          duration: 1.5,
          ease: "power2.out",
          overwrite: true
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-black pointer-events-none" style={{ zIndex: 0 }}>
      {/* Brand Color Blobs - Increased opacity and size */}
      <div className="bg-blob absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[150px]" />
      <div className="bg-blob absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-blue-400/20 rounded-full blur-[180px]" />
      <div className="bg-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px]" />
      
      {/* Dark Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
    </div>
  );
};

export default InteractiveHeroBackground;
