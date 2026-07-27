import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

async function fetchCategories(): Promise<string[]> {
  const res = await api.get('/categories');
  return res.data.data.map((c: { name: string }) => c.name);
}

export function useCategories() {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  return { categories, isLoading };
}
