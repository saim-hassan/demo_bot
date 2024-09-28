'use client'

import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useSession } from 'next-auth/react'

const UserProfile = () => {
    const {data: session} = useSession();
    console.log("data from session >" , JSON.stringify(session))
  return (
    // main wrapper
    <div className='w-full flex justify-start items-center p-2 rounded-xl bg-[#0B0E12]'>
        {/* inner wrapper */}
        <div className='w-full flex justify-between items-center'>
            {/* left wrapper */}
            <div className='w-full flex gap-2 justify-start items-center'>
                {/* profile picture wrapper */}
                <div className='flex justify-center items-center w-[40px] h-[40px] rounded'>
                    <Image src = {'/user_profile_image.png'} alt = '' width = {40} height = {40} className='w-[40px] max-w-full h-[40px]'/>
                </div>
                {/* user info wrapper */}
                <div className='w-full flex flex-col justify-center items-start'>
                    {/* title wrapper */}
                    <div className='flex justify-start items-center'>
                        <p className='text-[#A1A1A1] text-[12px] font-normal tracking-[-0.24px]'>User</p>
                    </div>
                    {/* name wrapper */}
                    <div className='flex justify-start items-center'>
                        <p className='text-[#E2E6E7] text-[16px] font-medium tracking-[-0.32px] leading-3'>Ibrahim</p>
                    </div>
                </div>
            </div>
            {/* right wrapper */}
            <div className='flex justify-center items-center'>
                {/* icon wrapper */}
                <div className='flex justify-center items-center'>
                    <Icon icon={'gg:select'} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile