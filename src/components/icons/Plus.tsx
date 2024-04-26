/// <reference types="vite-plugin-svgr/client" />

import Icon from "../../assets/plus-circle-outline.svg?react";
interface Props {
  color: "primary" | string;
  size: number;
}

const Plus = ({ color, size }: Props) => {
  return (
    <Icon
      fill={color === "primary" ? "#3A3077" : color}
      width={`${size}px`}
      height={`${size}px`}
    />
  );
};

export default Plus;
