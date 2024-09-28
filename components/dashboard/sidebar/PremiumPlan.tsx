'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const PremiumPlan = () => {
  return (
    // main wrapper
    <div className='w-full p-2 rounded-2xl justify-center items-center bg-[#131A23]'>
        {/* inner wrapper */}
        <div className='w-full flex flex-col justify-between items-start gap-3'>
            {/* heading wrapper */}
            <div className='w-full flex justify-start items-center'>
                <p className='text-[#E2E6E7] text-[16px] font-normal leading-5 tracking-[-0.32px]'>Premium plan</p>
            </div>
            {/* plan wrapper */}
            <div className='w-full flex p-[6px] justify-center items-center bg-[#18222F] border-2 border-[#4C5357] rounded-[10px]'>
                {/* plan inner wrapper */}
                <div className='w-full flex flex-col gap-[6px] justify-between items-start'>
                    {/* plan top */}
                    <div className='w-full flex justify-between items-center gap-2'>
                        {/* plan top left */}
                        <div className='flex justify-start items-center'>
                            <p className='text-[#A1A1A1] text-[12px] font-normal tracking-[-0.24px]'>8 days left</p>
                        </div>
                        {/* plan top right */}
                        <div className='flex justify-end items-center'>
                            <button className='flex justify-between items-center gap-[2px] px-1 py-2 rounded bg-[#335DD2]'>
                                <div className='flex justify-center items-center w-[16px] h-[16px]'>
                                    <Icon icon={'material-symbols:upgrade'} className='text-[#FFF] w-[16px] h-auto'/>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='text-[#FFF] text-[12px] font-medium tracking-[-0.24px]'>Upgrade</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* plan bottom */}
                    <div className='w-full flex justify-start items-center bg-[#E2E6E7] rounded-xl'>
                        {/* progress bar */}
                        <div className='flex w-[166px] max-w-full h-[2px] bg-[#FF1F3A] rounded-xl'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PremiumPlan