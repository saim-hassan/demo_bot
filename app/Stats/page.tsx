import React from 'react'
import Stats from '@/components/dashboard/stats/Stats'
import AppWrapper from '../dashboard/AppWrapper'

const page = () => {
  return (
    <AppWrapper>
        <div className='w-full flex justify-center items-start px-10'>
        <Stats />
        </div>
    </AppWrapper>
  )
}

export default page