import { Icon } from "@iconify/react/dist/iconify.js";
import PhoneFloatingCard from "./phone_floating_card/PhoneFloatingCard";
import { NavLink } from "../Navbar";

interface Props {
  display: boolean,
  toggleDisplay: () => void,
  links: NavLink[],
  closeDisplay: () => void,
}

const PhoneUI: React.FC<Props> = ({display, toggleDisplay, links, closeDisplay}) => {
  return (
    <div className="flex laptop:hidden justify-center items-center">
      <button onClick={toggleDisplay}>
        <Icon
          icon={'material-symbols:menu'} 
          width={40} 
          height={40} 
          className="text-white"
        />
      </button>
      <PhoneFloatingCard links={links} display={display} closeHandler={closeDisplay} />
    </div>
  );
}

export default PhoneUI;