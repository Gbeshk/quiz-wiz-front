import {
  AuthFooter,
  AuthHeroImage,
  AuthHeader,
  BackButton,
} from '@/components/Auth';
import { RegisterHero } from '@/assets';
import { RegisterForm } from '@/components/Auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="gap-auth flex min-h-screen w-full">
      <div className="w-hero min-h-screen">
        <AuthHeroImage
          src={RegisterHero}
          alt="Register Hero"
          imgClassName="register-hero"
        />
      </div>
      <div className="w-form min-h-screen">
        <div className="relative">
          <div className="mt-hero-register">
            <BackButton />

            <AuthHeader title="Create account" />

            <RegisterForm />

            <AuthFooter
              prompt="Already have an account?"
              linkText="Log in"
              to="/login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
