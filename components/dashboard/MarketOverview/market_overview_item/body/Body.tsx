import { MarketOverviewObject } from "../../MarketOverviewSection";
import Row from "./Row";

interface Props {
  marketOverviewStat: MarketOverviewObject;
}

const Body: React.FC<Props> = ({ marketOverviewStat }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {marketOverviewStat.stats.map(stat => <Row key={`${marketOverviewStat.title}-box-${stat.tokenSymbol}-row`} marketOverviewStat={stat} />)}
    </div>
  );
}

export default Body;