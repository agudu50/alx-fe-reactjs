import { Link } from "react-router-dom";
import Profile from "../components/Profile"
import UserPost from "../components/UserPost";

const Home = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>Welcome to the Home Page</h1>
      <p>
        This is the main landing page of our React application. You can navigate
        to different sections using the links below.
      </p>

      <nav style={{ margin: "1.5rem 0" }}>
        <Link to="./profile" style={{ marginRight: "1rem", color: "blue" }}>
          Go to Profile
        </Link>
        <Link to="/posts" style={{ color: "blue" }}>
          View Posts
        </Link>
      </nav>

      <section>
        <h3>About This App</h3>
        <p>
          This app demonstrates advanced routing in React, including nested
          routes, dynamic routes, and protected routes. Explore the different
          pages to see how navigation works with React Router.
        </p>
      </section>

      <section>
        <h3>Quick Tips</h3>
        <ul>
          <li>Use the links above to navigate between pages.</li>
          <li>Protected routes require authentication to access.</li>
          <li>Dynamic routes allow you to access content based on parameters.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
