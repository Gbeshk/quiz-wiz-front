import {
  LandingBlueSection,
  LandingFrame,
  LandingLogo,
  LandingOrangeSection,
} from '@/assets';

function LandingHero() {
  return (
    <div className="mx-auto w-360 relative">
      <img src={LandingLogo} alt="Landing Icon" className="ml-24 mt-7" />
      <p className="ml-24 text-landing-text-color font-semibold text-3xl leading-10 font-raleway">
        Play with us, Explore with us
      </p>
      <div className="mt-28 w-full mx-auto overflow-hidden">
        <img
          src={LandingOrangeSection}
          alt="Features overview"
          className="w-full h-auto object-cover object-center image-render-auto"
        />
        <img
          src={LandingBlueSection}
          alt="Features overview"
          className="w-full h-auto object-cover object-center image-render-auto"
        />
      </div>

      <div className="absolute top-20 right-0 bottom-0 overflow-hidden">
        <img
          src={LandingFrame}
          alt="Features overview"
          className="object-cover image-render-auto"
        />
      </div>
    </div>
  );
}

export default LandingHero;
