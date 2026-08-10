'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useScreenVibration } from '@/hooks/useScreenVibration';

interface Chapter5OverlayProps {
  enabled: boolean;
  intensity?: number; // 0-1
}

export function Chapter5Overlay({ enabled, intensity = 0.6 }: Chapter5OverlayProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  // Trigger vibration on scene load
  useScreenVibration(enabled && !prefersReducedMotion);

  if (!enabled) return null;

  return (
    <>
      {/* Warm afternoon sky overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-10 mix-blend-multiply"
        initial={{ opacity: 0 }}
        animate={{ opacity: intensity }}
        transition={{ duration: 2.5 }}
        style={{
          background: `linear-gradient(180deg, 
            rgba(230, 140, 70, 0.25) 0%, 
            rgba(230, 160, 100, 0.15) 50%, 
            rgba(180, 120, 80, 0.2) 100%)`,
        }}
      />

      {/* Subtle vibration indicator (optional) */}
      {!prefersReducedMotion && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-5"
          animate={{
            x: [0, -2, 2, -2, 0],
            y: [0, -1, 1, -1, 0],
          }}
          transition={{
            duration: 0.4,
            repeat: 2,
            repeatDelay: 0.1,
            times: [0, 0.2, 0.4, 0.6, 1],
          }}
        />
      )}
    </>
  );
}
