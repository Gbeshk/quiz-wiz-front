import type { LandingFooterColumnProps } from '@/types/landing';
import { Link } from 'react-router-dom';

function LandingFooterColumn({
  title,
  items,
  className = '',
}: LandingFooterColumnProps) {
  return (
    <div className={className}>
      <p className="font-inter text-footer-text text-sm leading-5 font-semibold">
        {title}
      </p>
      {items.map((item) =>
        item === 'Quizzes' ? (
          <Link key={item} to="/quizzes">
            <p className="text-auth-text font-inter max-xl1:mt-4 mt-6 text-xs leading-5">
              {item}
            </p>
          </Link>
        ) : (
          <p
            key={item}
            className="text-auth-text font-inter max-xl1:mt-4 mt-6 text-xs leading-5"
          >
            {item}
          </p>
        ),
      )}
    </div>
  );
}

export default LandingFooterColumn;
