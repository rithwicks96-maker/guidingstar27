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

  // State definitions that explicitly lock opacity at 1
  const getInitialState = () => {
    switch (animationType) {
      case 'slide':
        return { opacity: 0, y: 20 };
      case 'stagger':
        return { opacity: 0, y: 10 };
      case 'none':
        return { opacity: 1, y: 0 };
      default:
        return { opacity: 0, y: 0 };
    }
  };

  const getAnimateState = () => ({
    opacity: 1,
    y: 0,
  });

  const transitionConfig = {
    duration: animationType === 'none' ? 0 : duration,
    delay: baseDelay,
    ease: 'easeOut' as const,
  };

  if (block.type === 'title') {
    return (
      <motion.h2
        className="text-2xl md:text-3xl font-serif font-bold mt-6 mb-4 text-amber-100 relative z-20"
        initial={getInitialState()}
        animate={getAnimateState()}
        transition={transitionConfig}
        style={{ opacity: 1 }}
      >
        {block.content}
      </motion.h2>
    );
  }

  if (block.type === 'body') {
    return (
      <motion.p
        className="text-base md:text-xl leading-relaxed font-light text-gray-100 relative z-20 my-3"
        initial={getInitialState()}
        animate={getAnimateState()}
        transition={transitionConfig}
        style={{ opacity: 1 }}
      >
        {block.content}
      </motion.p>
    );
  }

  return (
    <motion.p
      className="text-base md:text-lg leading-relaxed font-light text-gray-100 relative z-20 my-2"
      initial={getInitialState()}
      animate={getAnimateState()}
      transition={transitionConfig}
      style={{ opacity: 1 }}
    >
      {block.content}
    </motion.p>
  );
}
