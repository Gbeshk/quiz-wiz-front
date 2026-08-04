import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useDebounce } from '@/hooks/useDebounce';
import SearchBox from './SearchBox';
import NavBrand from './Header/NavBrand';
import ProfileMenu from './Header/ProfileMenu';
import GuestActions from './Header/GuestActions';
import MobileMenu from './Header/MobileMenu';
import { cn } from '@/lib';
function LandingHeader() {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);

  const closeSearch = () => {
    setIsSearchOpen(false);
    setQuery('');

    if (searchParams.has('search')) {
      const params = new URLSearchParams(searchParams);
      params.delete('search');
      navigate(`/quizzes?${params.toString()}`, { replace: true });
    }
  };

  const isQuizDetailsPage = /^\/quizzes\/[^/]+\/?$/.test(pathname);
  const showSearch = pathname !== '/' && !isQuizDetailsPage;

  useEffect(() => {
    if (!isSearchOpen) return;

    const params = new URLSearchParams(searchParams);
    if (debouncedQuery.trim()) {
      params.set('search', debouncedQuery.trim());
    } else {
      params.delete('search');
    }

    navigate(`/quizzes?${params.toString()}`, { replace: true });
  }, [debouncedQuery]);

  const hideWhenSearchOpen = isSearchOpen ? 'hidden md2:flex' : 'flex';
  const searchWrapper = isSearchOpen
    ? 'absolute inset-0 flex items-center justify-center px-6 md2:static md2:inset-auto md2:px-0'
    : '';

  return (
    <header className="border-b-header-border-b w-full border-b bg-white">
      <div className="relative mx-auto flex h-18 w-full max-w-360 items-center justify-between px-24 max-sm:px-6">
        <div className={hideWhenSearchOpen}>
          <NavBrand />
        </div>

        {isAuthenticated ? (
          <div className="flex items-center gap-7.5">
            {showSearch && (
              <div className={searchWrapper}>
                <SearchBox
                  isOpen={isSearchOpen}
                  query={query}
                  onQueryChange={setQuery}
                  onOpen={() => setIsSearchOpen(true)}
                  onClose={closeSearch}
                />
              </div>
            )}
            <div className={hideWhenSearchOpen}>
              <ProfileMenu /> <MobileMenu />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {showSearch && (
              <div className={searchWrapper}>
                <SearchBox
                  isOpen={isSearchOpen}
                  query={query}
                  onQueryChange={setQuery}
                  onOpen={() => setIsSearchOpen(true)}
                  onClose={closeSearch}
                />
              </div>
            )}
            <div
              className={cn(
                'flex items-center justify-center',
                hideWhenSearchOpen,
              )}
            >
              <GuestActions />
              <div className="ml-5.5 flex items-center justify-center">
                <MobileMenu />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default LandingHeader;
