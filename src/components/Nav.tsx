import { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

const Nav = ({ name, children }: Props) => {
  return (
    <nav className="flex flex-col gap-1">
      <h3 className="font-normal text-base">{name}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </nav>
  );
};

export default Nav;
