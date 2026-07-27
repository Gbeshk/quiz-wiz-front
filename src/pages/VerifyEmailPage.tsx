import { useVerifyEmail } from '@/hooks/useVerifyEmail';

export default function VerifyEmailPage() {
  useVerifyEmail();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="border-t-auth-link h-10 w-10 animate-spin rounded-full border-4 border-gray-200" />
    </div>
  );
}
