import { useEffect, useRef, useState } from 'react';

export function useCategoryScroller(activeCategory: string) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [showBackArrow, setShowBackArrow] = useState(false);

  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const dragMoved = useRef(false);
  const [showForwardArrow, setShowForwardArrow] = useState(true);

  const checkScrollEdges = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowBackArrow(el.scrollLeft > 10);

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    setShowForwardArrow(el.scrollLeft < maxScrollLeft - 10);
  };
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
    checkScrollEdges();
  };
  useEffect(() => {
    checkScrollEdges();
  }, []);

  const handleSlideNext = () => {
    scrollRef.current?.scrollBy({ left: 240, behavior: 'smooth' });
  };

  const handleSlidePrev = () => {
    scrollRef.current?.scrollBy({ left: -240, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    dragMoved.current = false;
    dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
    dragStartScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - dragStartX.current;

    if (Math.abs(walk) > 3) {
      dragMoved.current = true;
    }

    scrollRef.current.scrollLeft = dragStartScrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const wasDragged = () => dragMoved.current;

  return {
    scrollRef,
    registerButtonRef,
    indicatorLeft: indicatorStyle.left,
    indicatorWidth: indicatorStyle.width,
    showBackArrow,
    showForwardArrow,
    handleScroll,
    handleSlideNext,
    handleSlidePrev,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp: stopDragging,
    handleMouseLeave: stopDragging,
    wasDragged,
  };
}
