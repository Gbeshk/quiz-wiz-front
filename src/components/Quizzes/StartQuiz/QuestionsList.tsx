import type { Question } from '@/types/quizz';
import QuestionCard from './QuestionCard';

interface QuestionsListProps {
  questions: Question[];
  selectedAnswers: Record<string, number[]>;
  onSelectOption: (
    questionId: string,
    optionIndex: number,
    isMultiple: boolean,
  ) => void;
}

export default function QuestionsList({
  questions,
  selectedAnswers,
  onSelectOption,
}: QuestionsListProps) {
  return (
    <div className="w-203.25 flex flex-col gap-12 mb-16">
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          selected={selectedAnswers[question.id] ?? []}
          onSelectOption={onSelectOption}
        />
      ))}
    </div>
  );
}
