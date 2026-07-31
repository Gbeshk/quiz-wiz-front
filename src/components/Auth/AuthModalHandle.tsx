interface AuthModalHandleProps {
  onClick: () => void;
}

export function AuthModalHandle({ onClick }: AuthModalHandleProps) {
  return (
    <button
      onClick={onClick}
      className="bg-mobile-modal-close absolute top-4 left-1/2 h-1 w-8 -translate-x-1/2 cursor-pointer opacity-40"
    />
  );
}
