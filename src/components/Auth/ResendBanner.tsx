import { ResendIcon } from '@/components/UI/Icons';

export function ResendBanner({
  message,
  onResend,
  resending,
  resent,
  cooldown = 0,
}: {
  message: string;
  onResend: () => void;
  resending: boolean;
  resent: boolean;
  cooldown?: number;
}) {
  const disabled = resending || cooldown > 0;

  const label = resending
    ? 'Sending...'
    : cooldown > 0
      ? `Resend in ${cooldown}s`
      : 'Resend verification email';

  return (
    <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100">
        <ResendIcon />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <p className="text-sm font-medium text-amber-900">{message}</p>
        {resent && cooldown === 0 ? (
          <p className="text-sm text-amber-700">
            A new link is on its way — check your inbox.
          </p>
        ) : (
          <button
            type="button"
            onClick={onResend}
            disabled={disabled}
            className="w-fit cursor-pointer text-sm font-semibold text-amber-700 underline decoration-amber-400 underline-offset-2 transition hover:text-amber-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {label}
          </button>
        )}
      </div>
    </div>
  );
}
