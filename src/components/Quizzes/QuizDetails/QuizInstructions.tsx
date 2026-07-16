import type { QuizInstructionsProps } from '@/types/quizz';

export default function QuizInstructions({
  instructions,
}: QuizInstructionsProps) {
  return (
    <>
      <div className="w-203.25 h-px bg-modal-line mt-12"></div>
      <p className="mt-8 font-inter font-bold text-lg ">Instructions</p>
      <p className="mt-3 w-203.25 font-inter font-normal text-base ">
        {instructions}
      </p>
    </>
  );
}
