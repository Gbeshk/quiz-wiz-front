import QuizCard from '@/components/Quizzes/QuizCard';
import type { Quiz } from '@/types/quizz';

interface QuizGridProps {
  quizzes: Quiz[];
}

export default function QuizGrid({ quizzes }: QuizGridProps) {
  return (
    <div className="mt-11.5 grid w-full grid-cols-1 justify-items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}
