import { Logo } from '@/components/UI/Icons';
import {
  BackButton,
  SubmitButton,
  AuthInput,
  AuthFooter,
} from '@/components/Auth';
import { useResetPasswordForm } from '@/hooks/useResetPasswordForm';
import { ForgotPasswordHero } from '@/assets';

export default function ResetPasswordPage() {
  const { register, errors, submitting, onSubmit, rules } =
    useResetPasswordForm();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <div className="flex w-360 shrink-0 gap-20.5">
        <div className="relative">
          <div className="absolute top-10 left-10">
            <Logo />
          </div>
          <img
            src={ForgotPasswordHero}
            alt="Login Hero"
            className="login-hero"
          />
        </div>
        <div className="relative mt-31">
          <BackButton />

          <h1 className="font-raleway flex items-center gap-2 text-3xl font-extrabold">
            Reset password
          </h1>
          <p className="font-inter text-auth-text mt-4 w-106.5 text-sm leading-[165%]">
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

          <AuthFooter
            prompt="Already have an account?"
            linkText="Log in"
            to="/login"
          />
        </div>
      </div>
    </div>
  );
}
