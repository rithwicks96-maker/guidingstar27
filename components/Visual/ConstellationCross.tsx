'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ConstellationCrossProps {
  show: boolean;
  delay?: number;
}

export function ConstellationCross({ show, delay = 3 }: ConstellationCrossProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  if (!show) return null;

  // Define constellation points in a cross pattern
  // 5 points: top, right, center, left, bottom
  const starPoints: Array<{ x: number; y: number; size: 'small' | 'medium' | 'large' }> = [
    { x: 50, y: 15, size: 'medium' }, // top
    { x: 70, y: 50, size: 'small' }, // right
    { x: 50, y: 50, size: 'large' }, // center
    { x: 30, y: 50, size: 'small' }, // left
    { x: 50, y: 85, size: 'medium' }, // bottom
  ];

  const sizeMap: Record<'small' | 'medium' | 'large', string> = {
    small: 'w-1 h-1',
    medium: 'w-2 h-2',
    large: 'w-3 h-3',
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* SVG for constellation lines */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 1 }}
      >
        <defs>
          <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(212, 175, 55, 0.4)" />
            <stop offset="100%" stopColor="rgba(212, 175, 55, 0.2)" />
          </linearGradient>
        </defs>

        {/* Vertical line */}
        <motion.line
          x1="50"
          y1="15"
          x2="50"
          y2="85"
          stroke="url(#crossGradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: delay + 0.5, duration: 2 }}
        />

        {/* Horizontal line */}
        <motion.line
          x1="30"
          y1="50"
          x2="70"
          y2="50"
          stroke="url(#crossGradient)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: delay + 0.7, duration: 2 }}
        />
      </motion.svg>

      {/* Individual stars */}
      {starPoints.map((point, idx) => (
        <motion.div
          key={idx}
          className={`fixed ${sizeMap[point.size]} bg-amber-300 rounded-full shadow-lg`}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: [
              '0 0 10px rgba(212, 175, 55, 0.5)',
              '0 0 20px rgba(212, 175, 55, 0.8)',
              '0 0 10px rgba(212, 175, 55, 0.5)',
            ],
          }}
          transition={{
            opacity: {
              delay: delay + 1.2 + idx * 0.15,
              duration: 0.6,
            },
            scale: {
              delay: delay + 1.2 + idx * 0.15,
              duration: 0.6,
            },
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              delay: delay + 1.2 + idx * 0.15 + 0.5,
              repeatType: 'loop' as const,
            },
          }}
        />
      ))}

      {/* Glow effect around constellation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 2, duration: 1.5 }}
      />
    </div>
  );
}
