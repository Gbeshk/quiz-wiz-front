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
      <div className="h-11.5 border flex items-center border-auth-border rounded-lg w-92 px-4 bg-auth-hover-bg">
        <SearchIcon className="" />
        <input
          type="text"
          name=""
          id=""
          placeholder=" Search"
          autoFocus
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="ml-1 w-71 focus:outline-none font-inter text-sm font-normal leading-6 tracking-normal placeholder:text-auth-border h-6"
        />
        <div className="h-full w-px bg-auth-border mr-4"></div>
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    );
  }

  return (
    <button onClick={onOpen} className="flex items-center gap-1.5 cursor-text">
      <SearchIcon className="" />
      <p className="text-auth-placeholder font-inter text-sm font-normal leading-6">
        Search
      </p>
    </button>
  );
}
