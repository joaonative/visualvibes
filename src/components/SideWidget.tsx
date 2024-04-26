import { useUser } from "../contexts/User";
import UserCard from "./UserCard";

const SideWidget = () => {
  const { user } = useUser();
  return (
    <aside className="hidden xl:flex flex-col gap-6">
      <UserCard user={user} />
    </aside>
  );
};

export default SideWidget;
