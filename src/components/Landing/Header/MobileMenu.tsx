import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import BurgerMenu from '@/components/UI/Icons/BurgerMenu';
import AuthModal from '@/components/Auth/AuthModal';
import { MobileMenuDrawer } from '@/components/Auth/MobileMenuDrawer';

interface MobileMenuProps {
  ml?: number;
}

function MobileMenu({ ml = 0 }: MobileMenuProps) {
  const { isAuthenticated, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [authModal, setAuthModal] = useState<
    'login' | 'register' | 'forgot-password' | 'reset-password' | null
  >(null);

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
        <MobileMenuDrawer
          isAuthenticated={isAuthenticated}
          username={user?.username}
          email={user?.email}
          onClose={close}
          onLogout={logout}
          onSignUp={() => openAuthModal('register')}
          onLogIn={() => openAuthModal('login')}
        />
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
