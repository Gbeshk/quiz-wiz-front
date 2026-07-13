import { useState } from 'react';
import CloseIcon from '../UI/Icons/CloseIcon';
import DoneIcon from '../UI/Icons/DoneIcon';
import FilterIcon from '../UI/Icons/FilterIcon';
import SearchIcon from '../UI/Icons/SearchIcon';
import ArrowUp from '../UI/Icons/ArrowUp';
import ArrowDown from '../UI/Icons/ArrowDown';
import DiamondIcon from '../UI/Icons/DiamondIcon';
import NewestIcon from '../UI/Icons/NewestIcon';
import OldestIcon from '../UI/Icons/OldestIcon';
import SortCheckIcon from '../UI/Icons/SortCheckIcon';

interface Level {
  label: string;
  bg: string;
  text: string;
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LEVELS: Level[] = [
  { label: 'Starter', bg: '#F0F9FF', text: '#026AA2' },
  { label: 'Beginner', bg: '#EFF8FF', text: '#175CD3' },
  { label: 'Middle', bg: '#F9F5FF', text: '#6941C6' },
  { label: 'High', bg: '#FFFAEB', text: '#B54708' },
  { label: 'Very high', bg: '#FDF2FA', text: '#C11574' },
  { label: 'Dangerously high', bg: '#FFF1F3', text: '#C01048' },
];
const CATEGORIES: string[] = [
  'Geography',
  'Music',
  'Movies',
  'Television',
  'Just for fun',
  'Personality',
  'Sports',
  'History',
  'Language',
  'Literature',
  'Philosophy',
  'Math',
  'Toys',
  'Entertainment',
  'Olympics',
  'Greek philosophy',
  'Animations',
  'Psychology',
  'ART',
  'Physics',
  'Human',
  'Anatomy',
  'Geometry',
  'Dance',
  'Gadgets',
  'Internet',
  'Religion',
  'Gaming',
  'Travel',
  'Trivia',
];

const SORT_OPTIONS = [
  { key: 'az', label: 'A-Z', Icon: ArrowUp },
  { key: 'za', label: 'Z-A', Icon: ArrowDown },
  { key: 'popular', label: 'Most popular', Icon: DiamondIcon },
  { key: 'newest', label: 'Newest', Icon: NewestIcon },
  { key: 'oldest', label: 'Oldest', Icon: OldestIcon },
];

function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [myQuizzes, setMyQuizzes] = useState(false);
  const [notCompleted, setNotCompleted] = useState(false);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const toggleLevel = (label: string) => {
    setSelectedLevels((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const hasSelection =
    selectedLevels.length > 0 ||
    selectedCategories.length > 0 ||
    myQuizzes ||
    notCompleted;

  return (
    <div
      className={`absolute border bg-white rounded-xl p-4 border-black right-0 top-[calc(100%+8px)] w-266.25 h-162.5 shadow-[0px_16px_54px_0px_#0000001F] z-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="w-full p-4 bg-[#F6F6F6B2] rounded-xl h-17.5 gap-4 flex items-center justify-between">
        <button
          type="button"
          className="w-21.25 h-9.5 bg-black rounded-lg flex items-center px-4 gap-2"
        >
          <FilterIcon fill="white" />
          <p className="font-inter text-white text-sm">Filter</p>
        </button>
        <div className="relative w-full">
          <SearchIcon />
          <input
            type="text"
            className="font-inter placeholder:text-auth-placeholder text-sm leading-6 font-normal tracking-normal w-full rounded-3xl h-9.5 border border-[#66708566] pl-12"
            placeholder="Search"
          />
        </div>
        {hasSelection && (
          <>
            <div className="w-27.5 shrink-0 h-9.5 flex items-center justify-center bg-[#4B69FD] rounded-xl font-inter font-semibold text-sm leading-4.25 text-white cursor-pointer">
              Confirm
            </div>
            <div className="w-px h-3.5 bg-[#00000066]"></div>
            <p
              onClick={() => {
                setSelectedLevels([]);
                setSelectedCategories([]);
                setMyQuizzes(false);
                setNotCompleted(false);
              }}
              className="whitespace-nowrap font-inter font-normal text-sm leading-6 text-auth-placeholder cursor-pointer"
            >
              Reset all filters
            </p>
          </>
        )}
        <div onClick={onClose} className="cursor-pointer">
          <CloseIcon />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="w-157.75 h-135 border border-[#D0D5DD] rounded-lg p-4">
          <p className="font-inter font-semibold text-sm leading-5 text-[#4B69FD]">
            Filter by
          </p>
          <div className="flex items-center mt-4 gap-3">
            <p className="font-inter text-footer-text font-semibold text-sm leading-5">
              My quizzes
            </p>
            <div
              onClick={() => setMyQuizzes((prev) => !prev)}
              className={`w-4 h-4 rounded-sm flex items-center justify-center cursor-pointer ${
                myQuizzes ? 'bg-black' : 'border border-[#D0D5DD]'
              }`}
            >
              {myQuizzes && <DoneIcon />}
            </div>
          </div>
          <div className="flex items-center mt-4 gap-3">
            <p className="font-inter text-footer-text font-semibold text-sm leading-5">
              Not completed
            </p>
            <div
              onClick={() => setNotCompleted((prev) => !prev)}
              className={`w-4 h-4 rounded-sm flex items-center justify-center cursor-pointer ${
                notCompleted ? 'bg-black' : 'border border-[#D0D5DD]'
              }`}
            >
              {notCompleted && <DoneIcon />}
            </div>
          </div>
          <div className="mt-5 h-px w-full bg-[#0000001A]"></div>
          <p className="font-inter text-footer-text mt-4 font-semibold text-sm leading-5">
            Levels
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {LEVELS.map((level) => {
              const isSelected = selectedLevels.includes(level.label);
              return (
                <button
                  key={level.label}
                  type="button"
                  onClick={() => toggleLevel(level.label)}
                  style={
                    {
                      backgroundColor: isSelected ? level.text : level.bg,
                      color: isSelected ? '#FFFFFF' : level.text,
                      '--hover-bg': level.text,
                    } as React.CSSProperties
                  }
                  className="font-inter px-3 py-1.5 rounded-full ease-in-out duration-300 text-xs font-semibold transition-colors cursor-pointer hover:bg-(--hover-bg)! hover:text-white!"
                >
                  {level.label}
                </button>
              );
            })}
          </div>
          <div className="mt-4 h-px w-full bg-[#0000001A]"></div>
          <p className="font-inter text-footer-text mt-5 font-semibold text-sm leading-5">
            Categories
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <div className="flex flex-wrap gap-x-3 gap-y-4">
              {CATEGORIES.map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className={`font-inter px-3 py-2 rounded-3xl text-sm font-semibold transition-colors ease-in-out duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-auth-text hover:bg-black hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-98 h-137 border border-[#D0D5DD] rounded-lg p-4">
          <p className="font-inter font-semibold text-sm leading-5 text-[#4B69FD]">
            Sort by
          </p>
          {SORT_OPTIONS.map(({ key, label, Icon }) => {
            const isSelected = sortBy === key;
            return (
              <div
                key={key}
                onClick={() => setSortBy(key)}
                className={`mt-4 first:mt-6 font-inter font-semibold text-sm leading-6 px-3 flex items-center justify-between gap-4 text-auth-text w-full h-10 transition-all ease-in-out duration-300 rounded-lg cursor-pointer ${
                  isSelected ? 'bg-[#D9D9D933]' : 'hover:bg-[#D9D9D933]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <Icon />
                  <p>{label}</p>
                </div>
                {isSelected && <SortCheckIcon />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
