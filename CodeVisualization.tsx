'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CodeWord {
  codes: string[];
  word: string;
}

interface CodeVisualizationProps {
  show: boolean;
  duration?: number;
}

// Code sequence that transforms into words
const codeSequence: CodeWord[] = [
  {
    codes: ['00101', '01000', '00101'],
    word: 'Ate??',
  },
  {
    codes: ['10001', '00101', '10001'],
    word: 'S...u??',
  },
  {
    codes: ['00001', '01000', '00001'],
    word: 'Hi.',
  },
];

export function CodeVisualization({ show, duration = 5000 }: CodeVisualizationProps) {
  const [currentCode, setCurrentCode] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (!show || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSequence.length);
    }, duration / codeSequence.length);

    return () => clearInterval(interval);
  }, [show, duration, prefersReducedMotion]);

  if (!show) return null;

  const sequence = codeSequence[currentCode];

  return (
    <motion.div
      className="flex flex-col items-center gap-8 py-8 px-4 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Code Stream */}
      <motion.div
        className="space-y-3"
        layout
        transition={{ duration: 0.4 }}
      >
        {sequence.codes.map((code, idx) => (
          <motion.div
            key={idx}
            className="font-mono text-sm md:text-base text-amber-300 tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            {code}
          </motion.div>
        ))}
      </motion.div>

      {/* Transformation Arrow */}
      <motion.svg
        className="w-6 h-6 text-amber-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </motion.svg>

      {/* Transformed Word */}
      <motion.div
        className="text-2xl md:text-3xl font-serif font-bold text-amber-100"
        key={sequence.word}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {sequence.word}
      </motion.div>

      {/* Guiding Star Rearranging Effect */}
      <motion.div
        className="absolute w-2 h-2 bg-amber-400 rounded-full blur-sm"
        animate={{
          x: [0, 50, -30, 40, 0],
          y: [0, -30, 40, -20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}
