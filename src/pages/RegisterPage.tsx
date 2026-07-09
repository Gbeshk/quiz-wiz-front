import { useForm } from 'react-hook-form';
import RegisterHero from '../assets/images/register/register-hero.png';
import AuthInput from '../components/Auth/AuthInput';
import PasswordInput from '../components/Auth/PasswordInput';
import RoundCheckbox from '../components/Auth/RoundCheckbox';
import AuthFooter from '../components/Auth/AuthFooter';
import SubmitButton from '../components/Auth/SubmitButton';
import ErrorText from '../components/Auth/ErrorText';
import AuthHeroImage from '../components/Auth/AuthHeroImage';
import AuthHeader from '../components/Auth/AuthHeader';
import {
  emailRules,
  passwordRules,
  confirmPasswordRules,
} from '../utils/validation';
import type { RegisterFormValues } from '../types/auth';
import BackButton from '../components/Auth/BackButton';

export default function RegisterPage() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const password = watch('password');

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <div className="flex gap-20.5">
      <AuthHeroImage
        src={RegisterHero}
        alt="Register Hero"
        imgClassName="register-hero"
      />

      <div className="relative mt-31">
        <BackButton />

        <AuthHeader title="Create account" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 flex flex-col gap-6"
        >
          <AuthInput<RegisterFormValues>
            label="Username"
            name="username"
            placeholder="Your username"
            register={register}
            rules={{ required: 'Username is required' }}
            error={errors.username}
          />

          <AuthInput<RegisterFormValues>
            label="Email"
            name="email"
            placeholder="Example@gmail.com"
            register={register}
            rules={emailRules}
            error={errors.email}
          />

          <PasswordInput<RegisterFormValues>
            label="Create a password"
            name="password"
            register={register}
            rules={passwordRules}
            error={errors.password}
          />

          <PasswordInput<RegisterFormValues>
            label="Create a password"
            name="confirmPassword"
            register={register}
            rules={confirmPasswordRules<RegisterFormValues>(password)}
            error={errors.confirmPassword}
          />

          <div className="flex flex-col gap-1.5">
            <div className="flex gap-3 items-center">
              <RoundCheckbox<RegisterFormValues>
                control={control}
                name="acceptTerms"
                rules={{ required: 'You must accept the terms' }}
                hasError={!!errors.acceptTerms}
              />
              <p className="font-inter  text-base  text-[#344054]">
                I accept the terms and privacy policy
              </p>
            </div>
            {errors.acceptTerms && (
              <ErrorText message={errors.acceptTerms.message ?? ''} />
            )}
          </div>

          <SubmitButton label="Sign Up" />
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
