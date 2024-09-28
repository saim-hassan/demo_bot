import React from 'react'

interface Wallet {
    amount: number;
}

const Wallet:React.FC<Wallet> = (props) => {
  return (
    <div className='w-full flex items-center px-4 py-5 bg-[#131A23] border-2 border-[#4C5357] rounded-2xl'>
        <div className='w-full flex justify-between items-center'>
            <div>
                <p className='text-[#A1A1A1] text-[16px] font-normal'>Wallet</p>
            </div>
            <div>
                <p className='text-[#A1A1A1] text-[16px] font-normal'>
                {props.amount}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Wallet