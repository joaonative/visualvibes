/// <reference types="vite-plugin-svgr/client" />

import Icon from "../../assets/settings-2-outline.svg?react";
interface Props {
  color?: "primary" | string;
  size: number;
}
const Settings = ({ color, size }: Props) => {
  return (
    <Icon
      fill={color && color === "primary" ? "#3A3077" : color}
      width={`${size}px`}
      height={`${size}px`}
    />
  );
};

export default Settings;
