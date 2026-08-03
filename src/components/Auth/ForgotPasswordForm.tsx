import { AuthInput, SubmitButton } from '@/components/Auth';
import { useForgotPasswordForm } from '@/hooks/useForgotPasswordForm';

export function ForgotPasswordForm() {
  const { register, errors, submitting, sent, isExpired, onSubmit, rules } =
    useForgotPasswordForm();

  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-6">
      <AuthInput
        label="Email address"
        name="email"
        placeholder="enter your email address"
        register={register}
        rules={rules.email}
        error={errors.email}
      />
      <SubmitButton
        label={sent ? 'Link sent' : isExpired ? 'Resend reset link' : 'Send'}
        loadingLabel="Sending link..."
        disabled={submitting}
      />
    </form>
  );
}
