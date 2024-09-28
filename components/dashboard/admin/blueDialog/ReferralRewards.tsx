"use client";

import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const RewardRequests = [
    {avatar:'/userRequest1.jpeg' , description: ' sent you a request for claim rewards ', name: 'Alia', days: '2' },
    {avatar:'/userRequest2.jpeg' , description: ' sent you a request for claim rewards ', name: 'Michael', days: '2' },
    {avatar:'/userRequest3.jpeg' , description: ' sent you a request for claim rewards ', name: 'Alex', days: '2' },
    {avatar:'/userRequest4.jpeg' , description: ' sent you a request for claim rewards ', name: 'Snow Bill', days: '3' },
    {avatar:'/userRequest5.jpeg' , description: ' sent you a request for claim rewards ', name: 'Jordan', days: '3' },
    {avatar:'/userRequest6.jpeg' , description: ' sent you a request for claim rewards ', name: 'Gary Lamb', days: '3' },
    {avatar:'/userRequest4.jpeg' , description: ' sent you a request for claim rewards ', name: 'Snow Bill', days: '3' },
    {avatar:'/userRequest5.jpeg' , description: ' sent you a request for claim rewards ', name: 'Jordan', days: '3' },
    {avatar:'/userRequest6.jpeg' , description: ' sent you a request for claim rewards ', name: 'Gary Lamb', days: '3' },
]

const ReferralRewards = () => {
  const [visible, setVisible] = useState(false);

  const handleButtonClick = () => {
    console.log("Button");
    setVisible(true);
  };

  return (
    <>
      <Dialog
        visible={visible}
        // style={{ width: "50vw", height: '80vh' }}
        className="w-[80vw] laptop:w-[35vw] h-[80vh] max-w-full"
        onHide={() => setVisible(false)}
      >
        {/* <BlueDialog> */}
        <div className="w-full flex bg-[#0E151B] rounded-[24px]">
          <div className="w-full flex flex-col justify-center items-center p-4 gap-10">
            {/* Your content here */}
              

            <div className="w-full flex flex-col justify-center items-start gap-2">
              <div className="w-full flex justify-between items-center">
                <div className="w-full flex justify-start items-end">
                <p className="text-[24px] text-[#FAFAFA] font-medium">Rewards requests </p>
                </div>
                <div>
                <button onClick={() => setVisible(false)}>
                  <Icon
                    icon={"maki:cross"}
                    width={24}
                    height={24}
                    className="text-[#FAFAFA]"
                  />
                </button>
              </div>
              </div>
              
              {RewardRequests.map((rewards, index) => (
              <div className="w-full flex justify-start items-start gap-2" key={index}>
                <div className="w-[38px] tablet:w-[48px] h-auto flex justify-center items-center object-cover object-center rounded-full">
                    <Image src={rewards?.avatar} alt="user_avatar" width={48} height={48} className="w-[38px] tablet:w-[48px] h-[38px] tablet:h-[48px] rounded-full" />
                </div>
                <div className="w-full flex flex-col justify-center items-start">
                    <div className="w-full flex justify-start">
                        <p className="text-[10px] tablet:text-[14px] text-[#FAFAFA] font-semibold"><strong>{rewards?.name}</strong>{rewards?.description}</p>
                    </div>
                    <div className="w-full flex justify-start">
                        <p className="text-[12px] text-[#335DD2] font-normal">{rewards?.days} days ago</p>
                    </div>
                </div>
              </div>
              ))}
            </div>

        {/* </BlueDialog> */}
          </div>
        </div>
      </Dialog>
      <div className="flex justify-start items-center gap-1">
        <button
          onClick={handleButtonClick}
          className="text-[#335DD2] text-[12px] tablet:text-[18px] font-medium"
        >
          Referral rewards
        </button>
        <Icon
          icon={"ic:outline-north-east"}
          className="w-[20px] h-auto text-[#fff]"
        />
      </div>
    </>
  );
};

export default ReferralRewards;