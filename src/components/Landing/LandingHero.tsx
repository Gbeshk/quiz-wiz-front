import {
  LandingBlueSection,
  LandingFrame,
  LandingLogo,
  LandingOrangeSection,
} from '@/assets';

function LandingHero() {
  return (
    <div className="relative mx-auto w-360">
      <img src={LandingLogo} alt="Landing Icon" className="mt-7 ml-24" />
      <p className="text-landing-text-color font-raleway ml-24 text-3xl leading-10 font-semibold">
        Play with us, Explore with us
      </p>
      <div className="mx-auto mt-28 w-full overflow-hidden">
        <img
          src={LandingOrangeSection}
          alt="Features overview"
          className="image-render-auto h-auto w-full object-cover object-center"
        />
        <img
          src={LandingBlueSection}
          alt="Features overview"
          className="image-render-auto h-auto w-full object-cover object-center"
        />
      </div>

      <div className="absolute top-20 right-0 bottom-0 overflow-hidden">
        <img
          src={LandingFrame}
          alt="Features overview"
          className="image-render-auto object-cover"
        />
      </div>
    </div>
  );
}

export default LandingHero;
