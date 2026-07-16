import type { SortKey } from '@/types/quizz';
import { ALL_QUIZZES } from '@/constants/categories';

export interface FilterState {
  selectedLevels: string[];
  selectedCategories: string[];
  myQuizzes: boolean;
  notCompleted: boolean;
  sortBy: SortKey | null;
}

export function buildFilterSearchParams(filters: FilterState): URLSearchParams {
  const params = new URLSearchParams();

  filters.selectedLevels.forEach((level) => {
    params.append('levels[]', level);
  });

  filters.selectedCategories.forEach((category) => {
    params.append('categories[]', category);
  });

  if (filters.myQuizzes) {
    params.set('my_quizzes', '1');
  }

  if (filters.notCompleted) {
    params.set('not_completed', '1');
  }

  if (filters.sortBy) {
    params.set('sort', filters.sortBy);
  }

  return params;
}

export function parseFilterSearchParams(params: URLSearchParams): FilterState {
  return {
    selectedLevels: params.getAll('levels[]'),
    selectedCategories: params.getAll('categories[]'),
    myQuizzes: params.get('my_quizzes') === '1',
    notCompleted: params.get('not_completed') === '1',
    sortBy: (params.get('sort') as SortKey | null) ?? null,
  };
}
export function getActiveCategory(params: URLSearchParams): string {
  const categories = params.getAll('categories[]');
  return categories.length === 1 ? categories[0] : ALL_QUIZZES;
}
export function setActiveCategory(
  params: URLSearchParams,
  category: string,
): URLSearchParams {
  const next = new URLSearchParams(params);
  next.delete('categories[]');

  if (category !== ALL_QUIZZES) {
    next.append('categories[]', category);
  }

  return next;
}
