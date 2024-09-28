"use client";

import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import BlueDialog from "./blueDialog"; // You might need to adjust the path
import Image from "next/image";
import UserRequestAvatar from "@/public/UserRequestAvatar.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";

const AirdropRequest = () => {
  const [visible, setVisible] = useState(false);

  const handleButtonClick = () => {
    console.log("Button");
    setVisible(true);
  };

  return (
    <>
      <Dialog
        visible={visible}
        // style={{ width: "90vw" }}
        className="w-[80vw] laptop:w-[35vw] max-w-full"
        onHide={() => setVisible(false)}
      >
        {/* <BlueDialog> */}
        <div className="w-full flex bg-[#0E151B] rounded-[24px]">
          <div className="w-full flex flex-col justify-center items-center p-4 gap-10">
            {/* Your content here */}
              

            <div className="w-full flex flex-col justify-center items-start gap-2">
              <div className="w-full flex justify-between items-center">
                <div className="w-full flex justify-start items-end">
                <p className="text-[14px] tablet:text-[18px] text-[#4C5357] font-medium">Rewards: </p><span className="text-[22px] tablet:text-[26px] text-[#E2E6E7] font-medium"> 0000</span>
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
              <div className="w-full flex justify-between items-center bg-[#131A23] p-3 rounded-[12px] gap-2">
                <div className="w-full bg-transparent">
                <input type="text" name="wallet_address" className="w-full bg-transparent text-[#A1A1A1]"/>
                </div>
                <div className="w-[24px] h-auto flex justify-center items-center">
                  <Icon icon={'lucide:copy'} className="w-[24px] text-[#A1A1A1]"/>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center gap-2">
              <button className="w-full flex justify-center items-center bg-[#121A21] text-[12px] tablet:text-[16px] text-[#FFF] font-bold rounded-[8px] p-4">
                DELETE
              </button>
              <button className="w-full flex justify-center items-center bg-[#335DD2] text-[12px] tablet:text-[16px] text-[#FFF] font-bold rounded-[8px] p-4">
                APPROVE
              </button>
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
          Airdrop rewards
        </button>
        <Icon
          icon={"ic:outline-north-east"}
          className="w-[20px] h-auto text-[#fff]"
        />
      </div>
    </>
  );
};

export default AirdropRequest;
