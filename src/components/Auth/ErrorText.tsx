interface ErrorTextProps {
  message: string;
}

export default function ErrorText({ message }: ErrorTextProps) {
  return (
    <span className="font-inter text-auth-error-text-color text-sm font-normal tracking-normal">
      {message}
    </span>
  );
}
