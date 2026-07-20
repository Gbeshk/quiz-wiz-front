import SortCheckIcon from '@/components/UI/Icons/SortCheckIcon';
import { cn } from '@/lib';
import type { SortOptionRowProps } from '@/types/quizz';

export default function SortOptionRow({
  option,
  isSelected,
  onSelect,
}: SortOptionRowProps) {
  const { key, label, Icon } = option;

  return (
    <button
      type="button"
      onClick={() => onSelect(key)}
      className={cn(
        'font-inter text-auth-text mt-4 flex h-10 w-full cursor-pointer items-center justify-between gap-4 rounded-lg px-3 text-sm leading-6 font-semibold transition-all duration-300 ease-in-out first:mt-6',
        isSelected ? 'bg-modal-sorting-hover' : 'hover:bg-modal-sorting-hover',
      )}
    >
      <div className="flex items-center gap-4">
        <Icon />
        <p>{label}</p>
      </div>
      {isSelected && <SortCheckIcon />}
    </button>
  );
}
