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
          className="font-raleway mx-auto mt-15 text-4xl leading-none font-bold tracking-normal"
        >
          {quiz.title}
        </h1>
        <div className="mx-auto mt-6 flex items-center gap-3">
          <PinIcon />
          {quiz.categories.map((category, index) => (
            <div className="flex items-center" key={category}>
              {index > 0 && (
                <div className="bg-auth-border mr-3 h-1 w-1 rounded-full" />
              )}
              <span className="font-inter text-auth-placeholder text-sm leading-5 font-semibold">
                {category}
              </span>
            </div>
          ))}
          <div className="-mt-8 flex">
            <div className="bg-auth-border mt-9 mr-3 h-3.5 w-px"></div>
            <QuizMetaRow quiz={quiz} />
          </div>
        </div>
      </>
    );
  },
);

QuizTitleSection.displayName = 'QuizTitleSection';

export default QuizTitleSection;
