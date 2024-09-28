import React from 'react'

const Purchases = () => {
  return (
    <div className='w-full flex flex-col justify-center gap-3 border-l border-[#A1A1A1] pl-2'>
        <div className='w-full flex justify-between items-center gap-3'>
            <div className='w-full flex flex-col items-start justify-center gap-2'>
                <p className='text-[#A1A1A1] text-[12px] font-medium'>Buys</p>
                <p className='text-white font-normal text-[12px]'>210,027</p>
                <div className='w-full flex items-center h-[2px] bg-[#FF1F3A] rounded-full'></div>
            </div>
            <div className='w-full flex flex-col items-end justify-center gap-2'>
                <p className='text-[#A1A1A1] text-[12px] font-medium'>Sells</p>
                <p className='text-white font-normal text-[12px]'>210,027</p>
                <div className='w-full flex items-center h-[2px] bg-[#16C784] rounded-full'></div>
            </div>
        </div>
        <div className='w-full flex justify-between items-center gap-3'>
            <div className='w-full flex flex-col items-start justify-center gap-2'>
                <p className='text-[#A1A1A1] text-[12px] font-medium'>Buys vol</p>
                <p className='text-white font-normal text-[12px]'>210,027</p>
                <div className='w-full flex items-center h-[2px] bg-[#FF1F3A] rounded-full'></div>
            </div>
            <div className='w-full flex flex-col items-end justify-center gap-2'>
                <p className='text-[#A1A1A1] text-[12px] font-medium'>Sells vol</p>
                <p className='text-white font-normal text-[12px]'>210,027</p>
                <div className='w-full flex items-center h-[2px] bg-[#16C784] rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default Purchases