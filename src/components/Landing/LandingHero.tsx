import { LandingLogo, LandingPic } from '@/assets';
import HoverIcon from '@/components/UI/Icons/HoverIcon';
import LandingText from '@/components/UI/Icons/LandingText';
import { useNavigate } from 'react-router-dom';

function LandingHero() {
  const navigate = useNavigate();

  return (
    <div className="relative mx-auto w-full max-w-360 px-4 sm:px-8 lg:px-0">
      <img src={LandingLogo} alt="Landing Icon" className="mt-7 lg:ml-24" />
      <p className="text-landing-text-color font-raleway mt-2 text-xl leading-8 font-semibold sm:text-2xl lg:mt-0 lg:ml-24 lg:text-3xl lg:leading-10">
        Play with us, Explore with us
      </p>
      <div className="relative mt-28 flex flex-col">
        <div className="bg-landing-first-section-bg relative left-1/2 h-70.5 w-screen -translate-x-1/2 py-17">
          <div
            onClick={() => navigate('/quizzes')}
            className="group mx-auto w-full max-w-360 cursor-pointer px-6 sm:px-12 lg:px-24"
          >
            <p className="font-raleway text-4xl leading-tight font-black tracking-normal text-white sm:text-6xl lg:text-8xl lg:leading-13.75">
              200+
            </p>
            <p className="font-raleway mt-4 flex items-center gap-4 text-2xl leading-tight font-black tracking-normal text-white transition-all duration-300 ease-out [text-decoration-skip-ink:none] group-hover:underline sm:mt-6 sm:text-3xl lg:mt-8 lg:text-5xl lg:leading-13.75">
              Quiz games
              <HoverIcon />
            </p>
          </div>
        </div>

        <div className="bg-auth-link relative left-1/2 h-32 w-screen -translate-x-1/2 py-8 sm:h-44 lg:h-57.5">
          <div
            onClick={() => navigate('/quizzes')}
            className="group mx-auto w-full max-w-360 cursor-pointer px-6 sm:px-12 lg:px-24"
          >
            <p className="font-raleway text-4xl leading-tight font-black tracking-normal text-white sm:text-6xl lg:text-8xl lg:leading-13.75">
              25+
            </p>
            <p className="font-raleway mt-4 flex items-center gap-4 text-2xl leading-tight font-black tracking-normal text-white transition-all duration-300 ease-out [text-decoration-skip-ink:none] group-hover:underline sm:mt-6 sm:text-3xl lg:mt-8 lg:text-5xl lg:leading-13.75">
              Different genre
              <HoverIcon />
            </p>
          </div>
        </div>
        <div className="absolute top-25 left-194.75 z-100">
          <LandingText />
        </div>
        <div className="absolute -top-33.25 bottom-0 left-139 w-272.75 overflow-hidden">
          <div className="h-272.75 w-272.75 rounded-full bg-black"></div>
        </div>
        <img src={LandingPic} className="absolute -top-89.5 left-173" alt="" />
      </div>
    </div>
  );
}

export default LandingHero;
