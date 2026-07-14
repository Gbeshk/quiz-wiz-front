import { cn } from '@/lib';
import {
  DIFFICULTY_ICON_BG,
  DIFFICULTY_ICON_COLOR,
} from '@/constants/difficulty';
import DifficultyIcon from '@/components/UI/Icons/DifficultyIcon';
import PointsIcon from '@/components/UI/Icons/PointsIcon';
import type { QuizDifficultyPointsProps } from '@/types/quizz';

export default function QuizDifficultyPoints({
  difficulty,
  isCompleted,
  pointsEarned,
  pointsTotal,
}: QuizDifficultyPointsProps) {
  const difficultyBg =
    DIFFICULTY_ICON_BG[difficulty] ?? 'bg-listing-page-middle-dif-bg';
  const difficultyColor =
    DIFFICULTY_ICON_COLOR[difficulty] ?? 'text-middle-text';

  return (
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
            {difficulty}
          </p>
        </div>
      </div>
      {isCompleted && (
        <div className="flex items-center gap-3 mt-5">
          <div className="h-10 w-10 rounded-full bg-listing-points-bg flex items-center justify-center">
            <PointsIcon />
          </div>
          <div>
            <p className="text-footer-text font-inter font-semibold text-sm leading-5">
              POINTS
            </p>
            <p className="text-auth-text font-inter font-normal text-sm leading-5 tracking-normal">
              {pointsEarned}/{pointsTotal}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
