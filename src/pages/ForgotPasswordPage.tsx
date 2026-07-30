import {
  AuthInput,
  BackButton,
  SubmitButton,
  AuthHeroImage,
  AuthHeader,
} from '@/components/Auth';
import { useForgotPasswordForm } from '@/hooks/useForgotPasswordForm';
import { ForgotPasswordHero } from '@/assets';

export default function ForgotPasswordPage() {
  const { register, errors, submitting, sent, isExpired, onSubmit, rules } =
    useForgotPasswordForm();

  return (
    <div className="gap-auth flex min-h-screen w-full">
      <div className="w-hero min-h-screen">
        <AuthHeroImage
          src={ForgotPasswordHero}
          alt="Forgot Password Hero"
          imgClassName="login-hero"
        />
      </div>
      <div className="w-form min-h-screen">
        <div className="relative">
          <div className="mt-hero">
            <BackButton />

            <AuthHeader
              title="Forgot password?"
              description="Don't worry! It happens. Please enter the email associated with your account."
            />

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
                label={
                  sent ? 'Link sent' : isExpired ? 'Resend reset link' : 'Send'
                }
                loadingLabel="Sending link..."
                disabled={submitting}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
