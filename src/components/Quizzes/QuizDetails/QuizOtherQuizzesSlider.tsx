import type { QuizOtherQuizzesSliderProps } from '@/types/quizz';
import QuizCard from '@/components/Quizzes/QuizCard';

export default function QuizOtherQuizzesSlider({
  quizzes,
  currentQuiz,
}: QuizOtherQuizzesSliderProps) {
  const sameCategoryQuizzes = quizzes.filter(
    (quiz) =>
      quiz.id !== currentQuiz.id &&
      quiz.categories.some((category) =>
        currentQuiz.categories.includes(category),
      ),
  );

  const loopedQuizzes = [...sameCategoryQuizzes, ...sameCategoryQuizzes];

  return (
    <div className="xl4:w-auto max-xl4:h-auto max-xl4:mt-25 relative h-400 w-full overflow-hidden">
      <p className="max-xl4:inline text-auth-placeholder ml-3 hidden text-base leading-5 font-semibold tracking-normal">
        Similar quizzes
      </p>

      {sameCategoryQuizzes.length === 0 ? (
        <p className="text-auth-placeholder mt-5 ml-3 text-sm">
          No similar quizzes found.
        </p>
      ) : (
        <div className="quiz-slider-track xl4:w-auto max-xl4:mt-5 xl4:flex-col flex w-max flex-row gap-8 p-1">
          {loopedQuizzes.map((quiz, index) => (
            <QuizCard key={`${quiz.id}-${index}`} quiz={quiz} variant="flat" />
          ))}
        </div>
      )}
    </div>
  );
}
