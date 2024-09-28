"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import {v4 as uuidv4} from 'uuid'

const FeatureData = (props: any) => {
  const Features = [
    {
      title: "Anti-rug Protection: ",
      description:
        "Anti-rug Protection: XVBot will trigger a sell when an unnatural sell amount is noticed, or when a remove liquidity request is called.",
    },
    {
      title: "Anti-Mev:",
      description:
        "Anti-Mev: XVBot will hide your transactions from the mempool, allowing you to enjoy protection from sandwiching bots.",
    },
    {
      title: "Price Alerts: ",
      description:
        "Get instant notification on telegram when your assets move in prices and make informed decisions on your trades.",
    },
    {
      title: "Portfolio Monitor: ",
      description:
        "Stay informed on the performance of your portfolio across different tokens.",
    },
    {
      title: "News and Announcements: ",
      description:
        "Receive timely updates, announcements and news that might have an impact on your holdings.",
    },
    {
      title: "Social Sentiment: ",
      description:
        "Get an up-to-date analysis of the social sentiments of a token based on social media data.",
    },
    {
      title: "Convenient Subscription: ",
      description:
        "Upgrade or downgrade your subscription mode as you explore the different features and functionalities of XVBot.",
    },
    {
      title: "Token Information: ",
      description: "Get audit-level information of a given token.",
    },
    {
      title: "New Listings: ",
      description:
        "XVBot will provide real-time updates on newly listed tokens on the supported blockchain.",
    },
    {
      title: "Marketcap and Volume: ",
      description:
        "XVBot will reveal a token's market cap and trading volume to help you gauge whether a token is worth trading.",
    },
  ];

  return (
      <div className="flex flex-col justify-center">
        {Features.map((feature, index) => (
          <ul key={uuidv4()}>
            <li
              className={`flex items-center py-4 px-4 gap-4 rounded-xl ${
                index % 2 === 0 ? "bg-[#171827]" : "bg-transparent"
              }`}
            >
              <div className="flex justify-center p-1 items-center bg-[#111123] border-4 border-[#26273E] rounded-full">
                <Icon
                  icon={"mdi:tick"}
                  className="text-white w-[16px] h-[16px]  md:w-[16px] md:h-[16px] lg:w-[16px] lg:h-[16px]"
                />
              </div>
              <div className="flex items-center justify-start">
                <p className="text-[#E2E6E7] text-[16px] font-semibold tracking-[-0.32px] leading-6">
                  {feature.title}
                  <span className="text-[#E2E6E7] text-[16px] font-normal">
                    {feature.description}
                  </span>
                </p>
              </div>
            </li>
          </ul>
        ))}
      </div>
  );
};

export default FeatureData;
