import { useNavigate } from 'react-router-dom';
import { BackButton, AuthHeroImage } from '@/components/Auth';
import { ResetPasswordForm } from '@/components/Auth/ResetPasswordForm';
import AuthModal from '@/components/Auth/AuthModal';
import { ForgotPasswordHero } from '@/assets';

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="max-xl1:hidden gap-auth flex min-h-screen w-full">
        <div className="w-hero min-h-screen">
          <AuthHeroImage
            src={ForgotPasswordHero}
            alt="Forgot Passwrod Hero"
            imgClassName="forgot-password-hero"
          />
        </div>
        <div className="w-form min-h-screen">
          <div className="mt-hero relative">
            <BackButton />
            <h1 className="font-raleway flex items-center gap-2 text-3xl font-extrabold">
              Reset password
            </h1>
            <p className="font-inter text-auth-text mt-4 w-106.5 text-sm">
              Please type something you'll remember
            </p>
            <ResetPasswordForm />
          </div>
        </div>
      </div>

      <div className="xl1:hidden">
        <AuthModal
          type="reset-password"
          onClose={() => navigate('/login')}
          onSwitch={(type) =>
            navigate(type === 'login' ? '/login' : '/register')
          }
        />
      </div>
    </>
  );
}
