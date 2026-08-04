import type { ComponentType } from 'react';
import PinIcon from '@/components/UI/Icons/PinIcon';
import QuestionsIcon from '@/components/UI/Icons/QuestionsIcon';
import PointsIcon from '@/components/UI/Icons/PointsIcon';
import PlaysIcon from '@/components/UI/Icons/PlaysIcon';
import TimeIcon from '@/components/UI/Icons/TimeIcon';
import type { Quiz } from '@/types/quizz';

export interface QuizMetaIcon {
  key: 'pin' | 'questions' | 'points' | 'plays' | 'time';
  Icon: ComponentType<any>;
  label: string;
}

export function getQuizMetaIcons(quiz: Quiz): QuizMetaIcon[] {
  return [
    {
      key: 'pin',
      Icon: PinIcon,
      label: quiz.categories?.length ? quiz.categories.join(', ') : '—',
    },
    {
      key: 'questions',
      Icon: QuestionsIcon,
      label: `${quiz.questionsCount ?? 0} Questions`,
    },
    {
      key: 'points',
      Icon: PointsIcon,
      label: `${quiz.pointsTotal ?? 0} Points`,
    },
    {
      key: 'plays',
      Icon: PlaysIcon,
      label: `${quiz.timesPlayed ?? 0} Plays`,
    },
    {
      key: 'time',
      Icon: TimeIcon,
      label:
        quiz.totalTimeMinutes != null
          ? `${quiz.totalTimeMinutes} minutes`
          : '—',
    },
  ];
}
