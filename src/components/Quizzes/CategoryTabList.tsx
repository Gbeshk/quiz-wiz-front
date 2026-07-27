import { cn } from '@/lib';
import { ALL_QUIZZES } from '@/constants/categories';
import CategoryScrollArrow from './CategoryScrollArrow';
import type { CategoryTabListProps } from '@/types/quizz';

export default function CategoryTabList({
  categories,
  selectedCategories,
  onSelectCategory,
  scrollRef,
  registerButtonRef,
  indicatorLeft,
  indicatorWidth,
  showBackArrow,
  onScroll,
  onSlidePrev,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onMouseLeave,
}: CategoryTabListProps) {
  return (
    <div className="relative flex min-w-0 flex-1 items-center">
      <button
        className={cn(
          'absolute top-0 left-0 z-20 flex h-[calc(100%-16px)] items-center bg-white pr-4 transition-opacity duration-200',
          showBackArrow
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      >
        <CategoryScrollArrow
          direction="left"
          visible={showBackArrow}
          onClick={onSlidePrev}
        />
      </button>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        className="flex flex-1 cursor-grab scrollbar-none items-center gap-6 overflow-x-auto select-none active:cursor-grabbing"
      >
        <div>
          <div className="relative flex gap-5.5">
            {categories.map((category) => {
              const isSelected =
                category === ALL_QUIZZES
                  ? selectedCategories.length === 0
                  : selectedCategories.includes(category);

              return (
                <button
                  key={category}
                  ref={registerButtonRef(category)}
                  type="button"
                  onClick={() => onSelectCategory(category)}
                  className={cn(
                    'font-inter shrink-0 cursor-pointer text-sm leading-5 font-semibold whitespace-nowrap transition-colors duration-200',
                    isSelected ? 'text-black' : 'text-auth-placeholder',
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative mt-4 h-0.5 w-full">
            <div className="bg-categories-line-bg absolute inset-x-0 bottom-0 h-px" />
            <div
              className="absolute bottom-0 left-(--indicator-left) z-10 h-0.5 w-(--indicator-width) bg-black transition-all duration-300 ease-out"
              style={
                {
                  '--indicator-left': `${indicatorLeft}px`,
                  '--indicator-width': `${indicatorWidth}px`,
                } as React.CSSProperties
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
