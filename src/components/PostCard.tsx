import { Link } from "react-router-dom";
import Button from "./Button";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <div
      className="w-full h-40 md:h-64 flex items-end p-2 rounded"
      style={{
        backgroundImage: `url(${post.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-end">
        <Button>
          <Link
            to={`/artist/${post.authorId}`}
            className="text-white flex items-center gap-2"
          >
            <img
              src={post.authorImageUrl}
              alt=""
              width={32}
              height={32}
              className="h-6 w-6 xl:h-8 xl:w-8 3xl:w-10 3xl:h-10 rounded-full object-cover"
            />
            {post.authorName}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
