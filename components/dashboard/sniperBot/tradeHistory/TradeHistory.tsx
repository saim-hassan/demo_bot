import React from "react";
import Card from "../../Card";
import TradeContent from "./TradeContent";

const TradeHistory = () => {
  return (
    <Card
      headingClassName="w-full text-[#E2E6E7] text-[14px] tablet:text-[16px] laptop:text-[18px] desktop:text-[24px]  font-medium tracking-[-0.48px]"
      heading="Trade History"
      link="/dashboard"
      linkClassName="text-[#A1A1A1] laptop:text-[14px] desktop:text-[16px] font-normal tracking-[-0.32px]"
      linkTitle="See all"
    >
      <div className="w-full flex flex-col justify-start items-start gap-4 text-white">
          <TradeContent />
      </div>
    </Card>
  );
};

export default TradeHistory;
