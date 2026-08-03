import type { QuizMetaRowProps } from '@/types/quizz';
import { cn } from '@/lib';
import QuestionsIcon from '@/components/UI/Icons/QuestionsIcon';
import PointsIcon from '@/components/UI/Icons/PointsIcon';
import PlaysIcon from '@/components/UI/Icons/PlaysIcon';
import TimeIcon from '@/components/UI/Icons/TimeIcon';

export default function QuizMetaRow({
  quiz,
  responsive = false,
}: QuizMetaRowProps) {
  return (
    <div
      className={cn(
        'mt-8 flex items-center',
        responsive && 'max-xl1:-ml-2 max-xl1:flex-col max-xl1:items-baseline',
      )}
    >
      <div className="flex items-center">
        <QuestionsIcon />
        <p className="text-auth-placeholder font-inter ml-2 text-sm leading-5 font-semibold tracking-normal">
          {quiz.questions.length} Questions
        </p>
      </div>
      <div
        className={cn(
          'bg-auth-border mx-3 h-3.5 w-px',
          responsive &&
            'max-xl1:mt-3 max-xl1:mb-3 max-xl1:h-thin max-xl1:w-full max-xl1:max-w-98.5',
        )}
      ></div>
      <div className="flex items-center">
        <PointsIcon color="var(--color-auth-placeholder)" />
        <p className="text-auth-placeholder font-inter ml-2 text-sm leading-5 font-semibold tracking-normal">
          {quiz.pointsTotal} Points
        </p>
      </div>
      <div
        className={cn(
          'bg-auth-border mx-3 h-3.5 w-px',
          responsive &&
            'max-xl1:mt-3 max-xl1:mb-3 max-xl1:h-thin max-xl1:w-full max-xl1:max-w-98.5',
        )}
      ></div>
      <div className="flex items-center">
        <PlaysIcon />
        <p className="text-auth-placeholder font-inter ml-2 text-sm leading-5 font-semibold tracking-normal">
          {quiz.timesPlayed} Plays
        </p>
      </div>
      <div
        className={cn(
          'bg-auth-border mx-3 h-3.5 w-px',
          responsive &&
            'max-xl1:mt-3 max-xl1:mb-3 max-xl1:h-px max-xl1:w-full max-xl1:max-w-98.5',
        )}
      ></div>
      <div className="flex items-center">
        <TimeIcon />
        <p className="text-auth-placeholder font-inter ml-2 text-sm leading-5 font-semibold tracking-normal">
          {quiz.totalTimeMinutes} m
        </p>
      </div>
    </div>
  );
}
