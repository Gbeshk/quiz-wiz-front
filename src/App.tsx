import {
  LandingHeader,
  LandingHero,
  LandingFooter,
} from '@/components/Landing';

export default function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <LandingHeader />
      <main className="grow">
        <LandingHero />
      </main>
      <LandingFooter />
    </div>
  );
}
