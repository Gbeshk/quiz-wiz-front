interface QuizMobileSubmitButtonProps {
  onSubmit: () => void;
  isSubmitting: boolean;
  submitError?: string | null;
}

export default function QuizMobileSubmitButton({
  onSubmit,
  isSubmitting,
  submitError,
}: QuizMobileSubmitButtonProps) {
  return (
    <div className="w-mobile-submit relative h-15 shrink-0">
      <button
        onClick={onSubmit}
        disabled={isSubmitting}
        className="border-auth-border bg-auth-link font-inter flex h-15 w-full cursor-pointer flex-col items-center justify-center rounded-lg border px-4 py-3 text-center text-lg leading-tight font-semibold tracking-normal text-white outline-none disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>

      {submitError && (
        <p className="absolute top-full left-1/2 mt-2 w-full -translate-x-1/2 text-center text-xs leading-tight text-red-500">
          {submitError}
        </p>
      )}
    </div>
  );
}
