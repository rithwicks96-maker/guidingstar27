'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ChatMessage {
  sender: 'him' | 'her';
  content: string;
  emoji?: string;
  meaning?: string;
  delay?: number;
}

interface ChatInterfaceProps {
  messages: ChatMessage[];
  autoReveal?: boolean;
  revealDuration?: number;
}

export function ChatInterface({
  messages,
  autoReveal = true,
  revealDuration = 3000,
}: ChatInterfaceProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduce-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (!autoReveal) return;

    const interval = prefersReducedMotion
      ? revealDuration / messages.length
      : revealDuration / messages.length;

    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < messages.length) return prev + 1;
        return prev;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [autoReveal, messages.length, revealDuration, prefersReducedMotion]);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 space-y-4">
      <div className="space-y-3 min-h-[400px]">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={idx < visibleCount ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.4,
              delay: idx < visibleCount ? 0 : 10,
            }}
            className={`flex ${msg.sender === 'her' ? 'justify-end' : 'justify-start'} mb-3`}
          >
            {/* Message bubble */}
            <div
              className={`max-w-xs px-4 py-3 rounded-2xl ${
                msg.sender === 'her'
                  ? 'bg-amber-600 text-white rounded-br-none'
                  : 'bg-slate-700 text-gray-100 rounded-bl-none'
              }`}
            >
              <p className="text-base leading-relaxed">{msg.content}</p>

              {/* Meaning if present */}
              {msg.meaning && (
                <motion.p
                  className="text-xs mt-2 opacity-80 italic"
                  initial={{ opacity: 0 }}
                  animate={idx < visibleCount ? { opacity: 0.8 } : { opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {msg.emoji} {msg.meaning}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}

        {/* Indicator that more will appear */}
        {autoReveal && visibleCount < messages.length && (
          <motion.div
            className="flex justify-center mt-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-gray-400 text-xs">Loading messages...</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
