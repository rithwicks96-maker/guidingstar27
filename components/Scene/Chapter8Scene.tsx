'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Scene } from '@/types';
import { ParallaxLayer } from '@/components/Visual/ParallaxLayer';
import { ChatInterface } from '@/components/Scene/ChatInterface';
import { CodeVisualization } from '@/components/Scene/CodeVisualization';
import { chapter8ChatMessages } from '@/lib/chapter8-chat';
import { GuideStar } from '@/components/Visual/GuideStar';

interface Chapter8SceneProps {
  scene: Scene;
  priority?: boolean;
}

export function Chapter8Scene({ scene, priority = false }: Chapter8SceneProps) {
  const [showChat, setShowChat] = useState(false);
  const [showCode, setShowCode] = useState(false);

  return (
    <motion.div
      className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex flex-col md:flex-row relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Guiding Star */}
      <GuideStar
        effect="breathing"
        position={{ x: 50, y: 25 }}
        scale={0.8}
        opacity={0.9}
        particleIntensity={1}
        duration={3}
        show={true}
      />

      {/* Illustration with Parallax */}
      <motion.div
        className="w-full md:w-1/2 flex-shrink-0 order-first md:order-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setTimeout(() => { setShowCode(true); setTimeout(() => setShowChat(true), 3000); }, 500)}
      >
        <ParallaxLayer
          src={scene.illustrationPath}
          alt={scene.illustrationAlt}
          parallaxConfig={scene.parallaxConfig}
          priority={priority}
        />
      </motion.div>

      {/* Chat Interface */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-start py-8 md:py-12 overflow-y-auto max-h-[90vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: showChat ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-full space-y-6 px-4 md:px-0">
          {/* Chapter Title */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 text-center">
            {scene.title}
          </h1>

          {/* Intro text before chat */}
          <motion.div
            className="max-w-2xl mx-auto space-y-4 text-white"
            initial={{ opacity: 0 }}
            animate={showChat ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {scene.visibleTextBlocks.slice(0, 7).map((block, idx) => (
              <motion.p
                key={idx}
                className="text-base md:text-lg leading-relaxed font-light text-gray-100"
                initial={{ opacity: 0 }}
                animate={showChat ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                {block.content}
              </motion.p>
            ))}
          </motion.div>

          {/* Code Visualization */}
          {showCode && <CodeVisualization show={showCode} duration={2000} />}

          {/* Chat Messages */}
          {showChat && <ChatInterface messages={chapter8ChatMessages} autoReveal={true} />}

          {/* Outro text after chat */}
          <motion.div
            className="max-w-2xl mx-auto space-y-4 text-white"
            initial={{ opacity: 0 }}
            animate={showChat ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5 }}
          >
            {scene.visibleTextBlocks.slice(7).map((block, idx) => (
              <motion.p
                key={idx}
                className="text-base md:text-lg leading-relaxed font-light text-gray-100"
                initial={{ opacity: 0 }}
                animate={showChat ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.5 + idx * 0.1 }}
              >
                {block.content}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
