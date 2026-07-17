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
        className="w-8 h-8 rounded-full overflow-hidden cursor-pointer border border-auth-border flex items-center justify-center"
      >
        {user?.profilePic ? (
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <ProfileIcon />
        )}
      </button>

      {isProfileOpen && (
        <div className="absolute py-8 px-4 w-77.75 h-39 rounded-lg -top-0.5 right-0 border border-auth-border bg-white shadow-[0px_1px_4px_0px_#00000026] z-50">
          <div className="w-10 h-10 rounded-full  border border-auth-border flex items-center justify-center">
            {user?.profilePic ? (
              <img
                src={user.profilePic}
                alt={user.name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <ProfileIcon />
            )}
          </div>
          <p className="text-footer-text font-inter text-sm mt-3 font-semibold leading-5">
            {user?.name}
          </p>
          <div className="flex items-center -mt-2 justify-between">
            <p className="text-auth-text font-inter text-sm font-normal leading-5">
              {user?.email}
            </p>
            <button
              type="button"
              onClick={logout}
              className="rounded-full w-9 flex items-center justify-center h-9 hover:bg-logout-hover-bg cursor-pointer ease-in-out transition-all duration-300"
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
