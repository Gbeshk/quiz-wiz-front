import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import type { Quiz } from '@/types/quizz';

interface QuizApiItem {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  instruction: string | null;
  time: number;
  questions_count: number;
  difficulty: string;
  difficultyColor: string;
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
      name: item.difficulty ?? '',
      color: item.difficultyColor ?? '',
    },
    pointsEarned: item.pointsEarned,
    timesPlayed: item.timesPlayed,
    instructions: item.instruction ?? '',
    questionsCount: item.questions_count,
    myAttempt: null,
    timeTakenSeconds: item.timeTakenSeconds ?? undefined,
  };
}

export function useOtherQuizzes(currentId: string | undefined) {
  const { user, isLoading: isAuthLoading } = useAuth();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthLoading) return;

    let cancelled = false;
    setIsLoading(true);

    api
      .get('/quizzes', { params: { per_page: 12 } })
      .then((res) => {
        if (cancelled) return;
        const mapped: Quiz[] = res.data.data
          .map(mapQuiz)
          .filter((q: Quiz) => q.id !== currentId);
        setQuizzes([...mapped, ...mapped]);
      })
      .catch((err) => {
        console.error('Failed to load other quizzes:', err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [currentId, user?.id, isAuthLoading]);

  return { quizzes, isLoading };
}
