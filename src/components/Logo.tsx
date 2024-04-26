import { APP_NAME } from "../constants";
import Cube from "./icons/Cube";

const Logo = () => {
  return (
    <span className="flex items-center gap-1">
      <Cube color="primary" size={32} />
      <p className="text-transparent bg-clip-text font-bold text-2xl bg-gradient-to-r from-primary to-secondary">
        {APP_NAME}
      </p>
    </span>
  );
};

export default Logo;
