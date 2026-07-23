import { ArrowRight } from '@/components/UI/Icons';

interface SubmitButtonProps {
  label: string;
  loadingLabel?: string;
  disabled?: boolean;
}

export default function SubmitButton({
  label,
  loadingLabel = 'Loading...',
  disabled,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="group font-inter mt-3.5 flex h-14 w-106.5 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black text-base font-semibold text-white transition-shadow duration-300 hover:shadow-[...] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {disabled ? loadingLabel : label}
      {!disabled && (
        <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100">
          <ArrowRight />
        </span>
      )}
    </button>
  );
}
