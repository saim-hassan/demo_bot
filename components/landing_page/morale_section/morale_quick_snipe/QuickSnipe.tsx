import React from "react";
import Image from "next/image";
import Button from "@/components/common/navbar/Button";

const QuickSnipe = () => {

  function handleClick() {
    
  }

  return (
    
      <div className="flex flex-col tablet:flex-row w-full gap-2 justify-center tablet:justify-start items-center">
        <Button
          text="SNIPE NOW"
          className="w-full tablet:w-fit bg-white text-[#030418] text-[14px] tablet:text-[16px] desktop:text-[18px] rounded py-1 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4 font-bold"
          onClick={() => handleClick()}
        />
        <p className=" text-white px-5 ">ON</p>
        <div className="w-full flex justify-center items-center tablet:w-fit">
          <div className="flex justify-start items-center">
            <Image
              src={"/ethereum.png"}
              alt="icon"
              width={32}
              height={32}
              className="bg-[#141426] rounded-full w-[16px] tablet:w-[32px] h-auto"
            />
            <p className="text-white text-[12px] tablet:text-[16px] px-3">Ethereum</p>
          </div>
          <p className="text-white px-5">|</p>
          <div className="flex justify-start items-center">
            <Image
              src={"/uniswap.png"}
              alt="icon"
              width={32}
              height={32}
              className="bg-[#FF007A] rounded-full w-[16px] tablet:w-[32px] h-auto"
            />
            <p className="text-white px-3 text-[12px] tablet:text-[16px]">Uniswap v2.0 & v3.0</p>
          </div>
        </div>
      </div>
  );
};

export default QuickSnipe;
