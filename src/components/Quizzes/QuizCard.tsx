import { cn } from '@/lib';
import {
  DIFFICULTY_ICON_BG,
  DIFFICULTY_ICON_COLOR,
} from '@/constants/difficulty';
import DifficultyIcon from '@/components/UI/Icons/DifficultyIcon';
import GoToArrow from '@/components/UI/Icons/GoToArrow';
import PointsIcon from '@/components/UI/Icons/PointsIcon';
import SortCheckIcon from '@/components/UI/Icons/SortCheckIcon';
import type { QuizCardProps } from '@/types/quizz';
import NotCompletedIcon from '../UI/Icons/NotCompletedIcon';

export default function QuizCard({ quiz }: QuizCardProps) {
  const difficultyBg =
    DIFFICULTY_ICON_BG[quiz.difficulty] ?? 'bg-listing-page-middle-dif-bg';
  const difficultyColor =
    DIFFICULTY_ICON_COLOR[quiz.difficulty] ?? 'text-middle-text';

  return (
    <div className="shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814] rounded-xl w-98.5 group h-128 px-6 py-8 hover:border hover:border-black cursor-pointer">
      <div className="w-full flex items-center justify-center bg-amber-50 h-60">
        {quiz.photoUrl ? (
          <img
            src={quiz.photoUrl}
            alt={quiz.title}
            className="w-full h-full object-cover"
          />
        ) : (
          'photo'
        )}
      </div>

      <div className="mt-8 flex items-center gap-3">
        {quiz.categories.map((category, index) => (
          <div key={category} className="flex items-center gap-3">
            <p className="font-inter font-semibold text-sm leading-5 text-auth-link">
              {category}
            </p>
            {index < quiz.categories.length - 1 && (
              <div className="h-2 w-2 rounded-full bg-auth-border" />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-3 gap-2">
        <p className="font-inter font-semibold text-2xl leading-8 truncate min-w-0">
          {quiz.title}
        </p>
        <div className="hidden group-hover:inline">
          <GoToArrow />
        </div>
      </div>

      <div className="flex items-center mt-5 gap-5.5">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'h-10 w-10 rounded-full flex items-center justify-center',
              quiz.isCompleted ? 'bg-completed-bg' : 'bg-quiz-completed-bg',
            )}
          >
            {quiz.isCompleted ? <SortCheckIcon /> : <NotCompletedIcon />}
          </div>
          <div>
            <p className="text-footer-text font-inter font-semibold text-sm leading-5 whitespace-nowrap">
              {quiz.isCompleted ? 'Completed' : 'Not completed'}
            </p>
            <p
              className={cn(
                'font-inter font-normal text-sm leading-5 tracking-normal whitespace-nowrap',
                quiz.isCompleted
                  ? 'text-auth-text'
                  : 'text-not-completed-quiz-text',
              )}
            >
              {quiz.isCompleted ? quiz.completedDate : 'Date, Time'}
            </p>
          </div>
        </div>
        <div>
          <p className="text-footer-text font-inter font-semibold text-sm leading-5 whitespace-nowrap">
            Total time
          </p>
          <p
            className={cn(
              'font-inter font-normal text-sm leading-5 tracking-normal whitespace-nowrap',
              quiz.isCompleted
                ? 'text-auth-text'
                : 'text-not-completed-quiz-text',
            )}
          >
            {quiz.isCompleted ? `${quiz.totalTimeMinutes} Minute` : 'N/A'}
          </p>
        </div>
        <div>
          <p className="text-footer-text font-inter font-semibold text-sm leading-5 whitespace-nowrap">
            Total users
          </p>
          <p className="text-auth-text font-inter font-normal text-sm leading-5 tracking-normal whitespace-nowrap">
            {quiz.totalUsers}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5.5">
        <div className="flex items-center gap-3 mt-5">
          <div
            className={cn(
              'h-10 w-10 rounded-full flex items-center justify-center',
              difficultyBg,
            )}
          >
            <DifficultyIcon className={difficultyColor} />
          </div>
          <div>
            <p className="text-footer-text font-inter font-semibold text-sm leading-5">
              Difficulty level
            </p>
            <p className="text-auth-text font-inter font-normal text-sm leading-5 tracking-normal">
              {quiz.difficulty}
            </p>
          </div>
        </div>
        {quiz.isCompleted && (
          <div className="flex items-center gap-3 mt-5">
            <div className="h-10 w-10 rounded-full bg-listing-points-bg flex items-center justify-center">
              <PointsIcon />
            </div>
            <div>
              <p className="text-footer-text font-inter font-semibold text-sm leading-5">
                POINTS
              </p>
              <p className="text-auth-text font-inter font-normal text-sm leading-5 tracking-normal">
                {quiz.pointsEarned}/{quiz.pointsTotal}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
