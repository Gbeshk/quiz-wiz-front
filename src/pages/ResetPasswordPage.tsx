import {
  BackButton,
  SubmitButton,
  AuthInput,
  AuthHeroImage,
} from '@/components/Auth';
import { useResetPasswordForm } from '@/hooks/useResetPasswordForm';
import { ForgotPasswordHero } from '@/assets';

export default function ResetPasswordPage() {
  const { register, errors, submitting, checkingToken, onSubmit, rules } =
    useResetPasswordForm();

  if (checkingToken) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-white">
        <p className="font-inter text-sm text-gray-500">Verifying link...</p>
      </div>
    );
  }

  return (
    <div className="gap-auth flex min-h-screen w-full">
      <div className="w-hero min-h-screen">
        <AuthHeroImage
          src={ForgotPasswordHero}
          alt="Forgot Passwrod Hero"
          imgClassName="forgot-password-hero"
        />
      </div>

      <div className="w-form min-h-screen">
        <div className="mt-hero relative">
          <BackButton />

          <h1 className="font-raleway flex items-center gap-2 text-3xl font-extrabold">
            Reset password
          </h1>
          <p className="font-inter text-auth-text mt-4 w-106.5 text-sm">
            Please type something you'll remember
          </p>

          <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-6">
            <AuthInput
              label="New password"
              name="password"
              type="password"
              register={register}
              rules={rules.password}
              placeholder="must be 8 characters"
              error={errors.password}
            />

            <div className="mt-3">
              <AuthInput
                label="Confirm password"
                name="confirmPassword"
                type="password"
                register={register}
                placeholder="repeat password"
                rules={rules.confirmPassword}
                error={errors.confirmPassword}
              />
            </div>

            <SubmitButton label="Reset password" disabled={submitting} />
          </form>
        </div>
      </div>
    </div>
  );
}
