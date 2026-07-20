import { Link } from 'react-router-dom';
import GoToArrow from '@/components/UI/Icons/GoToArrow';
import type { QuizCardProps } from '@/types/quizz';
import QuizCategories from './QuizCategories';
import QuizStats from './QuizStats';
import QuizDifficultyPoints from './QuizDifficultyPoints';

export default function QuizCard({ quiz, variant = 'default' }: QuizCardProps) {
  const isFlat = variant === 'flat';

  return (
    <Link
      to={`/quizzes/${quiz.id}`}
      className={`group mx-auto block h-128 w-full max-w-98.5 cursor-pointer rounded-xl px-6 py-8 text-inherit no-underline transition-all duration-300 hover:border hover:border-black ${
        isFlat
          ? 'bg-quiz-card-border border-auth-border border'
          : 'shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814]'
      }`}
    >
      <div className="flex h-60 w-full items-center justify-center overflow-hidden rounded-lg bg-amber-50">
        {quiz.photoUrl ? (
          <img
            src={quiz.photoUrl}
            alt={quiz.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          'photo'
        )}
      </div>

      <QuizCategories categories={quiz.categories} />

      <div className="mt-3 flex items-center justify-between gap-2">
        <p className="font-inter min-w-0 truncate text-2xl leading-8 font-semibold">
          {quiz.title}
        </p>
        <div className="flex h-6 w-6 shrink-0 items-center justify-center">
          <div className="hidden group-hover:block">
            <GoToArrow />
          </div>
        </div>
      </div>

      <QuizStats
        isCompleted={quiz.isCompleted}
        completedDate={quiz.completedDate}
        totalTimeMinutes={quiz.totalTimeMinutes}
        totalUsers={quiz.totalUsers}
      />

      <QuizDifficultyPoints
        difficulty={quiz.difficulty}
        isCompleted={quiz.isCompleted}
        pointsEarned={quiz.pointsEarned}
        pointsTotal={quiz.pointsTotal}
      />
    </Link>
  );
}
