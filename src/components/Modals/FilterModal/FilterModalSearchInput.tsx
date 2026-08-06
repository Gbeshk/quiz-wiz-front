import { SearchIcon } from '@/components/UI';

type FilterModalSearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function FilterModalSearchInput({
  value,
  onChange,
}: FilterModalSearchInputProps) {
  return (
    <div className="relative flex w-full items-center">
      <SearchIcon className="pointer-events-none absolute top-1/2 left-4.5 -translate-y-1/2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-inter placeholder:text-auth-placeholder border-t-auth-border border-b-auth-border h-18 w-full border-t border-b pr-4 pl-11 text-sm leading-6 font-normal tracking-normal focus:outline-none"
        placeholder="Search"
      />
    </div>
  );
}
