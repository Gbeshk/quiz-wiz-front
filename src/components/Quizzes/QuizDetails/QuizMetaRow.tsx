import type { QuizMetaRowProps } from '@/types/quizz';
import QuestionsIcon from '@/components/UI/Icons/QuestionsIcon';
import PointsIcon from '@/components/UI/Icons/PointsIcon';
import PlaysIcon from '@/components/UI/Icons/PlaysIcon';
import TimeIcon from '@/components/UI/Icons/TimeIcon';

export default function QuizMetaRow({ quiz }: QuizMetaRowProps) {
  return (
    <div className="flex items-center mt-8">
      <QuestionsIcon />
      <p className="text-auth-placeholder ml-2 font-inter font-semibold text-sm leading-5 tracking-normal">
        {quiz.questions.length} Question
      </p>
      <div className="h-3.5 w-px bg-auth-border mx-3"></div>
      <PointsIcon color="var(--color-auth-placeholder)" />
      <p className="text-auth-placeholder ml-2 font-inter font-semibold text-sm leading-5 tracking-normal">
        {quiz.pointsTotal} Points
      </p>
      <div className="h-3.5 w-px bg-auth-border mx-3"></div>
      <PlaysIcon />
      <p className="text-auth-placeholder ml-2 font-inter font-semibold text-sm leading-5 tracking-normal">
        {quiz.timesPlayed} Plays
      </p>
      <div className="h-3.5 w-px bg-auth-border mx-3"></div>
      <TimeIcon />
      <p className="text-auth-placeholder ml-2 font-inter font-semibold text-sm leading-5 tracking-normal">
        {quiz.totalTimeMinutes} m
      </p>
    </div>
  );
}
