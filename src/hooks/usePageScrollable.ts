import { useEffect, useState } from 'react';

export function usePageScrollable() {
  const [isScrollable, setIsScrollable] = useState(true);

  useEffect(() => {
    const check = () => {
      setIsScrollable(
        document.documentElement.scrollHeight > window.innerHeight + 1,
      );
    };

    check();

    const resizeObserver = new ResizeObserver(check);
    resizeObserver.observe(document.body);
    window.addEventListener('resize', check);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', check);
    };
  }, []);

  return isScrollable;
}
