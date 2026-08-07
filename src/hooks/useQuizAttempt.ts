import { useEffect, useState, useRef } from 'react';
import { useCountdown } from '@/hooks/useCountdown';
import { formatTime } from '@/utils/quizTime';
import { submitQuizAttempt } from '@/api/quizAttempts';
import type { Quiz } from '@/types/quizz';
import { useAuth } from '@/context/AuthContext';

interface GradedResult {
  pointsEarned: number;
  correctCount: number;
  mistakesCount: number;
}

export function useQuizAttempt(quiz: Quiz | null | undefined) {
  const { user } = useAuth();
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [gradedResult, setGradedResult] = useState<GradedResult | null>(null);

  const totalSeconds = (quiz?.totalTimeMinutes ?? 5) * 60;

  const timerStorageKey =
    user?.id && quiz?.id ? `quiz_start_time_${user.id}_${quiz.id}` : null;
  const answersStorageKey =
    user?.id && quiz?.id ? `quiz_answers_${user.id}_${quiz.id}` : null;
  const resultStorageKey =
    user?.id && quiz?.id ? `quiz_result_${user.id}_${quiz.id}` : null;

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number[]>
  >(() => {
    if (!answersStorageKey) return {};
    const stored = localStorage.getItem(answersStorageKey);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return {};
      }
    }
    return {};
  });

  useEffect(() => {
    if (!answersStorageKey) return;
    const stored = localStorage.getItem(answersStorageKey);
    if (stored) {
      try {
        setSelectedAnswers(JSON.parse(stored));
      } catch (err) {
        console.error('Failed to parse stored answers:', err);
      }
    }
  }, [answersStorageKey]);

  const [elapsedSeconds, setElapsedSeconds] = useState<number>(() => {
    if (!timerStorageKey) return 0;
    const stored = localStorage.getItem(timerStorageKey);
    if (stored) {
      const startTimestamp = parseInt(stored, 10);
      return Math.min(
        totalSeconds,
        Math.floor((Date.now() - startTimestamp) / 1000),
      );
    }
    return 0;
  });

  useEffect(() => {
    if (!quiz || !user || !timerStorageKey) return;

    let stored = localStorage.getItem(timerStorageKey);
    if (!stored) {
      stored = Date.now().toString();
      localStorage.setItem(timerStorageKey, stored);
    }

    const startTimestamp = parseInt(stored, 10);

    const updateElapsed = () => {
      const now = Date.now();
      const secondsPassed = Math.floor((now - startTimestamp) / 1000);
      setElapsedSeconds(secondsPassed);
    };

    updateElapsed();
    const interval = setInterval(updateElapsed, 1000);

    return () => clearInterval(interval);
  }, [quiz, user, timerStorageKey]);

  const selectedAnswersRef = useRef(selectedAnswers);
  useEffect(() => {
    selectedAnswersRef.current = selectedAnswers;
  }, [selectedAnswers]);

  const clearLocalStorage = () => {
    if (timerStorageKey) localStorage.removeItem(timerStorageKey);
    if (answersStorageKey) localStorage.removeItem(answersStorageKey);
  };

  const executeSubmit = async (isAutoSubmit = false) => {
    if (!quiz || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setIsResultModalOpen(true);
    try {
      const currentAnswers = selectedAnswersRef.current;
      const answers = quiz.questions.map((q) => ({
        question_id: Number(q.id),
        answer_ids: (currentAnswers[q.id] ?? []).map((idx) => q.answerIds[idx]),
      }));

      const finalTimeTaken = isAutoSubmit ? totalSeconds : timeTakenSeconds;

      const result = await submitQuizAttempt(quiz.id, finalTimeTaken, answers);
      clearLocalStorage();

      if (resultStorageKey) {
        localStorage.setItem(resultStorageKey, JSON.stringify(result));
      }

      setGradedResult(result);
    } catch (err) {
      setSubmitError('Could not submit your result. Please try again.');
      setIsResultModalOpen(false);
      console.error('Failed to submit attempt:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleTimeOut = () => {
    executeSubmit(true);
  };

  const rawSecondsLeft = Math.max(0, totalSeconds - elapsedSeconds);
  const secondsLeft = useCountdown(
    rawSecondsLeft,
    isResultModalOpen || !!quiz?.myAttempt,
    handleTimeOut,
  );

  const formattedTime = formatTime(secondsLeft);
  const timeTakenSeconds = Math.min(totalSeconds, totalSeconds - secondsLeft);
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

      let updated: number[];
      if (isMultiple) {
        updated = isAlreadySelected
          ? current.filter((i) => i !== optionIndex)
          : [...current, optionIndex];
      } else {
        updated = isAlreadySelected ? [] : [optionIndex];
      }

      const newAnswers = { ...prev, [questionId]: updated };
      if (answersStorageKey) {
        localStorage.setItem(answersStorageKey, JSON.stringify(newAnswers));
      }
      return newAnswers;
    });
  };

  const handleSubmit = async () => {
    if (!quiz) return;

    if (!allAnswered) {
      setSubmitError('Please answer all questions before submitting.');
      return;
    }

    await executeSubmit(false);
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
