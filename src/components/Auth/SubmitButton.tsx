interface SubmitButtonProps {
  label: string;
}

export default function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="rounded-lg w-106.5 h-14 bg-black flex items-center justify-center mt-3.5 font-inter font-semibold text-base  text-white cursor-pointer "
    >
      {label}
    </button>
  );
}
