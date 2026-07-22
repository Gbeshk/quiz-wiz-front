import toast, { type Toast as ToastType } from 'react-hot-toast';

type ToastVariant = 'success' | 'error';

interface CustomToastProps {
  t: ToastType;
  message: string;
  variant: ToastVariant;
}

const variantStyles: Record<ToastVariant, { bg: string }> = {
  success: {
    bg: 'bg-green-50 border-green-500 text-green-800',
  },
  error: {
    bg: 'bg-red-50 border-red-500 text-red-800',
  },
};

export function CustomToast({ t, message, variant }: CustomToastProps) {
  const { bg } = variantStyles[variant];

  return (
    <div
      className={`${bg} ${t.visible ? 'animate-enter' : 'animate-leave'} font-inter flex w-full max-w-sm items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium shadow-lg`}
    >
      <span className="flex-1">{message}</span>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="text-xs opacity-60 hover:opacity-100"
      >
        ✕
      </button>
    </div>
  );
}
