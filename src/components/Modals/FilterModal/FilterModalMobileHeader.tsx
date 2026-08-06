import { CloseIcon } from '@/components/UI';

type FilterModalMobileHeaderProps = {
  onReset: () => void;
  onClose: () => void;
};

export default function FilterModalMobileHeader({
  onReset,
  onClose,
}: FilterModalMobileHeaderProps) {
  return (
    <div className="flex h-18 items-center justify-between px-4.5">
      <button
        onClick={onReset}
        className="font-inter text-auth-placeholder cursor-pointer text-sm leading-6 font-normal whitespace-nowrap"
      >
        Reset
      </button>
      <p className="text-auth-placeholder text-sm leading-5 font-semibold uppercase">
        Filters
      </p>
      <button onClick={onClose} className="cursor-pointer">
        <CloseIcon />
      </button>
    </div>
  );
}
