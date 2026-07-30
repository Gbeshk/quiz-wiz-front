import type { ComponentType } from 'react';

export type SortKey = 'az' | 'za' | 'popular' | 'newest' | 'oldest';

export interface Difficulty {
  name: string;
  color: string;
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
  categories: string[];
  difficulties: Difficulty[];
  onToggleLevel: (label: string) => void;
  onToggleCategory: (category: string) => void;
}
export interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
}
export interface LevelChipProps {
  difficulty: Difficulty;
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
  selectedCategories: string[];
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
export interface Question {
  id: string;
  question: string;
  options: string[];
  answerIds: number[];
  type: 'single' | 'multiple';
  correctAnswersCount?: number;
  points: number;
}
export interface QuizAttemptInfo {
  pointsEarned: number;
  timeTakenSeconds: number;
  completedAt: string;
}
export interface Quiz {
  id: string;
  title: string;
  description: string;
  categories: string[];
  questions: Question[];
  isCompleted: boolean;
  completedDate?: string;
  totalTimeMinutes: number;
  totalUsers: number;
  difficulty: Difficulty;
  pointsEarned: number;
  pointsTotal: number;
  timesPlayed: number;
  instructions: string;
  image: string | null;
  timeTakenSeconds?: number;
  questionsCount: number;
  myAttempt: QuizAttemptInfo | null;
}
export interface QuizCardProps {
  quiz: Quiz;
  variant?: 'default' | 'flat';
}
export interface QuizDifficultyPointsProps {
  difficulty: string;
  isCompleted: boolean;
  pointsEarned?: number;
  difficultyColor: string;
  pointsTotal?: number;
}
export interface QuizStatsProps {
  isCompleted: boolean;
  completedDate?: string;
  totalTimeMinutes: number;
  totalUsers: number;
  timeTakenSeconds?: number;
}
export interface QuizHeroSectionProps {
  quiz: Quiz;
}

export interface QuizMetaRowProps {
  quiz: Quiz;
}

export interface QuizInstructionsProps {
  instructions: string;
}

export interface QuizOtherQuizzesSliderProps {
  quizzes: Quiz[];
}
