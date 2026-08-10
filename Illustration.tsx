'use client';

import Image from 'next/image';

interface IllustrationProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function Illustration({ src, alt, priority = false }: IllustrationProps) {
  return (
    <div className="relative w-full aspect-[9/16] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={85}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 900px"
      />
    </div>
  );
}
