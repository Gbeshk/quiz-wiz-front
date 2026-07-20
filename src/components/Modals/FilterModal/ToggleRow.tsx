import DoneIcon from '@/components/UI/Icons/DoneIcon';
import { cn } from '@/lib';
import type { ToggleRowProps } from '@/types/quizz';

export default function ToggleRow({
  label,
  checked,
  onToggle,
}: ToggleRowProps) {
  return (
    <label className="mt-4 flex cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="peer sr-only"
      />
      <p className="font-inter text-footer-text text-sm leading-5 font-semibold">
        {label}
      </p>
      <span
        className={cn(
          'flex h-4 w-4 items-center justify-center rounded-sm',
          checked ? 'bg-black' : 'border-auth-border border',
        )}
      >
        {checked && <DoneIcon />}
      </span>
    </label>
  );
}
