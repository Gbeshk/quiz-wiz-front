import { useEffect, useRef, useState } from 'react';

export function useCategoryScroller(initialCategory: string) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const scrollRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [showBackArrow, setShowBackArrow] = useState(false);

  useEffect(() => {
    const btn = buttonRefs.current[activeCategory];
    if (btn) {
      setIndicatorStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [activeCategory]);

  const registerButtonRef =
    (category: string) => (el: HTMLButtonElement | null) => {
      buttonRefs.current[category] = el;
    };

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowBackArrow(scrollRef.current.scrollLeft > 10);
    }
  };

  const handleSlideNext = () => {
    scrollRef.current?.scrollBy({ left: 240, behavior: 'smooth' });
  };

  const handleSlidePrev = () => {
    scrollRef.current?.scrollBy({ left: -240, behavior: 'smooth' });
  };

  return {
    activeCategory,
    setActiveCategory,
    scrollRef,
    registerButtonRef,
    indicatorLeft: indicatorStyle.left,
    indicatorWidth: indicatorStyle.width,
    showBackArrow,
    handleScroll,
    handleSlideNext,
    handleSlidePrev,
  };
}
