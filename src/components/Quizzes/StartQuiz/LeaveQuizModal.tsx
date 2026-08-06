interface LeaveQuizModalProps {
  onStay: () => void;
  onLeave: () => void;
}

export default function LeaveQuizModal({
  onStay,
  onLeave,
}: LeaveQuizModalProps) {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
      <div className="mx-4 flex w-full max-w-100 flex-col gap-6 rounded-xl bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-2">
          <p className="font-inter text-footer-text text-lg font-semibold">
            Leave this quiz?
          </p>
          <p className="font-inter text-auth-text text-sm">
            Your progress will be saved and the timer will keep running in the
            background. If you come back later, the time you were away will
            already have counted against you.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onStay}
            className="font-inter text-auth-label border-auth-border h-11 flex-1 cursor-pointer rounded-lg border bg-white text-sm font-semibold"
          >
            Stay
          </button>
          <button
            onClick={onLeave}
            className="font-inter bg-footer-text h-11 flex-1 cursor-pointer rounded-lg text-sm font-semibold text-white"
          >
            Leave
          </button>
        </div>
      </div>
    </div>
  );
}
