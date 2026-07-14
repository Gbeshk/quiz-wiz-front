import { cn } from '@/lib';
import CategoryScrollArrow from './CategoryScrollArrow';
import type { CategoryTabListProps } from '@/types/quizz';

export default function CategoryTabList({
  categories,
  activeCategory,
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
    <div className="relative flex flex-1 items-center min-w-0">
      <div
        className={cn(
          'absolute left-0 top-0 z-20 flex h-[calc(100%-16px)] items-center pr-4 bg-white transition-opacity duration-200',
          showBackArrow
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        )}
      >
        <CategoryScrollArrow
          direction="left"
          visible={showBackArrow}
          onClick={onSlidePrev}
        />
      </div>

      <div
        ref={scrollRef}
        onScroll={onScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        className="flex gap-6 items-center overflow-x-auto flex-1 scrollbar-none cursor-grab active:cursor-grabbing select-none"
      >
        <div>
          <div className="relative flex gap-5.5">
            {categories.map((category) => (
              <button
                key={category}
                ref={registerButtonRef(category)}
                type="button"
                onClick={() => onSelectCategory(category)}
                className={cn(
                  'transition-colors duration-200 font-semibold font-inter text-sm leading-5 whitespace-nowrap shrink-0 cursor-pointer',
                  activeCategory === category
                    ? 'text-black'
                    : 'text-auth-placeholder',
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full h-0.5 mt-4">
            <div className="absolute inset-x-0 bottom-0 h-px bg-categories-line-bg" />
            <div
              className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-out z-10 left-(--indicator-left) w-(--indicator-width)"
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
