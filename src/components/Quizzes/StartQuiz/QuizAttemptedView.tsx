import QuizTitleSection from '@/components/Quizzes/StartQuiz/QuizTitleSection';
import ResultModal from '@/components/Quizzes/StartQuiz/ResultModal';
import { useAuth } from '@/context/AuthContext';
import type { Quiz } from '@/types/quizz';
import { formatTime } from '@/utils/quizTime';
import type { Ref } from 'react';

interface QuizAttemptedViewProps {
  quiz: Quiz;
  titleRef: Ref<HTMLHeadingElement>;
}

export default function QuizAttemptedView({
  quiz,
  titleRef,
}: QuizAttemptedViewProps) {
  const { user } = useAuth();
  const attempt = quiz.myAttempt;
  const timeTakenSeconds = attempt?.timeTakenSeconds ?? 0;

  const resultStorageKey =
    user?.id && quiz?.id ? `quiz_result_${user.id}_${quiz.id}` : null;

  let correctCount = 0;
  let mistakesCount = 0;

  if (resultStorageKey) {
    const stored = localStorage.getItem(resultStorageKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        correctCount = parsed.correctCount ?? 0;
        mistakesCount = parsed.mistakesCount ?? 0;
      } catch (err) {
        console.error('Failed to parse cached quiz result:', err);
      }
    }
  }

  return (
    <div className="mx-auto flex w-360 flex-col px-24">
      <QuizTitleSection ref={titleRef} quiz={quiz} />
      <ResultModal
        quiz={quiz}
        timeTaken={formatTime(timeTakenSeconds)}
        correctCount={correctCount}
        mistakesCount={mistakesCount}
      />
    </div>
  );
}
