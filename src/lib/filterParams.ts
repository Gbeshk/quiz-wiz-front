import type { SortKey } from '@/types/quizz';
import { ALL_QUIZZES } from '@/constants/categories';

export interface FilterState {
  selectedLevels: string[];
  selectedCategories: string[];
  myQuizzes: boolean;
  notCompleted: boolean;
  sortBy: SortKey | null;
  searchTerm: string;
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

  if (filters.searchTerm.trim()) {
    params.set('search', filters.searchTerm.trim());
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
    searchTerm: params.get('search') ?? '',
  };
}

export function getActiveCategories(params: URLSearchParams): string[] {
  return params.getAll('categories[]');
}

export function toggleActiveCategory(
  params: URLSearchParams,
  category: string,
): URLSearchParams {
  const next = new URLSearchParams(params);

  if (category === ALL_QUIZZES) {
    next.delete('categories[]');
    return next;
  }

  const current = next.getAll('categories[]');
  next.delete('categories[]');

  const updated = current.includes(category)
    ? current.filter((c) => c !== category)
    : [...current, category];

  updated.forEach((c) => next.append('categories[]', c));
  return next;
}

export function setSearchTerm(
  params: URLSearchParams,
  term: string,
): URLSearchParams {
  const next = new URLSearchParams(params);

  if (term.trim()) {
    next.set('search', term.trim());
  } else {
    next.delete('search');
  }

  return next;
}
