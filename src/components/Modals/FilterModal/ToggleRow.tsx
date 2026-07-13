import DoneIcon from '@/components/UI/Icons/DoneIcon';

interface ToggleRowProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

export default function ToggleRow({
  label,
  checked,
  onToggle,
}: ToggleRowProps) {
  return (
    <div className="flex items-center mt-4 gap-3">
      <p className="font-inter text-footer-text font-semibold text-sm leading-5">
        {label}
      </p>
      <div
        onClick={onToggle}
        className={`w-4 h-4 rounded-sm flex items-center justify-center cursor-pointer ${
          checked ? 'bg-black' : 'border border-[#D0D5DD]'
        }`}
      >
        {checked && <DoneIcon />}
      </div>
    </div>
  );
}
