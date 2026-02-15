import { MonthlyEarning } from '@/features/dashboard/components/MonthlyEarning'
import ProfileWelcome from '@/features/dashboard/components/ProfileWelcome'
import SalesOverview from '@/features/dashboard/components/SalesOverview'
import { TopCards } from '@/features/dashboard/components/TopCards'
import { YearlyBreakup } from '@/features/dashboard/components/YearlyBreakup'
import React from 'react'

export default function Home() {
  return (
     <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <ProfileWelcome/>
        </div>
        <div className="col-span-12">
          <TopCards />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <SalesOverview />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <YearlyBreakup />
            </div>
            <div className="col-span-12">
              <MonthlyEarning />
            </div>
          </div>
        </div>
        {/* <div className="lg:col-span-4 col-span-12">
          <RecentTransaction />
        </div>
        <div className="lg:col-span-8 col-span-12 flex">
          <ProductPerformance />
        </div>
        <div className="col-span-12">
          <Footer />
        </div> */}
      </div>
    </>
  )
}
