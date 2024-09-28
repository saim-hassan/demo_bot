import QuickSnipe from "./morale_quick_snipe/QuickSnipe";

const MoraleSection = () => {
  return (
    <div className="w-full morale-background-image px-[20px] tablet:px-[50px] laptop:px-[136px]">
      <div className="w-[1168px] h-[652px] max-w-full flex items-center justify-between mx-auto">

        {/* Content */}
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-white font-bold text-[30px] mx-auto tablet:text-[50px] desktop:text-[70px] tablet:mx-0  ">
            Meet XVBot
          </h1>
          <p className="text-white text-[20px] mx-auto tablet:text-[32px] tablet:mx-0 leading-8">
            The most powerful TG Trading Bot
          </p>
          <p className="text-white max-w-[600px] text-[16px] text-center tablet:text-[18px] font-[400] opacity-55 leading-8 py-10 tablet:text-left">
            XVBot is engineered for speed and simplicity, delivering
            transactions at the speed of light, and outpacing the fastest bot in
            the space. Bring the world of blockchain technology to your fingers
            by harnessing the capabilities of the most powerful trading bot ever
            built.
          </p>
          
            <QuickSnipe />
          
        </div>
    </div>

    </div>
  );
};

export default MoraleSection;
