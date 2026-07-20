import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ResultDetailRowProps {
  label: string;
  value: ReactNode;
  valueClassName?: string;
  showDivider?: boolean;
}

export default function ResultDetailRow({
  label,
  value,
  valueClassName,
  showDivider = true,
}: ResultDetailRowProps) {
  return (
    <>
      <p className="text-auth-label font-inter mt-3 text-sm leading-5 font-medium">
        {label}
      </p>
      <p
        className={cn(
          'font-inter mt-2 text-sm leading-5 font-medium tracking-normal text-black',
          valueClassName,
        )}
      >
        {value}
      </p>
      {showDivider && <div className="bg-auth-border mt-3 h-px w-full" />}
    </>
  );
}
