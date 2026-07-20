import { Logo } from '@/components/UI/Icons';
import LandingFooterColumn from './LandingFooterColumn';
import { footerColumns } from './landingFooterData';

function LandingFooter() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-360 px-24 pt-11">
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

      <div className="bg-footer-line mt-11 h-px w-full"></div>

      <div className="text-auth-placeholder font-raleway mx-auto my-6 w-full max-w-360 px-24 text-right text-xs leading-3 font-medium tracking-normal">
        <p>© 2026 QW. All rights reserved</p>
      </div>
    </footer>
  );
}

export default LandingFooter;
