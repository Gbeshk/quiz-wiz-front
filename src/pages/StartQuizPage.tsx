import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { MOCK_QUIZZES } from '@/constants/mockQuizzes';
import QuizProgressHeader from '@/components/Quizzes/StartQuiz/QuizProgressHeader';
import QuizTitleSection from '@/components/Quizzes/StartQuiz/QuizTitleSection';
import QuestionsList from '@/components/Quizzes/StartQuiz/QuestionsList';
import TimerCard from '@/components/Quizzes/StartQuiz/TimerCard';
import ResultModal from '@/components/Quizzes/StartQuiz/ResultModal';
import { useElementVisibility } from '@/hooks/useElementVisibility';
import { useInitialFixedPosition } from '@/hooks/useInitialFixedPosition';
import { formatTime } from '@/utils/quizTime';
import { isAnswerCorrect } from '@/utils/quizAnswers';
import { useCountdown } from '@/hooks/useCountdown';
import NotFoundPage from './NotFoundPage';

export default function StartQuizPage() {
  const { id } = useParams();

  const quiz = useMemo(() => MOCK_QUIZZES.find((quiz) => quiz.id === id), [id]);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number[]>
  >({});

  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const { ref: titleRef, isVisible: isTitleVisible } =
    useElementVisibility<HTMLHeadingElement>();
  const { ref: timerCardRef, position: timerFixedPos } =
    useInitialFixedPosition<HTMLDivElement>();

  const totalSeconds = (quiz?.totalTimeMinutes ?? 5) * 60;
  const secondsLeft = useCountdown(totalSeconds, isResultModalOpen, () =>
    setIsResultModalOpen(true),
  );

  const formattedTime = formatTime(secondsLeft);

  if (!quiz) {
    return <NotFoundPage />;
  }
  const answeredCount = quiz.questions.filter(
    (q) => (selectedAnswers[q.id]?.length ?? 0) > 0,
  ).length;
  const progressPercent = (answeredCount / quiz.questions.length) * 100;

  const handleSelectOption = (
    questionId: string,
    optionIndex: number,
    isMultiple: boolean,
  ) => {
    setSelectedAnswers((prev) => {
      const current = prev[questionId] ?? [];
      const isAlreadySelected = current.includes(optionIndex);

      if (isMultiple) {
        const updated = isAlreadySelected
          ? current.filter((i) => i !== optionIndex)
          : [...current, optionIndex];
        return { ...prev, [questionId]: updated };
      }

      const updated = isAlreadySelected ? [] : [optionIndex];
      return { ...prev, [questionId]: updated };
    });
  };

  const correctCount = quiz.questions.filter((q) =>
    isAnswerCorrect(q, selectedAnswers[q.id] ?? []),
  ).length;
  const mistakesCount = quiz.questions.length - correctCount;
  const timeTaken = formatTime(totalSeconds - secondsLeft);

  const handleSubmit = () => {
    setIsResultModalOpen(true);
  };

  return (
    <div className="w-360 px-24 flex mx-auto flex-col">
      <QuizProgressHeader
        quiz={quiz}
        isTitleVisible={isTitleVisible}
        progressPercent={progressPercent}
      />

      <div className="h-18" />

      <QuizTitleSection ref={titleRef} quiz={quiz} />

      <div className="w-full flex justify-between mx-auto mt-23.5">
        <QuestionsList
          questions={quiz.questions}
          selectedAnswers={selectedAnswers}
          onSelectOption={handleSelectOption}
        />

        <TimerCard
          ref={timerCardRef}
          formattedTime={formattedTime}
          fixedPosition={timerFixedPos}
          onSubmit={handleSubmit}
        />
      </div>
      {isResultModalOpen && (
        <ResultModal
          quiz={quiz}
          timeTaken={timeTaken}
          correctCount={correctCount}
          mistakesCount={mistakesCount}
        />
      )}
    </div>
  );
}
