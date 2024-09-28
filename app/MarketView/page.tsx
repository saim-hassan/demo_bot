import React from "react";
import AppWrapper from "../dashboard/AppWrapper";
import MarketOverviewSection from "@/components/dashboard/MarketOverview/MarketOverviewSection";

const page = () => {
  return (
    <AppWrapper>
      <div className="w-full flex px-10 gap-4">
        <MarketOverviewSection />
      </div>
    </AppWrapper>
  );
};

export default page;
