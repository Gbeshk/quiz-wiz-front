import { AuthInput, SubmitButton } from '@/components/Auth';
import { useResetPasswordForm } from '@/hooks/useResetPasswordForm';

export function ResetPasswordForm() {
  const { register, errors, submitting, checkingToken, onSubmit, rules } =
    useResetPasswordForm();

  if (checkingToken) {
    return (
      <p className="font-inter mt-10 text-center text-sm text-gray-500">
        Verifying link...
      </p>
    );
  }

  return (
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
      <AuthInput
        label="Confirm password"
        name="confirmPassword"
        type="password"
        register={register}
        placeholder="repeat password"
        rules={rules.confirmPassword}
        error={errors.confirmPassword}
      />
      <SubmitButton label="Reset password" disabled={submitting} />
    </form>
  );
}
