export interface TextBlock {
  content: string;
  type: 'title' | 'body' | 'paragraph' | 'dialogue' | 'stanza';
  delay?: number; // ms
  animation?: 'fade' | 'slide' | 'typewriter' | 'stagger' | 'none';
}

export interface SceneInstruction {
  type:
    | 'animation'
    | 'timing'
    | 'transition'
    | 'camera'
    | 'interaction'
    | 'effect'
    | 'text-reveal';
  description: string;
  target?: string; // what it applies to
  durationMs?: number;
  sequenceOrder?: number;
}

export interface ParallaxConfig {
  enabled: boolean;
  layerDepth?: number; // 0-1
  movementType: 'scroll' | 'pointer' | 'camera-pan' | 'camera-zoom';
  fallbackEffect?: 'zoom' | 'none';
}

export interface Scene {
  id: string;
  type: 'landing' | 'chapter' | 'interactive' | 'finale';

  // Visible on screen
  title: string; // from { } notation
  visibleTextBlocks: TextBlock[];

  // Not visible (implementation only)
  technicalInstructions: SceneInstruction[];

  // Visual identity
  illustrationPath: string;
  illustrationAlt: string;

  // Motion & transition
  transitionType: 'fade' | 'dissolve' | 'star-fly' | 'scroll' | 'none';
  parallaxConfig?: ParallaxConfig;

  // Special interactions
  isEnvelopeScene: boolean;
  isChatScene: boolean;

  // Audio (Phase 4)
  audioTrackId?: string;

  // Metadata
  sequenceNumber: number;
  isEmotionallClimatic?: boolean;
}

export interface StoryData {
  scenes: Scene[];
  totalScenes: number;
}
