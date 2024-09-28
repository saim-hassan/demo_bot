'use client'
import { useEffect, useState } from "react";
import MarketOverviewItem from "./market_overview_item/MarketOverviewItem";
import { Icon } from "@iconify/react/dist/iconify.js";

export interface MarketOverviewStat {
  iconURL: string;
  tokenSymbol: string;
  usdValue: number;
  profit: number;
  body: string;
}

export interface MarketOverviewObject {
  id: number; // Add id field here
  title: string;
  body: string;
  stats: MarketOverviewStat[];
}


interface MarketOverviewSectionProps {
  limit?: number; // Optional prop to limit the number of displayed items
}

const MarketOverviewSection: React.FC<MarketOverviewSectionProps> = ({ limit }) => {
  const [data, setData] = useState<MarketOverviewObject[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        setTimeout(() => {
          setData(posts);
          setLoading(false);
        }, 1500);
      } catch (err) {
        console.error(err);
        setLoading(false); // Stop loading on error
      }
    };

    loadData();
  }, []);

  // If limit is provided, slice the array, otherwise show all
  const displayedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-[#E2E6E7] text-[28px] leading-[38px] tracking-[-0.56px]">Market Overview</h1>
      <div className="w-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-4">
        {loading ? (
          // Show loading icon when data is being fetched
          <div className="w-full flex justify-center items-center">
            <Icon icon="line-md:loading-loop" className="text-white w-[40px] h-auto animate-spin" />
          </div>
        ) : (
          // Show the data once it's loaded
          displayedData.map((post) => (
            <MarketOverviewItem key={`section-box-${post.id}`} marketOverviewStat={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default MarketOverviewSection;
