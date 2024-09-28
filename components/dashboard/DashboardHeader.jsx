'use client'
import { usePathname } from "next/navigation";
import React from "react";

const DashboardHeader = () => {
  const pathname = usePathname();

  // Helper function to format the pathname
  const formatPathname = (pathname)=> {
    // Remove underscores and capitalize the words
    const formattedPathname = pathname
      .split("/")
      .pop() // Get the last part of the pathname
      .replace(/([a-z])([A-Z])/g, '$1 $2'); 
    return formattedPathname;
  };

  const formattedPathname = formatPathname(pathname);

  return (
    <div className="w-full flex px-10 mb-10">
      <h1 className="text-[#E2E6E7] text-[24px] laptop:text-[36px] font-normal tracking-[-1.08px] leading-10">
        {pathname === "/dashboard" ? "Control Panel" : formattedPathname}
      </h1>
    </div>
  );
};

export default DashboardHeader;
