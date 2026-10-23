import { useState, useLayoutEffect, useEffect } from 'react';

const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useScrolled(threshold = 0) {
  // WICHTIG: Immer erst mit `false` starten, damit Server und initialer Client-Render 100% identisch sind!
  const [isScrolled, setIsScrolled] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Direkt nach dem Mounten einmal prüfen (falls die Seite mitten im Scroll geladen wurde)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}