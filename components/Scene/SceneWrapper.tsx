'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Scene } from '@/types';
import { ParallaxLayer } from '@/components/Visual/ParallaxLayer';
import { StoryContent } from '@/components/Scene/StoryContent';
import { EnvelopeVignette } from '@/components/Scene/EnvelopeVignette';
import { GuideStar } from '@/components/Visual/GuideStar';
import { Chapter5Overlay } from '@/components/Visual/Chapter5Overlay';
import { CloudOverlay } from '@/components/Visual/CloudOverlay';
import { ConstellationCross } from '@/components/Visual/ConstellationCross';

interface SceneWrapperProps {
  scene: Scene;
  priority?: boolean;
}

export function SceneWrapper({ scene, priority = false }: SceneWrapperProps) {
  const [showContent, setShowContent] = useState(!scene.isEnvelopeScene);

  // Determine guiding star visibility and state for this scene
  const showGuideStar = scene.sequenceNumber > 0; // Not on landing
  const guideStarPosition = {
    x: 50 + (Math.sin(scene.sequenceNumber) * 20),
    y: 20 + (Math.cos(scene.sequenceNumber) * 15),
  };

  // Check for special scenes
  const isChapter5 = scene.id === 'chapter-5';
  const isChapter9 = scene.id === 'chapter-9';
  const isFinale = scene.id === 'finale';

  // Transition variants
  const transitionVariants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    dissolve: {
      initial: { opacity: 0, filter: 'blur(10px)' },
      animate: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(10px)' },
    },
    scroll: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 },
    },
    'star-fly': {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    },
  };

  const chosenTransition = transitionVariants[
    scene.transitionType as keyof typeof transitionVariants
  ] || transitionVariants.fade;

  return (
    <motion.div
      className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex flex-col md:flex-row relative"
      initial={chosenTransition.initial}
      animate={chosenTransition.animate}
      exit={chosenTransition.exit}
      transition={{ duration: 0.6 }}
    >
      {/* Chapter 5 Special Effect - Warm afternoon overlay */}
      {isChapter5 && showContent && <Chapter5Overlay enabled={true} intensity={0.4} />}

      {/* Chapter 9 Special Effect - Cloud overlay */}
      {isChapter9 && showContent && (
        <CloudOverlay enabled={true} starVisible={false} intensity={0.6} />
      )}

      {/* Finale Special Effect - Constellation cross */}
      {isFinale && showContent && <ConstellationCross show={true} delay={2} />}

      {/* Guiding Star */}
      {showGuideStar && showContent && (
        <GuideStar
          effect={isFinale ? 'fading' : 'breathing'}
          position={isChapter9 ? { x: 50, y: 15 } : guideStarPosition}
          scale={isFinale ? 1.2 : 0.8}
          opacity={0.9}
          particleIntensity={1}
          duration={3}
          show={showContent}
        />
      )}

      {/* Envelope Overlay (if needed) */}
      {scene.isEnvelopeScene && (
        <EnvelopeVignette
          chapterTitle={scene.title}
          onOpen={() => setShowContent(true)}
          showGuide={!scene.isEmotionallClimatic}
        />
      )}

      {/* Illustration with Parallax */}
    <div className="w-full md:w-1/2 flex-shrink-0 order-first md:order-none">
  <ParallaxLayer
    src={scene.illustrationPath}
    alt={scene.illustrationAlt}
    parallaxConfig={scene.parallaxConfig}
    priority={priority}
  />
</div>

      {/* Text Content */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-start py-8 md:py-12 overflow-y-auto max-h-[90vh]"
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {showContent && <StoryContent title={scene.title} textBlocks={scene.visibleTextBlocks} />}
      </motion.div>
    </motion.div>
  );
}
