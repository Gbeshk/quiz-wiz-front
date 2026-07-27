import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { Difficulty } from '@/types/quizz';

async function fetchDifficulties(): Promise<Difficulty[]> {
  const res = await api.get('/difficulties');
  return res.data.data.map((d: { name: string; color: string }) => ({
    name: d.name,
    color: d.color,
  }));
}

export function useDifficulties() {
  const { data: difficulties = [], isLoading } = useQuery({
    queryKey: ['difficulties'],
    queryFn: fetchDifficulties,
  });

  return { difficulties, isLoading };
}
