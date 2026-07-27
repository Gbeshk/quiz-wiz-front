import { CustomToast, type ToastVariant } from './toast';
import toast from 'react-hot-toast';

export function showToast(
  variant: ToastVariant,
  title: string,
  description: string,
) {
  toast.custom(
    (t) => (
      <CustomToast
        t={t}
        title={title}
        description={description}
        variant={variant}
      />
    ),
    { duration: Infinity },
  );
}
