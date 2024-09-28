import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import UserRequest from "./UserRequest";

const NewRewardRequests = [
    {avatar:'/userRequest1.jpeg' , description: ' sent you a request for claim rewards ', name: 'Jr. Jackson', days: '5 minutes ago' },
    {avatar:'/userRequest2.jpeg' , description: ' sent you a request for claim rewards ', name: 'Chris Milan', days: '10 minutes ago' },
    {avatar:'/userRequest3.jpeg' , description: ' sent you a request for claim rewards ', name: 'Lily Rose', days: '23 minutes ago' },
];

const EarlierRewardRequests = [
    {avatar:'/userRequest4.jpeg' , description: ' sent you a request for claim rewards ', name: 'Snow Bill', days: '2 days ago' },
    {avatar:'/userRequest5.jpeg' , description: ' sent you a request for claim rewards ', name: 'Jordan', days: '2 days ago' },
    {avatar:'/userRequest6.jpeg' , description: ' sent you a request for claim rewards ', name: 'Gary Lamb', days: '2 days ago' },
    {avatar:'/userRequest4.jpeg' , description: ' sent you a request for claim rewards ', name: 'Snow Bill', days: '2 days ago' },
    {avatar:'/userRequest5.jpeg' , description: ' sent you a request for claim rewards ', name: 'Jordan', days: '3 days ago' },
    {avatar:'/userRequest6.jpeg' , description: ' sent you a request for claim rewards ', name: 'Gary Lamb', days: '3 days ago' },
]

const Notifications = () => {
  const [visible, setVisible] = useState(false);
  const [showUserRequest, setShowUserRequest] = useState(false); 

  const toggleDialog = () => {
    setVisible(!visible);
    setShowUserRequest(false);
  };

  const handleUserRequest = () => {
    setShowUserRequest(!showUserRequest); // Set state to true to show UserRequest
  };

  return (
    <>
      <div className="flex justify-start items-center gap-1">
        <button 
          className="w-[44px] h-auto max-w-full flex justify-center items-center rounded-[12px] bg-[#0E151B] py-[10px] px-[6px]"
          onClick={toggleDialog} // Toggle the dialog
        >    
          <Icon icon={'ion:notifications-outline'} className="text-[#FFF] w-[44px] max-w-full h-[22px]"/>
        </button>

        {showUserRequest && <UserRequest />}
        
      {
        visible && <Dialog
        visible={visible}
        modal={false}
        className="w-[40vw] laptop:w-[30vw] max-w-full z-50 h-[75vh] fixed top-35 right-4"
        onHide={() => setVisible(false)}
        draggable={false}
        resizable={false}
      >
        <div className="w-full flex bg-[#0E151B] rounded-[24px]">
          <div className="w-full flex flex-col justify-center items-center p-4 gap-10">
            <div className="w-full flex flex-col justify-center items-start gap-2">
              <div className="w-full flex flex-col justify-center items-start gap-3">
                <div className="w-full flex justify-start items-center">
                  <p className="text-[24px] text-[#FAFAFA] font-medium">Rewards requests </p>
                </div>
                <div>
                    <p className="text-[16px] text-[#A1A1A1] font-semibold">New</p>
                </div>
              </div>
              
              {NewRewardRequests.map((rewards, index) => (
                <button className="w-full flex justify-start items-start gap-2" key={index} onClick={handleUserRequest}>
                  <div className="w-[38px] tablet:w-[48px] h-auto flex justify-center items-center object-cover object-center rounded-full">
                    <Image src={rewards?.avatar} alt="user_avatar" width={48} height={48} className="w-[38px] tablet:w-[48px] h-[38px] tablet:h-[48px] rounded-full" />
                  </div>
                  <div className="w-full flex flex-col justify-center items-start">
                    <div className="w-full flex justify-start">
                      <p className="text-[10px] tablet:text-[14px] text-[#FAFAFA] font-semibold text-left"><strong>{rewards?.name}</strong>{rewards?.description}</p>
                    </div>
                    <div className="w-full flex justify-start">
                      <p className="text-[12px] text-[#335DD2] font-normal">{rewards?.days}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="w-full flex flex-col justify-center items-start gap-2">
              <div className="w-full flex flex-col justify-center items-start gap-3">
                    <p className="text-[16px] text-[#A1A1A1] font-semibold">Earlier</p>
              </div>
              
              {EarlierRewardRequests.map((rewards, index) => (
                <button className="w-full flex justify-start items-start gap-2" key={index} onClick={handleUserRequest}>
                  <div className="w-[38px] tablet:w-[48px] h-auto flex justify-center items-center object-cover object-center rounded-full">
                    <Image src={rewards?.avatar} alt="user_avatar" width={48} height={48} className="w-[38px] tablet:w-[48px] h-[38px] tablet:h-[48px] rounded-full" />
                  </div>
                  <div className="w-full flex flex-col justify-center items-start">
                    <div className="w-full flex justify-start">
                      <p className="text-[10px] tablet:text-[14px] text-[#FAFAFA] font-semibold text-left"><strong>{rewards?.name}</strong>{rewards?.description}</p>
                    </div>
                    <div className="w-full flex justify-start">
                      <p className="text-[12px] text-[#335DD2] font-normal">{rewards?.days}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Dialog>
      }
      </div>
    </>
  );
};

export default Notifications;