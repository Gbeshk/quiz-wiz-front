import ArrowUp from '@/components/UI/Icons/ArrowUp';
import ArrowDown from '@/components/UI/Icons/ArrowDown';
import DiamondIcon from '@/components/UI/Icons/DiamondIcon';
import NewestIcon from '@/components/UI/Icons/NewestIcon';
import OldestIcon from '@/components/UI/Icons/OldestIcon';
import type { Level, SortOptionConfig } from '@/types/quizz';

export const LEVELS: Level[] = [
  {
    label: 'Starter',
    bgClass: 'bg-starter-bg',
    textClass: 'text-starter-text',
    selectedClass: 'bg-starter-text text-white',
    hoverClass: 'hover:bg-starter-text! hover:text-white!',
  },
  {
    label: 'Beginner',
    bgClass: 'bg-beginner-bg',
    textClass: 'text-beginner-text',
    selectedClass: 'bg-beginner-text text-white',
    hoverClass: 'hover:bg-beginner-text! hover:text-white!',
  },
  {
    label: 'Middle',
    bgClass: 'bg-middle-bg',
    textClass: 'text-middle-text',
    selectedClass: 'bg-middle-text text-white',
    hoverClass: 'hover:bg-middle-text! hover:text-white!',
  },
  {
    label: 'High',
    bgClass: 'bg-high-bg',
    textClass: 'text-high-text',
    selectedClass: 'bg-high-text text-white',
    hoverClass: 'hover:bg-high-text! hover:text-white!',
  },
  {
    label: 'Very high',
    bgClass: 'bg-veryhigh-bg',
    textClass: 'text-veryhigh-text',
    selectedClass: 'bg-veryhigh-text text-white',
    hoverClass: 'hover:bg-veryhigh-text! hover:text-white!',
  },
  {
    label: 'Dangerously high',
    bgClass: 'bg-danhigh-bg',
    textClass: 'text-danhigh-text',
    selectedClass: 'bg-danhigh-text text-white',
    hoverClass: 'hover:bg-danhigh-text! hover:text-white!',
  },
];

export const SORT_OPTIONS: SortOptionConfig[] = [
  { key: 'az', label: 'A-Z', Icon: ArrowUp },
  { key: 'za', label: 'Z-A', Icon: ArrowDown },
  { key: 'popular', label: 'Most popular', Icon: DiamondIcon },
  { key: 'newest', label: 'Newest', Icon: NewestIcon },
  { key: 'oldest', label: 'Oldest', Icon: OldestIcon },
];
