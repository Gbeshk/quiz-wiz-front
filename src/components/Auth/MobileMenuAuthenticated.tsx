import ProfileIcon from '@/components/UI/Icons/ProfileIcon';

interface MobileMenuAuthenticatedProps {
  username?: string;
  email?: string;
  onLogout: () => void;
}

export function MobileMenuAuthenticated({
  username,
  email,
  onLogout,
}: MobileMenuAuthenticatedProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="border-auth-border flex h-16 w-16 items-center justify-center rounded-full border">
          <ProfileIcon width={24} height={24} />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-footer-text font-inter text-sm leading-5 font-semibold">
            {username}
          </p>
          <p className="text-auth-text font-inter text-sm leading-5 font-normal">
            {email}
          </p>
        </div>
      </div>
      <div className="bg-auth-border h-px w-full"></div>
      <button
        onClick={onLogout}
        className="bg-quiz-completed-bg text-auth-link font-raleway h-11.5 w-full cursor-pointer rounded-sm text-sm leading-none font-bold"
      >
        Log out
      </button>
    </>
  );
}
