import type { CategoryIndicatorProps } from '@/types/quizz';

export default function CategoryIndicator({
  left,
  width,
}: CategoryIndicatorProps) {
  return (
    <div className="relative w-full h-0.5 mt-4">
      <div className="absolute inset-x-0 bottom-0 h-px bg-categories-line-bg" />
      <div
        className="absolute bottom-0 h-0.5 bg-black transition-all duration-300 ease-out z-10 left-(--indicator-left) w-(--indicator-width)"
        style={
          {
            '--indicator-left': `${left}px`,
            '--indicator-width': `${width}px`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}
