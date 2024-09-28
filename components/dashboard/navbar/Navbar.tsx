import React from "react";
import Search from "./Search";
import ConnectButton from "./connectWallet/ConnectButton";

const Navbar = () => {
  return (
    <>
      {/* inner wrapper */}
      <div className="w-full h-[50px] laptop:h-max flex justify-between items-center px-10 py-10 sticky top-0 z-50 bg-[#0B0E12]">
        {/* left wrapper */}
        <div className="text-white flex">
          <Search />
        </div>
        {/* right wrapper */}
        <div>
         <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
