import { useParams } from 'react-router-dom';
import { BackButton } from '@/components/Auth';
import { LandingFooter, LandingHeader } from '@/components/Landing';
import { useQuiz } from '@/hooks/useQuiz';
import { useOtherQuizzes } from '@/hooks/useOtherQuizzes';
import QuizHeroSection from '@/components/Quizzes/QuizDetails/QuizHeroSection';
import QuizInstructions from '@/components/Quizzes/QuizDetails/QuizInstructions';
import QuizOtherQuizzesSlider from '@/components/Quizzes/QuizDetails/QuizOtherQuizzesSlider';
import NotFoundPage from './NotFoundPage';

export default function QuizDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { quiz, isLoading, error } = useQuiz(id);
  const { quizzes: sliderQuizzes } = useOtherQuizzes(id);

  if (isLoading) {
    return <p className="py-24 text-center">Loading quiz…</p>;
  }

  if (!quiz || error === 'not_found') {
    return <NotFoundPage />;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <LandingHeader />

      <div className="grow">
        <div className="max-xl1:hidden mx-auto w-full max-w-360 px-24">
          <div className="relative mt-22 ml-8">
            <BackButton />
          </div>
        </div>

        <div className="mx-auto -mt-4 flex w-full max-w-360 flex-wrap items-start justify-between px-24 max-sm:px-6">
          <div className="w-full max-w-203.5">
            <QuizHeroSection quiz={quiz} />
            <QuizInstructions instructions={quiz.instructions} />
          </div>

          <QuizOtherQuizzesSlider quizzes={sliderQuizzes} currentQuiz={quiz} />
        </div>
      </div>

      <div className="bg-auth-border mt-20 h-px w-full"></div>
      <LandingFooter />
    </div>
  );
}
