import React from "react";
import FeatureData from "./featureData/FeatureData";

const Features = () => {
  return (
    <>
      {/* main */}
      <div className="flex justify-center items-center pb-[72px] px-[20px] tablet:px-[50px] laptop:px-[136px] bg-gradient-to-b from-[#171728] via-[#030418] to-[#01020A]">
        {/* content Wrapper */}
        <div className="flex flex-col w-[1168px] max-w-full justify-center items-center">
          {/* heading */}
          <div className= "pb-8">
            <h3 className="text-[30px] tablet:text-[48px] text-white font-semibold">
              Features
            </h3>
          </div>
          {/* feature list */}
          <div className="flex flex-wrap justify-center items-center]">
            <FeatureData />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
