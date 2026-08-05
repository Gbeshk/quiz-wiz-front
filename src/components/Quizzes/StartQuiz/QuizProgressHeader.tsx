import { useNavigate } from 'react-router-dom';
import type { Quiz } from '@/types/quizz';
import QuizDesktopHeader from './QuizDesktopHeader';
import QuizMobileHeader from './QuizMobileHeader';

interface QuizProgressHeaderProps {
  quiz: Quiz;
  isTitleVisible: boolean;
  progressPercent: number;
  answeredCount: number;
  totalQuestions: number;
  formattedTime: string;
  onSubmit: () => void;
  isSubmitting: boolean;
  submitError?: string | null;
}

export default function QuizProgressHeader({
  quiz,
  isTitleVisible,
  progressPercent,
  answeredCount,
  totalQuestions,
  formattedTime,
  onSubmit,
  isSubmitting,
  submitError,
}: QuizProgressHeaderProps) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`/quizzes/${quiz.id}`);
  };

  return (
    <header className="border-b-header-border-b fixed top-0 left-0 z-50 w-full border-b bg-white shadow-[0px_2px_14px_0px_#00000026]">
      <QuizDesktopHeader
        quiz={quiz}
        isTitleVisible={isTitleVisible}
        progressPercent={progressPercent}
        onClose={handleClose}
      />
      <QuizMobileHeader
        quiz={quiz}
        isTitleVisible={isTitleVisible}
        progressPercent={progressPercent}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        formattedTime={formattedTime}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        submitError={submitError}
        onClose={handleClose}
      />
    </header>
  );
}
