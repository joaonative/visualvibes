/// <reference types="vite-plugin-svgr/client" />

import Icon from "../../assets/person-outline.svg?react";
interface Props {
  color: "primary" | string;
  size: number;
}

const User = ({ color, size }: Props) => {
  return (
    <Icon
      fill={color === "primary" ? "#3A3077" : color}
      width={`${size}px`}
      height={`${size}px`}
    />
  );
};

export default User;
