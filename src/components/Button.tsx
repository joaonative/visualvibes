import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  normal?: boolean;
  primary?: boolean;
  outline?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  normal,
  primary,
  outline,
  danger,
  disabled,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 px-3 py-2 rounded  xl:text-xl font-bold ${
        primary
          ? "bg-primary text-white"
          : outline
          ? "bg-white text-primary"
          : danger
          ? "bg-red-500 text-white"
          : normal
          ? "bg-layer text-dark"
          : "bg-gradient-to-r from-primary to-secondary text-white"
      } disabled:bg-layer disabled:text-dark`}
    >
      {children}
    </button>
  );
};

export default Button;
