"use client";

import React from 'react';
import { 
  AbsoluteFill, 
  interpolate, 
  spring, 
  useCurrentFrame, 
  useVideoConfig,
  Img
} from 'remotion';
import { DIVO_BASE64 } from './assets';

interface DivoHeroProps {
  mouseX?: number;
  mouseY?: number;
}

export const DivoHero: React.FC<DivoHeroProps> = ({ 
  mouseX, 
  mouseY 
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Fallback to center if props are missing
  const mx = mouseX ?? width / 2;
  const my = mouseY ?? height / 2;

  // Floating animation for Divo
  const bobbing = Math.sin(frame / 20) * 20;
  
  // Scale in effect
  const scale = spring({
    frame,
    fps,
    config: {
      damping: 12,
    },
  });

  // Background glow intensity
  const glowOpacity = interpolate(
    Math.sin(frame / 30),
    [-1, 1],
    [0.3, 0.6]
  );

  // Mouse follow logic - subtle tilt and move
  const targetX = (mx - width / 2) * 0.1;
  const targetY = (my - height / 2) * 0.1;
  const rotateY = (mx - width / 2) * 0.05;
  const rotateX = -(my - height / 2) * 0.05;

  return (
    <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, #0070f3 0%, transparent 70%)',
          opacity: glowOpacity,
          filter: 'blur(100px)',
        }}
      />

      {/* Grid Pattern */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(rgba(0, 210, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Divo Character */}
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          left: '25%', // Offset to the right
          transform: `translate(${targetX}px, ${targetY + bobbing}px) scale(${scale * 0.8}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          perspective: '1000px',
        }}
      >
        <div style={{ position: 'relative' }}>
          {/* Shadow/Glow under Divo */}
          <div
            style={{
              position: 'absolute',
              bottom: -50,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 150,
              height: 40,
              background: 'rgba(0, 112, 243, 0.4)',
              filter: 'blur(30px)',
              borderRadius: '50%',
            }}
          />
          <Img 
            src={DIVO_BASE64} 
            style={{ 
              width: 300,
              height: 'auto',
              filter: 'drop-shadow(0 0 30px rgba(0, 112, 243, 0.5))'
            }} 
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
