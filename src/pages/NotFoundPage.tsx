import { NotFound } from '@/assets';
import ErrorPage from '@/components/ErrorPage/ErrorPage';

export default function NotFoundPage() {
  return (
    <ErrorPage
      title="Oops!"
      errorCode="Error 404"
      image={NotFound}
      imageAlt="Not-Found Hero"
    />
  );
}
