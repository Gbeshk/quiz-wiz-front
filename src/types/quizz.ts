import type { ComponentType } from 'react';

export type SortKey = 'az' | 'za' | 'popular' | 'newest' | 'oldest';

export interface Level {
  label: string;
  bgClass: string;
  textClass: string;
  selectedClass: string;
  hoverClass: string;
}

export interface SortOptionConfig {
  key: SortKey;
  label: string;
  Icon: ComponentType;
}
export interface CategoryChipProps {
  category: string;
  isSelected: boolean;
  onToggle: () => void;
}
export interface FilterByPanelProps {
  myQuizzes: boolean;
  notCompleted: boolean;
  selectedLevels: string[];
  selectedCategories: string[];
  searchTerm: string;
  onToggleMyQuizzes: () => void;
  onToggleNotCompleted: () => void;
  onToggleLevel: (label: string) => void;
  onToggleCategory: (category: string) => void;
}
export interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface FilterModalHeaderProps {
  hasSelection: boolean;
  onReset: () => void;
  onConfirm: () => void;
  onClose: () => void;
}
export interface LevelChipProps {
  level: Level;
  isSelected: boolean;
  onToggle: () => void;
}
export interface SortByPanelProps {
  sortBy: SortKey | null;
  onSelect: (key: SortKey) => void;
}
export interface SortOptionRowProps {
  option: SortOptionConfig;
  isSelected: boolean;
  onSelect: (key: SortKey) => void;
}
export interface ToggleRowProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
}
export interface CategoryScrollArrowProps {
  direction: 'left' | 'right';
  visible: boolean;
  onClick: () => void;
}
export interface CategoryIndicatorProps {
  left: number;
  width: number;
}
export interface FilterButtonProps {
  isOpen: boolean;
  hasConfirmedFilters: boolean;
  filterCount: number;
  onClick: () => void;
}

export interface CategoryTabListProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  registerButtonRef: (
    category: string,
  ) => (el: HTMLButtonElement | null) => void;
  indicatorLeft: number;
  indicatorWidth: number;
  showBackArrow: boolean;
  onScroll: () => void;
  onSlideNext: () => void;
  onSlidePrev: () => void;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
}
export interface FilterModalHeaderProps {
  hasSelection: boolean;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
  onConfirm: () => void;
  onClose: () => void;
}
export interface Quiz {
  id: string;
  title: string;
  categories: [string, string];
  photoUrl?: string;
  isCompleted: boolean;
  completedDate?: string;
  totalTimeMinutes: number;
  totalUsers: number;
  difficulty: string;
  pointsEarned: number;
  pointsTotal: number;
}

export interface QuizCardProps {
  quiz: Quiz;
}
export interface QuizDifficultyPointsProps {
  difficulty: string;
  isCompleted: boolean;
  pointsEarned?: number;
  pointsTotal?: number;
}
export interface QuizStatsProps {
  isCompleted: boolean;
  completedDate?: string;
  totalTimeMinutes: number;
  totalUsers: number;
}
