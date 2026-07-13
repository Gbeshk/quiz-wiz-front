import SortCheckIcon from '@/components/UI/Icons/SortCheckIcon';
import type { SortKey, SortOptionConfig } from '@/types/quizz';

interface SortOptionRowProps {
  option: SortOptionConfig;
  isSelected: boolean;
  onSelect: (key: SortKey) => void;
}

export default function SortOptionRow({
  option,
  isSelected,
  onSelect,
}: SortOptionRowProps) {
  const { key, label, Icon } = option;

  return (
    <div
      onClick={() => onSelect(key)}
      className={`mt-4 first:mt-6 font-inter font-semibold text-sm leading-6 px-3 flex items-center justify-between gap-4 text-auth-text w-full h-10 transition-all ease-in-out duration-300 rounded-lg cursor-pointer ${
        isSelected ? 'bg-[#D9D9D933]' : 'hover:bg-[#D9D9D933]'
      }`}
    >
      <div className="flex items-center gap-4">
        <Icon />
        <p>{label}</p>
      </div>
      {isSelected && <SortCheckIcon />}
    </div>
  );
}
