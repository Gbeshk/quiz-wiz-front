import { useNavigate, useLocation } from 'react-router-dom';
import { Arrow } from '@/components/UI/Icons';

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const canGoBack = location.key !== 'default';

  if (!canGoBack) return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute -top-16 -left-8 flex h-4 cursor-pointer items-center gap-2"
    >
      <Arrow />
      <p className="font-inter text-auth-placeholder text-sm font-medium">
        Back
      </p>
    </button>
  );
}
