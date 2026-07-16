import { useSearchParams } from 'react-router-dom';
import { LandingFooter, LandingHeader } from '@/components/Landing';
import CategoryTabs from '@/components/Quizzes/CategoryTabs';
import QuizGrid from '@/components/Quizzes/QuizGrid';
import LoadMoreButton from '@/components/Quizzes/LoadMoreButton';
import { MOCK_QUIZZES } from '@/constants/mockQuizzes';
import { useLoadMore } from '@/hooks/useLoadMore';
import { useFilteredQuizzes } from '@/hooks/useFilteredQuizzes';

const PAGE_SIZE = 9;

export default function QuizzesPage() {
  const [searchParams] = useSearchParams();
  const filteredQuizzes = useFilteredQuizzes(MOCK_QUIZZES, searchParams);
  const { visibleItems, hasMore, isLoadingMore, handleLoadMore } = useLoadMore(
    filteredQuizzes,
    PAGE_SIZE,
  );

  return (
    <div className="w-full flex mx-auto flex-col">
      <LandingHeader />
      <CategoryTabs />
      <QuizGrid quizzes={visibleItems} />
      {hasMore && (
        <LoadMoreButton isLoading={isLoadingMore} onClick={handleLoadMore} />
      )}
      <div className="mt-17 bg-auth-border h-px w-full"></div>
      <LandingFooter />
    </div>
  );
}
