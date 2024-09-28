import Link from "next/link";
import { NavLink } from "../Navbar";

interface Props {
  links: NavLink[],
}

const DesktopNavLinks: React.FC<Props> = ({links}) => {
  return (
    <div className="text-white gap-4 space-x-10 hidden laptop:block">
      {links.map((link, index) => (
        <Link key={index} href={link.url}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default DesktopNavLinks;