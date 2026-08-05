import { cn } from '@/lib';
import type { Quiz } from '@/types/quizz';
import QuizProgressBar from './QuizProgressBar';
import QuizCloseButton from './QuizCloseButton';
import QuizMobileTitleCard from './QuizMobileTitleCard';
import QuizMobileQuestionsCard from './QuizMobileQuestionsCard';
import QuizMobileSubmitButton from './QuizMobileSubmitButton';
import QuizMobileTimerCard from './QuizMobileTimerCard';

interface QuizMobileHeaderProps {
  quiz: Quiz;
  isTitleVisible: boolean;
  progressPercent: number;
  answeredCount: number;
  totalQuestions: number;
  formattedTime: string;
  onSubmit: () => void;
  isSubmitting: boolean;
  submitError?: string | null;
  onClose: () => void;
}

export default function QuizMobileHeader({
  quiz,
  isTitleVisible,
  progressPercent,
  answeredCount,
  totalQuestions,
  formattedTime,
  onSubmit,
  isSubmitting,
  submitError,
  onClose,
}: QuizMobileHeaderProps) {
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-360 flex-col gap-5 overflow-hidden px-6 transition-all duration-300 ease-in-out lg:hidden',
        isTitleVisible ? 'h-16' : 'h-62',
      )}
    >
      <div className="mt-5 flex h-6 w-full items-center justify-between">
        <QuizProgressBar progressPercent={progressPercent} />
        <QuizCloseButton onClose={onClose} />
      </div>

      {!isTitleVisible && (
        <>
          <div className="bg-auth-border h-thin w-full"></div>

          <div className="flex items-center justify-between">
            <QuizMobileTitleCard quiz={quiz} />
            <QuizMobileQuestionsCard
              answeredCount={answeredCount}
              totalQuestions={totalQuestions}
            />
          </div>

          <div className="flex items-center justify-between">
            <QuizMobileSubmitButton
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
              submitError={submitError}
            />
            <QuizMobileTimerCard formattedTime={formattedTime} />
          </div>
        </>
      )}
    </div>
  );
}
