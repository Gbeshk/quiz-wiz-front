import { ArrowRight } from '@/components/UI/Icons';
interface SubmitButtonProps {
  label: string;
}

export default function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="group font-inter mt-3.5 flex h-14 w-106.5 cursor-pointer items-center justify-center gap-2 rounded-lg bg-black text-base font-semibold text-white transition-shadow duration-300 hover:shadow-[0px_8px_10px_0px_#00000033,0px_6px_30px_0px_#0000001F,0px_16px_24px_0px_#00000024]"
    >
      {label}
      <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100">
        <ArrowRight />
      </span>
    </button>
  );
}
