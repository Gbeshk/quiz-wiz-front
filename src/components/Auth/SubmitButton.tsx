import { ArrowRight } from '@/components/UI/Icons';
interface SubmitButtonProps {
  label: string;
}

export default function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="group rounded-lg w-106.5 h-14 bg-black flex items-center justify-center gap-2 mt-3.5 font-inter font-semibold text-base  text-white cursor-pointer transition-shadow duration-300 hover:shadow-[0px_8px_10px_0px_#00000033,0px_6px_30px_0px_#0000001F,0px_16px_24px_0px_#00000024]"
    >
      {label}
      <span className="w-0 opacity-0 overflow-hidden group-hover:w-4 group-hover:opacity-100 transition-all duration-300">
        <ArrowRight />
      </span>
    </button>
  );
}
