import BlueCardBox from "./blue_card_box/BlueCardBox";
import Image from "next/image";

const WhyXVSection = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-[#01020A] via-[#030418] to-[#171728]  px-[20px] tablet:px-[50px] laptop:px-[136px]">
      {/* main wrapper */}
      <div className="flex flex-col w-[1168px] max-w-full justify-center py-[72px]">
        {/* heading */}
        <div className="text-center mx-auto">
          <h3 className="text-[30px] tablet:text-[48px] text-white font-semibold">Why XV Bot</h3>
        </div>

        {/* card container */}
        <div className="flex flex-col laptop:flex-row items-center justify-between gap-5 py-8">
          {/* card 1 */}
          <BlueCardBox
            image= {'/Bot.png'}
            title="Fastest Bot"
            description="XVBot delivers your orders at the speed of light, ensuring your snipes and sales are delivered before any other trades."
          />
          {/* card 2 */}
          <BlueCardBox
            image={'/Copy.png'}
            title="Simplicity"
            description="XVBot delivers your orders at the speed of light, ensuring your snipes and sales are delivered before any other trades."
          />
          {/* card 3 */}
          <BlueCardBox
            image={'/Interface.png'}
            title="PnL Interface"
            description="XVBot delivers your orders at the speed of light, ensuring your snipes and sales are delivered before any other trades."
          />
        </div>

        {/* info image  */}
        <div className="w-full flex justify-center items-center py-[72px]">
          <Image src={'/xv_dashboard.png'} alt="XV Dashboard" width={1140} height={1064} className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default WhyXVSection;
