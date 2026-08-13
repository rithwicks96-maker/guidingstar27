'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxLayerProps {
  imagePath?: string;
  src?: string;
  imageAlt?: string;
  alt?: string;
  depth?: number;
  parallaxConfig?: any;
  priority?: boolean;
  movementType?: 'scroll' | 'cursor' | 'camera-zoom';
  children?: React.ReactNode;
}

export function ParallaxLayer({
  imagePath,
  src,
  imageAlt,
  alt,
  depth = 0.3,
  parallaxConfig,
  priority = true,
  movementType = 'scroll',
  children,
}: ParallaxLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const finalSrc = imagePath || src || '';
  const finalAlt = imageAlt || alt || 'Chapter illustration';
  const finalDepth = parallaxConfig?.speed ?? depth;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yScroll = useTransform(
    scrollYProgress,
    [0, 1],
    [-20 * finalDepth, 20 * finalDepth]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 p-4 overflow-hidden z-10 min-h-screen"
    >
      {finalSrc && (
        <motion.div
          className="relative w-full max-w-md h-[35vh] md:h-[45vh] rounded-xl overflow-hidden shadow-2xl border border-amber-500/20"
          style={{
            y: movementType === 'scroll' ? yScroll : 0,
          }}
        >
          <Image
            src={finalSrc}
            alt={finalAlt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      )}

      <div className="w-full relative z-20 text-center space-y-4 max-w-2xl px-4">
        {children}
      </div>
    </div>
  );
}

// Also adding default export so both import styles work
export default ParallaxLayer;
