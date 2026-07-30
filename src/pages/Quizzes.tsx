import { useSearchParams } from 'react-router-dom';
import { LandingFooter, LandingHeader } from '@/components/Landing';
import CategoryTabs from '@/components/Quizzes/CategoryTabs';
import QuizGrid from '@/components/Quizzes/QuizGrid';
import LoadMoreButton from '@/components/Quizzes/LoadMoreButton';
import { useQuizzes } from '@/hooks/useQuizzes';
import { useLoadMore } from '@/hooks/useLoadMore';
import { useFilteredQuizzes } from '@/hooks/useFilteredQuizzes';

const PAGE_SIZE = 9;

export default function QuizzesPage() {
  const [searchParams] = useSearchParams();
  const { quizzes, isLoading, error } = useQuizzes();
  const filteredQuizzes = useFilteredQuizzes(quizzes, searchParams);
  const { visibleItems, hasMore, isLoadingMore, handleLoadMore } = useLoadMore(
    filteredQuizzes,
    PAGE_SIZE,
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <LandingHeader />

      <main className="max-ssm:px-6 mx-auto flex w-full max-w-360 grow flex-col px-24">
        <CategoryTabs />

        {isLoading && <p className="py-12 text-center">Loading quizzes…</p>}

        {error && !isLoading && (
          <p className="py-12 text-center text-red-500">{error}</p>
        )}

        {!isLoading && !error && (
          <div className="items center flex flex-col">
            <QuizGrid quizzes={visibleItems} />
            {hasMore && (
              <LoadMoreButton
                isLoading={isLoadingMore}
                onClick={handleLoadMore}
              />
            )}
          </div>
        )}
      </main>

      <div className="bg-auth-border mt-17 h-px w-full"></div>
      <LandingFooter />
    </div>
  );
}
