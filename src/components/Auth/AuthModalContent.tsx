import { LoginForm } from '@/components/Auth/LoginForm';
import { RegisterForm } from '@/components/Auth/RegisterForm';
import { ForgotPasswordForm } from '@/components/Auth/ForgotPasswordForm';
import { ResetPasswordForm } from '@/components/Auth/ResetPasswordForm';
import type { AuthModalType } from './AuthModal';

interface AuthModalContentProps {
  type: AuthModalType;
  onSwitch: (type: AuthModalType) => void;
}

export function AuthModalContent({ type, onSwitch }: AuthModalContentProps) {
  switch (type) {
    case 'login':
      return <LoginForm onForgotPassword={() => onSwitch('forgot-password')} />;
    case 'register':
      return <RegisterForm />;
    case 'forgot-password':
      return <ForgotPasswordForm />;
    case 'reset-password':
      return <ResetPasswordForm />;
  }
}
