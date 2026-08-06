export default function ResultModalSkeleton() {
  return (
    <>
      <div className="flex items-center justify-center gap-2 pt-2 pb-6">
        <div className="border-t-auth-link h-6 w-6 shrink-0 animate-spin rounded-full border-4 border-transparent" />
        <span className="font-inter text-auth-link text-base leading-6 font-semibold tracking-normal">
          Analyzing results
        </span>
      </div>

      <div className="flex flex-col gap-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="bg-quiz-completed-bg h-4 w-full rounded" />
            <div className="bg-quiz-completed-bg h-4 w-full rounded" />
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <div className="border-auth-border h-12 w-full rounded-xl border bg-white opacity-40" />
        <div className="bg-quiz-completed-bg h-12 w-full rounded-xl" />
      </div>
    </>
  );
}
