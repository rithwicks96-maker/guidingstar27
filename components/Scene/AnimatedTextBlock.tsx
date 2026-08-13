'use client';

import { TextBlock } from '@/types';

interface AnimatedTextBlockProps {
  block: TextBlock;
  index: number;
}

export function AnimatedTextBlock({ block, index }: AnimatedTextBlockProps) {
  const delayMs = block.delay || index * 100;

  if (block.type === 'title') {
    return (
      <h2
        className="text-2xl md:text-3xl font-serif font-bold mt-6 mb-4 text-amber-100 relative z-20 transition-all duration-700 ease-out"
        style={{
          animation: `fadeInText 0.8s ease-out ${delayMs}ms forwards`,
          opacity: 0,
        }}
      >
        {block.content}
      </h2>
    );
  }

  return (
    <p
      className="text-base md:text-xl leading-relaxed font-light text-gray-100 relative z-20 my-3 transition-all duration-700 ease-out"
      style={{
        animation: `fadeInText 0.8s ease-out ${delayMs}ms forwards`,
        opacity: 0,
      }}
    >
      {block.content}
    </p>
  );
}
