import type { QuizInstructionsProps } from '@/types/quizz';

export default function QuizInstructions({
  instructions,
}: QuizInstructionsProps) {
  if (!instructions) {
    return null;
  }

  return (
    <>
      <div className="bg-modal-line mt-12 h-px w-full max-w-203.25"></div>
      <p className="font-inter mt-8 text-lg font-bold">Instructions</p>
      <p className="font-inter mt-3 w-full max-w-203.25 text-base font-normal">
        {instructions}
      </p>
    </>
  );
}
