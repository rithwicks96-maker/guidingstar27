'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface SceneNavProps {
  currentId: string;
  currentNumber: number;
  totalScenes: number;
  nextId?: string;
  prevId?: string;
}

export function SceneNav({
  currentId,
  currentNumber,
  totalScenes,
  nextId,
  prevId,
}: SceneNavProps) {
  const canGoPrev = currentNumber > 0;
  const canGoNext = currentNumber < totalScenes - 1;

  const NavButton = ({
    href,
    enabled,
    children,
    direction,
  }: {
    href: string;
    enabled: boolean;
    children: ReactNode;
    direction: 'prev' | 'next';
  }) => {
    const baseClasses =
      'px-6 py-3 rounded-lg font-medium transition-all duration-300 text-white text-sm md:text-base';
    const enabledClasses =
      'bg-amber-600 hover:bg-amber-500 cursor-pointer shadow-lg hover:shadow-amber-500/50';
    const disabledClasses = 'bg-slate-700 text-slate-500 cursor-not-allowed opacity-50';

    if (!enabled) {
      return (
        <button disabled className={`${baseClasses} ${disabledClasses}`}>
          {children}
        </button>
      );
    }

    return (
      <Link href={href}>
        <button className={`${baseClasses} ${enabledClasses}`}>{children}</button>
      </Link>
    );
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-6 z-50 px-4">
      <NavButton
        href={prevId ? `/scene/${prevId}` : '#'}
        enabled={canGoPrev}
        direction="prev"
      >
        ← Previous
      </NavButton>

      <div className="text-white text-sm md:text-base font-light self-center">
        {currentNumber + 1} / {totalScenes}
      </div>

      <NavButton
        href={nextId ? `/scene/${nextId}` : '#'}
        enabled={canGoNext}
        direction="next"
      >
        Next →
      </NavButton>
    </div>
  );
}
