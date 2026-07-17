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
        className="w-22.75 h-6 font-inter gap-2 flex text-auth-text hover:text-auth-placeholder transition-all duration-300 ease-in-out items-center justify-center"
      >
        {isQuizzesActive && (
          <div className="bg-auth-link w-2 h-2 rounded-full"></div>
        )}
        Quizzes
      </Link>
    </div>
  );
}

export default NavBrand;
