import { useState } from 'react';

import { cn } from '@/lib';
import FilterByPanel from './FilterByPanel';
import SortByPanel from './SortByPanel';
import type { FilterPanelsProps } from './FilterModal.types';
import type { MobileTab } from './FilterModalTabs';
import FilterModalSearchInput from './FilterModalSearchInput';
import FilterModalTabs from './FilterModalTabs';
import FilterModalActionBar from './FilterModalActionBar';
import FilterModalMobileHeader from './FilterModalMobileHeader';

type FilterModalMobileProps = {
  isOpen: boolean;
  hasSelection: boolean;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
  panelProps: FilterPanelsProps;
};

export default function FilterModalMobile({
  isOpen,
  hasSelection,
  searchTerm,
  onSearchChange,
  onReset,
  onConfirm,
  onCancel,
  onClose,
  panelProps,
}: FilterModalMobileProps) {
  const [mobileTab, setMobileTab] = useState<MobileTab>('filter');

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col bg-white md:hidden',
        !isOpen && 'hidden',
      )}
    >
      <FilterModalMobileHeader onReset={onReset} onClose={onClose} />
      <FilterModalSearchInput value={searchTerm} onChange={onSearchChange} />
      <div className="w-full px-4.5">
        <FilterModalTabs activeTab={mobileTab} onChange={setMobileTab} />
      </div>
      <div className="mt-7 flex-1 overflow-y-auto px-4 pb-4">
        {mobileTab === 'filter' ? (
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
        ) : (
          <SortByPanel
            sortBy={panelProps.sortBy}
            onSelect={panelProps.onSelectSort}
          />
        )}
      </div>
      {hasSelection && (
        <FilterModalActionBar onConfirm={onConfirm} onCancel={onCancel} />
      )}
    </div>
  );
}
