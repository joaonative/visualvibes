import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded bg-gradient-to-r from-primary to-secondary text-white xl:text-xl font-bold"
    >
      {children}
    </button>
  );
};

export default Button;
