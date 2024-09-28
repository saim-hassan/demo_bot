import React from "react";
import Wallet from "./Wallet";
import Card from "../../Card";
import RewardsTable from "./RewardsTable";

const ClaimRewards = () => {
  return (
    <Card
    heading="Claim Rewards"
    headingClassName="text-[#FAFAFA] text-[22px] font-medium"
    link=""
    linkClassName=""
    linkTitle=""
    >
        <div className="w-full flex flex-col justify-center gap-8">
        <Wallet amount={100} />
        <RewardsTable />
        </div>
    </Card>
  );
};

export default ClaimRewards;
