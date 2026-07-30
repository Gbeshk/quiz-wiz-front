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
    <div className="gap-auth flex min-h-screen w-full">
      <div className="w-hero min-h-screen">
        <AuthHeroImage
          src={LoginHero}
          alt="Login Hero"
          imgClassName="login-hero"
        />
      </div>
      <div className="w-form min-h-screen">
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
