import { Logo } from '@/components/UI/Icons';
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
    <div className="relative">
      <div className="absolute top-10 left-10">
        <Logo />
      </div>
      <img src={src} alt={alt} className={imgClassName} />
    </div>
  );
}
