import ChevronLeftIcon from '@/components/UI/Icons/ChevronLeftIcon';
import ChevronRightIcon from '@/components/UI/Icons/ChevronRightIcon';
import type { CategoryScrollArrowProps } from '@/types/quizz';
import { cn } from '@/lib';

export default function CategoryScrollArrow({
  direction,
  visible,
  onClick,
}: CategoryScrollArrowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        direction === 'left'
          ? 'Show previous categories'
          : 'Show more categories'
      }
      className={cn(
        'hover:bg-modal-line flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out',
        !visible && 'pointer-events-none opacity-0',
      )}
    >
      {direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
}
