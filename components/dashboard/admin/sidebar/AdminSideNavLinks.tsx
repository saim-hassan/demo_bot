'use client'

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminSideNavLinks = ({ item }:any) => {

    const pathname = usePathname()

  return (
    <div className="w-full text-[#4C5357] hover:text-[#E2E6E7]">
      <Link href={item.url} 
      className={`${'w-full flex items-center justify-start self-stretch p-3 rounded-lg border-2-[#223144] hover:bg-[#131A23]  gap-2'} 
      ${pathname === item.url && 'bg-[#131A23] text-[#E2E6E7] ring ring-[#223144]'}`}>
        <div className="flex justify-center items-center w-[20px] max-w-full h-[20px]">
          <Icon icon={item.icon} />
        </div>
        <div className="w-full flex items-center text-[16px] font-normal tracking-[-0.32px]">
            {item.title}
        </div>
      </Link>
    </div>
  );
};

export default AdminSideNavLinks;
