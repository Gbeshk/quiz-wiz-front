import { Logo } from '@/components/UI/Icons';
import { Link } from 'react-router-dom';
interface AuthHeroImageProps {
  src: string;
  alt: string;
  imgClassName: string;
}

export default function AuthHeroImage({
  src,
  alt,
  imgClassName,
}: AuthHeroImageProps) {
  return (
    <div className="relative h-screen shrink-0">
      <Link to={'/quizzes'} className="absolute top-10 left-10 cursor-pointer">
        <Logo />
      </Link>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
