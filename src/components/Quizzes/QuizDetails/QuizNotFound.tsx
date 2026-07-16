import { LandingFooter, LandingHeader } from '@/components/Landing';

export default function QuizNotFound() {
  return (
    <div className="w-full flex mx-auto flex-col min-h-screen">
      <LandingHeader />
      <div className="w-360 mx-auto px-24 flex-1 flex flex-col justify-center items-center">
        <p className="text-xl font-semibold font-inter text-auth-placeholder">
          Quiz not found
        </p>
      </div>
      <LandingFooter />
    </div>
  );
}
