import { APP_NAME } from "../constants";
import Cube from "./icons/Cube";

const Logo = () => {
  return (
    <span className="flex items-center gap-1">
      <Cube color="primary" size={320} />
      <p className="font-bold text-2xl">{APP_NAME}</p>
    </span>
  );
};

export default Logo;
