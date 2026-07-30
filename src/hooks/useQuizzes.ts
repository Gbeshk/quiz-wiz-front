import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import type { Difficulty, Quiz } from '@/types/quizz';
import { useAuth } from '@/context/AuthContext';

interface QuizApiItem {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  instruction: string | null;
  time: number;
  questions_count: number;
  difficulty: Difficulty;
  categories: { id: number; name: string }[];
  created_at: string;
  pointsTotal: number;
  isCompleted: boolean;
  pointsEarned: number;
  completedDate: string | null;
  timesPlayed: number;
  timeTakenSeconds: number | null;
}

function mapQuiz(item: QuizApiItem): Quiz {
  return {
    id: String(item.id),
    title: item.title,
    description: item.description ?? '',
    image: item.image,
    pointsTotal: item.pointsTotal,
    categories: item.categories.map((c) => c.name),
    questions: [],
    completedDate: item.completedDate ?? undefined,
    isCompleted: item.isCompleted,
    totalTimeMinutes: item.time,
    totalUsers: 0,
    difficulty: {
      name: item.difficulty.name ?? '',
      color: item.difficulty.color ?? '',
    },
    pointsEarned: item.pointsEarned,
    timesPlayed: item.timesPlayed,
    instructions: item.instruction ?? '',
    timeTakenSeconds: item.timeTakenSeconds ?? undefined,
    questionsCount: item.questions_count,
    myAttempt: null,
  };
}
export function useQuizzes() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthLoading) return;

    let cancelled = false;
    setIsLoading(true);

    api
      .get('/quizzes', { params: { per_page: 100 } })
      .then((res) => {
        if (cancelled) return;
        setQuizzes(res.data.data.map(mapQuiz));
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to load quizzes:', err);
        setError('Could not load quizzes right now.');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [user?.id, isAuthLoading]);

  return { quizzes, isLoading, error };
}
