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
    <div className="bg-modal-bg fixed inset-0 z-100 flex items-center justify-center">
      <div className="relative flex w-100 flex-col rounded-xl bg-white p-8 shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.03),0px_20px_24px_-4px_rgba(16,24,40,0.08)]">
        <Link
          to="/"
          className="absolute top-6 right-6 flex h-6 w-6 cursor-pointer items-center justify-center border-none bg-transparent p-0"
        >
          <CloseIcon className="h-full w-full" />
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
          className="font-inter bg-auth-link mt-6 flex h-12 w-full cursor-pointer items-center justify-center rounded-xl text-base font-semibold text-white"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
