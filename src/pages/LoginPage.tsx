import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
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
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: LoginFormValues) => {
    setSubmitting(true);
    try {
      await login(data.email, data.password, data.rememberMe);
      navigate('/quizzes');
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 422) {
        const message =
          err.response.data?.errors?.email?.[0] ??
          err.response.data?.message ??
          'Invalid credentials.';
        setError('email', { message });
      } else {
        setError('email', {
          message: 'Something went wrong. Please try again.',
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <div className="flex w-360 shrink-0 gap-20.5">
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
    </div>
  );
}
