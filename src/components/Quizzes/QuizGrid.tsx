import QuizCard from '@/components/Quizzes/QuizCard';
import type { Quiz } from '@/types/quizz';

interface QuizGridProps {
  quizzes: Quiz[];
}

export default function QuizGrid({ quizzes }: QuizGridProps) {
  if (quizzes.length === 0) {
    return (
      <p className="text-auth-placeholder mt-11.5 w-full text-center text-sm">
        No quizzes found.
      </p>
    );
  }

  return (
    <div className="max-xl3:grid-cols-2 max-xl1:grid-cols-1 max-xl3:gap-12 max-xl1:mt-3 mt-11.5 grid w-full grid-cols-3 justify-items-start gap-8">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}
