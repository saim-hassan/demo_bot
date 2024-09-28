import React from 'react'

const blueDialog = (Children: any) => {
  return (
    <div className='w-full flex bg-[#0E151B] rounded-[24px]'>
        <div className='w-full flex flex-col justify-center items-center p-3'>
            {Children}
        </div>
    </div>
  )
}

export default blueDialog