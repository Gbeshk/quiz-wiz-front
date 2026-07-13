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
        'mt-4 first:mt-6 font-inter font-semibold text-sm leading-6 px-3 flex items-center justify-between gap-4 text-auth-text w-full h-10 transition-all ease-in-out duration-300 rounded-lg cursor-pointer',
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
