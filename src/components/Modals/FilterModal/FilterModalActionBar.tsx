type FilterModalActionBarProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default function FilterModalActionBar({
  onConfirm,
  onCancel,
}: FilterModalActionBarProps) {
  return (
    <div className="border-t-auth-border mt-auto flex h-25 shrink-0 items-center justify-between border-t px-4.5 py-5">
      <button
        onClick={onConfirm}
        className="bg-auth-link font-inter w-question flex h-full shrink-0 cursor-pointer items-center justify-center rounded-xl text-lg leading-4.25 font-semibold text-white"
      >
        Confirm
      </button>
      <button
        onClick={onCancel}
        className="font-inter text-auth-label border-auth-border w-timer flex h-full shrink-0 cursor-pointer items-center justify-center rounded-xl border text-sm leading-4.25 font-semibold"
      >
        Cancel
      </button>
    </div>
  );
}
