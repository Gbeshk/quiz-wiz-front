import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

export interface Difficulty {
  name: string;
  color: string;
}

export function useDifficulties() {
  const [difficulties, setDifficulties] = useState<Difficulty[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    api
      .get('/difficulties')
      .then((res) => {
        if (cancelled) return;
        const mapped = res.data.data.map(
          (d: { name: string; color: string }) => ({
            name: d.name,
            color: d.color,
          }),
        );
        setDifficulties(mapped);
      })
      .catch((err) => {
        console.error('Failed to load difficulties:', err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { difficulties, isLoading };
}
