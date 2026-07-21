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
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <div className="flex w-360 shrink-0 gap-20.5">
        <AuthHeroImage
          src={RegisterHero}
          alt="Register Hero"
          imgClassName="register-hero"
        />
        <div className="relative mt-30">
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
  );
}
