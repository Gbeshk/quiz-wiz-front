import InfoIcon from '@/components/UI/Icons/InfoIcon';
import CheckBoxIcon from '@/components/UI/Icons/CheckBoxIcon';
import { cn } from '@/lib/utils';
import type { Question } from '@/types/quizz';

interface QuestionCardProps {
  question: Question;
  selected: number[];
  onSelectOption: (
    questionId: string,
    optionIndex: number,
    isMultiple: boolean,
  ) => void;
}

export default function QuestionCard({
  question,
  selected,
  onSelectOption,
}: QuestionCardProps) {
  const isMultiple = question.type === 'multiple';

  return (
    <div>
      <div className="flex items-center">
        <p className="font-inter text-sm font-semibold leading-5 text-auth-link">
          Question - {question.id}
        </p>
        <div className="h-2.5 w-px mx-2.5 bg-auth-border"></div>
        <p className="font-inter text-sm font-semibold leading-5 text-text-points">
          Points - {question.points}
        </p>
      </div>

      <h1 className="mt-5 font-inter text-lg font-bold leading">
        {question.question}
      </h1>

      {question.correctAnswers && (
        <div className="w-82.75 h-9.25 bg-optional-quiz-div-bg border border-px border-optional-quiz-div-border mt-6 flex items-center rounded-sm">
          <p className="font-inter text-sm font-medium text-optional-quiz-div-text flex items-center pl-4.5 gap-2.5">
            <InfoIcon />
            You can select {question.correctAnswers.length} options from
            question
          </p>
        </div>
      )}

      <div className="flex flex-col gap-2 mt-5">
        {question.options.map((option, oIndex) => {
          const isSelected = selected.includes(oIndex);

          return (
            <button
              key={oIndex}
              onClick={() => onSelectOption(question.id, oIndex, isMultiple)}
              className={cn(
                'p-4 rounded-xl border flex items-center justify-between font-inter text-sm leading-5 cursor-pointer',
                isSelected
                  ? 'bg-chosen-option-bg border-chosen-option-border text-chosen-option-text'
                  : 'border-auth-border text-auth-placeholder',
              )}
            >
              {option}
              <div
                className={cn(
                  'w-4 h-4 rounded-full',
                  isSelected
                    ? 'bg-auth-link flex items-center justify-center'
                    : 'border border-auth-border',
                )}
              >
                {isSelected && <CheckBoxIcon />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
