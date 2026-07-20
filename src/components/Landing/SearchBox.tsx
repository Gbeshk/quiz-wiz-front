import SearchIcon from '../UI/Icons/SearchIcon';
import CloseIcon from '../UI/Icons/CloseIcon';

interface SearchBoxProps {
  isOpen: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  onOpen: () => void;
  onClose: () => void;
}

export default function SearchBox({
  isOpen,
  query,
  onQueryChange,
  onOpen,
  onClose,
}: SearchBoxProps) {
  if (isOpen) {
    return (
      <div className="border-auth-border bg-auth-hover-bg flex h-11.5 w-92 items-center rounded-lg border px-4">
        <SearchIcon className="" />
        <input
          type="text"
          name=""
          id=""
          placeholder=" Search"
          autoFocus
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="font-inter placeholder:text-auth-border ml-1 h-6 w-71 text-sm leading-6 font-normal tracking-normal focus:outline-none"
        />
        <div className="bg-auth-border mr-4 h-full w-px"></div>
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    );
  }

  return (
    <button onClick={onOpen} className="flex cursor-text items-center gap-1.5">
      <SearchIcon className="" />
      <p className="text-auth-placeholder font-inter text-sm leading-6 font-normal">
        Search
      </p>
    </button>
  );
}
