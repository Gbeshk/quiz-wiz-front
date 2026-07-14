import { LEVELS } from '@/constants/filters';
import { FILTER_CATEGORIES } from '@/constants/categories';
import ToggleRow from './ToggleRow';
import LevelChip from './LevelChip';
import CategoryChip from './CategoryChip';
import type { FilterByPanelProps } from '@/types/quizz';

export default function FilterByPanel({
  myQuizzes,
  notCompleted,
  selectedLevels,
  selectedCategories,
  searchTerm,
  onToggleMyQuizzes,
  onToggleNotCompleted,
  onToggleLevel,
  onToggleCategory,
}: FilterByPanelProps) {
  const visibleCategories = FILTER_CATEGORIES.filter((category) =>
    category.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  return (
    <div className="w-157.75 h-135 border border-auth-border rounded-lg p-4">
      <p className="font-inter font-semibold text-sm leading-5 text-modal-header-text">
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

      <div className="mt-5 h-px w-full bg-modal-line" />
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

      <div className="mt-4 h-px w-full bg-modal-line" />
      <p className="font-inter text-footer-text mt-5 font-semibold text-sm leading-5">
        Categories
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        <div className="flex flex-wrap gap-x-3 gap-y-4">
          {visibleCategories.length > 0 ? (
            visibleCategories.map((category) => (
              <CategoryChip
                key={category}
                category={category}
                isSelected={selectedCategories.includes(category)}
                onToggle={() => onToggleCategory(category)}
              />
            ))
          ) : (
            <p className="font-inter text-sm text-auth-placeholder">
              No categories match your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
