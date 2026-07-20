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
    <div className="flex min-h-screen w-full flex-col bg-white">
      <LandingHeader />

      <main className="mx-auto flex w-full max-w-360 grow flex-col px-24">
        <CategoryTabs />
        <QuizGrid quizzes={visibleItems} />
        {hasMore && (
          <LoadMoreButton isLoading={isLoadingMore} onClick={handleLoadMore} />
        )}
      </main>

      <div className="bg-auth-border mt-17 h-px w-full"></div>
      <LandingFooter />
    </div>
  );
}
