// Stats component
'use client'

import React from "react";
import TradeTable from "./TradeTable";
import SolLogo from "@/public/trade3.png";
import sushiwrap from "@/public/sushiwrap.png";
import uniswap from '@/public/uniswap.png';
import pancakeswap from "@/public/pancakeswap.png";
import JitoLogo from "@/public/trade2.png";
import CoinbaseLogo from "@/public/trade5.png";
import MetaLogo from "@/public/MetaMask.png";
import XrpLogo from '@/public/trade1.png';
import BinanceLogo from '@/public/Binance.png';
import ArbitrumLogo from '@/public/Arbitrum.png';

const TradeHistory = () => {
  const products = [
    {
      wallets: { icon: MetaLogo, text: "Metamask"},
      addresses: "",
      token: { icon: XrpLogo, text: "XRP"},
      buyExchange: "Sushiswap",
      sellExchange: 'Pancakeswap',
      buyPrice: {text: '$4,867'},
      sellPrice: {text: '$8,837'},
      profitLoss: {text: '+$345.90' ,icon: pancakeswap },
    },
    {
      wallets: { icon: CoinbaseLogo, text: "Coinbase"},
      addresses: "",
      token: { icon: JitoLogo, text: "JTO"},
      buyExchange: "Pancakeswap",
      sellExchange: 'Uniswap',
      buyPrice: {text: '$4,867'},
      sellPrice: {text: '$8,837'},
      profitLoss: {text: '-$345.90' ,icon: pancakeswap },
    },
    {
      wallets: { icon: BinanceLogo, text: "Binance"},
      addresses: "",
      token: { icon: SolLogo, text: "SOL"},
      buyExchange: "Uniswap",
      sellExchange: 'Sushiswap',
      buyPrice: {text: '$4,867'},
      sellPrice: {text: '$8,837'},
      profitLoss: {text: '+$345.90' ,icon: pancakeswap },
    },
    {
      wallets: { icon: ArbitrumLogo, text: "Arbitrum"},
      addresses: "",
      token: { icon: CoinbaseLogo, text: "LINK"},
      buyExchange: "Uniswap",
      sellExchange: 'Pancakeswap',
      buyPrice: {text: '$4,867'},
      sellPrice: {text: '$8,837'},
      profitLoss: {text: '-$345.90' ,icon: pancakeswap },
    },
  ];

  const columns = [
    { field: "wallets", header: "Wallets" },
    { field: "addresses", header: "Addresses" },
    { field: "token", header: "Token" },
    { field: "buyExchange", header: "Buy Exchange" },
    { field: "sellExchange", header: "Sell Exchange" },
    { field: "buyPrice", header: "Buy Price" },
    { field: "sellPrice", header: "Sell Price" },
    { field: "profitLoss", header: "Profit/Loss" },
  ];

  return (
    <>
    <div className="w-full flex flex-col rounded-2xl bg-[#0E151B]">
      <h1 className="text-[#fff] text-[24px] font-medium p-[24px]">Trade History</h1>
      <TradeTable data={products} columns={columns} />
    </div>
    </>
  );
};

export default TradeHistory;
