'use client';

import { use } from 'react';
import { storyData } from '@/lib/scenes';
import { LandingScene } from '@/components/Scene/LandingScene';
import { SceneWrapper } from '@/components/Scene/SceneWrapper';
import { Chapter8Scene } from '@/components/Scene/Chapter8Scene';
import { SceneNav } from '@/components/Navigation/SceneNav';
import { notFound } from 'next/navigation';

interface ScenePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ScenePage({ params }: ScenePageProps) {
  // Unwrap params safely using React.use() for 'use client' components
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // Handle landing scene separately
  if (id === 'landing') {
    return (
      <>
        <LandingScene />
        <SceneNav
          currentId="landing"
          currentNumber={0}
          totalScenes={storyData.totalScenes}
          nextId="chapter-1"
          prevId={undefined}
        />
      </>
    );
  }

  const scene = storyData.scenes.find((s) => s.id === id);

  if (!scene) {
    notFound();
  }

  const currentIndex = storyData.scenes.findIndex((s) => s.id === id);
  const nextScene = currentIndex < storyData.scenes.length - 1 ? storyData.scenes[currentIndex + 1] : null;
  const prevScene = currentIndex > 0 ? storyData.scenes[currentIndex - 1] : null;

  return (
    <>
      {/* Render appropriate scene component */}
      {scene.isChatScene ? (
        <Chapter8Scene scene={scene} priority={currentIndex === 0} />
      ) : (
        <SceneWrapper scene={scene} priority={currentIndex === 0} />
      )}

      {/* Navigation */}
      <SceneNav
        currentId={scene.id}
        currentNumber={scene.sequenceNumber}
        totalScenes={storyData.totalScenes}
        nextId={nextScene?.id}
        prevId={prevScene?.id}
      />
    </>
  );
}
