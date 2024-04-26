import { useState } from "react";
import Button from "../components/Button";
import PostList from "../components/PostList";
import SearchInput from "../components/SearchInput";

const posts: Post[] = [
  {
    id: "123",
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww",
    title: "Arte 01",
    authorName: "Romênia",
    authorId: "1",
    likes: 4,
    authorImageUrl:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    id: "12345",
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww",
    title: "Arte 01",
    authorName: "Romênia",
    authorId: "1",
    likes: 4,
    authorImageUrl:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    id: "444",
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww",
    title: "Arte 01",
    authorName: "Romênia",
    authorId: "1",
    likes: 4,
    authorImageUrl:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww",
    title: "Arte 01",
    authorName: "Romênia",
    authorId: "1",
    likes: 4,
    authorImageUrl:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    id: "123456",
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0fGVufDB8fDB8fHww",
    title: "Arte 01",
    authorName: "Romênia",
    authorId: "1",
    likes: 4,
    authorImageUrl:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
  },
];

const Feed = () => {
  const [forYou, setForYou] = useState<boolean>(true);
  const [following, setFollowing] = useState<boolean>(false);

  const handleFilterFy = () => {
    setForYou(true);
    setFollowing(false);
  };

  const handleFilterFollowing = () => {
    setFollowing(true);
    setForYou(false);
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button primary={forYou} normal={!forYou} onClick={handleFilterFy}>
            Para Você
          </Button>
          <Button
            primary={following}
            normal={!following}
            onClick={handleFilterFollowing}
          >
            Seguindo
          </Button>
        </div>
        <SearchInput name="searchArtist" searchFn={(t) => console.log(t)} />
      </div>
      <PostList posts={posts} />
    </section>
  );
};

export default Feed;
