'use client';

import { useFilterModal } from '@/hooks/useFilterModal';
import FilterModalHeader from './FilterModalHeader';
import FilterByPanel from './FilterByPanel';
import SortByPanel from './SortByPanel';
import type { FilterModalProps } from '@/types/quizz';
import { cn } from '@/lib';

export default function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const {
    selectedLevels,
    selectedCategories,
    myQuizzes,
    notCompleted,
    sortBy,
    hasSelection,
    toggleLevel,
    toggleCategory,
    setMyQuizzes,
    setNotCompleted,
    setSortBy,
    resetAll,
  } = useFilterModal();

  return (
    <div
      className={cn(
        'absolute border bg-white rounded-xl p-4 border-black right-0 top-11 w-266.25 h-162.5 shadow-[0px_16px_54px_0px_#0000001F] z-50',
        !isOpen && 'hidden',
      )}
    >
      <FilterModalHeader
        hasSelection={hasSelection}
        onReset={resetAll}
        onClose={onClose}
      />

      <div className="flex justify-between">
        <FilterByPanel
          myQuizzes={myQuizzes}
          notCompleted={notCompleted}
          selectedLevels={selectedLevels}
          selectedCategories={selectedCategories}
          onToggleMyQuizzes={() => setMyQuizzes((prev) => !prev)}
          onToggleNotCompleted={() => setNotCompleted((prev) => !prev)}
          onToggleLevel={toggleLevel}
          onToggleCategory={toggleCategory}
        />
        <SortByPanel sortBy={sortBy} onSelect={setSortBy} />
      </div>
    </div>
  );
}
