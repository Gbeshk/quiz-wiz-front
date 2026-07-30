import { useNavigate } from 'react-router-dom';
import { Hello } from '@/components/UI/Icons';
import {
  BackButton,
  AuthFooter,
  AuthHeroImage,
  AuthHeader,
} from '@/components/Auth';
import { LoginHero } from '@/assets';
import { LoginForm } from '@/components/Auth/LoginForm';
import AuthModal from '@/components/Auth/AuthModal';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Desktop layout — unchanged, gated to xl1+ */}
      <div className="max-xl1:hidden gap-auth flex min-h-screen w-full">
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
              <LoginForm
                onForgotPassword={() => navigate('/forgot-password')}
              />
              <AuthFooter
                prompt="Don't have an account?"
                linkText="Sign up"
                to="/register"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — same modal shell as burger menu */}
      <div className="xl1:hidden">
        <AuthModal
          type="login"
          onClose={() => navigate('/')}
          onSwitch={(type) =>
            navigate(
              type === 'register'
                ? '/register'
                : type === 'forgot-password'
                  ? '/forgot-password'
                  : '/login',
            )
          }
        />
      </div>
    </>
  );
}
