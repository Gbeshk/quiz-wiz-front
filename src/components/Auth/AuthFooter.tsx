import { Link } from 'react-router-dom';
import { ArrowRightBlue } from '@/components/UI/Icons';
interface AuthFooterProps {
  prompt: string;
  linkText: string;
  to: string;
}

export default function AuthFooter({ prompt, linkText, to }: AuthFooterProps) {
  return (
    <p className="font-inter mt-9.5 text-base">
      {prompt}{' '}
      <Link
        to={to}
        className="group font-inter text-auth-link inline-flex items-center gap-1 text-base font-semibold"
      >
        {linkText}
        <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:opacity-100">
          <ArrowRightBlue />
        </span>
      </Link>
    </p>
  );
}
