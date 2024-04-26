/// <reference types="vite-plugin-svgr/client" />

import Icon from "../../assets/star-outline.svg?react";
interface Props {
  color: "primary" | string;
  size: number;
}

const Star = ({ color, size }: Props) => {
  return (
    <Icon
      fill={color === "primary" ? "#3A3077" : color}
      width={`${size}px`}
      height={`${size}px`}
    />
  );
};

export default Star;
