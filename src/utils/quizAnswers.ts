import type { Question } from '@/types/quizz';

export function isAnswerCorrect(question: Question, selected: number[]) {
  if (question.type === 'multiple') {
    if (!question.correctAnswers) return false;
    if (selected.length !== question.correctAnswers.length) return false;
    const sortedSelected = [...selected].sort((a, b) => a - b);
    const sortedCorrect = [...question.correctAnswers].sort((a, b) => a - b);
    return sortedSelected.every((val, idx) => val === sortedCorrect[idx]);
  }

  if (question.correctAnswer === undefined) return false;
  return selected.length === 1 && selected[0] === question.correctAnswer;
}
