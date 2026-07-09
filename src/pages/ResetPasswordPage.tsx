import { useForm } from 'react-hook-form';
import ForgotPasswordHero from '../assets/images/forgot-password/forgot-password-hero.png';
import Logo from '../components/UI/Icons/Logo';
import BackButton from '../components/Auth/BackButton';
import SubmitButton from '../components/Auth/SubmitButton';
import { confirmPasswordRules, passwordRules } from '../utils/validation';
import type { RegisterFormValues } from '../types/auth';
import PasswordInput from '../components/Auth/PasswordInput';
import AuthFooter from '../components/Auth/AuthFooter';

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const password = watch('password');

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <div className="flex items-center gap-20.5">
      <div className="relative">
        <div className="absolute top-10 left-10">
          <Logo />
        </div>
        <img src={ForgotPasswordHero} alt="Login Hero" className="login-hero" />
      </div>

      <div className="relative">
        <BackButton />
        <h1 className="font-raleway flex items-center gap-2 font-extrabold text-3xl">
          Reset password
        </h1>
        <p className="mt-4 font-inter text-sm leading-[165%] w-106.5 text-[#475467] ">
          Please type something you’ll remember
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 flex flex-col gap-6"
        >
          <PasswordInput<RegisterFormValues>
            label="New password"
            name="password"
            register={register}
            rules={passwordRules}
            error={errors.password}
          />

          <PasswordInput<RegisterFormValues>
            label="Confirm password"
            name="confirmPassword"
            register={register}
            placeholder="repeat password"
            rules={confirmPasswordRules<RegisterFormValues>(password)}
            error={errors.confirmPassword}
          />

          <SubmitButton label="Reset password" />
        </form>
        <AuthFooter
          prompt="Already have an account?"
          linkText="Log in"
          to="/login"
        />
      </div>
    </div>
  );
}
