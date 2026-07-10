import { useForm } from 'react-hook-form';
import { Hello } from '@/components/UI/Icons';
import {
  AuthInput,
  RememberForgotRow,
  BackButton,
  AuthFooter,
  SubmitButton,
  AuthHeroImage,
  AuthHeader,
} from '@/components/Auth';
import { emailRules, passwordRules } from '@/utils/validation';
import type { LoginFormValues } from '@/types/auth';
import { LoginHero } from '@/assets';

export default function LoginPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <div className="flex gap-20.5">
      <AuthHeroImage
        src={LoginHero}
        alt="Login Hero"
        imgClassName="login-hero"
      />

      <div className="relative mt-31">
        <BackButton />

        <AuthHeader
          title={
            <>
              Hi, Welcome! <Hello />
            </>
          }
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 flex flex-col gap-6"
        >
          <AuthInput<LoginFormValues>
            label="Email address"
            name="email"
            placeholder="Your email"
            register={register}
            rules={emailRules}
            error={errors.email}
          />

          <AuthInput<LoginFormValues>
            label="Password"
            name="password"
            type="password"
            register={register}
            rules={passwordRules}
            placeholder="••••••••"
            error={errors.password}
          />

          <RememberForgotRow<LoginFormValues>
            control={control}
            name="rememberMe"
          />

          <SubmitButton label="Log in" />
        </form>

        <AuthFooter
          prompt="Don't have an account?"
          linkText="Sign up"
          to="/register"
        />
      </div>
    </div>
  );
}
