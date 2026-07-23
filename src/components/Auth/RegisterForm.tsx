import {
  AuthInput,
  RoundCheckbox,
  SubmitButton,
  ErrorText,
} from '@/components/Auth';
import { useRegisterForm } from '@/hooks/useRegisterForm';
import type { RegisterFormValues } from '@/types/auth';

export function RegisterForm() {
  const { register, control, errors, submitting, onSubmit, rules } =
    useRegisterForm();

  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-6">
      <AuthInput<RegisterFormValues>
        label="Username"
        name="username"
        placeholder="Your username"
        register={register}
        rules={rules.username}
        error={errors.username}
      />

      <AuthInput<RegisterFormValues>
        label="Email"
        name="email"
        placeholder="Example@gmail.com"
        register={register}
        rules={rules.email}
        error={errors.email}
      />

      <AuthInput<RegisterFormValues>
        label="Create a password"
        name="password"
        type="password"
        register={register}
        rules={rules.password}
        error={errors.password}
        placeholder="must be 8 characters"
      />

      <AuthInput<RegisterFormValues>
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        register={register}
        rules={rules.confirmPassword}
        error={errors.confirmPassword}
        placeholder="must be 8 characters"
      />

      <div className="flex flex-col gap-1.5">
        <RoundCheckbox<RegisterFormValues>
          control={control}
          name="acceptTerms"
          rules={{ required: 'You must accept the terms' }}
          hasError={!!errors.acceptTerms}
        >
          <p className="font-inter text-auth-label text-base">
            I accept the terms and privacy policy
          </p>
        </RoundCheckbox>
        {errors.acceptTerms && (
          <ErrorText message={errors.acceptTerms.message ?? ''} />
        )}
      </div>

      <SubmitButton label="Sign Up" disabled={submitting} />
    </form>
  );
}
