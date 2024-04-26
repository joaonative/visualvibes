import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  path: string;
  name: string;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  highlighted?: boolean;
}

const NavItem = ({
  name,
  path,
  activeIcon,
  inactiveIcon,
  highlighted,
}: Props) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState<boolean>();

  useEffect(() => {
    if (highlighted) {
      setIsActive(true);
    } else {
      setIsActive(location.pathname === path);
    }
  }, [location]);

  return (
    <Link
      to={path}
      className={`w-max md:w-full rounded px-3 py-2 flex items-center gap-2 font-bold text-xl ${
        isActive
          ? highlighted
            ? "bg-gradient-to-r from-primary to-secondary text-white"
            : "bg-primary text-white"
          : "bg-layer text-dark "
      }`}
    >
      {isActive ? activeIcon : inactiveIcon}
      <p className="hidden md:block">{name}</p>
    </Link>
  );
};

export default NavItem;
