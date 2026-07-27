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
        <p className="font-inter text-auth-link text-sm leading-5 font-semibold">
          Question - {question.id}
        </p>
        <div className="bg-auth-border mx-2.5 h-2.5 w-px"></div>
        <p className="font-inter text-text-points text-sm leading-5 font-semibold">
          Points - {question.points}
        </p>
      </div>

      <h1 className="font-inter leading mt-5 text-lg font-bold">
        {question.question}
      </h1>

      {question.type === 'multiple' && !!question.correctAnswersCount && (
        <div className="bg-optional-quiz-div-bg border-px border-optional-quiz-div-border mt-6 flex h-9.25 w-82.75 items-center rounded-sm border">
          <p className="font-inter text-optional-quiz-div-text flex items-center gap-2.5 pl-4.5 text-sm font-medium">
            <InfoIcon />
            You can select {question.correctAnswersCount} options from question
          </p>
        </div>
      )}

      <div className="mt-5 flex flex-col gap-2">
        {question.options.map((option, oIndex) => {
          const isSelected = selected.includes(oIndex);

          return (
            <button
              key={oIndex}
              onClick={() => onSelectOption(question.id, oIndex, isMultiple)}
              className={cn(
                'font-inter flex cursor-pointer items-center justify-between rounded-xl border p-4 text-sm leading-5',
                isSelected
                  ? 'bg-chosen-option-bg border-chosen-option-border text-chosen-option-text'
                  : 'border-auth-border text-auth-placeholder',
              )}
            >
              {option}
              <div
                className={cn(
                  'h-4 w-4 rounded-full',
                  isSelected
                    ? 'bg-auth-link flex items-center justify-center'
                    : 'border-auth-border border',
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
