interface QuizProgressBarProps {
  progressPercent: number;
}

export default function QuizProgressBar({
  progressPercent,
}: QuizProgressBarProps) {
  return (
    <div className="bg-footer-line relative h-2 w-80 justify-self-center overflow-hidden rounded-sm">
      <div
        className="bg-progress-bar absolute top-0 left-0 h-full rounded-sm transition-all duration-300"
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  );
}
