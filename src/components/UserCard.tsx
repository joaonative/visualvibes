import { Link } from "react-router-dom";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <Link to={`/profile`} className="flex flex-col bg-layer rounded p-4">
      <div className="-space-y-8 flex flex-col items-center">
        <img
          src={user.backgroundImageUrl}
          alt=""
          width={512}
          height={128}
          className="rounded w-full h-32"
        />
        <img
          src={user.imageUrl}
          alt=""
          width={58}
          height={58}
          className="object-cover rounded-full w-14 h-14"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold">{user.name}</h1>
          <h3 className="text-base font-bold text-dark/75">{user.job}</h3>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex flex-col items-center">
            <h2 className="font-bold">{user.followers}</h2>
            <h4>Seguidores</h4>
          </span>
          <span className="flex flex-col items-center">
            <h2 className="font-bold">{user.likes}</h2>
            <h4>Curtidas</h4>
          </span>
          <span className="flex flex-col items-center">
            <h2 className="font-bold">{user.posts}</h2>
            <h4>Publicações</h4>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
