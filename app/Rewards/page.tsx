import HoldingReward from "@/components/dashboard/rewards/HoldingReward";
import RewardDescription from "@/components/dashboard/rewards/RewardDescription";
import RewardHistory from "@/components/dashboard/rewards/RewardHistory";
import ClaimRewards from "@/components/dashboard/rewards/claimRewards/ClaimRewards";
import RewardsTable from "@/components/dashboard/rewards/claimRewards/RewardsTable";
import React from "react";
import AppWrapper from "../dashboard/AppWrapper";

const page = () => {
  return (
    <AppWrapper>
      <div className="w-full flex flex-col laptop:px-4 px-10">
        <div className="w-full grid grid-cols-12 gap-x-4 gap-y-4 sm:gap-y-6">
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <RewardDescription
              heading="Revenue Share"
              description1="Current APY"
              descriptionStats="+78%"
              description2="Claim XV Tokens"
              description3="Claim ETH"
            />
          </div>
          <div className="col-span-12 laptop:col-span-8">
            <ClaimRewards />
          </div>
          <div className="col-span-12 laptop:col-span-4">
            <div className="pb-4">
              <HoldingReward />
            </div>
            <div>
              <RewardHistory />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-8">
            <RewardDescription
              heading="Referral Rewards"
              description1="Total Earned Referral Rewards"
              descriptionStats="78 ETH"
              description2="Available Referral Rewards"
              description3="Claim ETH"
            />
          </div>
          <div className="col-span-12 laptop:col-span-8">
            <div className="w-full bg-[#10171E] p-4 sm:p-6 rounded-3xl">
              <RewardsTable />
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default page;