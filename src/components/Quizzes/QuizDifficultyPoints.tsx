import DifficultyIcon from '@/components/UI/Icons/DifficultyIcon';
import PointsIcon from '@/components/UI/Icons/PointsIcon';
import type { QuizDifficultyPointsProps } from '@/types/quizz';

export default function QuizDifficultyPoints({
  difficulty,
  difficultyColor,
  isCompleted,
  pointsEarned,
  pointsTotal,
}: QuizDifficultyPointsProps) {
  return (
    <div className="flex items-center gap-5.5">
      <div className="mt-5 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: `${difficultyColor}1A` }}
        >
          <DifficultyIcon style={{ color: difficultyColor }} />
        </div>
        <div>
          <p className="text-footer-text font-inter text-sm leading-5 font-semibold">
            Difficulty level
          </p>
          <p className="text-auth-text font-inter text-sm leading-5 font-normal tracking-normal">
            {difficulty}
          </p>
        </div>
      </div>
      {isCompleted && (
        <div className="mt-5 flex items-center gap-3">
          <div className="bg-listing-points-bg flex h-10 w-10 items-center justify-center rounded-full">
            <PointsIcon />
          </div>
          <div>
            <p className="text-footer-text font-inter text-sm leading-5 font-semibold">
              POINTS
            </p>
            <p className="text-auth-text font-inter text-sm leading-5 font-normal tracking-normal">
              {pointsEarned}/{pointsTotal}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
