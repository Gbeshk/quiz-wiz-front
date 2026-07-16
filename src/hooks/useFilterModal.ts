import type { SortKey } from '@/types/quizz';
import { useState } from 'react';
import type { FilterState } from '@/lib/filterParams';

export function useFilterModal(initialFilters?: FilterState) {
  const [selectedLevels, setSelectedLevels] = useState<string[]>(
    initialFilters?.selectedLevels ?? [],
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialFilters?.selectedCategories ?? [],
  );
  const [myQuizzes, setMyQuizzes] = useState(
    initialFilters?.myQuizzes ?? false,
  );
  const [notCompleted, setNotCompleted] = useState(
    initialFilters?.notCompleted ?? false,
  );
  const [sortBy, setSortBy] = useState<SortKey | null>(
    initialFilters?.sortBy ?? null,
  );

  const toggleLevel = (label: string) => {
    setSelectedLevels((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const toggleSort = (key: SortKey) => {
    setSortBy((prev) => (prev === key ? null : key));
  };

  const resetAll = () => {
    setSelectedLevels([]);
    setSelectedCategories([]);
    setMyQuizzes(false);
    setNotCompleted(false);
    setSortBy(null);
  };

  const hasSelection =
    selectedLevels.length > 0 ||
    selectedCategories.length > 0 ||
    myQuizzes ||
    notCompleted ||
    sortBy !== null;

  return {
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
  };
}
