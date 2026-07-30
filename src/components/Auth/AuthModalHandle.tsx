interface AuthModalHandleProps {
  onClick: () => void;
}

export function AuthModalHandle({ onClick }: AuthModalHandleProps) {
  return (
    <button
      onClick={onClick}
      className="bg-mobile-modal-close absolute top-4 right-1/2 h-1 w-8 cursor-pointer opacity-40"
    ></button>
  );
}
