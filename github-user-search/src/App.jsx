import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);   // LIST of users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async ({ userName, location, minRepos }) => {
    try {
      setLoading(true);
      setError(false);
      setUsers([]);

      const results = await fetchUserData(userName, location, minRepos);
      setUsers(results);

    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <Search onSearch={handleSearch} />

      {/* Loading */}
      {loading && <p className="text-blue-500 mt-4">Loading</p>}

      {/* Error */}
      {error && <p className="text-red-500 mt-4">Looks like we cant find the user</p>}

      {/* Results */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow bg-white">
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3 className="text-center font-semibold mt-2">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-600 underline mt-1"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
