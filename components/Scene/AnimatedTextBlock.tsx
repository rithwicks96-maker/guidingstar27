'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TextBlock } from '@/types';

interface AnimatedTextBlockProps {
  block: TextBlock;
  index: number;
}

export function AnimatedTextBlock({ block, index }: AnimatedTextBlockProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const baseDelay = prefersReducedMotion ? 0 : (block.delay || index * 100) / 1000;
  const duration = prefersReducedMotion ? 0 : 0.8;

  const animationType = block.animation || 'fade';

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration, delay: baseDelay },
    },
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay: baseDelay },
    },
    typewriter: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay: baseDelay },
    },
    stagger: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay: baseDelay, staggerChildren: 0.05 },
    },
    none: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 },
    },
  };

  const chosenVariant = variants[animationType as keyof typeof variants] || variants.fade;

  if (block.type === 'title') {
    return (
      <motion.h2
        className="text-2xl md:text-3xl font-serif font-bold mt-10 mb-4 text-amber-100"
        initial={chosenVariant.initial}
        animate={chosenVariant.animate}
        transition={chosenVariant.transition}
      >
        {block.content}
      </motion.h2>
    );
  }

  if (block.type === 'body') {
    return (
      <motion.p
        className="text-lg md:text-xl leading-relaxed font-light"
        initial={chosenVariant.initial}
        animate={chosenVariant.animate}
        transition={chosenVariant.transition}
      >
        {block.content}
      </motion.p>
    );
  }

  // Default paragraph
  return (
    <motion.p
      className="text-base md:text-lg leading-relaxed font-light text-gray-100"
      initial={chosenVariant.initial}
      animate={chosenVariant.animate}
      transition={chosenVariant.transition}
    >
      {block.content}
    </motion.p>
  );
}
