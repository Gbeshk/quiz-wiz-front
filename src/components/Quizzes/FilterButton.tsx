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
        'relative w-21.25 h-9.5 rounded-lg flex items-center cursor-pointer px-4 gap-2 transition-colors duration-300 ease-out',
        hasConfirmedFilters
          ? 'border-2 border-black text-black'
          : 'border border-filter-border text-auth-placeholder hover:bg-filter-hover hover:border-modal-header-text hover:text-modal-header-text',
      )}
    >
      <FilterIcon />
      <p className="text-sm">Filter</p>

      {hasConfirmedFilters && (
        <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-white rounded-full bg-black text-white text-xs font-semibold flex items-center justify-center">
          {filterCount}
        </div>
      )}
    </button>
  );
}
