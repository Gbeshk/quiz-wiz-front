import toast from 'react-hot-toast';
import type { Toast as ToastType } from 'react-hot-toast';
import {
  ErrorIconToast,
  SuccessIcon,
  WarningIcon,
} from '@/components/UI/Icons';

export type ToastVariant = 'success' | 'warning' | 'error';

interface CustomToastProps {
  t: ToastType;
  title: string;
  description: string;
  variant: ToastVariant;
}

const variantConfig: Record<
  ToastVariant,
  { Icon: () => React.ReactNode; lineClass: string }
> = {
  success: {
    Icon: SuccessIcon,
    lineClass: 'bg-success-toast-line',
  },
  warning: {
    Icon: WarningIcon,
    lineClass: 'bg-warning-toast-line',
  },
  error: {
    Icon: ErrorIconToast,
    lineClass: 'bg-error-toast-line',
  },
};

export function CustomToast({
  t,
  title,
  description,
  variant,
}: CustomToastProps) {
  const { Icon, lineClass } = variantConfig[variant];

  const timerStyle: React.CSSProperties = {
    animation: 'toast-timer 4800ms linear forwards',
  };

  return (
    <div
      className={`bg-toast-bg relative flex h-20.5 w-85.75 items-center justify-between gap-2.5 overflow-hidden rounded-lg px-4 shadow-[0px_8px_10px_0px_#00000033,0px_6px_30px_0px_#0000001F,0px_16px_24px_0px_#00000024] ${
        t.visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <Icon />
      <div className="flex-1">
        <p className="font-raleway align-middle text-base leading-5.5 font-bold text-white">
          {title}
        </p>
        <p className="font-inter text-toast-text align-middle text-sm leading-4.5">
          {description}
        </p>
      </div>
      <div
        className={`absolute bottom-0 left-0 h-1 w-full origin-left ${lineClass}`}
        style={timerStyle}
        onAnimationEnd={() => toast.dismiss(t.id)}
      ></div>
      <div
        className={`absolute bottom-0 left-0 h-1 w-full origin-left blur-xs ${lineClass}`}
        style={timerStyle}
      ></div>
    </div>
  );
}
