'use client'

import React from "react";
import Card from "../../Card";
import PieChart from "./PieChart";
import Timebutton from "./Timebutton";
import { useState } from "react";

interface chartProps {
  currentPrice:string;
  fluctuation: string;
}

const ProfitabilityChart:React.FC<chartProps> = (props) => {
  const [progressValue, setProgressValue] = useState<number>(90);

  function updateProgressValue(label: string) {
    switch (label) {
      case '12 months':
        setProgressValue(90);
        break;
      case '30 days':
        setProgressValue(65);
        break;
      case '7 days':
        setProgressValue(50);
        break;
      }
      setProgressValue(0);
  }

  return (
    <Card
      heading="Profitability chart"
      headingClassName="text-[#4C5357] text-[12px] laptop:text-[14px] desktop:text-[16px] font-medium"
      link=""
      linkTitle=""
      linkClassName=""
    >
      <div className="w-full flex flex-col justify-between items-start">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[#FFF] text-[20px] laptop:text-[24px] desktop:text-[30px] font-medium">
            {props.currentPrice}
          </h1>
          <p className="text-[#335DD2] text-[12px] desktop:text-[14px] font-normal">{props.fluctuation}</p>
        </div>
        <div className="w-[166px] max-w-full h-auto flex justify-center laptop:justify-start items-center pt-6">
          <PieChart progress={progressValue}/>
        </div>
        <div className="w-full flex justify-center items-center mt-8 border-2 border-[#333741] rounded-lg">
          <Timebutton label="12 months" onClick={() => updateProgressValue('12 months')}/>
          <Timebutton label="30 days" onClick={() => updateProgressValue("30 days")}/>
          <Timebutton label="7 days" onClick={() => updateProgressValue("7 days")}/>
        </div>
      </div>
    </Card>
  );
};

export default ProfitabilityChart;