import type { QuizMetaRowProps } from '@/types/quizz';
import QuestionsIcon from '@/components/UI/Icons/QuestionsIcon';
import PointsIcon from '@/components/UI/Icons/PointsIcon';
import PlaysIcon from '@/components/UI/Icons/PlaysIcon';
import TimeIcon from '@/components/UI/Icons/TimeIcon';

export default function QuizMetaRow({ quiz }: QuizMetaRowProps) {
  return (
    <div className="mt-8 flex items-center">
      <QuestionsIcon />
      <p className="text-auth-placeholder font-inter ml-2 text-sm leading-5 font-semibold tracking-normal">
        {quiz.questions.length} Question
      </p>
      <div className="bg-auth-border mx-3 h-3.5 w-px"></div>
      <PointsIcon color="var(--color-auth-placeholder)" />
      <p className="text-auth-placeholder font-inter ml-2 text-sm leading-5 font-semibold tracking-normal">
        {quiz.pointsTotal} Points
      </p>
      <div className="bg-auth-border mx-3 h-3.5 w-px"></div>
      <PlaysIcon />
      <p className="text-auth-placeholder font-inter ml-2 text-sm leading-5 font-semibold tracking-normal">
        {quiz.timesPlayed} Plays
      </p>
      <div className="bg-auth-border mx-3 h-3.5 w-px"></div>
      <TimeIcon />
      <p className="text-auth-placeholder font-inter ml-2 text-sm leading-5 font-semibold tracking-normal">
        {quiz.totalTimeMinutes} m
      </p>
    </div>
  );
}
