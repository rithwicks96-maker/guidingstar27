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

  // Standardized Framer Motion Variants
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    },
    typewriter: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    stagger: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
    },
    none: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
    },
  };

  const selectedVariant = variants[animationType as keyof typeof variants] || variants.fade;
  const transitionConfig = {
    duration: animationType === 'none' ? 0 : animationType === 'typewriter' ? 0.5 : duration,
    delay: baseDelay,
    ease: 'easeOut',
  };

  if (block.type === 'title') {
    return (
      <motion.h2
        className="text-2xl md:text-3xl font-serif font-bold mt-10 mb-4 text-amber-100 relative z-20"
        initial={selectedVariant.initial}
        animate={selectedVariant.animate}
        transition={transitionConfig}
      >
        {block.content}
      </motion.h2>
    );
  }

  if (block.type === 'body') {
    return (
      <motion.p
        className="text-lg md:text-xl leading-relaxed font-light text-gray-100 relative z-20 my-3"
        initial={selectedVariant.initial}
        animate={selectedVariant.animate}
        transition={transitionConfig}
      >
        {block.content}
      </motion.p>
    );
  }

  // Default paragraph / fallback block
  return (
    <motion.p
      className="text-base md:text-lg leading-relaxed font-light text-gray-100 relative z-20 my-2"
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      transition={transitionConfig}
    >
      {block.content}
    </motion.p>
  );
}
