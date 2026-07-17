import PinIcon from '@/components/UI/Icons/PinIcon';
import QuestionsIcon from '@/components/UI/Icons/QuestionsIcon';
import PointsIcon from '@/components/UI/Icons/PointsIcon';
import PlaysIcon from '@/components/UI/Icons/PlaysIcon';
import TimeIcon from '@/components/UI/Icons/TimeIcon';
import CloseIcon from '@/components/UI/Icons/CloseIcon';
import type { Quiz } from '@/types/quizz';

interface QuizProgressHeaderProps {
  quiz: Quiz;
  isTitleVisible: boolean;
  progressPercent: number;
}

export default function QuizProgressHeader({
  quiz,
  isTitleVisible,
  progressPercent,
}: QuizProgressHeaderProps) {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 grid grid-cols-[1fr_auto_1fr] items-center shadow-[0px_2px_14px_0px_#00000026] h-18 border-b border-b-header-border-b w-360 px-24 bg-white">
      {isTitleVisible ? (
        <div className="w-6 h-6"></div>
      ) : (
        <div className="h-8.25 bg-quiz-completed-bg px-4 border gap-8 border-auth-border rounded-lg flex items-center justify-self-start">
          <p className="font-bold text-base font-raleway">{quiz.title}</p>
          <div className="flex items-center gap-4">
            <PinIcon width={14} height={14} fill="#000000" />
            <div className="bg-auth-border w-px h-3.5"></div>
            <QuestionsIcon width={14} height={14} fill="#000000" />
            <div className="bg-auth-border w-px h-3.5"></div>
            <PointsIcon size={14} color="#000000" />
            <div className="bg-auth-border w-px h-3.5"></div>
            <PlaysIcon width={14} height={14} fill="#000000" />
            <div className="bg-auth-border w-px h-3.5"></div>
            <TimeIcon width={14} height={14} fill="#000000" />
          </div>
        </div>
      )}

      <div className="w-80 h-2 bg-footer-line rounded-sm relative overflow-hidden justify-self-center">
        <div
          className="absolute top-0 left-0 h-full rounded-sm bg-progress-bar transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <CloseIcon className="w-6 h-6 cursor-pointer justify-self-end" />
    </div>
  );
}
