import { cn } from '@/lib';
import FilterModalHeader from './FilterModalHeader';
import FilterByPanel from './FilterByPanel';
import SortByPanel from './SortByPanel';
import type { FilterPanelsProps } from './FilterModal.types';

type FilterModalDesktopProps = {
  isOpen: boolean;
  hasSelection: boolean;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
  onConfirm: () => void;
  onClose: () => void;
  panelProps: FilterPanelsProps;
};

export default function FilterModalDesktop({
  isOpen,
  hasSelection,
  searchTerm,
  onSearchChange,
  onReset,
  onConfirm,
  onClose,
  panelProps,
}: FilterModalDesktopProps) {
  return (
    <div
      className={cn(
        'w-filter-modal absolute top-11 right-0 z-50 hidden max-w-266.5 rounded-xl border border-black bg-white p-4 shadow-[0px_16px_54px_0px_#0000001F] md:block',
        !isOpen && 'md:hidden',
      )}
    >
      <FilterModalHeader
        hasSelection={hasSelection}
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        onReset={onReset}
        onConfirm={onConfirm}
        onClose={onClose}
      />
      <div className="flex justify-between">
        <FilterByPanel
          myQuizzes={panelProps.myQuizzes}
          notCompleted={panelProps.notCompleted}
          selectedLevels={panelProps.selectedLevels}
          categories={panelProps.categories}
          selectedCategories={panelProps.selectedCategories}
          difficulties={panelProps.difficulties}
          searchTerm={panelProps.searchTerm}
          onToggleMyQuizzes={panelProps.onToggleMyQuizzes}
          onToggleNotCompleted={panelProps.onToggleNotCompleted}
          onToggleLevel={panelProps.onToggleLevel}
          onToggleCategory={panelProps.onToggleCategory}
        />
        <SortByPanel
          sortBy={panelProps.sortBy}
          onSelect={panelProps.onSelectSort}
        />
      </div>
    </div>
  );
}
