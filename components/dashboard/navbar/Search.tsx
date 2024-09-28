'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Search = () => {
  return (
    <div className='w-[100px] tablet:w-[400px] laptop:w-[500px] desktop:w-[700px] max-w-full bg-[#10171E] rounded-full px-4 py-4 flex justify-start items-center gap-2'>
        <div className='flex justify-center items-center w-[12px] tablet:w-[24px] h-auto'>
            <Icon icon={'material-symbols:search'} className='text-[#A1A1A1] w-[24px] h-auto'/>
        </div>
        <div className='w-full flex justify-start items-center'>
        <input 
        type="text" 
        className='bg-transparent text-[#A1A1A1] text-[10px] tablet:text-[18px] font-normal tracking-[-0.36px] outline-none'
        placeholder='Search'
        />
        </div>
    </div>
  )
}

export default Search