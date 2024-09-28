import React from 'react'
import Purchases from './Purchases'

const CoinHistory = () => {
  return (
    <div className='w-full flex bg-[#131A23] rounded-[10px] py-4 px-3'>
        <div className='w-full flex flex-col justify-center items-center gap-3'>
            <div className='w-full flex justify-evenly items-center bg-[#0C111D] rounded-[10px]'>
                <button className='text-white font-normal text-[12px] p-3 hover:bg-[#161B26] rounded-[8px] w-full'>10m</button>
                <button className='text-white font-normal text-[12px] p-3 hover:bg-[#161B26] rounded-[8px] w-full'>1h</button>
                <button className='text-white font-normal text-[12px] p-3 hover:bg-[#161B26] rounded-[8px] w-full'>4h</button>
                <button className='text-white font-normal text-[12px] p-3 hover:bg-[#161B26] rounded-[8px] w-full'>24h</button>
            </div>
            <div className='w-full flex flex-wrap laptop:flex-nowrap justify-between items-center gap-7'>
                <div className='flex flex-col justify-between items-start gap-5'>
                    <div className='flex flex-col items-start justify-center'>
                        <p className='text-[#A1A1A1] text-[12px] font-medium'>Transactions</p>
                        <p className='text-[#F0F0F0] text-[12px] font-normal'>210,027</p>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p className='text-[#A1A1A1] text-[12px] font-medium'>Volume</p>
                        <p className='text-[#F0F0F0] text-[12px] font-normal'>210,027</p>
                    </div>
                </div>
                <div className='w-full'>
                    <Purchases />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoinHistory