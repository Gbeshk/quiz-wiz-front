import { useLocation } from 'react-router-dom';
import { AuthInput, RememberForgotRow, SubmitButton } from '@/components/Auth';
import type { LoginFormValues } from '@/types/auth';
import { useLoginForm } from '@/hooks/useLoginForm';
import { useResendVerification } from '@/hooks/useResendVerification';
import { ResendBanner } from './ResendBanner';

type LocationState = {
  verificationExpired?: boolean;
  verificationEmail?: string | null;
};

export function LoginForm() {
  const {
    register,
    control,
    errors,
    submitting,
    onSubmit,
    rules,
    unverifiedEmail,
    resending,
    resent,
    resendCooldown,
    resendVerification,
  } = useLoginForm();

  const location = useLocation();
  const state = (location.state as LocationState) ?? {};
  const {
    resend: resendById,
    resending: resendingById,
    resent: resentById,
    cooldown: cooldownById,
  } = useResendVerification(state.verificationEmail ?? null);

  return (
    <form onSubmit={onSubmit} className="mt-10 flex w-full flex-col gap-6">
      <AuthInput<LoginFormValues>
        label="Email address"
        name="email"
        placeholder="Your email"
        register={register}
        rules={rules.email}
        error={errors.email}
      />
      <AuthInput<LoginFormValues>
        label="Password"
        name="password"
        type="password"
        register={register}
        rules={rules.password}
        placeholder="••••••••"
        error={errors.password}
      />
      <RememberForgotRow<LoginFormValues> control={control} name="remember" />
      {state.verificationExpired && (
        <ResendBanner
          message="Your verification link has expired."
          onResend={resendById}
          resending={resendingById}
          resent={resentById}
          cooldown={cooldownById}
        />
      )}
      {unverifiedEmail && (
        <ResendBanner
          message="Your email address is not verified."
          onResend={resendVerification}
          resending={resending}
          resent={resent}
          cooldown={resendCooldown}
        />
      )}
      <SubmitButton
        label="Log in"
        loadingLabel="Logging in..."
        disabled={submitting}
      />
    </form>
  );
}
