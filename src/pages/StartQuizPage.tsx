import { useParams } from 'react-router-dom';
import { useQuiz } from '@/hooks/useQuiz';
import { useQuizAttempt } from '@/hooks/useQuizAttempt';
import { useElementVisibility } from '@/hooks/useElementVisibility';
import QuizProgressHeader from '@/components/Quizzes/StartQuiz/QuizProgressHeader';
import QuizTitleSection from '@/components/Quizzes/StartQuiz/QuizTitleSection';
import QuestionsList from '@/components/Quizzes/StartQuiz/QuestionsList';
import TimerCard from '@/components/Quizzes/StartQuiz/TimerCard';
import ResultModal from '@/components/Quizzes/StartQuiz/ResultModal';
import QuizLoadingState from '@/components/Quizzes/StartQuiz/QuizLoadingState';
import QuizAttemptedView from '@/components/Quizzes/StartQuiz/QuizAttemptedView';
import NotFoundPage from './NotFoundPage';

export default function StartQuizPage() {
  const { id } = useParams();
  const { quiz, isLoading, error } = useQuiz(id);
  const { ref: titleRef, isVisible: isTitleVisible } =
    useElementVisibility<HTMLHeadingElement>();

  const {
    selectedAnswers,
    handleSelectOption,
    progressPercent,
    formattedTime,
    timeTaken,
    isSubmitting,
    submitError,
    isResultModalOpen,
    gradedResult,
    handleSubmit,
  } = useQuizAttempt(quiz);

  if (isLoading) {
    return <QuizLoadingState />;
  }

  if (error || !quiz) {
    return <NotFoundPage />;
  }

  if (quiz.myAttempt) {
    return <QuizAttemptedView quiz={quiz} titleRef={titleRef} />;
  }

  return (
    <div className="mx-auto flex w-360 flex-col px-24">
      <QuizProgressHeader
        quiz={quiz}
        isTitleVisible={isTitleVisible}
        progressPercent={progressPercent}
      />
      <div className="h-18" />
      <QuizTitleSection ref={titleRef} quiz={quiz} />
      <div className="mx-auto mt-23.5 flex w-full justify-between">
        <QuestionsList
          questions={quiz.questions}
          selectedAnswers={selectedAnswers}
          onSelectOption={handleSelectOption}
        />
        <TimerCard
          isSubmitting={isSubmitting}
          formattedTime={formattedTime}
          onSubmit={handleSubmit}
          error={submitError}
        />
      </div>

      {isResultModalOpen && gradedResult && (
        <ResultModal
          quiz={quiz}
          timeTaken={timeTaken}
          correctCount={gradedResult.correctCount}
          mistakesCount={gradedResult.mistakesCount}
        />
      )}
    </div>
  );
}
