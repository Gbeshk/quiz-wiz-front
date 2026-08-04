import { useEffect, useState } from 'react';
import type { Quiz } from '@/types/quizz';
import { getQuizMetaIcons } from './getQuizMetaIcons';
import QuizMobileMetaIcon from './QuizMobileMetaIcon';

interface QuizMobileTitleCardProps {
  quiz: Quiz;
}

export default function QuizMobileTitleCard({
  quiz,
}: QuizMobileTitleCardProps) {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const metaIcons = getQuizMetaIcons(quiz);

  const handleIconTap = (
    event: React.MouseEvent<HTMLButtonElement>,
    key: string,
  ) => {
    event.stopPropagation();
    setActiveTooltip((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    if (!activeTooltip) return;
    const closeOnOutsideClick = () => setActiveTooltip(null);
    document.addEventListener('click', closeOnOutsideClick);
    return () => document.removeEventListener('click', closeOnOutsideClick);
  }, [activeTooltip]);

  return (
    <div className="bg-quiz-completed-bg border-auth-border w-mobile-submit flex h-15 flex-col justify-between rounded-lg border px-4 py-3">
      <p className="h-4 truncate text-xs leading-none font-bold tracking-normal">
        {quiz.title}
      </p>
      <div className="flex gap-3">
        {metaIcons.map((meta, index) => (
          <QuizMobileMetaIcon
            key={meta.key}
            meta={meta}
            index={index}
            isActive={activeTooltip === meta.key}
            onTap={handleIconTap}
          />
        ))}
      </div>
    </div>
  );
}
