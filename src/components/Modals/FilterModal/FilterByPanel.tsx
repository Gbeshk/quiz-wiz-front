import ToggleRow from './ToggleRow';
import LevelChip from './LevelChip';
import CategoryChip from './CategoryChip';
import type { FilterByPanelProps } from '@/types/quizz';
import { useAuth } from '@/context/AuthContext';

export default function FilterByPanel({
  myQuizzes,
  notCompleted,
  selectedLevels,
  selectedCategories,
  searchTerm,
  onToggleMyQuizzes,
  onToggleNotCompleted,
  onToggleLevel,
  difficulties,
  categories,
  onToggleCategory,
}: FilterByPanelProps) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const visibleLevels = difficulties.filter((difficulty) =>
    difficulty.name.toLowerCase().includes(normalizedSearch),
  );

  const visibleCategories = categories.filter((category) =>
    category.toLowerCase().includes(normalizedSearch),
  );
  const { user } = useAuth();

  return (
    <div className="md:border-auth-border md:w-157.75 md:rounded-lg md:border md:p-4">
      <p className="font-inter text-modal-header-text text-sm leading-5 font-semibold max-md:hidden">
        Filter by
      </p>
      {user && (
        <>
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
        </>
      )}
      <p className="font-inter text-footer-text mt-4 text-sm leading-5 font-semibold">
        Levels
      </p>
      <div className="mt-3 flex flex-wrap gap-2 pr-1">
        {visibleLevels.length > 0 ? (
          visibleLevels.map((difficulty) => (
            <LevelChip
              key={difficulty.name}
              difficulty={difficulty}
              isSelected={selectedLevels.includes(difficulty.name)}
              onToggle={() => onToggleLevel(difficulty.name)}
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
        <div className="flex flex-wrap gap-x-3 gap-y-4 overflow-auto pb-2">
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
