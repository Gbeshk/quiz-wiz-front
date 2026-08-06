import { useState, useCallback } from 'react';

export function useElementVisibility<T extends HTMLElement>() {
  const [isVisible, setIsVisible] = useState(true);

  const ref = useCallback((node: T | null) => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '-80px 0px 0px 0px',
        threshold: 0,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
