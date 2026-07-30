import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import type { Difficulty, Quiz } from '@/types/quizz';
import { useAuth } from '@/context/AuthContext';
interface QuizDetailApiItem {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  instruction: string | null;
  time: number;
  difficulty: Difficulty;
  categories: { id: number; name: string }[];
  pointsTotal: number;
  questions: {
    id: number;
    text: string;
    points: number;
    type: 'single' | 'multiple';
    correctAnswersCount: number;
    answers: { id: number; text: string }[];
  }[];
  created_at: string;
  isCompleted: boolean;
  pointsEarned: number;
  timesPlayed: number;
  myAttempt: {
    pointsEarned: number;
    timeTakenSeconds: number;
    completedAt: string;
  } | null;
}

function mapQuizDetail(item: QuizDetailApiItem): Quiz {
  return {
    id: String(item.id),
    title: item.title,
    description: item.description ?? '',
    image: item.image,
    categories: item.categories.map((c) => c.name),
    questions: item.questions.map((q) => ({
      id: String(q.id),
      question: q.text,
      options: q.answers.map((a) => a.text),
      answerIds: q.answers.map((a) => a.id),
      type: q.type,
      correctAnswersCount: q.correctAnswersCount,
      points: q.points,
    })),
    isCompleted: item.isCompleted,
    completedDate: item.myAttempt?.completedAt,
    totalTimeMinutes: item.time,
    totalUsers: 0,
    difficulty: {
      name: item.difficulty.name ?? '',
      color: item.difficulty.color ?? '',
    },
    pointsEarned: item.pointsEarned,
    pointsTotal: item.pointsTotal,
    timesPlayed: item.timesPlayed,
    instructions: item.instruction ?? '',
    questionsCount: item.questions.length,
    myAttempt: item.myAttempt,
  };
}

export function useQuiz(id: string | undefined) {
  const { user, isLoading: isAuthLoading } = useAuth();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || isAuthLoading) {
      if (!id) {
        setQuiz(null);
        setIsLoading(false);
      }
      return;
    }

    let cancelled = false;
    setIsLoading(true);

    api
      .get(`/quizzes/${id}`)
      .then((res) => {
        if (cancelled) return;
        setQuiz(mapQuizDetail(res.data.data));
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        if (err.response?.status !== 404) {
          console.error('Failed to load quiz:', err);
        }
        setQuiz(null);
        setError(err.response?.status === 404 ? 'not_found' : 'error');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id, user?.id, isAuthLoading]);

  return { quiz, isLoading, error };
}
