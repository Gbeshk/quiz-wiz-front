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
        'shrink-0 w-9 h-9 flex items-center justify-center rounded-full hover:bg-modal-line cursor-pointer transition-all ease-in-out duration-300',
        !visible && 'opacity-0 pointer-events-none',
      )}
    >
      {direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
}
