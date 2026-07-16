import { cn } from '@/lib';
import type { LevelChipProps } from '@/types/quizz';

export default function LevelChip({
  level,
  isSelected,
  onToggle,
}: LevelChipProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'font-inter px-3 py-1.5 rounded-full ease-in-out duration-300 text-xs font-semibold transition-colors cursor-pointer',
        isSelected ? level.selectedClass : [level.bgClass, level.textClass],
      )}
    >
      {level.label}
    </button>
  );
}
