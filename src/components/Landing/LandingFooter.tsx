import { Logo } from '@/components/UI/Icons';
import LandingFooterColumn from './LandingFooterColumn';
import { footerColumns } from './landingFooterData';

function LandingFooter() {
  return (
    <>
      <div className="w-360 mx-auto pt-11 pl-24 flex">
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
      <div className="w-360 mx-auto h-px bg-footer-line mt-11"></div>
      <div className="w-360 mx-auto text-right text-auth-placeholder mb-6 mt-6 font-raleway font-medium text-xs leading-3 tracking-normal ">
        <p className="mr-24"> © 2024 QW. All rights reserved</p>
      </div>
    </>
  );
}

export default LandingFooter;
