import React from 'react'
import Card from '../Card'

const RewardHistory = [
    {
        title: 'TIME',
        value: '63.34 min',
    },
    {
        title: 'REWARD FROM BOT',
        value: '45.32',
    },
    {
        title: 'REWARD FROM TOKEN TAX',
        value: '32.78',
    },
]

const HoldingReward = () => {
  return (
    <Card
    heading='Holding Reward History'
    headingClassName='text-[#FAFAFA] text-[22px] font-medium'
    link=''
    linkClassName=''
    linkTitle=''
    >
        <div className='w-full flex flex-col justify-center gap-2'>
            {RewardHistory.map((item, index) => (
            <div key={index} className='w-full flex justify-between items-center'>
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

export default HoldingReward