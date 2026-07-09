import { useForm } from 'react-hook-form';
import ForgotPasswordHero from '@/assets/images/forgot-password/forgot-password-hero.png';
import {
  AuthInput,
  BackButton,
  SubmitButton,
  AuthHeroImage,
  AuthHeader,
} from '@/components/Auth';
import { emailRules } from '@/utils/validation';
import type { ForgotPasswordFormValues } from '@/types/auth';

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log(data);
  };

  return (
    <div className="flex gap-20.5">
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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 flex flex-col gap-6"
        >
          <AuthInput<ForgotPasswordFormValues>
            label="Email address"
            name="email"
            placeholder="enter your email address"
            register={register}
            rules={emailRules}
            error={errors.email}
          />

          <SubmitButton label="Send" />
        </form>
      </div>
    </div>
  );
}
