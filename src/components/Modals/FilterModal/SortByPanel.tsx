import { SORT_OPTIONS } from '@/constants/filters';
import SortOptionRow from './SortOptionRow';
import type { SortByPanelProps } from '@/types/quizz';

export default function SortByPanel({ sortBy, onSelect }: SortByPanelProps) {
  return (
    <div className="md:border-auth-border md:w-98 md:rounded-lg md:border md:p-4">
      <p className="font-inter text-auth-link text-sm leading-5 font-semibold max-md:hidden">
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
