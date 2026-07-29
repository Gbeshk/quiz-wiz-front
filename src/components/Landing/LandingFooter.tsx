import { Logo } from '@/components/UI/Icons';
import LandingFooterColumn from './LandingFooterColumn';
import { footerColumns } from './landingFooterData';

function LandingFooter() {
  return (
    <footer className="w-full bg-white">
      <div className="max-xl1:flex-col xl1:flex-row max-ssm:px-8 mx-auto flex w-full max-w-360 flex-col gap-8 px-24 pt-11">
        <Logo />
        <div className="bg-footer-line max-xl1:inline hidden h-px w-full"></div>

        {footerColumns.map(({ title, items, className }) => (
          <LandingFooterColumn
            key={title}
            title={title}
            items={items}
            className={className}
          />
        ))}
      </div>

      <div className="bg-footer-line max-xl1:mt-4 mt-11 h-px w-full"></div>

      <div className="text-auth-placeholder font-raleway max-xl1:text-left max-ssm:px-6 mx-auto my-6 w-full max-w-360 px-24 text-right text-xs leading-3 font-medium tracking-normal">
        <p>© 2026 QW. All rights reserved</p>
      </div>
      <div className="border-t-footer-line max-xl1:flex hidden h-14 border-t"></div>
    </footer>
  );
}

export default LandingFooter;
