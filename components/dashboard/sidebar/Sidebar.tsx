import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import SideNavLinks from "./SideNavLinks";
import { Container } from "postcss";
import Image from "next/image";
import UserProfile from "./UserProfile";
import PremiumPlan from "./PremiumPlan";

export interface sidebarLinks {
  title: string;
  url: string;
  icon: any;
}

const Sidebar = () => {
  const sideNavItems: sidebarLinks[] = [
    {
      title: "Control Panel",
      url: "/dashboard",
      icon: "ph:circles-four",
    },
    {
      title: "Market View",
      url: "/MarketView",
      icon: "healthicons:market-stall",
    },
    {
      title: "Popular updates",
      url: "/PopularUpdates",
      icon: "ion:bulb-outline",
    },
    {
      title: "Sniper Bot",
      url: "/SniperBot",
      icon: "material-symbols:robot-2-outline",
    },
    {
      title: "stats",
      url: "/Stats",
      icon: "uil:arrow-growth",
    },
    {
      title: "Rewards",
      url: "/Rewards",
      icon: "material-symbols:trophy-outline",
    },
    {
      title: "Admin Panel",
      url: "/adminDashboard",
      icon: "carbon:user-admin",
    },
  ];

  return (
    // main Container
    <div className="w-full h-screen flex flex-col iver justify-between text-white sticky top-0">
      {/* top wrapper */}
      <div className="w-full flex flex-col pt-6 px-4">
        {/* logo wrapper */}
        <div className="flex items-center px-2 pb-8">
          <Image
            src={"/logo.png"}
            alt=""
            width={117}
            height={32}
            className="w-[117px] h-auto"
          />
        </div>
        {/* user profile wrapper */}
        <div className="flex pb-12">
          <UserProfile />
        </div>
        <div className="w-full flex flex-col justify-center">
          <ul className="flex flex-col gap-2">
            {sideNavItems.map((item) => (
              <li key={item.title}>
                <SideNavLinks item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* bottom wrapper */}
      <div className="w-full px-2 pb-4">
        {/* premium plan */}
        <div>
          <PremiumPlan />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
