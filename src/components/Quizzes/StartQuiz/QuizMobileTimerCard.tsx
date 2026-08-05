interface QuizMobileTimerCardProps {
  formattedTime: string;
}

export default function QuizMobileTimerCard({
  formattedTime,
}: QuizMobileTimerCardProps) {
  return (
    <div className="border-auth-border bg-quiz-completed-bg w-mobile-timer flex h-15 flex-col justify-between rounded-lg border px-4 py-3">
      <p className="h-4 truncate text-xs leading-none font-bold tracking-normal">
        Timer
      </p>
      <p className="text-auth-text font-inter leading-1.4 text-lg leading-none font-bold tracking-normal">
        {formattedTime}
      </p>
    </div>
  );
}
