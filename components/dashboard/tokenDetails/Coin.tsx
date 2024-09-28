import Image from 'next/image'
import React from 'react'
import solana from '@/public/trade3.png';

const CoinDetail = [
    {
        logo: solana,
        name: "Solana",
        description: 'SOL / USDC'
    }
]

const Coin = () => {
  return (
    <>
    {CoinDetail.map((item, index) => (
        <div key={index} className='w-full flex justify-between gap-2'>
            <div className='w-[72px] max-w-full h-auto flex justify-center items-center object-cover object-center'>
                <Image src={item.logo} alt='coin logo' width={72} height={72} className='w-[72px] h-auto' />
            </div>
            <div className='w-full flex flex-col justify-between items-start'>
                <div className='w-full'>
                    <h1 className='text-[#FFF] text-[25px] font-normal'>{item.name}</h1>
                </div>
                <div>
                    <p className='text-[#A1A1A1] text-[16px] font-normal'>{item.description}</p>
                </div>
            </div>
        </div>
        ))}
    </>
  )
}

export default Coin