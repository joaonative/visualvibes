declare module "react-eva-icons" {
  import { FunctionComponent } from "react";

  export interface EvaIconProps {
    name: string;
    size?: string;
    animation?: {
      type: "zoom" | "pulse" | "shake" | "flip";
      hover: boolean;
      infinite: boolean;
    };
  }

  const Icon: FunctionComponent<EvaIconProps>;

  export default Icon;
}
