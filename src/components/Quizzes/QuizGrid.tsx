import QuizCard from '@/components/Quizzes/QuizCard';
import type { Quiz } from '@/types/quizz';

interface QuizGridProps {
  quizzes: Quiz[];
}

export default function QuizGrid({ quizzes }: QuizGridProps) {
  return (
    <div className="mx-auto gap-8 w-360 mt-11.5 px-24 flex items-center justify-start flex-wrap">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}
