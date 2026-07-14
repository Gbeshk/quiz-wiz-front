import { useState } from 'react';

export function useLoadMore<T>(items: T[], pageSize: number) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setVisibleCount((prev) => prev + pageSize);
    setIsLoadingMore(false);
  };

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return { visibleItems, hasMore, isLoadingMore, handleLoadMore };
}
