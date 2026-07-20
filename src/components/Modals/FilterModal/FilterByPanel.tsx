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
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const visibleLevels = LEVELS.filter((level) =>
    level.label.toLowerCase().includes(normalizedSearch),
  );

  const visibleCategories = FILTER_CATEGORIES.filter((category) =>
    category.toLowerCase().includes(normalizedSearch),
  );

  return (
    <div className="border-auth-border h-135 w-157.75 rounded-lg border p-4">
      <p className="font-inter text-modal-header-text text-sm leading-5 font-semibold">
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

      <div className="bg-modal-line mt-5 h-px w-full" />
      <p className="font-inter text-footer-text mt-4 text-sm leading-5 font-semibold">
        Levels
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {visibleLevels.length > 0 ? (
          visibleLevels.map((level) => (
            <LevelChip
              key={level.label}
              level={level}
              isSelected={selectedLevels.includes(level.label)}
              onToggle={() => onToggleLevel(level.label)}
            />
          ))
        ) : (
          <p className="font-inter text-auth-placeholder text-sm">
            No levels match your search.
          </p>
        )}
      </div>

      <div className="bg-modal-line mt-4 h-px w-full" />
      <p className="font-inter text-footer-text mt-5 text-sm leading-5 font-semibold">
        Categories
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
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
            <p className="font-inter text-auth-placeholder text-sm">
              No categories match your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
