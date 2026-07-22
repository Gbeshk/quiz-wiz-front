import { CustomToast } from '@/components/UI/Toast/toast';
import toast from 'react-hot-toast';

export function showSuccessToast(message: string) {
  toast.custom((t) => (
    <CustomToast t={t} message={message} variant="success" />
  ));
}

export function showErrorToast(message: string) {
  toast.custom((t) => <CustomToast t={t} message={message} variant="error" />);
}
