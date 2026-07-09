import { Link } from 'react-router-dom';
import ArrowRightBlue from '../UI/Icons/ArrowRightBlue';

interface AuthFooterProps {
  prompt: string;
  linkText: string;
  to: string;
}

export default function AuthFooter({ prompt, linkText, to }: AuthFooterProps) {
  return (
    <p className="mt-9.5 font-inter text-base">
      {prompt}{' '}
      <Link
        to={to}
        className="group font-inter font-semibold text-base text-[#4B69FD] inline-flex items-center gap-1"
      >
        {linkText}
        <span className="w-0 opacity-0 overflow-hidden group-hover:w-3.5 group-hover:opacity-100 transition-all duration-300">
          <ArrowRightBlue />
        </span>
      </Link>
    </p>
  );
}
