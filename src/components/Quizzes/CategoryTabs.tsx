import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { ALL_QUIZZES } from '@/constants/categories';
import { useCategories } from '@/hooks/useCategories';
import { useCategoryScroller } from '@/hooks/useCategoryScroller';
import {
  getActiveCategories,
  toggleActiveCategory,
  parseFilterSearchParams,
} from '@/lib/filterParams';
import FilterModal from '../Modals/FilterModal/FilterModal';
import CategoryTabList from './CategoryTabList';
import CategoryScrollArrow from './CategoryScrollArrow';
import FilterButton from './FilterButton';

export default function CategoryTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories } = useCategories();
  const pageCategories = [ALL_QUIZZES, ...categories];

  const selectedCategories = getActiveCategories(searchParams);
  const isAllActive = selectedCategories.length === 0;

  const [lastClickedCategory, setLastClickedCategory] = useState<string>(
    isAllActive
      ? ALL_QUIZZES
      : selectedCategories[selectedCategories.length - 1],
  );

  const indicatorCategory = isAllActive
    ? ALL_QUIZZES
    : selectedCategories.includes(lastClickedCategory)
      ? lastClickedCategory
      : selectedCategories[selectedCategories.length - 1];

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
  } = useCategoryScroller(indicatorCategory);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const confirmedFilters = parseFilterSearchParams(searchParams);
  const filterCount =
    confirmedFilters.selectedLevels.length +
    selectedCategories.length +
    (confirmedFilters.myQuizzes ? 1 : 0) +
    (confirmedFilters.notCompleted ? 1 : 0) +
    (confirmedFilters.sortBy ? 1 : 0);
  const hasConfirmedFilters = filterCount > 0;

  const handleSelectCategory = (category: string) => {
    if (wasDragged()) return;
    setSearchParams(toggleActiveCategory(searchParams, category));
    setLastClickedCategory(category);
  };

  return (
    <>
      <div className="mt-6 flex w-full items-center justify-between gap-2">
        <CategoryTabList
          categories={pageCategories}
          selectedCategories={selectedCategories}
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

        <div className="relative mb-4 flex shrink-0 items-center gap-6.25">
          <CategoryScrollArrow
            direction="right"
            visible={showForwardArrow}
            onClick={handleSlideNext}
          />

          <div className="max-xl1:hidden inline">
            <FilterButton
              isOpen={isFilterOpen}
              hasConfirmedFilters={hasConfirmedFilters}
              filterCount={filterCount}
              onClick={() => setIsFilterOpen((prev) => !prev)}
            />
          </div>

          {isFilterOpen && (
            <FilterModal
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              categories={categories}
            />
          )}
        </div>
      </div>
      <div className="max-xl1:inline mt-3 hidden">
        <FilterButton
          isOpen={isFilterOpen}
          hasConfirmedFilters={hasConfirmedFilters}
          filterCount={filterCount}
          onClick={() => setIsFilterOpen((prev) => !prev)}
        />
      </div>
    </>
  );
}
