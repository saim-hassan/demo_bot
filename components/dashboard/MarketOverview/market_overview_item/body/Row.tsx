import Image from "next/image";
import { MarketOverviewStat } from "../../MarketOverviewSection";

interface Props {
  marketOverviewStat: MarketOverviewStat;
}

const Row: React.FC<Props> = ({marketOverviewStat: {
  iconURL,
  profit,
  tokenSymbol,
  usdValue,
}}) => {
  return (
    <div className="w-full flex items-center justify-between gap-4">

      <div className="flex flex-[1] gap-[6px]">
        {/* icon */}
        <Image
          src={iconURL}
          alt={`Icon ${tokenSymbol}`}
          width={24}
          height={24}
          className="w-6 h-auto"
        />
        {/* token symbol */}
        <p className="text-[#FAFAFA]">{tokenSymbol}</p>
      </div>

      {/* usd value */}
      <p className="flex-[1] text-center">{usdValue}</p>

      {/* profit */}
      <p className={`${profit < 0 ? 'text-[#F6465D]' : 'text-[#335DD2]'} flex-[1] text-right`}>{profit > 0 && '+'}{profit}%</p>
    </div>
  );
}

export default Row;