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
      className="absolute -top-16 -left-8 cursor-pointer flex items-center gap-2 h-4"
    >
      <Arrow />
      <p className="font-inter text-auth-placeholder font-medium text-sm">
        Back
      </p>
    </button>
  );
}
