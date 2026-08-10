'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface EnvelopeVignetteProps {
  chapterTitle: string;
  onOpen: () => void;
  showGuide?: boolean;
}

export function EnvelopeVignette({ chapterTitle, onOpen, showGuide = true }: EnvelopeVignetteProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(() => onOpen(), prefersReducedMotion ? 0 : 600);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950/95 via-blue-950/90 to-slate-950/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Envelope */}
            <motion.div
              className="relative cursor-pointer"
              onClick={handleOpen}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.1 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            >
              {/* Envelope body */}
              <motion.div
                className="w-48 h-32 bg-gradient-to-br from-amber-100 to-amber-50 border-2 border-amber-200 rounded-lg shadow-2xl flex items-center justify-center"
                animate={
                  isOpened
                    ? { rotateY: 180, opacity: 0 }
                    : { rotateY: 0, opacity: 1 }
                }
                transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
              >
                {/* Envelope flap */}
                <motion.div
                  className="absolute top-0 left-0 right-0 w-full h-1/2 bg-gradient-to-b from-amber-200 to-amber-100 rounded-t-lg origin-top"
                  animate={
                    isOpened
                      ? { rotateX: -180 }
                      : { rotateX: 0 }
                  }
                  transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                />

                {/* Envelope text */}
                <motion.div
                  className="text-center z-10 relative"
                  animate={isOpened ? { opacity: 0 } : { opacity: 1 }}
                >
                  <p className="text-sm text-amber-900 font-light">Open to read</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Chapter Title */}
            <motion.h2
              className="text-2xl md:text-3xl font-serif text-white text-center max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.2 }}
            >
              {chapterTitle}
            </motion.h2>

            {/* Guide text */}
            {showGuide && (
              <motion.p
                className="text-sm text-gray-300 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                Tap to continue
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
