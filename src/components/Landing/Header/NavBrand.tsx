import { Link, useLocation } from 'react-router-dom';
import { Logo } from '@/components/UI/Icons';

function NavBrand() {
  const { pathname } = useLocation();
  const isQuizzesActive = pathname.startsWith('/quizzes');

  return (
    <div className="flex items-center gap-11">
      <Link to="/">
        <Logo />
      </Link>
      <Link
        to="/quizzes"
        className="font-inter max-xl1:hidden text-auth-text hover:text-auth-placeholder flex h-6 w-22.75 items-center justify-center gap-2 transition-all duration-300 ease-in-out"
      >
        {isQuizzesActive && (
          <div className="bg-auth-link h-2 w-2 rounded-full"></div>
        )}
        Quizzes
      </Link>
    </div>
  );
}

export default NavBrand;
