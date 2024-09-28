"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface RewardDescriptionProps {
  heading: string;
  description1: string;
  descriptionStats: string;
  description2: string;
  description3: string;
}

const RewardDescription: React.FC<RewardDescriptionProps> = (props) => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-4">
      <div className="w-full flex">
        <h1 className="text-[#E2E6E7] text-[16px] tablet:text-[26px] font-medium">
          {props.heading}
        </h1>
      </div>
      <div className="w-full flex gap-8">
        <div className="flex items-center gap-1">
          <p className="text-[#4C5357] text-[10px] tablet:text-[16px] font-medium">
            {props.description1}
            <span className="text-[#335DD2] text-[10px] tablet:text-[16px] font-medium pl-1">
              {props.descriptionStats}
            </span>
          </p>
          <div className="w-[16px] h-auto flex justify-center items-start">
            <Icon icon="ion:trending-up-sharp" className="w-[16px] max-w-full h-auto text-[#335DD2]" />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-[#4C5357] text-[10px] tablet:text-[16px] font-medium">
            {props.description2}
          </p>
          <div>
          <Icon icon="ic:outline-north-east" className="w-[16px] max-w-full h-auto text-[#FAFAFA]"/>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-[#4C5357] text-[10px] tablet:text-[16px] font-medium">
            {props.description3}
          </p>
          <div>
          <Icon icon="ic:outline-north-east" className="w-[16px] max-w-full h-auto text-[#FAFAFA]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardDescription;
