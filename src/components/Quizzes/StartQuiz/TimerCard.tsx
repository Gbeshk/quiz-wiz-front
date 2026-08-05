import { forwardRef } from 'react';
import { useFixedOverlayRect } from '@/hooks/useFixedOverlayRect';

interface TimerCardProps {
  formattedTime: string;
  onSubmit: () => void;
  isSubmitting: boolean;
  error?: string | null;
}

const TimerCard = forwardRef<HTMLDivElement, TimerCardProps>(
  ({ formattedTime, onSubmit, isSubmitting, error }, ref) => {
    const { placeholderRef, rect } = useFixedOverlayRect<HTMLDivElement>();

    return (
      <div
        ref={placeholderRef}
        className="w-timer h-65.25 max-w-110 shrink-0 max-lg:hidden"
      >
        <div
          ref={ref}
          style={
            rect
              ? {
                  position: 'fixed',
                  top: rect.top,
                  left: rect.left,
                  width: rect.width,
                }
              : undefined
          }
          className="z-40 flex h-65.25 max-w-110 flex-col items-center gap-8 rounded-xl bg-white px-6 py-8 shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814]"
        >
          <div className="text-auth-placeholder font-inter border-hairline border-auth-border absolute top-0 left-1/2 flex h-12 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg text-base leading-8 font-semibold shadow-[0px_1px_4px_0px_#00000026]">
            Timer
          </div>
          <p className="text-auth-text font-inter mt-5 align-middle text-4xl tabular-nums sm:text-5xl lg:text-6xl">
            {formattedTime}
          </p>
          <div className="bg-auth-border h-px w-full"></div>
          <button
            onClick={onSubmit}
            disabled={isSubmitting}
            className="font-inter bg-auth-link flex h-12 w-full shrink-0 cursor-pointer items-center justify-center rounded-xl text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {error && (
            <p className="absolute bottom-3 left-1/2 w-83.5 -translate-x-1/2 text-center text-sm text-red-500">
              {error}
            </p>
          )}
        </div>
      </div>
    );
  },
);

TimerCard.displayName = 'TimerCard';

export default TimerCard;
