interface ErrorTextProps {
  message: string;
}

export default function ErrorText({ message }: ErrorTextProps) {
  return (
    <span className="font-inter font-normal text-sm text-[#F04438] tracking-normal">
      {message}
    </span>
  );
}
