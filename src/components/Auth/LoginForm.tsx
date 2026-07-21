import { AuthInput, RememberForgotRow, SubmitButton } from '@/components/Auth';
import type { LoginFormValues } from '@/types/auth';
import { useLoginForm } from '@/hooks/useLoginForm';

export function LoginForm() {
  const { register, control, errors, submitting, onSubmit, rules } =
    useLoginForm();

  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-6">
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
      <SubmitButton label="Log in" disabled={submitting} />
    </form>
  );
}
