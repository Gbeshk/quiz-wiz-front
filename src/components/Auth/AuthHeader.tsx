import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AuthHeaderProps {
  title: ReactNode;
  description?: string;
  centered?: boolean;
}

export default function AuthHeader({
  title,
  description,
  centered = false,
}: AuthHeaderProps) {
  return (
    <>
      <h1
        className={cn(
          'font-raleway flex items-center gap-2 text-3xl font-extrabold',
          centered && 'justify-center text-center',
        )}
      >
        {title}
      </h1>

      {description && (
        <p
          className={cn(
            'font-inter text-auth-text mt-4 w-full max-w-106.5 text-sm',
            centered && 'mx-auto text-center',
          )}
        >
          {description}
        </p>
      )}
    </>
  );
}
