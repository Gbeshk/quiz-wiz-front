import { LandingLogo } from '@/assets';
import HoverIcon from '@/components/UI/Icons/HoverIcon';
import { Link } from 'react-router-dom';
import { LandingPic } from '../UI';

function LandingHero() {
  return (
    <div className="relative mx-auto w-full max-w-360 px-0">
      <img
        src={LandingLogo}
        alt="Landing Icon"
        className="xl3:mx-0 xl3:ml-24 xl3:h-auto xl3:w-auto mx-auto mt-7 ml-32 h-30 w-75.75 max-sm:ml-8"
      />
      <p className="text-landing-text-color font-raleway xl3:ml-24 xl3:text-3xl mt-0 ml-32 text-lg leading-10 font-semibold max-sm:ml-8">
        Play with us, Explore with us
      </p>
      <div className="xl3:mt-28 relative mt-125 flex flex-col">
        <div className="bg-landing-first-section-bg xl3:z-auto relative left-1/2 z-10 h-70.5 w-screen -translate-x-1/2 py-17">
          <Link
            to="/quizzes"
            className="group max-ssm:ml-12 max-ssm:px-0 mx-auto block w-full max-w-360 cursor-pointer px-24"
          >
            <p className="font-raleway text-8xl leading-13.75 font-black tracking-normal text-white">
              200+
            </p>
            <p className="font-raleway mt-8 text-5xl leading-13.75 font-black tracking-normal text-white transition-all duration-300 ease-out">
              <span className="[text-decoration-skip-ink:none] group-hover:underline">
                Quiz games
              </span>{' '}
              <HoverIcon />
            </p>
          </Link>
        </div>

        <div className="bg-auth-link xl3:z-auto relative left-1/2 z-10 h-57.5 w-screen -translate-x-1/2 py-8 max-sm:h-70.5">
          <Link
            to="/quizzes"
            className="group max-ssm:ml-12 max-ssm:px-0 mx-auto block w-full max-w-360 cursor-pointer px-24"
          >
            <p className="font-raleway text-8xl leading-13.75 font-black tracking-normal text-white">
              25+
            </p>
            <p className="font-raleway max-ssm:w-70 mt-8 text-5xl leading-13.75 font-black tracking-normal text-white transition-all duration-300 ease-out">
              <span className="[text-decoration-skip-ink:none] group-hover:underline">
                Different genre
              </span>{' '}
              <HoverIcon />
            </p>
          </Link>
        </div>

        <div className="xl3:top-25 xl3:left-194.75 xl3:translate-x-0 absolute -top-63.5 left-1/2 z-50 -translate-x-1/2">
          <p className="font-raleway max-xl3:w-66.5 max-xl3:h-51.25 max-xl3:text-landing-text-mobile max-xl3:leading-13 text-landing-text-desktop h-61.75 w-131 leading-21 font-bold text-white">
            Our mission is to entertain <br /> & educate
          </p>
        </div>

        <div className="xl3:-top-33.25 xl3:bottom-0 xl3:left-139 xl3:w-272.75 xl3:translate-x-0 xl3:overflow-hidden absolute -top-88.5 left-1/2 z-0 -translate-x-1/2">
          <div className="xl3:h-272.75 xl3:w-272.75 h-121.5 w-121.5 rounded-full bg-black"></div>
        </div>

        <div className="xl3:-top-89.5 xl3:left-173 xl3:translate-x-0 absolute -top-118.5 left-1/2 z-20 -translate-x-1/2">
          <LandingPic />
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
