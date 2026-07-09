import { useForm } from 'react-hook-form';
import LoginHero from '../assets/images/login/login-hero.png';
import Hello from '../components/UI/Icons/Hello';
import AuthInput from '../components/Auth/AuthInput';
import PasswordInput from '../components/Auth/PasswordInput';
import RememberForgotRow from '../components/Auth/RememberForgotRow';
import BackButton from '../components/Auth/BackButton';
import AuthFooter from '../components/Auth/AuthFooter';
import SubmitButton from '../components/Auth/SubmitButton';
import AuthHeroImage from '../components/Auth/AuthHeroImage';
import AuthHeader from '../components/Auth/AuthHeader';
import { emailRules, passwordRules } from '../utils/validation';
import type { LoginFormValues } from '../types/auth';

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
    <div className="flex items-center gap-20.5">
      <AuthHeroImage
        src={LoginHero}
        alt="Login Hero"
        imgClassName="login-hero"
      />

      <div className="relative">
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

          <PasswordInput<LoginFormValues>
            label="Password"
            name="password"
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
