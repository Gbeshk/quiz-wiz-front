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
        'font-inter cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300 ease-in-out',
        isSelected ? level.selectedClass : [level.bgClass, level.textClass],
      )}
    >
      {level.label}
    </button>
  );
}
