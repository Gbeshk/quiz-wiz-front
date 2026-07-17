import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useDebounce } from '@/hooks/useDebounce';
import SearchBox from './SearchBox';
import NavBrand from './Header/NavBrand';
import ProfileMenu from './Header/ProfileMenu';
import GuestActions from './Header/GuestActions';

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
  };

  const showSearch = pathname !== '/';

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

  return (
    <header className="w-full bg-white border-b border-b-header-border-b">
      <div className="max-w-360 w-full mx-auto flex items-center px-24 h-18 justify-between">
        <NavBrand />

        {isAuthenticated ? (
          <div className="flex items-center gap-7.5">
            {showSearch && (
              <SearchBox
                isOpen={isSearchOpen}
                query={query}
                onQueryChange={setQuery}
                onOpen={() => setIsSearchOpen(true)}
                onClose={closeSearch}
              />
            )}
            <ProfileMenu />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {showSearch && (
              <SearchBox
                isOpen={isSearchOpen}
                query={query}
                onQueryChange={setQuery}
                onOpen={() => setIsSearchOpen(true)}
                onClose={closeSearch}
              />
            )}
            <GuestActions />
          </div>
        )}
      </div>
    </header>
  );
}

export default LandingHeader;
