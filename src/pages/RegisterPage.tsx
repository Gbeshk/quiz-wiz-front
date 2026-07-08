import { useState } from 'react';
import RegisterHero from '../assets/images/register/register-hero.png';
import Logo from '../components/UI/Logo';
import Eye from '../components/UI/Eye';
import EyeCrossed from '../components/UI/EyeCrossed';

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
        <h1 className="font-raleway font-extrabold text-[30px] leading-[130%] tracking-[-1%] align-middle">
          Create account
        </h1>
        <form action="" className="mt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-normal text-[14px] leading-[125%] text-[#344054] tracking-normal align-bottom">
              Username
            </label>
            <input
              type="text"
              className="rounded-lg w-106.5 h-14 focus:outline-none hover:bg-[#F9FAFB] focus:ring-[3px] focus:ring-[#BCC7FF] focus:border-[#BCC7FF] transition-all ease-in-out duration-300 border border-[#D0D5DD] py-4.5 px-4 placeholder:text-[#667085] font-inter font-normal text-[16px] leading-[125%] tracking-normal align-bottom"
              placeholder="Your username"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-normal text-[14px] leading-[125%] text-[#344054] tracking-normal align-bottom">
              Email
            </label>
            <input
              type="text"
              className="rounded-lg w-106.5 h-14 focus:outline-none hover:bg-[#F9FAFB] focus:ring-[3px] focus:ring-[#BCC7FF] focus:border-[#BCC7FF] transition-all ease-in-out duration-300 border border-[#D0D5DD] py-4.5 px-4 placeholder:text-[#667085] font-inter font-normal text-[16px] leading-[125%] tracking-normal align-bottom"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-normal text-[14px] leading-[125%] text-[#344054] tracking-normal align-bottom">
              Create a password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="rounded-lg w-106.5 h-14 focus:outline-none hover:bg-[#F9FAFB] focus:ring-[3px] focus:ring-[#BCC7FF] focus:border-[#BCC7FF] transition-all ease-in-out duration-300 border border-[#D0D5DD] py-4.5 px-4 pr-12 placeholder:text-[#667085] font-inter font-normal text-[16px] leading-[125%] tracking-normal align-bottom"
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
          </div>{' '}
          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-normal text-[14px] leading-[125%] text-[#344054] tracking-normal align-bottom">
              Create a password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="rounded-lg w-106.5 h-14 focus:outline-none hover:bg-[#F9FAFB] focus:ring-[3px] focus:ring-[#BCC7FF] focus:border-[#BCC7FF] transition-all ease-in-out duration-300 border border-[#D0D5DD] py-4.5 px-4 pr-12 placeholder:text-[#667085] font-inter font-normal text-[16px] leading-[125%] tracking-normal align-bottom"
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
            <p className="font-inter font-normal text-[14px] leading-[125%] text-[#344054] tracking-normal align-bottom">
              I accept the terms and privacy policy
            </p>
          </div>
          <button className="rounded-lg w-106.5 h-14 bg-black flex items-center justify-center mt-3.5 font-inter font-semibold text-[16px] leading-[125%] tracking-normal text-white cursor-pointer align-middle">
            Sign Up
          </button>
        </form>
        <p className="mt-9.5 font-inter font-normal text-[14px] leading-[125%] tracking-normal align-bottom">
          Already have an account?
          <span className="font-inter cursor-pointer hover:underline font-semibold text-[14px] leading-[125%] tracking-normal text-[#4B69FD] align-bottom">
            {' '}
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
