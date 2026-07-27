import { cn } from '@/lib';
import SortCheckIcon from '@/components/UI/Icons/SortCheckIcon';
import NotCompletedIcon from '@/components/UI/Icons/NotCompletedIcon';
import { formatDate, formatTime } from '@/utils/quizTime';
import type { QuizStatsProps } from '@/types/quizz';

export default function QuizStats({
  isCompleted,
  completedDate,
  timeTakenSeconds,
  totalUsers,
}: QuizStatsProps) {
  return (
    <div className="mt-5 flex items-center gap-5.5">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full',
            isCompleted ? 'bg-completed-bg' : 'bg-quiz-completed-bg',
          )}
        >
          {isCompleted ? <SortCheckIcon /> : <NotCompletedIcon />}
        </div>
        <div>
          <p className="text-footer-text font-inter text-sm leading-5 font-semibold whitespace-nowrap">
            {isCompleted ? 'Completed' : 'Not completed'}
          </p>
          <p
            className={cn(
              'font-inter text-sm leading-5 font-normal tracking-normal whitespace-nowrap',
              isCompleted ? 'text-auth-text' : 'text-not-completed-quiz-text',
            )}
          >
            {isCompleted && completedDate
              ? formatDate(completedDate)
              : 'Date, Time'}
          </p>
        </div>
      </div>
      <div>
        <p className="text-footer-text font-inter text-sm leading-5 font-semibold whitespace-nowrap">
          Total time
        </p>
        <p
          className={cn(
            'font-inter text-sm leading-5 font-normal tracking-normal whitespace-nowrap',
            isCompleted ? 'text-auth-text' : 'text-not-completed-quiz-text',
          )}
        >
          {isCompleted && timeTakenSeconds !== undefined
            ? formatTime(timeTakenSeconds)
            : 'N/A'}
        </p>
      </div>
      <div>
        <p className="text-footer-text font-inter text-sm leading-5 font-semibold whitespace-nowrap">
          Total users
        </p>
        <p className="text-auth-text font-inter text-sm leading-5 font-normal tracking-normal whitespace-nowrap">
          {totalUsers}
        </p>
      </div>
    </div>
  );
}
