import ArrowUp from '@/components/UI/Icons/ArrowUp';
import ArrowDown from '@/components/UI/Icons/ArrowDown';
import DiamondIcon from '@/components/UI/Icons/DiamondIcon';
import NewestIcon from '@/components/UI/Icons/NewestIcon';
import OldestIcon from '@/components/UI/Icons/OldestIcon';
import type { Level, SortOptionConfig } from '@/types/quizz';

export const LEVELS: Level[] = [
  {
    label: 'Starter',
    bgClass: 'bg-[#F0F9FF]',
    textClass: 'text-[#026AA2]',
    selectedClass: 'bg-[#026AA2] text-white',
    hoverClass: 'hover:bg-[#026AA2]! hover:text-white!',
  },
  {
    label: 'Beginner',
    bgClass: 'bg-[#EFF8FF]',
    textClass: 'text-[#175CD3]',
    selectedClass: 'bg-[#175CD3] text-white',
    hoverClass: 'hover:bg-[#175CD3]! hover:text-white!',
  },
  {
    label: 'Middle',
    bgClass: 'bg-[#F9F5FF]',
    textClass: 'text-[#6941C6]',
    selectedClass: 'bg-[#6941C6] text-white',
    hoverClass: 'hover:bg-[#6941C6]! hover:text-white!',
  },
  {
    label: 'High',
    bgClass: 'bg-[#FFFAEB]',
    textClass: 'text-[#B54708]',
    selectedClass: 'bg-[#B54708] text-white',
    hoverClass: 'hover:bg-[#B54708]! hover:text-white!',
  },
  {
    label: 'Very high',
    bgClass: 'bg-[#FDF2FA]',
    textClass: 'text-[#C11574]',
    selectedClass: 'bg-[#C11574] text-white',
    hoverClass: 'hover:bg-[#C11574]! hover:text-white!',
  },
  {
    label: 'Dangerously high',
    bgClass: 'bg-[#FFF1F3]',
    textClass: 'text-[#C01048]',
    selectedClass: 'bg-[#C01048] text-white',
    hoverClass: 'hover:bg-[#C01048]! hover:text-white!',
  },
];

export const SORT_OPTIONS: SortOptionConfig[] = [
  { key: 'az', label: 'A-Z', Icon: ArrowUp },
  { key: 'za', label: 'Z-A', Icon: ArrowDown },
  { key: 'popular', label: 'Most popular', Icon: DiamondIcon },
  { key: 'newest', label: 'Newest', Icon: NewestIcon },
  { key: 'oldest', label: 'Oldest', Icon: OldestIcon },
];
