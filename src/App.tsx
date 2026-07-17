import {
  LandingHeader,
  LandingHero,
  LandingFooter,
} from '@/components/Landing';

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <LandingHeader />
      <main className="grow">
        <LandingHero />
      </main>
      <LandingFooter />
    </div>
  );
}
