import React from 'react'

const SummaryCards = [
    {
        title: 'Total connected wallets',
        value: 2812
    },
    {
        title: 'Total profit',
        value: 1280
    },
    {
        title: 'Total lose',
        value: 8856
    },
    {
        title: 'Total transactions',
        value: 345
    },
    {
        title: 'Successful transactions',
        value: 345
    }
]

const Summary = () => {
  return (
    <div className='w-full flex flex-col py-10'>
        <div className='w-full flex justify-start items-center'>
            <h1 className='text-[#FFF] text-[24px] font-medium'>Summary</h1>
        </div>
        <div className='w-full flex flex-wrap justify-start items-center gap-1 py-5 laptop:flex-nowrap'>
        {SummaryCards.map((item:any, index: number) => (
        <div key={index} className='w-full flex bg-[#0E151B] rounded-[16px] p-[16px]'>
            <div className='w-full flex flex-col justify-center items-start'>
                <div className='flex justify-start items-center'>
                    <p className='text-[#2D4B5F] text-[14px] font-normal'>{item.title}</p>
                </div>
                <div className='flex justify-start items-center'>
                    <p className='text-[#FFF] text-[24px] font-medium'>{item.value}</p>
                </div>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Summary