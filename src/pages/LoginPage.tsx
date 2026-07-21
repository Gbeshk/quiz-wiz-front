import { Hello } from '@/components/UI/Icons';
import {
  BackButton,
  AuthFooter,
  AuthHeroImage,
  AuthHeader,
} from '@/components/Auth';
import { LoginHero } from '@/assets';
import { LoginForm } from '@/components/Auth/LoginForm';

export default function LoginPage() {
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

          <LoginForm />

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
