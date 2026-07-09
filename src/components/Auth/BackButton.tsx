import Arrow from '../UI/Icons/Arrow';

interface BackButtonProps {
  onClick: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <div
      onClick={onClick}
      className="absolute -top-16 -left-8 cursor-pointer flex items-center gap-2 h-4"
    >
      <Arrow />
      <p className="font-inter text-[#667085] font-medium text-sm">Back</p>
    </div>
  );
}
