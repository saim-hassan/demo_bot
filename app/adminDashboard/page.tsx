import TradeHistory from '@/components/dashboard/admin/adminTradeHistory/TradeHistory';
import React from 'react'
import AdminWrapper from '@/components/dashboard/admin/AdminWrapper'
import IndividualWalletRewards from '@/components/dashboard/admin/individualWalletRewards/IndividualWalletRewards';
import Summary from '@/components/dashboard/admin/summary/Summary';
import { useSession } from 'next-auth/react';

const Page:React.FC = () => {
  const{data:session} = useSession();
  return (
    <>
    {session ? (
    <AdminWrapper>
      <div className='w-full flex flex-col'>
      <div className="w-full flex justify-start items-center">
        <h1 className="text-[#E2E6E7] text-[24px] laptop:text-[36px] font-normal tracking-[-1.08px] leading-10">
          Dashboard
        </h1>
      </div>
        <IndividualWalletRewards />
        <TradeHistory />
        <Summary />
      </div>
    </AdminWrapper>
    ): (
      <h1>Loading</h1>
    )} 
    </>
  )
}

export default Page