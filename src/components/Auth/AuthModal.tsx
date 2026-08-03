import { useState } from 'react';
import { Hello } from '@/components/UI/Icons';
import { AuthHeader } from '@/components/Auth';
import { AuthModalHandle } from './AuthModalHandle';
import { AuthSwitchPrompt } from './AuthSwitchPrompt';
import { AuthModalContent } from './AuthModalContent';
import { cn } from '@/lib/utils';

export type AuthModalType =
  'login' | 'register' | 'forgot-password' | 'reset-password';

interface AuthModalProps {
  type: AuthModalType;
  onClose: () => void;
  onSwitch: (type: AuthModalType) => void;
}

const titles: Record<AuthModalType, React.ReactNode> = {
  login: (
    <>
      Hi, Welcome! <Hello />
    </>
  ),
  register: 'Create an account',
  'forgot-password': 'Forgot password?',
  'reset-password': 'Reset password',
};

const descriptions: Partial<Record<AuthModalType, string>> = {
  'forgot-password':
    "Don't worry! It happens. Please enter the email associated with your account.",
  'reset-password': "Please type something you'll remember",
};

export default function AuthModal({ type, onClose, onSwitch }: AuthModalProps) {
  const isLogin = type === 'login';
  const isRegister = type === 'register';
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className="bg-mobile-auth-background fixed inset-0 z-60 flex items-end justify-center">
      <div
        className={cn(
          'max-h-auth-modal min-h-auth-modal relative w-full overflow-y-auto rounded-md rounded-t-3xl bg-white p-6 pb-17 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]',
          isClosing ? 'animate-slide-down' : 'animate-slide-up',
        )}
      >
        <AuthModalHandle onClick={handleClose} />

        <div className="mt-10">
          <AuthHeader
            title={titles[type]}
            description={descriptions[type]}
            centered
          />
        </div>

        {(isLogin || isRegister) && (
          <AuthSwitchPrompt isLogin={isLogin} onSwitch={onSwitch} />
        )}

        <AuthModalContent type={type} onSwitch={onSwitch} />
      </div>
    </div>
  );
}
