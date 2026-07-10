import type { LandingFooterColumnProps } from '@/types/landing';

function LandingFooterColumn({
  title,
  items,
  className = '',
}: LandingFooterColumnProps) {
  return (
    <div className={className}>
      <p className="font-inter font-semibold text-sm leading-5 text-footer-text">
        {title}
      </p>
      {items.map((item) => (
        <p
          key={item}
          className="mt-6 text-auth-text font-inter text-xs leading-5 "
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default LandingFooterColumn;
