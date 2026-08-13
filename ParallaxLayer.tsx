'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ParallaxConfig } from '@/types';

interface ParallaxLayerProps {
  src: string;
  alt: string;
  parallaxConfig?: ParallaxConfig;
  priority?: boolean;
}

export function ParallaxLayer({
  src,
  alt,
  parallaxConfig,
  priority = false,
}: ParallaxLayerProps) {
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (!parallaxConfig?.enabled || prefersReducedMotion) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxConfig?.enabled, prefersReducedMotion]);

  const isEnabled = parallaxConfig?.enabled && !prefersReducedMotion;
  const depth = parallaxConfig?.layerDepth || 0.3;

  // Calculate transform based on movement type
  let transform = 'translateZ(0)';

  if (isEnabled) {
    switch (parallaxConfig?.movementType) {
      case 'scroll':
        // Parallax scroll effect
        transform = `translateY(${scrollY * depth * 0.5}px)`;
        break;
      case 'camera-zoom':
        // Gentle zoom in/out
        const zoomScale = 1 + (scrollY * depth * 0.0002);
        transform = `scale(${Math.max(1, zoomScale)})`;
        break;
      case 'camera-pan':
        // Gentle horizontal pan
        const panX = (scrollY * depth * 0.1) % 50;
        transform = `translateX(${panX}px)`;
        break;
      default:
        transform = 'translateZ(0)';
    }
  }

  return (
    <motion.div
      className="relative w-full aspect-[9/16] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        transform,
        transformOrigin: 'center center',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={85}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 900px"
      />
    </motion.div>
  );
}
