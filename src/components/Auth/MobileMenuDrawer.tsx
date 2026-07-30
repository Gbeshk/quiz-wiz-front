import { Link } from 'react-router-dom';
import { CloseIcon, Logo } from '@/components/UI/Icons';
import { MobileMenuAuthenticated } from './MobileMenuAuthenticated';
import { MobileMenuGuestActions } from './MobileMenuGuestActions';

interface MobileMenuDrawerProps {
  isAuthenticated: boolean;
  username?: string;
  email?: string;
  onClose: () => void;
  onLogout: () => void;
  onSignUp: () => void;
  onLogIn: () => void;
}

export function MobileMenuDrawer({
  isAuthenticated,
  username,
  email,
  onClose,
  onLogout,
  onSignUp,
  onLogIn,
}: MobileMenuDrawerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-start">
      <div className="border-auth-border flex w-82.75 flex-col gap-5 bg-white px-6 py-6 shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814]">
        <div className="flex">
          <Logo />
          <button onClick={onClose} className="ml-auto flex">
            <CloseIcon />
          </button>
        </div>
        <div className="bg-auth-border h-px w-full"></div>
        <Link
          to={'/quizzes'}
          onClick={onClose}
          className="text-footer-text text-lg leading-8 font-semibold tracking-normal"
        >
          Quizzes
        </Link>
        <div className="bg-auth-border h-px w-full"></div>
        {isAuthenticated ? (
          <MobileMenuAuthenticated
            username={username}
            email={email}
            onLogout={onLogout}
          />
        ) : (
          <MobileMenuGuestActions onSignUp={onSignUp} onLogIn={onLogIn} />
        )}
      </div>
    </div>
  );
}
