import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { ALL_QUIZZES, PAGE_CATEGORIES } from '@/constants/categories';
import { useCategoryScroller } from '@/hooks/useCategoryScroller';
import {
  getActiveCategory,
  parseFilterSearchParams,
  setActiveCategory,
} from '@/lib/filterParams';
import FilterModal from '../Modals/FilterModal/FilterModal';
import CategoryTabList from './CategoryTabList';
import CategoryScrollArrow from './CategoryScrollArrow';
import FilterButton from './FilterButton';

export default function CategoryTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = getActiveCategory(searchParams);

  const {
    scrollRef,
    registerButtonRef,
    indicatorLeft,
    indicatorWidth,
    showBackArrow,
    showForwardArrow,
    handleScroll,
    handleSlideNext,
    handleSlidePrev,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    wasDragged,
  } = useCategoryScroller(activeCategory);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const confirmedFilters = parseFilterSearchParams(searchParams);
  const filterCount =
    confirmedFilters.selectedLevels.length +
    (confirmedFilters.selectedCategories.length > 1
      ? confirmedFilters.selectedCategories.length
      : 0) +
    (confirmedFilters.myQuizzes ? 1 : 0) +
    (confirmedFilters.notCompleted ? 1 : 0) +
    (confirmedFilters.sortBy ? 1 : 0) +
    (activeCategory !== ALL_QUIZZES ? 1 : 0);
  const hasConfirmedFilters = filterCount > 0;

  const handleSelectCategory = (category: string) => {
    if (wasDragged()) return;
    setSearchParams(setActiveCategory(searchParams, category));
  };

  return (
    <div className="w-full flex items-center mt-6 justify-between gap-2">
      <CategoryTabList
        categories={PAGE_CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        scrollRef={scrollRef}
        registerButtonRef={registerButtonRef}
        indicatorLeft={indicatorLeft}
        indicatorWidth={indicatorWidth}
        showBackArrow={showBackArrow}
        onScroll={handleScroll}
        onSlideNext={handleSlideNext}
        onSlidePrev={handleSlidePrev}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      />

      <div className="flex gap-6.25 items-center mb-4 shrink-0 relative">
        <CategoryScrollArrow
          direction="right"
          visible={showForwardArrow}
          onClick={handleSlideNext}
        />

        <FilterButton
          isOpen={isFilterOpen}
          hasConfirmedFilters={hasConfirmedFilters}
          filterCount={filterCount}
          onClick={() => setIsFilterOpen((prev) => !prev)}
        />

        {isFilterOpen && (
          <FilterModal
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
