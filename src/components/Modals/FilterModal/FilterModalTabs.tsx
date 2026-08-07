import { cn } from '@/lib';

export type MobileTab = 'filter' | 'sort';

type FilterModalTabsProps = {
  activeTab: MobileTab;
  onChange: (tab: MobileTab) => void;
};

export default function FilterModalTabs({
  activeTab,
  onChange,
}: FilterModalTabsProps) {
  return (
    <div className="bg-logout-hover-bg mt-8 flex h-12 w-full items-center justify-between rounded-3xl">
      <button
        type="button"
        onClick={() => onChange('filter')}
        className={cn(
          'border-px font-inter h-full w-1/2 cursor-pointer rounded-3xl border text-sm leading-5 font-semibold tracking-normal',
          activeTab === 'filter'
            ? 'border-auth-border text-auth-link bg-white'
            : 'text-mobile-toggle border-transparent bg-transparent',
        )}
      >
        Filter
      </button>
      <button
        type="button"
        onClick={() => onChange('sort')}
        className={cn(
          'border-px font-inter h-full w-1/2 cursor-pointer rounded-3xl border text-sm leading-5 font-semibold tracking-normal',
          activeTab === 'sort'
            ? 'border-auth-border text-auth-link bg-white'
            : 'text-mobile-toggle border-transparent bg-transparent',
        )}
      >
        Sort by
      </button>
    </div>
  );
}
