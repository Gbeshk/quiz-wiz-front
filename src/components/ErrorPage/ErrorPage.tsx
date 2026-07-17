import { Link } from 'react-router-dom';
import { LandingFooter, LandingHeader } from '@/components/Landing';
import GoBack from '@/components/UI/Icons/GoBack';

interface ErrorPageProps {
  title: string;
  errorCode: string;
  image: string;
  imageAlt: string;
}

export default function ErrorPage({
  title,
  errorCode,
  image,
  imageAlt,
}: ErrorPageProps) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <LandingHeader />

      <main className="w-full max-w-360 mx-auto px-24 grow flex flex-col items-center">
        <h1 className="font-raleway mt-15 text-6xl font-black ">{title}</h1>
        <p className="font-inter text-lg font-bold  mt-4">{errorCode}</p>
        <img src={image} alt={imageAlt} className="mt-11.5" />
        <Link
          to="/"
          className="flex cursor-pointer items-center mt-11.5 h-8.75 gap-2"
        >
          <GoBack />
          <p className="text-auth-link font-inter text-lg font-normal leading-none tracking-normal capitalize">
            go home
          </p>
        </Link>
      </main>

      <div className="mt-15 bg-auth-border h-px w-full"></div>
      <LandingFooter />
    </div>
  );
}
