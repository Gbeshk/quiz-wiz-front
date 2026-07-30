import { CloseIcon, Hello } from '@/components/UI/Icons';
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

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 px-4">
      <div className="relative w-full max-w-sm rounded-md bg-white p-6 shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814]">
        <button onClick={onClose} className="absolute top-4 right-4">
          <CloseIcon />
        </button>

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
        />

        {isLogin ? <LoginForm /> : <RegisterForm />}

        <p className="font-inter mt-6 text-sm">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => onSwitch(isLogin ? 'register' : 'login')}
            className="text-auth-link font-semibold"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
}
