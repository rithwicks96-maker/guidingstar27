'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GuideStar } from '@/components/Visual/GuideStar';

export function LandingScene() {
  const [showButton, setShowButton] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  // Passage of time display
  const timeMarks = [
    { days: 365, position: 20 },
    { days: 731, position: 40 },
    { days: 1096, position: 60 },
    { days: 1461, position: 80 },
  ];

  return (
    <motion.div
      className="isolate w-full min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
  <Image
    src="/images/1_cover.png"
    alt="The Guiding Star"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-slate-950/45" />
</div>
      {/* Star Trail Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles for starfield */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Guiding Star - Center Stage */}
      <div className="relative z-30 mb-12">
        <GuideStar
          effect="glow"
          position={{ x: 50, y: 50 }}
          scale={1.5}
          opacity={0.95}
          particleIntensity={2}
          duration={4}
          show={true}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-50 max-w-2xl px-6 text-center space-y-8">
        {/* Passage of Time Display */}
        <motion.div
          className="space-y-3 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-gray-400 text-sm tracking-widest uppercase">A Journey in Time</div>
          <div className="flex justify-between items-center gap-4 text-gray-300 text-xs md:text-sm">
            {timeMarks.map((mark, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.2, duration: 0.6 }}
              >
                <div className="w-1 h-1 bg-amber-400 rounded-full mb-2" />
                <div className="text-xs">{mark.days} days</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Opening Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            The Guiding Star
          </h1>

          <p className="text-lg md:text-xl font-light text-gray-200 leading-relaxed">
            A story of faith, love, and the moments that changed everything.
          </p>

          <p className="text-base text-gray-300 font-light">
            Follow the guiding star through four years of your journey.
          </p>
        </motion.div>

        {/* Begin Journey Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          onAnimationComplete={() => setShowButton(true)}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <Link href="/scene/chapter-1">
            <button className="px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-serif text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50">
              Begin Journey
            </button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        {showButton && !prefersReducedMotion && (
          <motion.div
            className="mt-12 flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll to begin</span>
            <svg
              className="w-5 h-5 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Gradient Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-slate-950/30" />
    </motion.div>
  );
}
