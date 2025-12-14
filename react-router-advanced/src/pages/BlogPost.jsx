import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // dynamic parameter

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Blog Post {id}</h2>
      <p>This is the content of blog post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
