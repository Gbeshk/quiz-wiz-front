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
        'font-inter px-3 py-2 rounded-3xl text-sm font-semibold transition-colors ease-in-out duration-300 cursor-pointer',
        isSelected
          ? 'bg-black text-white border-black'
          : 'bg-white text-auth-text hover:bg-category-hover-bg hover:text-auth-text',
      )}
    >
      {category}
    </button>
  );
}
