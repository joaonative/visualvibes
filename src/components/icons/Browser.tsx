/// <reference types="vite-plugin-svgr/client" />

import Icon from "../../assets/browser-outline.svg?react";
interface Props {
  color?: "primary" | string;
  size: number;
}

const Browser = ({ color, size }: Props) => {
  return (
    <Icon
      fill={color && color === "primary" ? "#3A3077" : color}
      width={`${size}px`}
      height={`${size}px`}
    />
  );
};

export default Browser;
