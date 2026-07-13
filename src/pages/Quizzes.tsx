'use client';

import { LandingFooter, LandingHeader } from '@/components/Landing';
import CategoryTabs from '@/components/Quizzes/CategoryTabs';

export default function QuizzesPage() {
  return (
    <div className="w-full flex mx-auto flex-col">
      <LandingHeader />
      <CategoryTabs />
      <div className="mx-auto gap-8 w-360 mt-11.5 px-24 flex items-center justify-between flex-wrap">
        <div className="shadow-[0px_4px_6px_-2px_#10182808,0px_12px_16px_-4px_#10182814] w-98.5 h-128 px-6 py-8">
          <div className="w-full bg-red-100 h-60" />
          <div className="mt-8" />
        </div>
      </div>
      <LandingFooter />
    </div>
  );
}
