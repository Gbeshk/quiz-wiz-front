import ArrowUp from '@/components/UI/Icons/ArrowUp';
import ArrowDown from '@/components/UI/Icons/ArrowDown';
import DiamondIcon from '@/components/UI/Icons/DiamondIcon';
import NewestIcon from '@/components/UI/Icons/NewestIcon';
import OldestIcon from '@/components/UI/Icons/OldestIcon';
import type { SortOptionConfig } from '@/types/quizz';

export const SORT_OPTIONS: SortOptionConfig[] = [
  { key: 'az', label: 'A-Z', Icon: ArrowUp },
  { key: 'za', label: 'Z-A', Icon: ArrowDown },
  { key: 'popular', label: 'Most popular', Icon: DiamondIcon },
  { key: 'newest', label: 'Newest', Icon: NewestIcon },
  { key: 'oldest', label: 'Oldest', Icon: OldestIcon },
];
