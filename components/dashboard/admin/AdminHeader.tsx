"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React, { useState } from "react";
import UserAvatar from '@/public/user_avatar.jpeg';
import Link from "next/link";
import Notifications from "./blueDialog/Notifications";

const AdminHeader = () => {

    const [profileDropdownVisible , setProfileDropdownVisible] = useState(false)

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="w-full flex justify-end items-start gap-3">
        <Notifications />
        <button className="w-[74px] max-w-full h-auto flex justify-between items-center bg-[#0E151B] rounded-full p-[6px] gap-2" 
        onClick={() => setProfileDropdownVisible(!profileDropdownVisible)}>
            <div className="w-[32px] h-auto flex justify-center items-center rounded-full object-cover object-center">
                <Image src={UserAvatar} alt="" width={32} height={32} className="w-[32px] h-auto max-w-full rounded-full"/>
            </div>
            <div className="w-[24px] h-auto max-w-full flex justify-center items-center">
                <Icon icon={'mingcute:menu-line'} className="w-[24px] h-auto max-w-full text-[#FFF]"/>
            </div>
        </button>
      </div>
      <div className="w-full h-[74px] max-h-full flex justify-end items-center">
        {(profileDropdownVisible &&
      <div className="w-[256px] max-w-full flex flex-col justify-center items-start rounded-[12px] bg-[#0E151B] p-3">
        <Link href={'dashboard'} className="w-full text-[14px] text-[#FAFAFA] font-normal hover:bg-[#131A23] px-2 rounded-[8px]">Profile</Link>
        <Link href={'dashboard'} className="w-full text-[14px] text-[#FAFAFA] font-normal hover:bg-[#131A23] px-2 rounded-[8px]">Logout</Link>
      </div>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
