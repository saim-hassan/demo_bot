import { MarketOverviewObject } from "../MarketOverviewSection";
import Header from "./Header";

interface Props {
  marketOverviewStat: MarketOverviewObject;
}

const MarketOverviewItem: React.FC<Props> = ({ marketOverviewStat }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#10171E] rounded-xl p-4 text-[#E2E6E7]">
      <Header title={marketOverviewStat.title} />
      {/* Ensure marketOverviewStat and stats exist */}
      <p>{marketOverviewStat.body}</p>
    </div>
  );
}

export default MarketOverviewItem;
