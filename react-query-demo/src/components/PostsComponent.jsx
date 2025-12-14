import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // data considered fresh for 1 minute
    cacheTime: 1000 * 60 * 5, // keep unused data in cache for 5 minutes
    refetchOnWindowFocus: true, // automatically refetch when tab gains focus
    keepPreviousData: true, // keeps old data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h2>Posts from JSONPlaceholder</h2>

      <button onClick={() => refetch()} style={{ marginBottom: "1rem" }}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
