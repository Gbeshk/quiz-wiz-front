import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useQuiz } from '@/hooks/useQuiz';
import QuizProgressHeader from '@/components/Quizzes/StartQuiz/QuizProgressHeader';
import QuizTitleSection from '@/components/Quizzes/StartQuiz/QuizTitleSection';
import QuestionsList from '@/components/Quizzes/StartQuiz/QuestionsList';
import TimerCard from '@/components/Quizzes/StartQuiz/TimerCard';
import ResultModal from '@/components/Quizzes/StartQuiz/ResultModal';
import { useElementVisibility } from '@/hooks/useElementVisibility';
import { formatTime } from '@/utils/quizTime';
import { useCountdown } from '@/hooks/useCountdown';
import NotFoundPage from './NotFoundPage';
import { submitQuizAttempt } from '@/api/quizAttempts';

export default function StartQuizPage() {
  const { id } = useParams();
  const { quiz, isLoading, error } = useQuiz(id);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number[]>
  >({});
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [gradedResult, setGradedResult] = useState<{
    pointsEarned: number;
    correctCount: number;
    mistakesCount: number;
  } | null>(null);

  const { ref: titleRef, isVisible: isTitleVisible } =
    useElementVisibility<HTMLHeadingElement>();

  const totalSeconds = (quiz?.totalTimeMinutes ?? 5) * 60;
  const secondsLeft = useCountdown(
    totalSeconds,
    isResultModalOpen || !!quiz?.myAttempt,
    () => setIsResultModalOpen(true),
  );

  const formattedTime = formatTime(secondsLeft);

  if (isLoading) {
    return <div className="mx-auto flex w-360 flex-col px-24">Loading...</div>;
  }

  if (error || !quiz) {
    return <NotFoundPage />;
  }

  if (quiz.myAttempt) {
    return (
      <div className="mx-auto flex w-360 flex-col px-24">
        <QuizTitleSection ref={titleRef} quiz={quiz} />
        <ResultModal
          quiz={quiz}
          timeTaken={formatTime(quiz.myAttempt.timeTakenSeconds)}
          correctCount={0}
          mistakesCount={0}
        />
      </div>
    );
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

  const timeTakenSeconds = totalSeconds - secondsLeft;
  const timeTaken = formatTime(timeTakenSeconds);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const answers = quiz.questions.map((q) => ({
        question_id: Number(q.id),
        answer_ids: (selectedAnswers[q.id] ?? []).map(
          (idx) => q.answerIds[idx],
        ),
      }));

      const result = await submitQuizAttempt(
        quiz.id,
        timeTakenSeconds,
        answers,
      );
      setGradedResult(result);
      setIsResultModalOpen(true);
    } catch (err) {
      setSubmitError('Could not submit your result. Please try again.');
      console.error('Failed to submit attempt:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex w-360 flex-col px-24">
      <QuizProgressHeader
        quiz={quiz}
        isTitleVisible={isTitleVisible}
        progressPercent={progressPercent}
      />
      <div className="h-18" />
      <QuizTitleSection ref={titleRef} quiz={quiz} />
      <div className="mx-auto mt-23.5 flex w-full justify-between">
        <QuestionsList
          questions={quiz.questions}
          selectedAnswers={selectedAnswers}
          onSelectOption={handleSelectOption}
        />
        <TimerCard
          isSubmitting={isSubmitting}
          formattedTime={formattedTime}
          onSubmit={handleSubmit}
        />
      </div>
      {submitError && (
        <p className="mt-4 text-center text-sm text-red-500">{submitError}</p>
      )}
      {isResultModalOpen && gradedResult && (
        <ResultModal
          quiz={quiz}
          timeTaken={timeTaken}
          correctCount={gradedResult.correctCount}
          mistakesCount={gradedResult.mistakesCount}
        />
      )}
    </div>
  );
}
