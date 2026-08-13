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
  const finalAlt = imageAlt || alt || 'Background Illustration';
  const finalDepth = parallaxConfig?.speed ?? depth;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yScroll = useTransform(scrollYProgress, [0, 1], [-30 * finalDepth, 30 * finalDepth]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden z-10"
    >
      {/* Full-Screen Background Image */}
      {finalSrc && (
        <motion.div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            y: movementType === 'scroll' ? yScroll : 0,
          }}
        >
          <Image
            src={finalSrc}
            alt={finalAlt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          {/* Dark gradient overlay so text is 100% readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40 pointer-events-none z-10" />
        </motion.div>
      )}

      {/* Floating Text Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-2xl px-6 text-center space-y-6 pt-12">
        {children}
      </div>
    </div>
  );
}
