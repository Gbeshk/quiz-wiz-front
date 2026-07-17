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
      className={`block rounded-xl w-full max-w-98.5 mx-auto group h-128 px-6 py-8 hover:border hover:border-black cursor-pointer text-inherit no-underline transition-all duration-300 ${
        isFlat
          ? 'bg-quiz-card-border border border-auth-border'
          : 'shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814]'
      }`}
    >
      <div className="w-full flex items-center justify-center bg-amber-50 h-60 overflow-hidden rounded-lg">
        {quiz.photoUrl ? (
          <img
            src={quiz.photoUrl}
            alt={quiz.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          'photo'
        )}
      </div>

      <QuizCategories categories={quiz.categories} />

      <div className="flex items-center justify-between mt-3 gap-2">
        <p className="font-inter font-semibold text-2xl leading-8 truncate min-w-0">
          {quiz.title}
        </p>
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
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
