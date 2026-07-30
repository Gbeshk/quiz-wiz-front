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
    <div className="flex min-h-screen w-full gap-[5.7%]">
      <div className="min-h-screen w-[46.25%]">
        <AuthHeroImage
          src={LoginHero}
          alt="Login Hero"
          imgClassName="login-hero"
        />
      </div>
      <div className="min-h-screen w-[30%]">
        <div className="relative">
          <div className="mt-hero">
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
    </div>
  );
}
