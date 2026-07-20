import { cn } from '@/lib';
import type { CategoryChipProps } from '@/types/quizz';

export default function CategoryChip({
  category,
  isSelected,
  onToggle,
}: CategoryChipProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'font-inter cursor-pointer rounded-3xl px-3 py-2 text-sm font-semibold transition-colors duration-300 ease-in-out',
        isSelected
          ? 'border-black bg-black text-white'
          : 'text-auth-text hover:bg-category-hover-bg hover:text-auth-text bg-white',
      )}
    >
      {category}
    </button>
  );
}
