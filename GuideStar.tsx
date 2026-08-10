'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GuideStarProps {
  effect?: 'glow' | 'pulse' | 'breathing' | 'flying' | 'brightening' | 'fading' | 'none';
  position?: { x: number; y: number }; // percentage 0-100
  scale?: number;
  opacity?: number;
  particleIntensity?: 0 | 1 | 2;
  duration?: number;
  show?: boolean;
}

export function GuideStar({
  effect = 'breathing',
  position = { x: 50, y: 30 },
  scale = 1,
  opacity = 1,
  particleIntensity = 1,
  duration = 3,
  show = true,
}: GuideStarProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  if (!show) return null;

  const starVariants = {
    breathing: {
      opacity: [opacity * 0.7, opacity, opacity * 0.7],
      scale: [scale * 0.95, scale, scale * 0.95],
    },
    pulse: {
      opacity: [opacity, opacity * 0.5, opacity],
      scale: [scale, scale * 1.1, scale],
    },
    glow: {
      boxShadow: [
        `0 0 20px rgba(212, 175, 55, ${opacity * 0.5})`,
        `0 0 40px rgba(212, 175, 55, ${opacity})`,
        `0 0 20px rgba(212, 175, 55, ${opacity * 0.5})`,
      ],
    },
    brightening: {
      opacity: [opacity * 0.5, opacity],
    },
    fading: {
      opacity: [opacity, opacity * 0.5, 0],
    },
    flying: {
      y: [0, -10, 0],
      opacity: [opacity, opacity, opacity],
    },
    none: {
      opacity: [opacity],
    },
  };

  const animationConfig =
    effect === 'none' || prefersReducedMotion
      ? {}
      : {
          animate: effect,
          transition: {
            duration: prefersReducedMotion ? 0 : duration,
            repeat: effect === 'brightening' || effect === 'fading' ? 0 : Infinity,
            repeatType: 'loop' as const,
          },
        };

  return (
    <div
      className="fixed pointer-events-none z-40"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Particle halo (optional intensity) */}
      {particleIntensity > 0 && !prefersReducedMotion && (
        <motion.div
          className="absolute -inset-12 pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {Array.from({ length: particleIntensity === 1 ? 3 : 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-300 rounded-full"
              style={{
                left: `${Math.cos((i / (particleIntensity === 1 ? 3 : 6)) * Math.PI * 2) * 20}px`,
                top: `${Math.sin((i / (particleIntensity === 1 ? 3 : 6)) * Math.PI * 2) * 20}px`,
                opacity: 0.6,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Main Star */}
      <motion.div
        className="relative"
        variants={effect === 'none' ? {} : starVariants}
        animate={effect === 'none' ? {} : effect}
        transition={{
          duration: prefersReducedMotion ? 0 : duration,
          repeat: effect === 'brightening' || effect === 'fading' ? 0 : Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >
        {/* Star SVG */}
        <svg width="60" height="60" viewBox="0 0 60 60" className="drop-shadow-lg">
          <defs>
            <filter id="starGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <polygon
            points="30,5 37,23 56,23 41,34 47,52 30,41 13,52 19,34 4,23 23,23"
            fill="#d4af37"
            filter="url(#starGlow)"
            opacity={opacity}
          />
        </svg>

        {/* Extra glow layer for certain effects */}
        {(effect === 'glow' || effect === 'pulse') && !prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
              width: '80px',
              height: '80px',
              left: '-10px',
              top: '-10px',
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
