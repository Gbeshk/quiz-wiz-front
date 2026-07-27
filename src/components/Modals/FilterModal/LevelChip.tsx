import type { LevelChipProps } from '@/types/quizz';

export default function LevelChip({
  difficulty,
  isSelected,
  onToggle,
}: LevelChipProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      style={{
        backgroundColor: isSelected
          ? difficulty.color
          : `${difficulty.color}33`,
        color: isSelected ? '#fff' : difficulty.color,
      }}
      className="font-inter shrink-0 cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors duration-300 ease-in-out"
    >
      {difficulty.name}
    </button>
  );
}
