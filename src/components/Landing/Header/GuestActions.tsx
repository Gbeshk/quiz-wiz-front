import { ArrowRightBlue } from '@/components/UI';
import { Link } from 'react-router-dom';

function GuestActions() {
  return (
    <>
      <Link
        to="/register"
        className="w-24 ml-7 h-10.5 bg-black flex items-center justify-center font-raleway text-sm font-bold text-white rounded border border-transparent hover:bg-white hover:border-black hover:shadow-[4px_4px_0px_0px_#000000] hover:text-black transition-all duration-300"
      >
        Sign up
      </Link>

      <Link
        to="/login"
        className="group w-24 h-10.5 bg-white flex items-center justify-center font-raleway text-sm font-bold text-auth-link rounded transition-all duration-300 gap-1"
      >
        <span>Log in</span>
        <span className="w-0 opacity-0 overflow-hidden group-hover:w-3.5 group-hover:opacity-100 transition-all duration-300 flex items-center">
          <ArrowRightBlue />
        </span>
      </Link>
    </>
  );
}

export default GuestActions;
