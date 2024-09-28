import React from "react";

const CoinPriceDetails = [
  {
    coin: "SOL",
    price: "$75",
    stats: "10.67%(24h)",
    profit: "$200",
    lost: "$200",
  },
];

const CoinPrice = () => {
  return (
    <>
      {CoinPriceDetails.map((item, index) => (
        <div key={index} className="w-full flex flex-col">
          <div className="w-full flex justify-start items-center">
            <p className="text-[14px] text-[#A1A1A1] font-normal">Wrapped {item.coin} price</p>
          </div>
          <div className="w-full flex justify-start gap-2">
            <div className="flex justify-start items-center"><h1 className="text-[#FFF] text-[38px] font-medium">{item.price}</h1></div>
            <div className="flex justify-start items-center pt-2"><p className={`text-[16px] font-normal ${item.stats > '0' ? 'text-[#16C784]' : 'text-[#FF1F3A]'}`}>{item.stats}</p></div>
          </div>
          <div className="w-full flex justify-start items-center gap-4">
            <div className="flex gap-2"><p className="text-[16px] text-[#A1A1A1]">Profit: <span className="text-white"> {item.profit}</span></p></div>
            <div className="flex gap-2"><p className="text-[16px] text-[#A1A1A1]">Lost: <span className="text-white"> {item.lost}</span></p></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CoinPrice;
