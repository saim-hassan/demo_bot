import Link from 'next/link'
import React from 'react'

interface Props {
    headingClassName: string;
    heading: string;
    linkClassName: string;
    linkTitle: string;
    link: string;
    children: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
  return (
    // main wrapper
    <div className='w-full h-full flex justify-center items-start rounded-3xl bg-[#10171E] p-6'>
        {/* inner wrapper */}
        <div className='w-full flex flex-col justify-between items-start gap-8'>
            {/* header wrapper */}
            <div className='w-full flex justify-between items-center'>
                {/* heading wrapper */}
                <div className='flex justify-center items-center'>
                    <h1 className={props.headingClassName}>
                        {props.heading}
                    </h1>
                </div>
                {/* link wrapper */}
                <div className='flex justify-center items-center'>
                    <Link href={props.link} className={props.linkClassName}>{props.linkTitle}</Link>
                </div>
            </div>
            {/* children wrapper */}
            <div className='w-full flex'>
                {props.children}
            </div>
        </div>
    </div>
  )
}

export default Card