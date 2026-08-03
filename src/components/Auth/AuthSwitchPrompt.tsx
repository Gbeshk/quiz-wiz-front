import { ArrowRightBlue } from '@/components/UI/Icons';
import type { AuthModalType } from './AuthModal';

interface AuthSwitchPromptProps {
  isLogin: boolean;
  onSwitch: (type: AuthModalType) => void;
}

export function AuthSwitchPrompt({ isLogin, onSwitch }: AuthSwitchPromptProps) {
  return (
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
      </button>
    </p>
  );
}
