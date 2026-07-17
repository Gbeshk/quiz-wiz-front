import { forwardRef } from 'react';

interface TimerCardProps {
  formattedTime: string;
  fixedPosition: { top: number; left: number } | null;
  onSubmit: () => void;
}

const TimerCard = forwardRef<HTMLDivElement, TimerCardProps>(
  ({ formattedTime, fixedPosition, onSubmit }, ref) => {
    return (
      <div
        ref={ref}
        className="relative w-98.75 h-65.25 px-6 py-8 rounded-xl flex items-center gap-8 flex-col shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814] z-40"
        style={
          fixedPosition
            ? {
                position: 'fixed',
                top: fixedPosition.top,
                left: fixedPosition.left,
              }
            : undefined
        }
      >
        <div className="absolute text-auth-placeholder font-inter text-base font-semibold leading-8 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-12 flex items-center justify-center border-hairline shadow-[0px_1px_4px_0px_#00000026] border-auth-border rounded-lg ">
          Timer
        </div>

        <p className="text-auth-text font-inter text-6xl mt-5 align-middle tabular-nums">
          {formattedTime}
        </p>
        <div className="w-83.5 h-px bg-auth-border"></div>
        <button
          onClick={onSubmit}
          className="w-83.5 h-12 font-inter text-base font-semibold text-white cursor-pointer bg-auth-link flex items-center justify-center rounded-xl"
        >
          Submit
        </button>
      </div>
    );
  },
);

TimerCard.displayName = 'TimerCard';

export default TimerCard;
