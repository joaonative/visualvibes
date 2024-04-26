/// <reference types="vite-plugin-svgr/client" />

import Icon from "../../assets/people-outline.svg?react";
interface Props {
  color?: "primary" | string;
  size: number;
}

const People = ({ color, size }: Props) => {
  return (
    <Icon
      fill={color && color === "primary" ? "#3A3077" : color}
      width={`${size}px`}
      height={`${size}px`}
    />
  );
};

export default People;
