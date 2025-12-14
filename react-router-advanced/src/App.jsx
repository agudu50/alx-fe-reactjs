import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileDetails from "./pages/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import UserPost from "./components/UserPost.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const isAuthenticated = false; // Change to true to simulate login

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Protected Profile Route */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        }
      >
        {/* Nested Routes */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>

      {/* Dynamic Routing for posts */}
      <Route path="/post/:postId" element={<UserPost />} />

      {/* Fallback route */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
