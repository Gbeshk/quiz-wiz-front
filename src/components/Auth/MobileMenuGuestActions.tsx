interface MobileMenuGuestActionsProps {
  onSignUp: () => void;
  onLogIn: () => void;
}

export function MobileMenuGuestActions({
  onSignUp,
  onLogIn,
}: MobileMenuGuestActionsProps) {
  return (
    <>
      <button
        onClick={onSignUp}
        className="font-raleway flex h-11.5 w-full cursor-pointer items-center justify-center rounded-sm bg-black text-sm leading-none font-bold text-white"
      >
        Sign up
      </button>
      <button
        onClick={onLogIn}
        className="bg-quiz-completed-bg text-auth-link font-raleway flex h-11.5 w-full cursor-pointer items-center justify-center rounded-sm text-sm leading-none font-bold"
      >
        Log in
      </button>
    </>
  );
}
