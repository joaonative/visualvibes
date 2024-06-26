/// <reference types="vite-plugin-svgr/client" />

import Icon from "../../assets/cube-outline.svg?react";
interface Props {
  color?: "primary" | string;
  size: number;
}

const Cube = ({ color, size }: Props) => {
  return (
    <Icon
      fill={color && color === "primary" ? "#3A3077" : color}
      width={`${size}px`}
      height={`${size}px`}
    />
  );
};

export default Cube;
