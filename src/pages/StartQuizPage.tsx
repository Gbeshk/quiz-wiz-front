import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuiz } from '@/hooks/useQuiz';
import { useQuizAttempt } from '@/hooks/useQuizAttempt';
import { useElementVisibility } from '@/hooks/useElementVisibility';
import { usePageScrollable } from '@/hooks/usePageScrollable';
import QuizProgressHeader from '@/components/Quizzes/StartQuiz/QuizProgressHeader';
import QuizTitleSection from '@/components/Quizzes/StartQuiz/QuizTitleSection';
import QuestionsList from '@/components/Quizzes/StartQuiz/QuestionsList';
import TimerCard from '@/components/Quizzes/StartQuiz/TimerCard';
import ResultModal from '@/components/Quizzes/StartQuiz/ResultModal';
import LeaveQuizModal from '@/components/Quizzes/StartQuiz/LeaveQuizModal';
import QuizLoadingState from '@/components/Quizzes/StartQuiz/QuizLoadingState';
import QuizAttemptedView from '@/components/Quizzes/StartQuiz/QuizAttemptedView';
import NotFoundPage from './NotFoundPage';
import { cn } from '@/lib';
import { useAuth } from '@/context/AuthContext';

export default function StartQuizPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAuthenticated = Boolean(user);

  const { quiz, isLoading, error } = useQuiz(id);
  const { ref: titleRef, isVisible: isTitleIntersecting } =
    useElementVisibility<HTMLHeadingElement>();
  const isPageScrollable = usePageScrollable();

  const isTitleVisible = isTitleIntersecting;
  const isMobileHeaderExpanded = isPageScrollable ? !isTitleIntersecting : true;

  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);

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

  useEffect(() => {
    if (!isAuthenticated) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isAuthenticated]);

  const handleRequestClose = () => {
    if (isAuthenticated) {
      setIsLeaveModalOpen(true);
    } else {
      navigate(`/quizzes/${id}`);
    }
  };

  const handleConfirmLeave = () => {
    setIsLeaveModalOpen(false);
    navigate(`/quizzes/${id}`);
  };

  if (isLoading) {
    return <QuizLoadingState />;
  }

  if (error || !quiz) {
    return <NotFoundPage />;
  }

  if (quiz.myAttempt) {
    return <QuizAttemptedView quiz={quiz} titleRef={titleRef} />;
  }

  const answeredCount = Object.values(selectedAnswers).filter(
    (answers) => answers.length > 0,
  ).length;

  return (
    <div className="mx-auto flex w-full flex-col px-23.75 max-lg:px-6">
      <QuizProgressHeader
        quiz={quiz}
        isTitleVisible={isTitleVisible}
        isMobileHeaderExpanded={isMobileHeaderExpanded}
        progressPercent={progressPercent}
        answeredCount={answeredCount}
        totalQuestions={quiz.questions.length}
        formattedTime={formattedTime}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitError={submitError}
        onClose={handleRequestClose}
      />
      <div
        className={cn(
          'h-18 max-lg:h-16',
          isMobileHeaderExpanded && 'max-lg:h-62',
        )}
      />
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
      {isResultModalOpen && (
        <ResultModal
          quiz={quiz}
          timeTaken={timeTaken}
          correctCount={gradedResult?.correctCount ?? 0}
          mistakesCount={gradedResult?.mistakesCount ?? 0}
          isLoading={!gradedResult}
        />
      )}
      {isLeaveModalOpen && (
        <LeaveQuizModal
          onStay={() => setIsLeaveModalOpen(false)}
          onLeave={handleConfirmLeave}
        />
      )}
    </div>
  );
}
