import QuizDoneIcon from '@/components/UI/Icons/QuizDoneIcon';

export default function ResultModalHeader() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mt-3">
        <QuizDoneIcon />
      </div>
      <h1 className="text-footer-text font-inter mt-4 text-lg leading-7 font-semibold">
        Quiz finished
      </h1>
      <p className="text-auth-text font-inter text-sm leading-5 font-normal">
        your results
      </p>
    </div>
  );
}
