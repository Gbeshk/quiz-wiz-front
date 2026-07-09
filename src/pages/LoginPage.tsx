import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LoginHero from '../assets/images/login/login-hero.png';
import Logo from '../components/UI/Icons/Logo';
import Hello from '../components/UI/Icons/Hello';
import AuthInput from '../components/Auth/AuthInput';
import PasswordInput from '../components/Auth/PasswordInput';
import RememberForgotRow from '../components/Auth/RememberForgotRow';
import BackButton from '../components/Auth/BackButton';
import AuthFooter from '../components/Auth/AuthFooter';
import SubmitButton from '../components/Auth/SubmitButton';
import { emailRules, passwordRules } from '../utils/validation';
import type { LoginFormValues } from '../types/auth';

export default function LoginPage() {
  const navigate = useNavigate();
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
      <div className="relative">
        <div className="absolute top-10 left-10">
          <Logo />
        </div>
        <img src={LoginHero} alt="Login Hero" className="login-hero" />
      </div>

      <div className="relative">
        <BackButton onClick={() => navigate(-1)} />

        <h1 className="font-raleway flex items-center gap-2 font-extrabold text-3xl">
          Hi, Welcome! <Hello />
        </h1>

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
