'use client';

import { useEffect, useRef, useState } from 'react';
import { LandingFooter, LandingHeader } from '@/components/Landing';
import FilterIcon from '@/components/UI/Icons/FilterIcon';

const CATEGORIES: string[] = [
  'All Quizzes',
  'Geography',
  'Music',
  'Movies',
  'Television',
  'Just for fun',
  'Personality',
  'Sports',
  'History',
  'Language',
  'Literature',
  'Philosophy',
  'Math',
  'Toys',
  'Entertainment',
  'Olympics',
  'Greek philosophy',
  'Animations',
  'Psychology',
  'ART',
  'Physics',
  'Human Anatomy',
  'Geometry',
  'Dance',
  'Gadgets',
  'Internet',
  'Religion',
  'Gaming',
  'Travel',
  'Trivia',
];

export default function Quizzes() {
  const [activeCategory, setActiveCategory] = useState('All Quizzes');
  const scrollRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const [showBackArrow, setShowBackArrow] = useState(false);

  const updateIndicator = (category: string) => {
    const btn = buttonRefs.current[category];
    if (btn) {
      setIndicatorStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  };

  useEffect(() => {
    updateIndicator(activeCategory);
  }, [activeCategory]);

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

  return (
    <div className="w-full flex mx-auto flex-col">
      <LandingHeader />
      <div className="mx-auto w-360 px-24 flex items-center mt-6 justify-between gap-6">
        <div className="relative flex flex-1 items-center min-w-0">
          <div
            className={`absolute left-0 z-20 flex items-center pr-4 bg-white transition-opacity duration-200 ${
              showBackArrow
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
            style={{ height: 'calc(100% - 16px)', top: 0 }}
          >
            <button
              type="button"
              onClick={handleSlidePrev}
              aria-label="Show previous categories"
              className="shrink-0"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="black"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 items-center overflow-x-auto flex-1  scrollbar-none"
          >
            <div>
              <div className="relative flex gap-6">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    ref={(el) => {
                      buttonRefs.current[category] = el;
                    }}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`transition-colors duration-200 font-semibold font-inter text-sm leading-5 whitespace-nowrap shrink-0 ${
                      activeCategory === category
                        ? 'text-black'
                        : 'text-auth-placeholder'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative w-full h-0.5 mt-4">
                <div className="absolute inset-x-0 bottom-0 h-px bg-categories-line-bg" />
                <div
                  className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-out z-10"
                  style={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6.25 items-center mb-4 shrink-0">
          <button
            type="button"
            onClick={handleSlideNext}
            aria-label="Show more categories"
            className="shrink-0"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="black"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="w-21.25 h-9.5 border border-filter-border rounded-lg flex items-center px-4 gap-2 shrink-0">
            <FilterIcon />
            <p className="text-auth-placeholder text-sm font-inter leading-6">
              Filter
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-360 px-24 flex items-center mt- justify-between"></div>
      <LandingFooter />
    </div>
  );
}
