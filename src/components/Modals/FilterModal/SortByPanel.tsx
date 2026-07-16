import { SORT_OPTIONS } from '@/constants/filters';
import SortOptionRow from './SortOptionRow';
import type { SortByPanelProps } from '@/types/quizz';

export default function SortByPanel({ sortBy, onSelect }: SortByPanelProps) {
  return (
    <div className="w-98 h-137 border border-auth-border rounded-lg p-4">
      <p className="font-inter font-semibold text-sm leading-5 text-auth-link">
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
