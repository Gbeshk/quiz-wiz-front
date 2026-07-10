interface ErrorTextProps {
  message: string;
}

export default function ErrorText({ message }: ErrorTextProps) {
  return (
    <span className="font-inter font-normal text-sm text-auth-error-text-color tracking-normal">
      {message}
    </span>
  );
}
