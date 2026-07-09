import { Link } from 'react-router-dom';

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
        className="font-inter font-semibold text-base text-[#4B69FD] hover:underline"
      >
        {linkText}
      </Link>
    </p>
  );
}
