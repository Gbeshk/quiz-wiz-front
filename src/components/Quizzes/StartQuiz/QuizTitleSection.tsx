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
          className="mx-auto font-raleway font-bold text-4xl leading-none tracking-normal mt-15"
        >
          {quiz.title}
        </h1>
        <div className="flex items-center gap-3 mx-auto mt-6">
          <PinIcon />
          {quiz.categories.map((category, index) => (
            <div className="flex items-center" key={category}>
              {index > 0 && (
                <div className="w-1 mr-3 h-1 rounded-full bg-auth-border" />
              )}
              <span className="font-inter font-semibold text-sm leading-5 text-auth-placeholder">
                {category}
              </span>
            </div>
          ))}
          <div className="-mt-8">
            <QuizMetaRow quiz={quiz} />
          </div>
        </div>
      </>
    );
  },
);

QuizTitleSection.displayName = 'QuizTitleSection';

export default QuizTitleSection;
