import type { SortKey } from '@/types/quizz';
import { useState } from 'react';

export function useFilterModal() {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [myQuizzes, setMyQuizzes] = useState(false);
  const [notCompleted, setNotCompleted] = useState(false);
  const [sortBy, setSortBy] = useState<SortKey | null>(null);

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

  const resetAll = () => {
    setSelectedLevels([]);
    setSelectedCategories([]);
    setMyQuizzes(false);
    setNotCompleted(false);
  };

  const hasSelection =
    selectedLevels.length > 0 ||
    selectedCategories.length > 0 ||
    myQuizzes ||
    notCompleted;

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
    setSortBy,
    resetAll,
  };
}
