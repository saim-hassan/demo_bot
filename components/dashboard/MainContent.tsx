import React from "react";
import PopularUpdates from "./popularUpdates/PopularUpdates";
import Stats from "./stats/Stats";
import MarketOverviewSection from "./MarketOverview/MarketOverviewSection";
import SniperBot from "./sniperBot/SniperBot";

const MainContent = () => {
  return (
    <div className="w-full flex flex-col gap-x-5 gap-y-10 px-10">
      <div className="flex gap-5 flex-col desktop:flex-row">
        <SniperBot />
        <PopularUpdates classname=""/>
      </div>
      <Stats />
      <MarketOverviewSection limit={4} /> 
    </div>
  );
};

export default MainContent;