import { api } from '@/lib/api';

interface SubmitAnswer {
  question_id: number;
  answer_ids: number[];
}

export async function submitQuizAttempt(
  quizId: string,
  timeTakenSeconds: number,
  answers: SubmitAnswer[],
) {
  const { data } = await api.post(`/quizzes/${quizId}/attempt`, {
    time_taken_seconds: timeTakenSeconds,
    answers,
  });
  return data;
}
