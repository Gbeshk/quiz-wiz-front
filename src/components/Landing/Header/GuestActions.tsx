import { ArrowRightBlue } from '@/components/UI';
import { Link } from 'react-router-dom';

function GuestActions() {
  return (
    <>
      <Link
        to="/register"
        className="font-raleway ml-7 flex h-10.5 w-24 items-center justify-center rounded border border-transparent bg-black text-sm font-bold text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#000000]"
      >
        Sign up
      </Link>

      <Link
        to="/login"
        className="group font-raleway text-auth-link flex h-10.5 w-24 items-center justify-center gap-1 rounded bg-white text-sm font-bold transition-all duration-300"
      >
        <span>Log in</span>
        <span className="flex w-0 items-center overflow-hidden opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:opacity-100">
          <ArrowRightBlue />
        </span>
      </Link>
    </>
  );
}

export default GuestActions;
