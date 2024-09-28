import ProfitabilityChart from "./profitabilityChart/ProfitabilityChart";
import TradeHistory from "./tradeHistory/TradeHistory";

const SniperBot = () => {
  return (
    <div className='flex flex-col flex-[2] gap-4'>
      <h1 className="text-[#E2E6E7] text-[1.75rem] font-normal tracking-[-0.56px]">Sniper Bot</h1>
      <div className="flex flex-col laptop:flex-row gap-5">
        <TradeHistory />
        <ProfitabilityChart currentPrice="$40,206.20" fluctuation="3.4%"  />
      </div>
    </div>
  );
}

export default SniperBot;