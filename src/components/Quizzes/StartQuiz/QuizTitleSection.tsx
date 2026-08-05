import { forwardRef } from 'react';
import PinIcon from '@/components/UI/Icons/PinIcon';
import QuizMetaRow from '@/components/Quizzes/QuizDetails/QuizMetaRow';
import type { Quiz } from '@/types/quizz';

interface QuizTitleSectionProps {
  quiz: Quiz;
}

const QuizTitleSection = forwardRef<HTMLHeadingElement, QuizTitleSectionProps>(
  ({ quiz }, ref) => {
    return (
      <>
        <h1
          ref={ref}
          className="font-raleway mx-auto mt-15 text-center text-4xl leading-none font-bold tracking-normal"
        >
          {quiz.title}
        </h1>
        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-y-3">
          <div className="flex items-center justify-center">
            <PinIcon />
            <div className="ml-3 flex items-center gap-3">
              {quiz.categories.map((category, index) => (
                <div className="flex items-center gap-3" key={category}>
                  {index > 0 && (
                    <div className="bg-auth-border h-1 w-1 shrink-0 rounded-full" />
                  )}
                  <span className="font-inter text-auth-placeholder text-sm leading-5 font-semibold">
                    {category}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-auth-border mx-3 h-3.5 w-px" />

            <QuizMetaRow.Questions count={quiz.questions.length} />
          </div>

          <div className="bg-auth-border mx-3 h-3.5 w-px max-lg:hidden" />

          <div className="flex items-center justify-center max-lg:w-full">
            <QuizMetaRow.RemainingDetails quiz={quiz} />
          </div>
        </div>
      </>
    );
  },
);

QuizTitleSection.displayName = 'QuizTitleSection';

export default QuizTitleSection;
