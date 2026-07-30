import { useNavigate } from 'react-router-dom';
import { BackButton, AuthHeroImage, AuthHeader } from '@/components/Auth';
import { ForgotPasswordForm } from '@/components/Auth/ForgotPasswordForm';
import AuthModal from '@/components/Auth/AuthModal';
import { ForgotPasswordHero } from '@/assets';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="max-xl1:hidden gap-auth flex min-h-screen w-full">
        <div className="w-hero min-h-screen">
          <AuthHeroImage
            src={ForgotPasswordHero}
            alt="Forgot Password Hero"
            imgClassName="login-hero"
          />
        </div>
        <div className="w-form min-h-screen">
          <div className="relative">
            <div className="mt-hero">
              <BackButton />
              <AuthHeader
                title="Forgot password?"
                description="Don't worry! It happens. Please enter the email associated with your account."
              />
              <ForgotPasswordForm />
            </div>
          </div>
        </div>
      </div>

      <div className="xl1:hidden">
        <AuthModal
          type="forgot-password"
          onClose={() => navigate('/login')}
          onSwitch={(type) =>
            navigate(type === 'login' ? '/login' : '/register')
          }
        />
      </div>
    </>
  );
}
