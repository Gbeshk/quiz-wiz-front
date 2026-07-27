import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

export function useCategories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    api
      .get('/categories')
      .then((res) => {
        if (cancelled) return;
        const names = res.data.data.map((c: { name: string }) => c.name);
        setCategories(names);
      })
      .catch((err) => {
        console.error('Failed to load categories:', err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { categories, isLoading };
}
