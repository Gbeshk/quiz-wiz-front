import { cn } from '@/lib';
import type { QuizMetaIcon } from './getQuizMetaIcons';

interface QuizMobileMetaIconProps {
  meta: QuizMetaIcon;
  index: number;
  isActive: boolean;
  onTap: (event: React.MouseEvent<HTMLButtonElement>, key: string) => void;
}

export default function QuizMobileMetaIcon({
  meta,
  index,
  isActive,
  onTap,
}: QuizMobileMetaIconProps) {
  const { key, Icon, label } = meta;

  return (
    <div className="flex items-center gap-4">
      {index > 0 && <div className="bg-auth-border h-3.5 w-px" />}
      <div className="relative flex items-center">
        <button
          type="button"
          onClick={(event) => onTap(event, key)}
          className="flex cursor-pointer items-center border-none bg-transparent p-0 outline-none"
        >
          {key === 'points' ? (
            <Icon size={14} color="#000000" />
          ) : (
            <Icon width={14} height={14} fill="#000000" />
          )}
        </button>

        {isActive && (
          <div
            className={cn(
              'bg-footer-text font-inter pointer-events-none absolute top-full z-10 mt-2 rounded-md px-3 py-2 text-center text-xs leading-4.5 font-semibold tracking-normal whitespace-nowrap text-white',
              index === 0 ? 'left-0' : 'left-1/2 -translate-x-1/2',
            )}
          >
            {label}
            <div
              className="border-b-footer-text absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-x-4 border-t-0 border-b-4 border-x-transparent"
              style={index === 0 ? { left: '7px' } : undefined}
            />
          </div>
        )}
      </div>
    </div>
  );
}
