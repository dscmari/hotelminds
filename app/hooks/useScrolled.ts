import { useState, useLayoutEffect, useEffect } from 'react';

// SSR-freundliche Ausführung von useLayoutEffect
const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useScrolled(threshold = 0) {
  // 1. Direkt mit der echten Position initialisieren (falls im Browser):
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > threshold;
    }
    return false;
  });

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Sofort abfragen, bevor der Browser zeichnet
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}