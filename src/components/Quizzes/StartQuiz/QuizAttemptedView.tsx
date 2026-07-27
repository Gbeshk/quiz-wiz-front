import QuizTitleSection from '@/components/Quizzes/StartQuiz/QuizTitleSection';
import ResultModal from '@/components/Quizzes/StartQuiz/ResultModal';
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
  return (
    <div className="mx-auto flex w-360 flex-col px-24">
      <QuizTitleSection ref={titleRef} quiz={quiz} />
      <ResultModal
        quiz={quiz}
        timeTaken={formatTime(quiz.myAttempt!.timeTakenSeconds)}
        correctCount={0}
        mistakesCount={0}
      />
    </div>
  );
}
