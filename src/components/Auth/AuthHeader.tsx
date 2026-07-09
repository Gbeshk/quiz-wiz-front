import type { ReactNode } from 'react';

interface AuthHeaderProps {
  title: ReactNode;
  description?: string;
}

export default function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <>
      <h1 className="font-raleway flex items-center gap-2 font-extrabold text-3xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 font-inter text-sm leading-[165%] w-106.5 text-[#475467] ">
          {description}
        </p>
      )}
    </>
  );
}
