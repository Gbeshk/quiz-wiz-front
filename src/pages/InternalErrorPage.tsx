import { InternalError } from '@/assets';
import ErrorPage from '@/components/ErrorPage/ErrorPage';

export default function InternalErrorPage() {
  return (
    <ErrorPage
      title="Internal server error!"
      errorCode="Error 500"
      image={InternalError}
      imageAlt="Internal-Error Hero"
    />
  );
}
