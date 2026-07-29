import { useMemo } from 'react';
import type { Quiz } from '@/types/quizz';
import { parseFilterSearchParams } from '@/lib/filterParams';
import { ALL_QUIZZES } from '@/constants/categories';

export function useFilteredQuizzes(
  quizzes: Quiz[],
  searchParams: URLSearchParams,
) {
  return useMemo(() => {
    const {
      selectedLevels,
      selectedCategories,
      myQuizzes,
      notCompleted,
      sortBy,
      searchTerm,
    } = parseFilterSearchParams(searchParams);

    let result = quizzes.filter((quiz) => {
      if (
        selectedLevels.length > 0 &&
        !selectedLevels.includes(quiz.difficulty.name)
      ) {
        return false;
      }

      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(ALL_QUIZZES) &&
        !quiz.categories.some((c) => selectedCategories.includes(c))
      ) {
        return false;
      }

      if (notCompleted && quiz.isCompleted) {
        return false;
      }

      if (searchTerm.trim()) {
        const term = searchTerm.trim().toLowerCase();
        const matchesTitle = quiz.title.toLowerCase().includes(term);
        const matchesDescription = quiz.description
          .toLowerCase()
          .includes(term);

        if (!matchesTitle && !matchesDescription) {
          return false;
        }
      }

      void myQuizzes;

      return true;
    });

    if (sortBy) {
      result = [...result].sort((a, b) => {
        switch (sortBy) {
          case 'az':
            return a.title.localeCompare(b.title);
          case 'za':
            return b.title.localeCompare(a.title);
          case 'popular':
            return b.timesPlayed - a.timesPlayed;
          case 'newest':
            return Number(b.id) - Number(a.id);
          case 'oldest':
            return Number(a.id) - Number(b.id);
          default:
            return 0;
        }
      });
    }

    return result;
  }, [quizzes, searchParams]);
}
