import { useParams } from 'react-router-dom';
import { useMemo, useState, useRef, useEffect } from 'react';
import { MOCK_QUIZZES } from '@/constants/mockQuizzes';
import QuizMetaRow from '@/components/Quizzes/QuizDetails/QuizMetaRow';
import PinIcon from '@/components/UI/Icons/PinIcon';
import InfoIcon from '@/components/UI/Icons/InfoIcon';
import CheckBoxIcon from '@/components/UI/Icons/CheckBoxIcon';
import CloseIcon from '@/components/UI/Icons/CloseIcon';
import QuestionsIcon from '@/components/UI/Icons/QuestionsIcon';
import PointsIcon from '@/components/UI/Icons/PointsIcon';
import PlaysIcon from '@/components/UI/Icons/PlaysIcon';
import TimeIcon from '@/components/UI/Icons/TimeIcon';

export default function StartQuizPage() {
  const { id } = useParams();

  const quiz = useMemo(() => MOCK_QUIZZES.find((quiz) => quiz.id === id), [id]);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number[]>
  >({});

  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const titleEl = titleRef.current;
    if (!titleEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsTitleVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(titleEl);
    return () => observer.disconnect();
  }, []);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const answeredCount = quiz.questions.filter(
    (q) => (selectedAnswers[q.id]?.length ?? 0) > 0,
  ).length;
  const progressPercent = (answeredCount / quiz.questions.length) * 100;

  const handleSelectOption = (
    questionId: string,
    optionIndex: number,
    isMultiple: boolean,
  ) => {
    setSelectedAnswers((prev) => {
      const current = prev[questionId] ?? [];
      const isAlreadySelected = current.includes(optionIndex);

      if (isMultiple) {
        const updated = isAlreadySelected
          ? current.filter((i) => i !== optionIndex)
          : [...current, optionIndex];
        return { ...prev, [questionId]: updated };
      }

      const updated = isAlreadySelected ? [] : [optionIndex];
      return { ...prev, [questionId]: updated };
    });
  };

  return (
    <div className="w-360 px-24 flex mx-auto flex-col">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 grid grid-cols-[1fr_auto_1fr] items-center shadow-[0px_2px_14px_0px_#00000026] h-18 border-b border-b-header-border-b w-360 px-24 bg-white">
        {isTitleVisible ? (
          <div className="w-6 h-6"></div>
        ) : (
          <div className="h-8.25 bg-quiz-completed-bg px-4 border gap-8 border-auth-border rounded-lg flex items-center justify-self-start">
            <p className="font-bold text-base font-raleway">{quiz.title}</p>
            <div className="flex items-center gap-4">
              <PinIcon width={14} height={14} fill="#000000" />
              <div className="bg-auth-border w-px h-3.5"></div>
              <QuestionsIcon width={14} height={14} fill="#000000" />
              <div className="bg-auth-border w-px h-3.5"></div>
              <PointsIcon size={14} color="#000000" />
              <div className="bg-auth-border w-px h-3.5"></div>
              <PlaysIcon width={14} height={14} fill="#000000" />
              <div className="bg-auth-border w-px h-3.5"></div>
              <TimeIcon width={14} height={14} fill="#000000" />
            </div>
          </div>
        )}

        <div className="w-80 h-2 bg-footer-line rounded-sm relative overflow-hidden justify-self-center">
          <div
            className="absolute top-0 left-0 h-full rounded-sm bg-progress-bar transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <CloseIcon className="w-6 h-6 cursor-pointer justify-self-end" />
      </div>

      <div className="h-18" />

      <h1
        ref={titleRef}
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
            <span className="font-inter font-semibold text-sm leading-5  text-auth-placeholder">
              {category}
            </span>
          </div>
        ))}
        <div className="-mt-8">
          <QuizMetaRow quiz={quiz} />
        </div>
      </div>

      <div className="w-full flex justify-between mx-auto mt-23.5">
        <div className="w-203.25 flex flex-col gap-12 mb-16">
          {quiz.questions.map((question) => {
            const isMultiple = question.type === 'multiple';
            const selected = selectedAnswers[question.id] ?? [];

            return (
              <div key={question.id}>
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
                      You can select {question.correctAnswers.length} options
                      from question
                    </p>
                  </div>
                )}

                <div className="flex flex-col gap-2 mt-5">
                  {question.options.map((option, oIndex) => {
                    const isSelected = selected.includes(oIndex);

                    return (
                      <button
                        key={oIndex}
                        onClick={() =>
                          handleSelectOption(question.id, oIndex, isMultiple)
                        }
                        className={
                          isSelected
                            ? 'p-4 bg-chosen-option-bg border border-chosen-option-border rounded-xl flex items-center justify-between font-inter text-sm leading-5 text-chosen-option-text cursor-pointer'
                            : 'p-4 rounded-xl border border-auth-border flex items-center justify-between font-inter text-sm leading-5 text-auth-placeholder cursor-pointer'
                        }
                      >
                        {option}
                        <div
                          className={
                            isSelected
                              ? 'w-4 h-4 rounded-full bg-auth-link flex items-center justify-center'
                              : 'w-4 h-4 rounded-full border border-auth-border'
                          }
                        >
                          {isSelected && <CheckBoxIcon />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative w-98.75 h-65.25 px-6 py-8 rounded-xl flex items-center gap-8 flex-col shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814]">
          <div className="absolute text-auth-placeholder font-inter text-base font-semibold leading-8 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-12 flex items-center justify-center border-hairline shadow-[0px_1px_4px_0px_#00000026] border-auth-border rounded-lg ">
            Timer
          </div>

          <p className="text-auth-text font-inter text-6xl mt-5 align-middle tabular-nums">
            5:00
          </p>
          <div className="w-83.5 h-px bg-auth-border"></div>
          <button className="w-83.5 h-12 font-inter text-base font-semibold text-white cursor-pointer bg-auth-link flex items-center justify-center rounded-xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
