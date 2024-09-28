import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";
import WalletLinks from "./WalletLinks";

interface ConnectDialogProps {
    onClose: () => void;
}

const ConnectDialog:React.FC<ConnectDialogProps> = (props) => {
  return (
    // main wrapper
    <div className="w-full flex justify-center items-center p-6 bg-[#10171E] border-2 border-[#4C5357] rounded-[20px]">
      {/* inner wrapper */}
      <div className="w-full flex flex-col justify-center items-center">
        {/* header wrapper */}
        <div className="w-full flex justify-between items-center">
          {/* icon wrapper */}
          <div className="w-[24px] h-auto max-w-full flex justify-center items-center">
            <Icon icon={'lets-icons:question'} className="text-[#A1A1A1] w-[24px] h-auto"/>
          </div>
          {/* heading wrapper */}
          <div className="w-full flex justify-center items-center">
            <p className="text-[#E2E6E7] text-[16px] font-normal leading-6 tracking-[-0.32px]">Connect Wallet</p>
          </div>
          <div className="w-[24px] h-auto max-w-full flex justify-center items-center">
            <Icon icon={'material-symbols:close'} onClick={props.onClose} className="text-[#A1A1A1] w-[24px] h-auto cursor-pointer"/>
          </div>
        </div>
        {/* links wrapper */}
        <div className="w-full flex flex-col justify-center items-start gap-4 pt-12">
            <WalletLinks />
        </div>
        {/* no wallet wrapper */}
        <div className="w-full flex justify-center items-center pt-6">
          <Link href={"/dashboard"} className="text-[#4C5357] text-[14px] font-normal leading-[18px] tracking-[-0.28px]">I don’t have a wallet</Link>
        </div>
        {/* terms wrapper */}
        <div className="flex justify-center items-center text-center pt-9">
          <p className="text-[#4C5357] text-[12px] font-normal leading-[18px] tracking-[-0.24px]">
            By connecting your wallet, you agree to our
            <Link href={"/dashbaord"} className="text-[#A1A1A1]"> Terms of Service </Link>
            and our
            <Link href={"/dashbaord"} className="text-[#A1A1A1]"> Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectDialog;
