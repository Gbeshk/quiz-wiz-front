import CloseIcon from '@/components/UI/Icons/CloseIcon';
import FilterIcon from '@/components/UI/Icons/FilterIcon';
import SearchIcon from '@/components/UI/Icons/SearchIcon';
import type { FilterModalHeaderProps } from '@/types/quizz';

export default function FilterModalHeader({
  hasSelection,
  searchTerm,
  onSearchChange,
  onReset,
  onConfirm,
  onClose,
}: FilterModalHeaderProps) {
  return (
    <div className="bg-modal-header flex h-17.5 w-full items-center justify-between gap-4 rounded-xl p-4">
      <button
        type="button"
        className="flex h-9.5 w-21.25 items-center gap-2 rounded-lg bg-black px-4"
      >
        <FilterIcon fill="white" />
        <p className="font-inter text-sm text-white">Filter</p>
      </button>

      <div className="relative w-full">
        <SearchIcon />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="font-inter placeholder:text-auth-placeholder border-modal-input-border h-9.5 w-full rounded-3xl border pl-12 text-sm leading-6 font-normal tracking-normal focus:outline-none"
          placeholder="Search"
        />
      </div>

      {hasSelection && (
        <>
          <button
            onClick={onConfirm}
            className="bg-auth-link font-inter flex h-9.5 w-27.5 shrink-0 cursor-pointer items-center justify-center rounded-xl text-sm leading-4.25 font-semibold text-white"
          >
            Confirm
          </button>
          <div className="bg-vertical-line h-3.5 w-px" />
          <button
            onClick={onReset}
            className="font-inter text-auth-placeholder cursor-pointer text-sm leading-6 font-normal whitespace-nowrap"
          >
            Reset all filters
          </button>
        </>
      )}

      <button onClick={onClose} className="cursor-pointer">
        <CloseIcon />
      </button>
    </div>
  );
}
