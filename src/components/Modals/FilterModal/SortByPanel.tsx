import { SORT_OPTIONS } from '@/constants/filters';
import SortOptionRow from './SortOptionRow';
import type { SortKey } from '@/types/quizz';

interface SortByPanelProps {
  sortBy: SortKey | null;
  onSelect: (key: SortKey) => void;
}

export default function SortByPanel({ sortBy, onSelect }: SortByPanelProps) {
  return (
    <div className="w-98 h-137 border border-[#D0D5DD] rounded-lg p-4">
      <p className="font-inter font-semibold text-sm leading-5 text-[#4B69FD]">
        Sort by
      </p>
      {SORT_OPTIONS.map((option) => (
        <SortOptionRow
          key={option.key}
          option={option}
          isSelected={sortBy === option.key}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
