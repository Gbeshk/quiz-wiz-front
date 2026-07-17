import QuizDoneIcon from '@/components/UI/Icons/QuizDoneIcon';

export default function ResultModalHeader() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mt-3">
        <QuizDoneIcon />
      </div>
      <h1 className="text-footer-text font-inter font-semibold text-[18px] leading-7 mt-4">
        Quiz finished
      </h1>
      <p className="text-auth-text font-inter font-normal text-sm leading-5">
        your results
      </p>
    </div>
  );
}
