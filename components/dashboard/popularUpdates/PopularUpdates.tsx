"use client";

import React, { useState } from "react";
import Card from "../Card";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import TokenDetails from "../tokenDetails/TokenDetails";

interface PopularUpdatesProps {
classname: string;
}

const PopularUpdates: React.FC<PopularUpdatesProps> = (props) => {
    const updates = [
        {
            title: 'News',
            description: 'Lorem ipsum dolor sit amet. Et enim possimus aut commodi beatae.'
        },
        {
            title: 'Announcement',
            description: 'Lorem ipsum dolor sit amet. Et enim possimus aut commodi beatae.'
        },
        {
            title: 'Token Information',
            description: 'Lorem ipsum dolor sit amet. Et enim possimus aut commodi beatae.'
        },
    ]

    const  [visible, setVisible] = useState(false);

  return (
    <>
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        className="w-[60vw] h-screen text-white"
      >
        <TokenDetails />
      </Dialog>
      <div className='flex flex-col flex-[2] gap-4'>
      <h1 className={`text-[#E2E6E7] text-[1.75rem] font-normal tracking-[-0.56px] ${props.classname}`}>Popular Updates</h1>
      <Card
        heading=""
        headingClassName=""
        link=""
        linkClassName=""
        linkTitle=""
      >
        <div className="w-full flex flex-col justify-center items-start gap-4">
          {updates.map((items) => (
            <div
              key={items.title}
              className="w-full flex justify-start items-start p-2 gap-2 bg-[#131A23] rounded-lg cursor-pointer"
              onClick={() => setVisible(true)}
            >
              <div className="w-[42px] desktop:w-[48px] h-auto flex justify-center items-center bg-[#18222F] rounded-md p-3">
                <Icon
                  icon={"ion:bulb-outline"}
                  className="text-[#A1A1A1] w-[24px] h-auto"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-center">
                <div className="w-full flex justify-between items-center">
                  <div>
                    <h1 className="text-[#FFF] text-[12px] desktop:text-[16px] font-normal">
                      {items.title}
                    </h1>
                  </div>
                  <div className="w-[14px] desktop:w-[20px] h-auto">
                    <Icon
                      icon={"grommet-icons:share"}
                      className="text-white w-[14px] desktop:w-[20px]"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-start items-start">
                  <p className="text-[#A1A1A1] text-[10px] desktop:text-[12px] font-normal">
                    {items.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      </div>
    </>
  );
};

export default PopularUpdates;
