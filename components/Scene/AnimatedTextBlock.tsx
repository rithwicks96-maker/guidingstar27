'use client';

import { motion } from 'framer-motion';
import { TextBlock } from '@/types';

interface AnimatedTextBlockProps {
  block: TextBlock;
  index: number;
}

export function AnimatedTextBlock({ block, index }: AnimatedTextBlockProps) {
  const baseDelay = (block.delay || index * 100) / 1000;

  if (block.type === 'title') {
    return (
      <motion.h2
        className="text-2xl md:text-3xl font-serif font-bold mt-6 mb-4 text-amber-100 relative z-20"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: baseDelay }}
      >
        {block.content}
      </motion.h2>
    );
  }

  return (
    <motion.p
      className="text-base md:text-xl leading-relaxed font-light text-gray-100 relative z-20 my-3"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: baseDelay }}
    >
      {block.content}
    </motion.p>
  );
}
