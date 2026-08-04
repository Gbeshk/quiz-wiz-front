import type { Quiz } from '@/types/quizz';
import { getQuizMetaIcons } from './getQuizMetaIcons';

interface QuizDesktopTitleBadgeProps {
  quiz: Quiz;
}

export default function QuizDesktopTitleBadge({
  quiz,
}: QuizDesktopTitleBadgeProps) {
  const metaIcons = getQuizMetaIcons(quiz);

  return (
    <div className="bg-quiz-completed-bg border-auth-border flex h-8.25 items-center gap-8 justify-self-start rounded-lg border px-4">
      <p className="font-raleway max-w-45 truncate text-base font-bold">
        {quiz.title}
      </p>
      <div className="flex items-center gap-4">
        {metaIcons.map(({ key, Icon, label }, index) => (
          <div className="relative flex items-center gap-4" key={key}>
            {index > 0 && <div className="bg-auth-border h-3.5 w-px" />}
            <div className="group relative flex cursor-pointer items-center">
              {key === 'points' ? (
                <Icon size={14} color="black" />
              ) : (
                <Icon width={14} height={14} fill="black" />
              )}
              <div className="bg-footer-text font-inter pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md px-3 py-2 text-center text-xs leading-4.5 font-semibold tracking-normal whitespace-nowrap text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                {label}
                <div className="border-b-footer-text absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
