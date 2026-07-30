import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import BurgerMenu from '@/components/UI/Icons/BurgerMenu';
import ProfileIcon from '@/components/UI/Icons/ProfileIcon';
import { CloseIcon, Logo } from '@/components/UI/Icons';
import AuthModal from '@/components/Auth/AuthModal';

interface MobileMenuProps {
  ml?: number;
}

function MobileMenu({ ml = 0 }: MobileMenuProps) {
  const { isAuthenticated, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [authModal, setAuthModal] = useState<'login' | 'register' | null>(null);

  const close = () => setIsOpen(false);
  const openAuthModal = (type: 'login' | 'register') => {
    close();
    setAuthModal(type);
  };
  const closeAuthModal = () => setAuthModal(null);

  return (
    <>
      <button
        className={cn('xl1:hidden', `-ml-${ml} flex`)}
        onClick={() => setIsOpen(true)}
      >
        <BurgerMenu />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-start">
          <div className="border-auth-border flex w-82.75 flex-col gap-5 bg-white px-6 py-6 shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814]">
            <div className="flex">
              <Logo />
              <button onClick={close} className="ml-auto flex">
                <CloseIcon />
              </button>
            </div>
            <div className="bg-auth-border h-px w-full"></div>
            <Link
              to={'/quizzes'}
              onClick={close}
              className="text-footer-text text-lg leading-8 font-semibold tracking-normal"
            >
              Quizzes
            </Link>
            <div className="bg-auth-border h-px w-full"></div>
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="border-auth-border flex h-16 w-16 items-center justify-center rounded-full border">
                    <ProfileIcon width={24} height={24} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-footer-text font-inter text-sm leading-5 font-semibold">
                      {user?.username}
                    </p>
                    <p className="text-auth-text font-inter text-sm leading-5 font-normal">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <div className="bg-auth-border h-px w-full"></div>
                <button
                  onClick={logout}
                  className="bg-quiz-completed-bg text-auth-link font-raleway h-11.5 w-full cursor-pointer rounded-sm text-sm leading-none font-bold"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => openAuthModal('register')}
                  className="font-raleway flex h-11.5 w-full cursor-pointer items-center justify-center rounded-sm bg-black text-sm leading-none font-bold text-white"
                >
                  Sign up
                </button>
                <button
                  onClick={() => openAuthModal('login')}
                  className="bg-quiz-completed-bg text-auth-link font-raleway flex h-11.5 w-full cursor-pointer items-center justify-center rounded-sm text-sm leading-none font-bold"
                >
                  Log in
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {authModal && (
        <AuthModal
          type={authModal}
          onClose={closeAuthModal}
          onSwitch={setAuthModal}
        />
      )}
    </>
  );
}

export default MobileMenu;
