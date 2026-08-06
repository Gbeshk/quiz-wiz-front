interface QuizMobileQuestionsCardProps {
  answeredCount: number;
  totalQuestions: number;
}

export default function QuizMobileQuestionsCard({
  answeredCount,
  totalQuestions,
}: QuizMobileQuestionsCardProps) {
  return (
    <div className="border-auth-border bg-quiz-completed-bg w-mobile-timer flex h-15 flex-col justify-between rounded-lg border px-4 py-3">
      <p className="h-4 truncate text-xs leading-none font-bold tracking-normal">
        Questions
      </p>
      <p className="text-correct-text text-base leading-none font-bold tracking-normal">
        {answeredCount}/{totalQuestions}
      </p>
    </div>
  );
}
