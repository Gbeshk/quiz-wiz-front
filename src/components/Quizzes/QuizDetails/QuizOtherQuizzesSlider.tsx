import type { QuizOtherQuizzesSliderProps } from '@/types/quizz';
import QuizCard from '@/components/Quizzes/QuizCard';

export default function QuizOtherQuizzesSlider({
  quizzes,
}: QuizOtherQuizzesSliderProps) {
  return (
    <div className="h-400 overflow-hidden relative">
      <style>{`
        @keyframes quiz-slider-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
      `}</style>
      <div
        className="flex flex-col gap-8 p-1"
        style={{ animation: 'quiz-slider-scroll 100s linear infinite' }}
      >
        {quizzes.map((quiz, index) => (
          <QuizCard key={`${quiz.id}-${index}`} quiz={quiz} variant="flat" />
        ))}
      </div>
    </div>
  );
}
