import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import AdminSideNavLinks from "./AdminSideNavLinks";
import { Container } from "postcss";
import Image from "next/image";
import AdminProfile from './AdminProfile';

export interface sidebarLinks {
  title: string, 
  url: string,
  icon: any
}

const AdminSidebar = () => {

 const sideNavItems: sidebarLinks[] = [
    {
      title: "Dashboard",
      url: "/adminDashboard",
      icon: "ph:circles-four",
    },
    {
      title: "Trade History",
      url: "/tradeHistory",
      icon: "bi:bar-chart",
    },
    {
      title: "Rewards",
      url: "/individualRewards",
      icon: "mingcute:cursor-2-line",
    },
  ];

  return (
    // main Container
    <div className="w-full h-screen flex flex-col iver justify-between text-white sticky top-0">
      {/* top wrapper */}
      <div className="w-full flex flex-col pt-6 px-4">
        {/* logo wrapper */}
        <div className="flex items-center px-2 pb-8">
            <Image src={'/logo.png'} alt='' width={117} height={32} className="w-[117px] h-auto"/>
        </div>
        <div className="w-full flex flex-col justify-center">
          <ul className="flex flex-col gap-2">
            {sideNavItems.map((item) => (
              <li key={item.title}>
                <AdminSideNavLinks item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* bottom wrapper */}
      <div className="w-full px-2 pb-4">
        {/* premium plan */}
        <div>
            <AdminProfile />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
