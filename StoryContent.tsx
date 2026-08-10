'use client';

import { TextBlock } from '@/types';
import { AnimatedTextBlock } from './AnimatedTextBlock';

interface StoryContentProps {
  title: string;
  textBlocks: TextBlock[];
}

export function StoryContent({ title, textBlocks }: StoryContentProps) {
  return (
    <div className="w-full px-6 py-8 space-y-6">
      {/* Chapter Title */}
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 text-center">
        {title}
      </h1>

      {/* Text Blocks with Animations */}
      <div className="space-y-6 text-white max-w-2xl mx-auto">
        {textBlocks.map((block, idx) => (
          <AnimatedTextBlock key={idx} block={block} index={idx} />
        ))}
      </div>
    </div>
  );
}
