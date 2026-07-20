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
    <div className="flex min-h-screen w-full flex-col bg-white">
      <LandingHeader />

      <main className="mx-auto flex w-full max-w-360 grow flex-col items-center px-24">
        <h1 className="font-raleway mt-15 text-6xl font-black">{title}</h1>
        <p className="font-inter mt-4 text-lg font-bold">{errorCode}</p>
        <img src={image} alt={imageAlt} className="mt-11.5" />
        <Link
          to="/"
          className="mt-11.5 flex h-8.75 cursor-pointer items-center gap-2"
        >
          <GoBack />
          <p className="text-auth-link font-inter text-lg leading-none font-normal tracking-normal capitalize">
            go home
          </p>
        </Link>
      </main>

      <div className="bg-auth-border mt-15 h-px w-full"></div>
      <LandingFooter />
    </div>
  );
}
