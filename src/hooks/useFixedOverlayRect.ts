import { useLayoutEffect, useRef, useState } from 'react';

interface FixedRect {
  top: number;
  left: number;
  width: number;
}

export function useFixedOverlayRect<T extends HTMLElement>() {
  const placeholderRef = useRef<T>(null);
  const [rect, setRect] = useState<FixedRect | null>(null);

  useLayoutEffect(() => {
    const el = placeholderRef.current;
    if (!el) return;

    const measure = () => {
      const boundingRect = el.getBoundingClientRect();
      setRect({
        top: boundingRect.top + window.scrollY,
        left: boundingRect.left,
        width: boundingRect.width,
      });
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(document.body);
    window.addEventListener('resize', measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return { placeholderRef, rect };
}
