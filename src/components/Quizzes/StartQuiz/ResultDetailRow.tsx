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
      <p className="text-auth-label font-inter font-medium text-sm leading-5 mt-3">
        {label}
      </p>
      <p
        className={cn(
          'mt-2 font-inter font-medium text-sm leading-5 tracking-normal text-black',
          valueClassName,
        )}
      >
        {value}
      </p>
      {showDivider && <div className="w-full h-px bg-auth-border mt-3" />}
    </>
  );
}
