import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`/quizzes/${quiz.id}`);
  };

  const META_ICONS = [
    { key: 'pin', Icon: PinIcon },
    { key: 'questions', Icon: QuestionsIcon },
    { key: 'points', Icon: PointsIcon },
    { key: 'plays', Icon: PlaysIcon },
    { key: 'time', Icon: TimeIcon },
  ] as const;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-b-header-border-b shadow-[0px_2px_14px_0px_#00000026]">
      <div className="max-w-360 w-full mx-auto h-18 px-24 grid grid-cols-[1fr_auto_1fr] items-center">
        {isTitleVisible ? (
          <div className="w-6 h-6"></div>
        ) : (
          <div className="h-8.25 bg-quiz-completed-bg px-4 border gap-8 border-auth-border rounded-lg flex items-center justify-self-start">
            <p className="font-bold text-base font-raleway">{quiz.title}</p>
            <div className="flex items-center gap-4">
              {META_ICONS.map(({ key, Icon }, index) => (
                <div className="flex items-center gap-4" key={key}>
                  {index > 0 && <div className="bg-auth-border w-px h-3.5" />}
                  {key === 'points' ? (
                    <Icon size={14} color="#000000" />
                  ) : (
                    <Icon width={14} height={14} fill="#000000" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="w-80 h-2 bg-footer-line rounded-sm relative overflow-hidden justify-self-center">
          <div
            className="absolute top-0 left-0 h-full rounded-sm bg-progress-bar transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <button
          onClick={handleClose}
          className="w-6 h-6 flex items-center justify-center cursor-pointer justify-self-end border-none bg-transparent p-0 outline-none"
        >
          <CloseIcon className="w-full h-full" />
        </button>
      </div>
    </header>
  );
}
