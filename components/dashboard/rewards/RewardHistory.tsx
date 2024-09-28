import React from 'react'
import Card from '../Card'

const RewardEarned = [
    {
        title: 'TOTAL EARNED REWARDS',
        value: '28.97',
    },
    {
        title: 'TOTAL EARNED REWARDS',
        value: '28.97',
    },
    {
        title: 'TOTAL EARNED REWARDS',
        value: '28.97',
    },
]

const RewardHistory = () => {
  return (
    <Card
    heading='Reward History'
    headingClassName='text-[#FAFAFA] text-[22px] font-medium'
    link=''
    linkClassName='text-[#A1A1A1] text-[12px] font-normal cursor-default'
    linkTitle='Holder Reward'
    >
        <div className='w-full flex flex-col  justify-center gap-2'>
            {RewardEarned.map((item, index) => (
            <div key={index} className='w-full flex justify-between'>
                {/* left div */}
                <div className=''>
                    <p className='text-[#4C5357] font-medium'>{item.title}</p>
                </div>
                {/* right div */}
                <div>
                    <p className='text-[#335DD2] text-[16px] font-normal'>{item.value}</p>
                </div>
            </div>
            ))};
        </div>
    </Card>
  )
}

export default RewardHistory