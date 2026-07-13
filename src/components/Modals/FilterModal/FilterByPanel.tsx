import { LEVELS } from '@/constants/filters';
import { FILTER_CATEGORIES } from '@/constants/categories';
import ToggleRow from './ToggleRow';
import LevelChip from './LevelChip';
import CategoryChip from './CategoryChip';

interface FilterByPanelProps {
  myQuizzes: boolean;
  notCompleted: boolean;
  selectedLevels: string[];
  selectedCategories: string[];
  onToggleMyQuizzes: () => void;
  onToggleNotCompleted: () => void;
  onToggleLevel: (label: string) => void;
  onToggleCategory: (category: string) => void;
}

export default function FilterByPanel({
  myQuizzes,
  notCompleted,
  selectedLevels,
  selectedCategories,
  onToggleMyQuizzes,
  onToggleNotCompleted,
  onToggleLevel,
  onToggleCategory,
}: FilterByPanelProps) {
  return (
    <div className="w-157.75 h-135 border border-[#D0D5DD] rounded-lg p-4">
      <p className="font-inter font-semibold text-sm leading-5 text-[#4B69FD]">
        Filter by
      </p>

      <ToggleRow
        label="My quizzes"
        checked={myQuizzes}
        onToggle={onToggleMyQuizzes}
      />
      <ToggleRow
        label="Not completed"
        checked={notCompleted}
        onToggle={onToggleNotCompleted}
      />

      <div className="mt-5 h-px w-full bg-[#0000001A]" />
      <p className="font-inter text-footer-text mt-4 font-semibold text-sm leading-5">
        Levels
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {LEVELS.map((level) => (
          <LevelChip
            key={level.label}
            level={level}
            isSelected={selectedLevels.includes(level.label)}
            onToggle={() => onToggleLevel(level.label)}
          />
        ))}
      </div>

      <div className="mt-4 h-px w-full bg-[#0000001A]" />
      <p className="font-inter text-footer-text mt-5 font-semibold text-sm leading-5">
        Categories
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        <div className="flex flex-wrap gap-x-3 gap-y-4">
          {FILTER_CATEGORIES.map((category) => (
            <CategoryChip
              key={category}
              category={category}
              isSelected={selectedCategories.includes(category)}
              onToggle={() => onToggleCategory(category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
