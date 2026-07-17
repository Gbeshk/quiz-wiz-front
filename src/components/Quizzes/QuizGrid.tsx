import QuizCard from '@/components/Quizzes/QuizCard';
import type { Quiz } from '@/types/quizz';

interface QuizGridProps {
  quizzes: Quiz[];
}

export default function QuizGrid({ quizzes }: QuizGridProps) {
  return (
    <div className="w-full mt-11.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-start">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}
