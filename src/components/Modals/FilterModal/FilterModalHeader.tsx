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
    <div className="w-full p-4 bg-modal-header rounded-xl h-17.5 gap-4 flex items-center justify-between">
      <button
        type="button"
        className="w-21.25 h-9.5 bg-black rounded-lg flex items-center px-4 gap-2"
      >
        <FilterIcon fill="white" />
        <p className="font-inter text-white text-sm">Filter</p>
      </button>

      <div className="relative w-full">
        <SearchIcon />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="font-inter placeholder:text-auth-placeholder focus:outline-none text-sm leading-6 font-normal tracking-normal w-full rounded-3xl h-9.5 border border-modal-input-border pl-12"
          placeholder="Search"
        />
      </div>

      {hasSelection && (
        <>
          <div
            onClick={onConfirm}
            className="w-27.5 shrink-0 h-9.5 flex items-center justify-center bg-auth-link rounded-xl font-inter font-semibold text-sm leading-4.25 text-white cursor-pointer"
          >
            Confirm
          </div>
          <div className="w-px h-3.5 bg-vertical-line" />
          <p
            onClick={onReset}
            className="whitespace-nowrap font-inter font-normal text-sm leading-6 text-auth-placeholder cursor-pointer"
          >
            Reset all filters
          </p>
        </>
      )}

      <div onClick={onClose} className="cursor-pointer">
        <CloseIcon />
      </div>
    </div>
  );
}
