import { useRef, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useClickOutside } from '@/hooks/useClickOutside';
import ProfileIcon from '@/components/UI/Icons/ProfileIcon';
import LogOutIcon from '@/components/UI/Icons/LogOutIcon';

function ProfileMenu() {
  const { user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useClickOutside(profileRef, () => setIsProfileOpen(false));

  return (
    <div className="relative" ref={profileRef}>
      <button
        onClick={() => setIsProfileOpen((prev) => !prev)}
        className="border-auth-border flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border"
      >
        {user?.profilePic ? (
          <img
            src={user.profilePic}
            alt={user.name}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <ProfileIcon />
        )}
      </button>

      {isProfileOpen && (
        <div className="border-auth-border absolute -top-0.5 right-0 z-50 h-39 w-77.75 rounded-lg border bg-white px-4 py-8 shadow-[0px_1px_4px_0px_#00000026]">
          <div className="border-auth-border flex h-10 w-10 items-center justify-center rounded-full border">
            {user?.profilePic ? (
              <img
                src={user.profilePic}
                alt={user.name}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <ProfileIcon />
            )}
          </div>
          <p className="text-footer-text font-inter mt-3 text-sm leading-5 font-semibold">
            {user?.name}
          </p>
          <div className="-mt-2 flex items-center justify-between">
            <p className="text-auth-text font-inter text-sm leading-5 font-normal">
              {user?.email}
            </p>
            <button
              type="button"
              onClick={logout}
              className="hover:bg-logout-hover-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out"
            >
              <LogOutIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
