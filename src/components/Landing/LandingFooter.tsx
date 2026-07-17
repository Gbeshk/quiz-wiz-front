import { Logo } from '@/components/UI/Icons';
import LandingFooterColumn from './LandingFooterColumn';
import { footerColumns } from './landingFooterData';

function LandingFooter() {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-360 w-full mx-auto pt-11 px-24 flex">
        <Logo />
        {footerColumns.map(({ title, items, className }) => (
          <LandingFooterColumn
            key={title}
            title={title}
            items={items}
            className={className}
          />
        ))}
      </div>

      <div className="w-full h-px bg-footer-line mt-11"></div>

      <div className="max-w-360 w-full mx-auto px-24 text-right text-auth-placeholder my-6 font-raleway font-medium text-xs leading-3 tracking-normal">
        <p>© 2026 QW. All rights reserved</p>
      </div>
    </footer>
  );
}

export default LandingFooter;
