import React from 'react'
import AppWrapper from '../dashboard/AppWrapper'
import PopularUpdates from '@/components/dashboard/popularUpdates/PopularUpdates'

const Page = () => {
  return (
    <AppWrapper>
        <div className='w-full flex flex-col laptop:flex-row justify-start items-start gap-8 px-10 h-fit'>
            <div className='w-full flex'>
        <PopularUpdates classname = 'hidden'/>
            </div>
            <div className='w-full flex'>
        <PopularUpdates classname = 'hidden'/>
            </div>
            <div className='w-full flex'>
        <PopularUpdates classname = 'hidden'/>
            </div>
        </div>
    </AppWrapper>
  )
}

export default Page