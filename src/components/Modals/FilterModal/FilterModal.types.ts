import type { useFilterModal } from '@/hooks/useFilterModal';
import type { useDifficulties } from '@/hooks/useDifficulties';
import type { FilterModalProps } from '@/types/quizz';

type FilterModalState = ReturnType<typeof useFilterModal>;

export type FilterPanelsProps = Pick<
  FilterModalState,
  | 'selectedLevels'
  | 'selectedCategories'
  | 'myQuizzes'
  | 'notCompleted'
  | 'sortBy'
> & {
  categories: FilterModalProps['categories'];
  difficulties: ReturnType<typeof useDifficulties>['difficulties'];
  searchTerm: string;
  onToggleMyQuizzes: () => void;
  onToggleNotCompleted: () => void;
  onToggleLevel: FilterModalState['toggleLevel'];
  onToggleCategory: FilterModalState['toggleCategory'];
  onSelectSort: FilterModalState['toggleSort'];
};
