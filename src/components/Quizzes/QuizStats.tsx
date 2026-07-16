import { cn } from '@/lib';
import SortCheckIcon from '@/components/UI/Icons/SortCheckIcon';
import NotCompletedIcon from '../UI/Icons/NotCompletedIcon';
import type { QuizStatsProps } from '@/types/quizz';

export default function QuizStats({
  isCompleted,
  completedDate,
  totalTimeMinutes,
  totalUsers,
}: QuizStatsProps) {
  return (
    <div className="flex items-center mt-5 gap-5.5">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'h-10 w-10 rounded-full flex items-center justify-center',
            isCompleted ? 'bg-completed-bg' : 'bg-quiz-completed-bg',
          )}
        >
          {isCompleted ? <SortCheckIcon /> : <NotCompletedIcon />}
        </div>
        <div>
          <p className="text-footer-text font-inter font-semibold text-sm leading-5 whitespace-nowrap">
            {isCompleted ? 'Completed' : 'Not completed'}
          </p>
          <p
            className={cn(
              'font-inter font-normal text-sm leading-5 tracking-normal whitespace-nowrap',
              isCompleted ? 'text-auth-text' : 'text-not-completed-quiz-text',
            )}
          >
            {isCompleted ? completedDate : 'Date, Time'}
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
            isCompleted ? 'text-auth-text' : 'text-not-completed-quiz-text',
          )}
        >
          {isCompleted ? `${totalTimeMinutes} Minute` : 'N/A'}
        </p>
      </div>
      <div>
        <p className="text-footer-text font-inter font-semibold text-sm leading-5 whitespace-nowrap">
          Total users
        </p>
        <p className="text-auth-text font-inter font-normal text-sm leading-5 tracking-normal whitespace-nowrap">
          {totalUsers}
        </p>
      </div>
    </div>
  );
}
