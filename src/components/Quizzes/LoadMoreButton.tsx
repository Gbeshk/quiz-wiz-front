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
    <div className="mx-auto w-360 px-24 flex justify-center mt-10">
      <button
        type="button"
        onClick={onClick}
        disabled={isLoading}
        className="flex items-center w-37.5 h-12 bg-auth-link/3 border border-auth-link/3 rounded-lg text-auth-link font-inter font-semibold text-base leading-6 cursor-pointer justify-center gap-2 shadow-[0px_1px_2px_0px_#1018280D]"
      >
        {isLoading ? (
          <div className="w-6 h-6 rounded-full border-2 border-auth-link/30 border-t-auth-link animate-spin" />
        ) : (
          <LoadMoreArrow />
        )}
        Load more
      </button>
    </div>
  );
}
