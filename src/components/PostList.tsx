import PostCard from "./PostCard";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="flex flex-col gap-3 xl:gap-6">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
