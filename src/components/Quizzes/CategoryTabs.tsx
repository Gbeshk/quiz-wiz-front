import { useState } from 'react';
import { PAGE_CATEGORIES } from '@/constants/categories';
import { useCategoryScroller } from '@/hooks/useCategoryScroller';
import { cn } from '@/lib/utils';
import FilterIcon from '@/components/UI/Icons/FilterIcon';
import ChevronRightIcon from '@/components/UI/Icons/ChevronRightIcon';
import FilterModal from '@/components/Modals/FilterModal/FilterModal';
import CategoryScrollArrow from './CategoryScrollArrow';
import CategoryIndicator from './CategoryIndicator';

export default function CategoryTabs() {
  const {
    activeCategory,
    setActiveCategory,
    scrollRef,
    registerButtonRef,
    indicatorLeft,
    indicatorWidth,
    showBackArrow,
    handleScroll,
    handleSlideNext,
    handleSlidePrev,
  } = useCategoryScroller(PAGE_CATEGORIES[0]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="mx-auto w-360 px-24 flex items-center mt-6 justify-between gap-6">
      <div className="relative flex flex-1 items-center min-w-0">
        <CategoryScrollArrow
          direction="left"
          visible={showBackArrow}
          onClick={handleSlidePrev}
        />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 items-center overflow-x-auto flex-1 scrollbar-none"
        >
          <div>
            <div className="relative flex gap-6">
              {PAGE_CATEGORIES.map((category) => (
                <button
                  key={category}
                  ref={registerButtonRef(category)}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'transition-colors duration-200 font-semibold font-inter text-sm leading-5 whitespace-nowrap shrink-0',
                    activeCategory === category
                      ? 'text-black'
                      : 'text-auth-placeholder',
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            <CategoryIndicator left={indicatorLeft} width={indicatorWidth} />
          </div>
        </div>
      </div>

      <div className="flex gap-6.25 items-center mb-4 shrink-0 relative">
        <button
          type="button"
          onClick={handleSlideNext}
          aria-label="Show more categories"
          className="shrink-0"
        >
          <ChevronRightIcon />
        </button>

        <button
          type="button"
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="w-21.25 h-9.5 border border-filter-border rounded-lg flex items-center px-4 gap-2"
        >
          <FilterIcon />
          <p className="text-auth-placeholder text-sm">Filter</p>
        </button>

        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />
      </div>
    </div>
  );
}
