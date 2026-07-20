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
    <header className="border-b-header-border-b fixed top-0 left-0 z-50 w-full border-b bg-white shadow-[0px_2px_14px_0px_#00000026]">
      <div className="mx-auto grid h-18 w-full max-w-360 grid-cols-[1fr_auto_1fr] items-center px-24">
        {isTitleVisible ? (
          <div className="h-6 w-6"></div>
        ) : (
          <div className="bg-quiz-completed-bg border-auth-border flex h-8.25 items-center gap-8 justify-self-start rounded-lg border px-4">
            <p className="font-raleway text-base font-bold">{quiz.title}</p>
            <div className="flex items-center gap-4">
              {META_ICONS.map(({ key, Icon }, index) => (
                <div className="flex items-center gap-4" key={key}>
                  {index > 0 && <div className="bg-auth-border h-3.5 w-px" />}
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

        <div className="bg-footer-line relative h-2 w-80 justify-self-center overflow-hidden rounded-sm">
          <div
            className="bg-progress-bar absolute top-0 left-0 h-full rounded-sm transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <button
          onClick={handleClose}
          className="flex h-6 w-6 cursor-pointer items-center justify-center justify-self-end border-none bg-transparent p-0 outline-none"
        >
          <CloseIcon className="h-full w-full" />
        </button>
      </div>
    </header>
  );
}
