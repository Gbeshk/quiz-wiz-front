import { CustomToast } from '@/components/UI/Toast/toast';
import toast from 'react-hot-toast';

export function showSuccessToast(title: string, description: string) {
  toast.custom(
    (t) => (
      <CustomToast
        t={t}
        title={title}
        description={description}
        variant="success"
      />
    ),
    { duration: Infinity },
  );
}

export function showWarningToast(title: string, description: string) {
  toast.custom(
    (t) => (
      <CustomToast
        t={t}
        title={title}
        description={description}
        variant="warning"
      />
    ),
    { duration: Infinity },
  );
}

export function showErrorToast(title: string, description: string) {
  toast.custom(
    (t) => (
      <CustomToast
        t={t}
        title={title}
        description={description}
        variant="error"
      />
    ),
    { duration: Infinity },
  );
}
