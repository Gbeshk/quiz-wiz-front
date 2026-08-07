import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { useFilterModal } from '@/hooks/useFilterModal';
import { useDifficulties } from '@/hooks/useDifficulties';
import {
  buildFilterSearchParams,
  parseFilterSearchParams,
} from '@/lib/filterParams';
import type { FilterModalProps } from '@/types/quizz';
import FilterModalDesktop from './FilterModalDesktop';
import FilterModalMobile from './FilterModalMobile';

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
      searchTerm,
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

  const handleCancel = () => {
    resetAll();
  };

  const panelProps = {
    myQuizzes,
    notCompleted,
    selectedLevels,
    categories,
    selectedCategories,
    difficulties,
    searchTerm,
    sortBy,
    onToggleMyQuizzes: () => setMyQuizzes((prev) => !prev),
    onToggleNotCompleted: () => setNotCompleted((prev) => !prev),
    onToggleLevel: toggleLevel,
    onToggleCategory: toggleCategory,
    onSelectSort: toggleSort,
  };

  return (
    <>
      <FilterModalDesktop
        isOpen={isOpen}
        hasSelection={hasSelection}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onReset={handleReset}
        onConfirm={handleConfirm}
        onClose={onClose}
        panelProps={panelProps}
      />
      <FilterModalMobile
        isOpen={isOpen}
        hasSelection={hasSelection}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onReset={handleReset}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        onClose={onClose}
        panelProps={panelProps}
      />
    </>
  );
}
