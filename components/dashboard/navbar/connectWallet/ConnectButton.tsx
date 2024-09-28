"use client";

import Button from "@/components/common/navbar/Button";
import { signOut, useSession } from "next-auth/react";

const ConnectButton = () => {

  const {data: session} =  useSession()
  return (
    <>
        <Button
          className="flex justify-center items-center gap-[2px] px-1 py-2 laptop:px-2 laptop:py-3 rounded bg-[#335DD2] text-[#FFF] text-[10px] laptop:text-[14px] font-medium tracking-[-0.28px] cursor-pointer"
          text={session ? 'Sign Out' : ''}
          onClick={() => signOut()}
        />
    </>
  );
};

export default ConnectButton;
