import React from 'react'
import Coin from './Coin'
import CoinPrice from './CoinPrice'
import CoinHistory from './coinHistory/CoinHistory'
import CoinTable from '@/public/CoinTable.png';
import Image from 'next/image';

const TokenDetails = () => {
  return (
    <div className='w-full flex bg-[#10171E] border-2 border-[#4C5357] rounded-[10px]'>
        {/* inner wrapper */}
        <div className='w-full flex flex-col justify-center p-3 gap-5'>
            {/* upper div */}
            <div className='w-full flex flex-wrap laptop:flex-nowrap justify-between items-center'>
                {/* left div */}
                <div className='w-full flex flex-col justify-between gap-6'>
                    {/* left upper */}
                    <div className='w-full flex justify-center items-center'>
                        <Coin />
                    </div>
                    {/* left lower */}
                    <div>
                        <CoinPrice />
                    </div>
                </div>
                {/* right div */}
                <div className='w-full flex'>
                    <CoinHistory />
                </div>
            </div>
            {/* lower div */}
            <div className='w-[600px] h-auto max-w-full flex justify-center items-center object-center'>
                <Image src={CoinTable} alt='Table' width={600} height={100} />
            </div>
        </div>
    </div>
  )
}

export default TokenDetails