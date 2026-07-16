import { useMemo } from 'react';
import { MOCK_QUIZZES } from '@/constants/mockQuizzes';
import type { Quiz } from '@/types/quizz';

export function useOtherQuizzes(currentId: string | undefined): Quiz[] {
  return useMemo(() => {
    const otherQuizzes = MOCK_QUIZZES.filter((item) => item.id !== currentId);
    return [...otherQuizzes, ...otherQuizzes];
  }, [currentId]);
}
