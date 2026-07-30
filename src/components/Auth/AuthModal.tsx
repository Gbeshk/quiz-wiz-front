import { useState } from 'react';
import { ArrowRightBlue, Hello } from '@/components/UI/Icons';
import { AuthHeader } from '@/components/Auth';
import { LoginForm } from '@/components/Auth/LoginForm';
import { RegisterForm } from '@/components/Auth/RegisterForm';

interface AuthModalProps {
  type: 'login' | 'register';
  onClose: () => void;
  onSwitch: (type: 'login' | 'register') => void;
}

export default function AuthModal({ type, onClose, onSwitch }: AuthModalProps) {
  const isLogin = type === 'login';
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
        className={`max-h-auth-modal min-auth-modal relative w-full overflow-y-auto rounded-md rounded-t-3xl bg-white p-6 pb-17 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] ${
          isClosing ? 'animate-slide-down' : 'animate-slide-up'
        }`}
      >
        <button
          onClick={handleClose}
          className="bg-mobile-modal-close absolute top-4 right-1/2 h-1 w-8 cursor-pointer opacity-40"
        ></button>
        <div className="mt-10">
          <AuthHeader
            title={
              isLogin ? (
                <>
                  Hi, Welcome! <Hello />
                </>
              ) : (
                'Create an account'
              )
            }
            centered
          />
        </div>
        <p className="font-inter max-xl1:text-base group mx-auto mt-6 flex items-center justify-center gap-1 text-center text-sm">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => onSwitch(isLogin ? 'register' : 'login')}
            className="text-auth-link group flex cursor-pointer items-center gap-1 font-semibold"
          >
            {isLogin ? 'Sign up' : 'Log in'}{' '}
            <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:opacity-100">
              <ArrowRightBlue />
            </span>
          </button>{' '}
        </p>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
