import React from "react";
import { v4 as uuidV4 } from "uuid";
import Image from "next/image";

const TradeContent = () => {
  const content = [
    {
      title: "XRP",
      price: "$345.90",
      entry: "$200",
      exit: "$200",
      gas: "$200",
      icon: "/trade1.png",
    },
    {
      title: "XRP",
      price: "$345.90",
      entry: "$200",
      exit: "$200",
      gas: "$200",
      icon: "/trade2.png",
    },
    {
      title: "XRP",
      price: "$345.90",
      entry: "$200",
      exit: "$200",
      gas: "$200",
      icon: "/trade3.png",
    },
    {
      title: "XRP",
      price: "$345.90",
      entry: "$200",
      exit: "$200",
      gas: "$200",
      icon: "/trade4.png",
    },
    {
      title: "XRP",
      price: "$345.90",
      entry: "$200",
      exit: "$200",
      gas: "$200",
      icon: "/trade5.png",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-start gap-3 overflow-scroll laptop:overflow-hidden">
      {content.map((items, uuidV4) => (
        <div key={uuidV4} className="w-full flex justify-start items-center gap-3">
          {/* icon wrapper */}
          <div className="w-[40px] h-auto flex justify-center items-center p-2">
            <Image
              src={items.icon}
              alt="Crypto Icon"
              width={40}
              height={40}
              className="w-[40px] h-auto"
            />
          </div>
          {/* content wrapper */}
          <div className="w-full flex flex-col justify-between items-start">
            {/* title and price wrapper */}
            <div className="w-full flex justify-start items-center gap-1">
              {/* title wrapper */}
              <p className="text-[#E2E6E7] text-[0.875rem] font-normal">
                {items.title}
              </p>
              <span className="text-[#335DD2] text-[0.75rem] font-normal">
                {items.price}
              </span>
            </div>
            {/* price breakdown wrapper */}
            <div className="w-full flex justify-start items-center gap-3">
              <div>
                <p className="text-[#4C5357] text-[0.75rem] font-normal">
                  Entry: 
                  <span className="text-[#E2E6E7] text-[0.75rem] font-normal">
                    { items.entry}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[#4C5357] text-[0.75rem] font-normal">
                  Exit: 
                  <span className="text-[#E2E6E7] text-[0.75rem] font-normal">
                    {items.exit}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[#4C5357] text-[0.75rem] font-normal">
                  Gas: 
                  <span className="text-[#E2E6E7] text-[0.75rem] font-normal">
                    {items.gas}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradeContent;
