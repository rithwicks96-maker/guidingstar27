'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CloudOverlayProps {
  enabled: boolean;
  starVisible?: boolean;
  intensity?: number; // 0-1
}

export function CloudOverlay({
  enabled,
  starVisible = false,
  intensity = 0.7,
}: CloudOverlayProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-20 mix-blend-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: starVisible ? 0 : intensity }}
      transition={{
        duration: prefersReducedMotion ? 0 : 3,
        ease: 'easeInOut',
      }}
    >
      {/* Cloud Layers */}
      {Array.from({ length: 3 }).map((_, layerIdx) => (
        <motion.div
          key={layerIdx}
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 60% 30%, rgba(220, 220, 220, 0.7) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(240, 240, 240, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(200, 200, 200, 0.5) 0%, transparent 50%)
            `,
          }}
          animate={
            starVisible
              ? {
                  opacity: [0.6, 0.3, 0],
                  y: [0, -50, -100],
                }
              : {
                  opacity: [0, 0.4, 0.6],
                  y: [50, 20, 0],
                }
          }
          transition={{
            duration: prefersReducedMotion ? 0 : 4 + layerIdx,
            delay: layerIdx * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Additional cloud effect with SVG paths */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 320"
      >
        <motion.path
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,160C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="rgba(200, 200, 200, 0.3)"
          animate={
            starVisible
              ? { y: [-100, -300] }
              : { y: [0, 50] }
          }
          transition={{
            duration: prefersReducedMotion ? 0 : 4,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </motion.div>
  );
}
