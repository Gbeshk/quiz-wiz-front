import { useForm } from 'react-hook-form';
import {
  AuthInput,
  RoundCheckbox,
  AuthFooter,
  SubmitButton,
  ErrorText,
  AuthHeroImage,
  AuthHeader,
  BackButton,
} from '@/components/Auth';
import {
  emailRules,
  passwordRules,
  confirmPasswordRules,
  usernameRules,
} from '@/utils/validation';
import type { RegisterFormValues } from '@/types/auth';
import { RegisterHero } from '@/assets';

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
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="flex gap-20.5 w-360 shrink-0">
        <AuthHeroImage
          src={RegisterHero}
          alt="Register Hero"
          imgClassName="register-hero"
        />
        <div className="relative mt-30">
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
              rules={usernameRules}
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

            <AuthInput<RegisterFormValues>
              label="Create a password"
              name="password"
              type="password"
              register={register}
              rules={passwordRules}
              error={errors.password}
              placeholder="must be 8 characters"
            />

            <AuthInput<RegisterFormValues>
              label="Create a password"
              name="confirmPassword"
              type="password"
              register={register}
              rules={confirmPasswordRules<RegisterFormValues>(password)}
              error={errors.confirmPassword}
              placeholder="must be 8 characters"
            />

            <div className="flex flex-col gap-1.5">
              <div className="flex gap-3 items-center">
                <RoundCheckbox<RegisterFormValues>
                  control={control}
                  name="acceptTerms"
                  rules={{ required: 'You must accept the terms' }}
                  hasError={!!errors.acceptTerms}
                />
                <p className="font-inter  text-base  text-auth-label">
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
        </div>{' '}
      </div>
    </div>
  );
}
