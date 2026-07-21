import { useVerifyEmail } from '@/hooks/useVerifyEmail';
import { VerifyStatusIcon } from '@/components/Auth/VerifyStatusIcon';

export default function VerifyEmailPage() {
  const { status, message } = useVerifyEmail();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4 px-6 text-center">
        <VerifyStatusIcon status={status} />
        <p className="font-inter text-lg text-gray-800">{message}</p>
      </div>
    </div>
  );
}
