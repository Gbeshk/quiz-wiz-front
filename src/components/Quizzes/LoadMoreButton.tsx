import LoadMoreArrow from '@/components/UI/Icons/LoadMoreArrow';

interface LoadMoreButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export default function LoadMoreButton({
  isLoading,
  onClick,
}: LoadMoreButtonProps) {
  return (
    <div className="mx-auto mt-10 flex justify-center px-24">
      <button
        type="button"
        onClick={onClick}
        disabled={isLoading}
        className="bg-auth-link/3 border-auth-link/3 text-auth-link font-inter flex h-12 w-37.5 cursor-pointer items-center justify-center gap-2 rounded-lg border text-base leading-6 font-semibold shadow-[0px_1px_2px_0px_#1018280D]"
      >
        {isLoading ? (
          <div className="border-auth-link/30 border-t-auth-link h-6 w-6 animate-spin rounded-full border-2" />
        ) : (
          <LoadMoreArrow />
        )}
        Load more
      </button>
    </div>
  );
}
