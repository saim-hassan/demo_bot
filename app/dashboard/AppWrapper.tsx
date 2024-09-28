import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Navbar from '@/components/dashboard/navbar/Navbar'
import Sidebar from '@/components/dashboard/sidebar/Sidebar'
import React from 'react'

interface AppWrapperProps {
    children: React.ReactNode;
}

const AppWrapper:React.FC<AppWrapperProps> = ({children}) => {
  return (
    <div className='flex bg-[#0B0E12]'>
        <div className='hidden laptop:block bg-[#0E151B] w-[240px] max-w-full'>
            <Sidebar />
        </div>
        <div className='w-full bg-[#0B0E12] flex flex-col pb-10'>
            <Navbar />
            <DashboardHeader />
            {children}
        </div>
    </div>
  )
}

export default AppWrapper