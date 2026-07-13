import { cn } from '@/lib/utils';
import ChevronLeftIcon from '@/components/UI/Icons/ChevronLeftIcon';
import type { CategoryScrollArrowProps } from '@/types/quizz';

export default function CategoryScrollArrow({
  visible,
  onClick,
}: CategoryScrollArrowProps) {
  return (
    <div
      className={cn(
        'absolute left-0 top-0 z-20 flex h-[calc(100%-16px)] items-center pr-4 bg-white transition-opacity duration-300',
        visible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label="Show previous categories"
        className="shrink-0"
      >
        <ChevronLeftIcon />
      </button>
    </div>
  );
}
