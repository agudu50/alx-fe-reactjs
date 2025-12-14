import { useParams } from "react-router-dom";

const UserPost = () => {
  const { postId } = useParams();
  return <h3>Viewing Post ID: {postId}</h3>;
};

export default UserPost;
