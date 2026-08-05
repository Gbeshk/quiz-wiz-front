import type { Quiz } from '@/types/quizz';
import QuizDesktopTitleBadge from './QuizDesktopTitleBadge';
import QuizProgressBar from './QuizProgressBar';
import QuizCloseButton from './QuizCloseButton';

interface QuizDesktopHeaderProps {
  quiz: Quiz;
  isTitleVisible: boolean;
  progressPercent: number;
  onClose: () => void;
}

export default function QuizDesktopHeader({
  quiz,
  isTitleVisible,
  progressPercent,
  onClose,
}: QuizDesktopHeaderProps) {
  return (
    <div className="max-xl5:px-24 mx-auto hidden h-18 w-full max-w-360 grid-cols-[1fr_auto_1fr] items-center lg:grid">
      {isTitleVisible ? (
        <div className="h-6 w-6"></div>
      ) : (
        <QuizDesktopTitleBadge quiz={quiz} />
      )}
      <QuizProgressBar progressPercent={progressPercent} />
      <QuizCloseButton onClose={onClose} />
    </div>
  );
}
