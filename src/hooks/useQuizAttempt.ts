import { useEffect, useState } from 'react';
import { useCountdown } from '@/hooks/useCountdown';
import { formatTime } from '@/utils/quizTime';
import { submitQuizAttempt } from '@/api/quizAttempts';
import type { Quiz } from '@/types/quizz';

interface GradedResult {
  pointsEarned: number;
  correctCount: number;
  mistakesCount: number;
}

export function useQuizAttempt(quiz: Quiz | null | undefined) {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number[]>
  >({});
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [gradedResult, setGradedResult] = useState<GradedResult | null>(null);

  const totalSeconds = (quiz?.totalTimeMinutes ?? 5) * 60;
  const secondsLeft = useCountdown(
    totalSeconds,
    isResultModalOpen || !!quiz?.myAttempt,
    () => setIsResultModalOpen(true),
  );

  const formattedTime = formatTime(secondsLeft);
  const timeTakenSeconds = totalSeconds - secondsLeft;
  const timeTaken = formatTime(timeTakenSeconds);

  const answeredCount = quiz
    ? quiz.questions.filter((q) => (selectedAnswers[q.id]?.length ?? 0) > 0)
        .length
    : 0;
  const progressPercent = quiz
    ? (answeredCount / quiz.questions.length) * 100
    : 0;
  const allAnswered = quiz ? answeredCount === quiz.questions.length : false;

  useEffect(() => {
    if (allAnswered && submitError) {
      setSubmitError(null);
    }
  }, [allAnswered, submitError]);

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

  const handleSubmit = async () => {
    if (!quiz) return;

    if (!allAnswered) {
      setSubmitError('Please answer all questions before submitting.');
      return;
    }

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

  return {
    selectedAnswers,
    handleSelectOption,
    progressPercent,
    allAnswered,
    formattedTime,
    timeTaken,
    isSubmitting,
    submitError,
    isResultModalOpen,
    gradedResult,
    handleSubmit,
  };
}
