import AdminWrapper from '@/components/dashboard/admin/AdminWrapper'
import React from 'react'
import TradeHistory from '@/components/dashboard/admin/adminTradeHistory/TradeHistory'

const page = () => {
  return (
    <AdminWrapper>
      <div className='w-full flex flex-col justify-start items-start gap-3 h-screen laptop:h-auto'>
      <div className="w-full flex justify-start items-center">
        <h1 className="text-[#E2E6E7] text-[24px] laptop:text-[36px] font-normal tracking-[-1.08px] leading-10">
          Dashboard
        </h1>
      </div>
        <TradeHistory />
      </div>
    </AdminWrapper>
  );
};

export default page;