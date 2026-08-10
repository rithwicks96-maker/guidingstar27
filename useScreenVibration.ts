'use client';

import { useEffect } from 'react';

export function useScreenVibration(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    // Check if Vibration API is available
    if (!navigator.vibrate) return;

    // Subtle vibration pattern when scene loads
    // A sequence of short vibrations
    const vibrationPattern = [50, 100, 50, 100, 100]; // ms

    navigator.vibrate(vibrationPattern);

    return () => {
      // Cancel any ongoing vibration on cleanup
      navigator.vibrate(0);
    };
  }, [enabled]);
}

export function useSubtleVibration(triggerCount: number = 1) {
  useEffect(() => {
    if (!navigator.vibrate) return;

    // Very subtle single vibration
    navigator.vibrate(30);

    return () => {
      navigator.vibrate(0);
    };
  }, [triggerCount]);
}
