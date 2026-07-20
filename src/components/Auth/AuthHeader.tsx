import type { ReactNode } from 'react';

interface AuthHeaderProps {
  title: ReactNode;
  description?: string;
}

export default function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <>
      <h1 className="font-raleway flex items-center gap-2 text-3xl font-extrabold">
        {title}
      </h1>
      {description && (
        <p className="font-inter text-auth-text mt-4 w-full max-w-106.5 text-sm">
          {description}
        </p>
      )}
    </>
  );
}
