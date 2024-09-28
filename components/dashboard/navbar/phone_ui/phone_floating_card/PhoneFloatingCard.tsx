import Link from "next/link";
// import { NavLink } from "../../Navbar";
import {v4 as uuidv4} from 'uuid';
import { Icon } from "@iconify/react/dist/iconify.js";
import ConnectButton from "@/components/dashboard/navbar/connectWallet/ConnectButton";

interface Props {
  display: boolean,
//   links: NavLink[],
  closeHandler: () => void,
}

const PhoneFloatingCard: React.FC<Props> = ({display, closeHandler}) => {
  return (
    <div className={`fixed top-0 right-0 transition-all duration-300 ease-in-out ${display ? 'translate-x-0' : 'translate-x-full'} w-screen h-screen bg-[#171827] text-white`}>
      <button onClick={closeHandler} className="absolute top-3 right-5">
        <Icon
          icon={'maki:cross'} 
          width={40} 
          height={40} 
          className="text-white"
        />
      </button>
      <div className="flex flex-col items-center justify-center p-4 mt-20">
        {/* { links.map(link => <Link className="p-4 w-full border-0 border-b-[1px] text-center font-semibold border-gray-700" key={uuidv4()} href={link.url}>{link.title}</Link>) } */}
      </div>
      <div className="flex flex-col gap-4 p-4">
        {/* <AuthLinks /> */}
        <ConnectButton />
      </div>
    </div>
  );
}

export default PhoneFloatingCard;