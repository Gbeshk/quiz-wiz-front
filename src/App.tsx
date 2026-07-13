import {
  LandingHeader,
  LandingHero,
  LandingFooter,
} from '@/components/Landing';

function App() {
  return (
    <div className="w-full flex mx-auto flex-col">
      <LandingHeader />
      <LandingHero />
      <LandingFooter />
    </div>
  );
}

export default App;
