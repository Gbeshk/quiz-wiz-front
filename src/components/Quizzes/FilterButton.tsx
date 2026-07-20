import FilterIcon from '@/components/UI/Icons/FilterIcon';
import { cn } from '@/lib';
import type { FilterButtonProps } from '@/types/quizz';

export default function FilterButton({
  hasConfirmedFilters,
  filterCount,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative flex h-9.5 w-21.25 cursor-pointer items-center gap-2 rounded-lg px-4 transition-colors duration-300 ease-out',
        hasConfirmedFilters
          ? 'border-2 border-black text-black'
          : 'border-filter-border text-auth-placeholder hover:bg-filter-hover hover:border-modal-header-text hover:text-modal-header-text border',
      )}
    >
      <FilterIcon />
      <p className="text-sm">Filter</p>

      {hasConfirmedFilters && (
        <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-black text-xs font-semibold text-white">
          {filterCount}
        </div>
      )}
    </button>
  );
}
