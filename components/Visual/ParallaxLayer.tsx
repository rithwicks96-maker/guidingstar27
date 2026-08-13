'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxLayerProps {
  imagePath: string;
  imageAlt: string;
  depth?: number;
  movementType?: 'scroll' | 'cursor' | 'camera-zoom';
  children?: React.ReactNode;
}

export function ParallaxLayer({
  imagePath,
  imageAlt,
  depth = 0.3,
  movementType = 'scroll',
  children,
}: ParallaxLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yScroll = useTransform(scrollYProgress, [0, 1], [-20 * depth, 20 * depth]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 p-4 overflow-hidden z-10"
    >
      {/* Constrained Image Frame */}
      <motion.div
        className="relative w-full max-w-md h-[30vh] md:h-[45vh] rounded-xl overflow-hidden shadow-2xl border border-amber-500/20"
        style={{
          y: movementType === 'scroll' ? yScroll : 0,
        }}
      >
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Text Container */}
      <div className="w-full relative z-20 text-center space-y-4">
        {children}
      </div>
    </div>
  );
}
