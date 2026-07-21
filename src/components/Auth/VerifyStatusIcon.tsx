import type { VerifyStatus } from '@/hooks/useVerifyEmail';

export function VerifyStatusIcon({ status }: { status: VerifyStatus }) {
  if (status === 'verifying') {
    return (
      <div
        className="border-t-auth-link h-10 w-10 animate-spin rounded-full border-4 border-gray-200"
        role="status"
        aria-label="Verifying"
      />
    );
  }

  if (status === 'success') {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-6 w-6 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
      <svg
        className="h-6 w-6 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
