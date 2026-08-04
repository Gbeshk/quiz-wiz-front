import CloseIcon from '@/components/UI/Icons/CloseIcon';

interface QuizCloseButtonProps {
  onClose: () => void;
}

export default function QuizCloseButton({ onClose }: QuizCloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className="flex h-6 w-6 cursor-pointer items-center justify-center justify-self-end border-none bg-transparent p-0 outline-none"
    >
      <CloseIcon className="h-full w-full" />
    </button>
  );
}
