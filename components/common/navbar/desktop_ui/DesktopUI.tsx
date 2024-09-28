import DesktopNavLinks from "./DesktopNavLinks";
import { NavLink } from "../Navbar";
import DesktopAuthLinks from "../auth/DesktopAuthLinks";

interface Props {
  links: NavLink[],
}

const DesktopUI: React.FC<Props> = ({links}) => {
  return (
    <>
    <DesktopNavLinks links={links}/>
    <DesktopAuthLinks />
    </>
  );
}

export default DesktopUI;