'use client';

import { motion, Variants } from 'framer-motion';

export type GuideStarEffect = 'glow' | 'pulse' | 'breathing' | 'fading' | 'none';

interface GuideStarProps {
  effect?: GuideStarEffect;
  position?: { x: number; y: number };
  scale?: number;
  opacity?: number;
  duration?: number;
  show?: boolean;
  particleIntensity?: number; // Added to fix TS2322 build error
}

export function GuideStar({
  effect = 'glow',
  position = { x: 50, y: 15 },
  scale = 1,
  opacity = 1,
  duration = 4,
  show = true,
  particleIntensity = 1,
}: GuideStarProps) {
  if (!show) return null;

  const starVariants: Variants = {
    glow: {
      scale: [scale, scale * 1.1, scale],
      opacity: [opacity * 0.8, opacity, opacity * 0.8],
      filter: [
        'drop-shadow(0 0 8px rgba(253, 224, 71, 0.6))',
        'drop-shadow(0 0 16px rgba(253, 224, 71, 0.9))',
        'drop-shadow(0 0 8px rgba(253, 224, 71, 0.6))',
      ],
      transition: {
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    pulse: {
      scale: [scale * 0.9, scale * 1.15, scale * 0.9],
      opacity: [opacity * 0.7, opacity, opacity * 0.7],
      filter: [
        'drop-shadow(0 0 10px rgba(251, 191, 36, 0.7))',
        'drop-shadow(0 0 20px rgba(251, 191, 36, 1))',
        'drop-shadow(0 0 20px rgba(251, 191, 36, 1))',
      ],
      transition: {
        duration: duration * 0.75,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    breathing: {
      scale: [scale * 0.95, scale * 1.05, scale * 0.95],
      opacity: [opacity * 0.7, opacity * 0.95, opacity * 0.7],
      filter: [
        'drop-shadow(0 0 8px rgba(253, 224, 71, 0.5))',
        'drop-shadow(0 0 14px rgba(253, 224, 71, 0.8))',
        'drop-shadow(0 0 8px rgba(253, 224, 71, 0.5))',
      ],
      transition: {
        duration: duration * 1.2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    fading: {
      scale: [scale, scale * 0.5],
      opacity: [opacity, 0],
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
    none: {
      scale,
      opacity,
      filter: 'drop-shadow(0 0 8px rgba(253, 224, 71, 0.7))',
    },
  };

  return (
    <div
      className="absolute z-30 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <motion.div
        variants={starVariants}
        animate={effect}
        initial={{ scale: 1, opacity: 1 }}
        className="relative flex items-center justify-center"
      >
        <svg
          width={36 * scale}
          height={36 * scale}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-amber-300"
        >
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="currentColor"
            stroke="rgba(254, 243, 199, 0.8)"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>
    </div>
  );
}
