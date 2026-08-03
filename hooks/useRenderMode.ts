'use client';

import { useEffect, useState } from 'react';

export type RenderMode = 'pending' | 'full3d' | 'lite' | 'static';

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    return Boolean(gl);
  } catch {
    return false;
  }
}

function isLowEndDevice(): boolean {
  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean; effectiveType?: string };
  };

  if (nav.connection?.saveData) return true;
  if (nav.connection?.effectiveType && /2g|slow-2g|3g/.test(nav.connection.effectiveType)) {
    return true;
  }
  if (typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 4) return true;
  if (typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 4) return true;

  return false;
}

function isSmallOrTouchScreen(): boolean {
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const narrow = window.matchMedia('(max-width: 1023px)').matches;
  return coarsePointer || narrow;
}

/**
 * Détermine le mode de rendu de la page d'accueil :
 * - 'static'  : prefers-reduced-motion → aucune animation pilotée par le scroll
 * - 'lite'    : mobile, appareil peu puissant ou WebGL indisponible → narration 2D (SVG/Framer Motion)
 * - 'full3d'  : desktop capable → scène React Three Fiber complète
 * - 'pending' : première passe (SSR / avant mesure) → on rend un socle neutre
 */
export function useRenderMode(): RenderMode {
  const [mode, setMode] = useState<RenderMode>('pending');

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const resolve = () => {
      if (reducedMotionQuery.matches) {
        setMode('static');
        return;
      }
      if (!supportsWebGL() || isSmallOrTouchScreen() || isLowEndDevice()) {
        setMode('lite');
        return;
      }
      setMode('full3d');
    };

    resolve();

    reducedMotionQuery.addEventListener('change', resolve);
    window.addEventListener('resize', resolve);

    return () => {
      reducedMotionQuery.removeEventListener('change', resolve);
      window.removeEventListener('resize', resolve);
    };
  }, []);

  return mode;
}
