import React from 'react'
import TradeHistory from '@/components/dashboard/sniperBot/tradeHistory/TradeHistory'
import ProfitabilityChart from '@/components/dashboard/sniperBot/profitabilityChart/ProfitabilityChart'
import AppWrapper from '../dashboard/AppWrapper'

const page = () => {
  return (
        <AppWrapper>
          <div className='w-full flex flex-col laptop:flex-row justify-start items-start gap-8 px-10'>
            <div className='w-full'>
            <TradeHistory />
            </div>
            <div className='w-full'>
            <ProfitabilityChart 
            currentPrice='$40,206.20'
            fluctuation='3.4%'/>
            </div>
          </div>
        </AppWrapper>
  )
}

export default page