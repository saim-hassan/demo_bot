import React, { useState } from "react";
import Logo from "./Logo";
import PhoneUI from "./phone_ui/PhoneUI";
import DesktopUI from "./desktop_ui/DesktopUI";

export interface NavLink {
  title: string, 
  url: string,
}

const Navbar = () => {

  const navLinks: NavLink[] = [
    { title: "Sniper Bot", url: "/" },
    { title: "Sell Bot", url: "/" },
    { title: "Control Panel", url: "/dashboard" },
    { title: "Features", url: "/" },
  ];

  const [display, setDisplay] = useState(false);

  const toggleDisplay = (): void => setDisplay(!display);
  const closeDisplay = (): void => setDisplay(false);

  return (
    <nav className="bg-[#030418] h-16 laptop:h-24 fixed top-0 w-full flex items-center justify-center z-50 px-[20px] tablet:px-[50px] laptop:px-[136px]">
      <div className="w-[1168px] max-w-full container mx-auto flex justify-between items-center py-5">
        <Logo />
        <DesktopUI links={navLinks} />
        <PhoneUI display={display} toggleDisplay={toggleDisplay} links={navLinks} closeDisplay={closeDisplay} />
      </div>
    </nav>
  );
};

export default Navbar;
