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
  const { register, errors, submitting, sent, onSubmit, rules } =
    useForgotPasswordForm();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <div className="flex w-360 shrink-0 gap-20.5">
        <AuthHeroImage
          src={ForgotPasswordHero}
          alt="Forgot Password Hero"
          imgClassName="login-hero"
        />
        <div className="relative mt-31">
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
              label={sent ? 'Link sent' : 'Send'}
              disabled={submitting}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
