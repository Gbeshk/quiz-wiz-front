import { useParams } from 'react-router-dom';
import { BackButton } from '@/components/Auth';
import { LandingFooter, LandingHeader } from '@/components/Landing';
import { MOCK_QUIZZES } from '@/constants/mockQuizzes';
import { useOtherQuizzes } from '@/hooks/useOtherQuizzes';
import QuizHeroSection from '@/components/Quizzes/QuizDetails/QuizHeroSection';
import QuizInstructions from '@/components/Quizzes/QuizDetails/QuizInstructions';
import QuizOtherQuizzesSlider from '@/components/Quizzes/QuizDetails/QuizOtherQuizzesSlider';
import NotFoundPage from './NotFoundPage';

export default function QuizDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const quiz = MOCK_QUIZZES.find((item) => item.id === id);
  const sliderQuizzes = useOtherQuizzes(id);
  if (!quiz) {
    return <NotFoundPage />;
  }
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <LandingHeader />

      <div className="grow">
        <div className="mx-auto w-full max-w-360 px-24">
          <div className="relative mt-22 ml-8">
            <BackButton />
          </div>
        </div>

        <div className="mx-auto -mt-4 flex w-full max-w-360 items-start justify-between px-24">
          <div className="sticky top-1 self-start">
            <QuizHeroSection quiz={quiz} />
            <QuizInstructions instructions={quiz.instructions} />
          </div>

          <QuizOtherQuizzesSlider quizzes={sliderQuizzes} />
        </div>
      </div>

      <div className="bg-auth-border mt-20 h-px w-full"></div>
      <LandingFooter />
    </div>
  );
}
