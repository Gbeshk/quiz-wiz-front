import { useNavigate } from 'react-router-dom';
import {
  BackButton,
  AuthFooter,
  AuthHeroImage,
  AuthHeader,
} from '@/components/Auth';
import { RegisterForm } from '@/components/Auth/RegisterForm';
import AuthModal from '@/components/Auth/AuthModal';
import { RegisterHero } from '@/assets';

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="max-xl1:hidden gap-auth flex min-h-screen w-full">
        <div className="w-hero min-h-screen">
          <AuthHeroImage
            src={RegisterHero}
            alt="Register Hero"
            imgClassName="login-hero"
          />
        </div>
        <div className="w-form min-h-screen">
          <div className="relative">
            <div className="mt-hero-register">
              <BackButton />
              <AuthHeader title="Create an account" />
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

      <div className="xl1:hidden">
        <AuthModal
          type="register"
          onClose={() => navigate('/')}
          onSwitch={(type) =>
            navigate(type === 'login' ? '/login' : '/register')
          }
        />
      </div>
    </>
  );
}
