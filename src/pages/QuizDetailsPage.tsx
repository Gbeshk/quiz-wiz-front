import { useParams } from 'react-router-dom';
import { BackButton } from '@/components/Auth';
import { LandingFooter, LandingHeader } from '@/components/Landing';
import { MOCK_QUIZZES } from '@/constants/mockQuizzes';
import { useOtherQuizzes } from '@/hooks/useOtherQuizzes';
import QuizHeroSection from '@/components/Quizzes/QuizDetails/QuizHeroSection';
import QuizInstructions from '@/components/Quizzes/QuizDetails/QuizInstructions';
import QuizOtherQuizzesSlider from '@/components/Quizzes/QuizDetails/QuizOtherQuizzesSlider';
import QuizNotFound from '@/components/Quizzes/QuizDetails/QuizNotFound';

export default function QuizDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const quiz = MOCK_QUIZZES.find((item) => item.id === id);
  const sliderQuizzes = useOtherQuizzes(id);

  if (!quiz) {
    return <QuizNotFound />;
  }

  return (
    <div className="w-full flex mx-auto flex-col min-h-screen">
      <LandingHeader />

      <div className="w-360 mx-auto px-24">
        <div className="relative ml-8 mt-22">
          <BackButton />
        </div>
      </div>

      <div className="w-360 mx-auto px-24 -mt-4 flex justify-between">
        <div>
          <QuizHeroSection quiz={quiz} />
          <QuizInstructions instructions={quiz.instructions} />
        </div>

        <QuizOtherQuizzesSlider quizzes={sliderQuizzes} />
      </div>

      <div className="w-full h-px bg-auth-border mt-20"></div>
      <LandingFooter />
    </div>
  );
}
