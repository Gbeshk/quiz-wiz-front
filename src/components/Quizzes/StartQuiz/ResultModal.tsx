import { Link } from 'react-router-dom';
import CloseIcon from '@/components/UI/Icons/CloseIcon';
import type { Quiz } from '@/types/quizz';
import ResultModalHeader from './ResultModalHeader';
import ResultDetailRow from './ResultDetailRow';
import { DIFFICULTY_ICON_COLOR } from '@/constants/difficulty';

interface ResultModalProps {
  quiz: Quiz;
  timeTaken: string;
  correctCount: number;
  mistakesCount: number;
}

export default function ResultModal({
  quiz,
  timeTaken,
  correctCount,
  mistakesCount,
}: ResultModalProps) {
  return (
    <div className="fixed inset-0 z-100 items-center flex justify-center bg-modal-bg">
      <div className="relative w-100 rounded-xl bg-white p-8 flex flex-col shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.03),0px_20px_24px_-4px_rgba(16,24,40,0.08)]">
        <Link
          to="/"
          className="absolute top-6 right-6 w-6 h-6 cursor-pointer border-none bg-transparent p-0 flex items-center justify-center"
        >
          <CloseIcon className="w-full h-full" />
        </Link>

        <ResultModalHeader />

        <ResultDetailRow label="Quiz Name" value={quiz.title} />
        <ResultDetailRow
          label="Quiz level"
          value={quiz.difficulty}
          valueClassName={DIFFICULTY_ICON_COLOR[quiz.difficulty]}
        />
        <ResultDetailRow label="Time" value={timeTaken} />
        <ResultDetailRow
          label="Mistakes"
          value={mistakesCount}
          valueClassName="text-mistakes-text"
        />
        <ResultDetailRow
          label="Right answers"
          value={correctCount}
          valueClassName="text-correct-text"
          showDivider={false}
        />

        <Link
          to="/"
          className="w-full h-12 mt-6 font-inter text-base font-semibold text-white cursor-pointer bg-auth-link flex items-center justify-center rounded-xl"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
