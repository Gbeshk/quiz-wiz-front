import DoneIcon from '@/components/UI/Icons/DoneIcon';
import { cn } from '@/lib';
import type { ToggleRowProps } from '@/types/quizz';

export default function ToggleRow({
  label,
  checked,
  onToggle,
}: ToggleRowProps) {
  return (
    <label className="flex items-center mt-4 gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="sr-only peer"
      />
      <p className="font-inter text-footer-text font-semibold text-sm leading-5">
        {label}
      </p>
      <span
        className={cn(
          'w-4 h-4 rounded-sm flex items-center justify-center',
          checked ? 'bg-black' : 'border border-auth-border',
        )}
      >
        {checked && <DoneIcon />}
      </span>
    </label>
  );
}
