import { useNavigate, useLocation } from 'react-router-dom';
import Arrow from '../UI/Icons/Arrow';

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const canGoBack = location.key !== 'default';

  if (!canGoBack) return null;

  return (
    <div
      onClick={() => navigate(-1)}
      className="absolute -top-16 -left-8 cursor-pointer flex items-center gap-2 h-4"
    >
      <Arrow />
      <p className="font-inter text-[#667085] font-medium text-sm">Back</p>
    </div>
  );
}
