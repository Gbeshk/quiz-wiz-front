import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

async function fetchCategories() {
  const res = await api.get('/categories');
  return {
    categories: res.data.data.map((c: { name: string }) => c.name),
    total: res.data.meta?.total ?? res.data.data.length,
  };
}

export function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  return {
    categories: data?.categories ?? [],
    total: data?.total ?? 0,
    isLoading,
  };
}
