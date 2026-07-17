import { useLayoutEffect, useRef, useState } from 'react';

export function useInitialFixedPosition<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPosition({ top: rect.top, left: rect.left });
  }, []);

  return { ref, position };
}
