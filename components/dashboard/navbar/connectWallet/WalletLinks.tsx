import Image from 'next/image'
import React from 'react'
import Binance from '@/public/Binance.png';
import MetaMask from '@/public/MetaMask.png';
import Arbitrum from '@/public/Arbitrum.png';

const WalletLinks = () => {

    const Wallets = [
        {
            title: 'MetaMask',
            image: MetaMask
        },
        {
            title: 'Binance',
            image: Binance
        },
        {
            title: 'Arbitrum',
            image: Arbitrum
        }
    ]

  return (
    <>
    {Wallets.map((links, index) => ( 
   <div key={index} className='w-full flex justify-center items-center bg-[#18222F] border-[1.5px] border-[#4C5357] rounded-[10px] py-3 px-4 active:bg-[#0C111D] focus:bg-[#0C111D] hover:border-[#FAFAFA] focus:border-none'>
    <div className='w-full flex justify-between items-center'>
        <div className='w-full flex justify-start items-center'>
            <p className='text-[#E2E6E7] text-[16px] font-normal leading-5 tracking-[-0.32px]'>{links.title}</p>
        </div>
        <div className='w-[32px] max-w-full h-auto flex justify-center items-center'>
            <Image src={links.image} alt='icon' width={32} height={32} className='w-[32px] h-auto' />
        </div>
    </div>
   </div>
   ))}
   </>
  )
}

export default WalletLinks