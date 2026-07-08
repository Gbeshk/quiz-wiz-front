import { useState } from 'react';
import RegisterHero from '../assets/images/register/register-hero.png';
import Logo from '../components/UI/Icons/Logo';
import Eye from '../components/UI/Icons/Eye';
import EyeCrossed from '../components/UI/Icons/EyeCrossed';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center gap-20.5">
      <div className="relative">
        <div className="absolute top-10 left-10">
          <Logo />
        </div>
        <img src={RegisterHero} alt="Register Hero" className="register-hero" />
      </div>
      <div>
        <h1 className="font-raleway font-extrabold text-3xl">Create account</h1>
        <form action="" className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-inter  text-base  text-[#344054]">
              Username
            </label>
            <input
              type="text"
              className="rounded-lg w-106.5 h-14 focus:outline-none hover:bg-[#F9FAFB] focus:ring-3 focus:ring-[#BCC7FF] focus:border-[#BCC7FF] transition-all ease-in-out duration-300 border border-[#D0D5DD] py-4.5 px-4 placeholder:text-[#667085] font-inter text-base"
              placeholder="Your username"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-inter  text-base  text-[#344054]">
              Email
            </label>
            <input
              type="text"
              className="rounded-lg w-106.5 h-14 focus:outline-none hover:bg-[#F9FAFB] focus:ring-3 focus:ring-[#BCC7FF] focus:border-[#BCC7FF] transition-all ease-in-out duration-300 border border-[#D0D5DD] py-4.5 px-4 placeholder:text-[#667085] font-inter text-base"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-inter  text-base text-[#344054]">
              Create a password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="rounded-lg w-106.5 h-14 focus:outline-none hover:bg-[#F9FAFB] focus:ring-3 focus:ring-[#BCC7FF] focus:border-[#BCC7FF] transition-all ease-in-out duration-300 border border-[#D0D5DD] py-4.5 px-4 pr-12 placeholder:text-[#667085] font-inter  text-base"
                placeholder="must be 8 characters"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <Eye /> : <EyeCrossed />}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-inter text-base  text-[#344054]">
              Create a password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="rounded-lg w-106.5 h-14 focus:outline-none hover:bg-[#F9FAFB] focus:ring-3 focus:ring-[#BCC7FF] focus:border-[#BCC7FF] transition-all ease-in-out duration-300 border border-[#D0D5DD] py-4.5 px-4 pr-12 placeholder:text-[#667085] font-inter text-base"
                placeholder="must be 8 characters"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <Eye /> : <EyeCrossed />}
              </button>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-5 h-5 rounded-full border border-[#98A2B3] cursor-pointer"></div>
            <p className="font-inter  text-base  text-[#344054]">
              I accept the terms and privacy policy
            </p>
          </div>
          <button className="rounded-lg w-106.5 h-14 bg-black flex items-center justify-center mt-3.5 font-inter font-semibold text-base  text-white cursor-pointer ">
            Sign Up
          </button>
        </form>
        <p className="mt-9.5 font-inter text-base">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-inter font-semibold text-base text-[#4B69FD] hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
