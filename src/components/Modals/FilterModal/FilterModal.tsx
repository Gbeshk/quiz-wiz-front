import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { useFilterModal } from '@/hooks/useFilterModal';
import { useDifficulties } from '@/hooks/useDifficulties';
import {
  buildFilterSearchParams,
  parseFilterSearchParams,
} from '@/lib/filterParams';
import FilterModalHeader from './FilterModalHeader';
import FilterByPanel from './FilterByPanel';
import SortByPanel from './SortByPanel';
import type { FilterModalProps } from '@/types/quizz';
import { cn } from '@/lib';

export default function FilterModal({
  isOpen,
  onClose,
  categories,
}: FilterModalProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const { difficulties } = useDifficulties();

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
    toggleSort,
    resetAll,
  } = useFilterModal(parseFilterSearchParams(searchParams));

  const handleConfirm = () => {
    const params = buildFilterSearchParams({
      selectedLevels,
      selectedCategories,
      myQuizzes,
      notCompleted,
      sortBy,
      searchTerm: searchParams.get('search') ?? '',
    });

    setSearchParams(params);
    onClose();
  };

  const handleReset = () => {
    resetAll();
    const params = new URLSearchParams();
    const currentSearch = searchParams.get('search');
    if (currentSearch) {
      params.set('search', currentSearch);
    }
    setSearchParams(params);
  };

  return (
    <div
      className={cn(
        'absolute top-11 right-0 z-50 h-162.5 w-266.25 rounded-xl border border-black bg-white p-4 shadow-[0px_16px_54px_0px_#0000001F]',
        !isOpen && 'hidden',
      )}
    >
      <FilterModalHeader
        hasSelection={hasSelection}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onReset={handleReset}
        onConfirm={handleConfirm}
        onClose={onClose}
      />

      <div className="flex justify-between">
        <FilterByPanel
          myQuizzes={myQuizzes}
          notCompleted={notCompleted}
          selectedLevels={selectedLevels}
          categories={categories}
          selectedCategories={selectedCategories}
          difficulties={difficulties}
          searchTerm={searchTerm}
          onToggleMyQuizzes={() => setMyQuizzes((prev) => !prev)}
          onToggleNotCompleted={() => setNotCompleted((prev) => !prev)}
          onToggleLevel={toggleLevel}
          onToggleCategory={toggleCategory}
        />
        <SortByPanel sortBy={sortBy} onSelect={toggleSort} />
      </div>
    </div>
  );
}
