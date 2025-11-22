import { useState } from "react";

function Search({ onSearch }) {
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [minRepo, setMinRepo] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // await parent handler in case it returns a promise with data
    const res = await onSearch({
      userName,
      location,
      minRepo,
    });

    // store result for local display if provided
    if (res) setResults((prev) => [res, ...prev]);
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Username */}
        <div>
          <label className="block font-medium">Username</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 mt-1"
            placeholder="Enter GitHub username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium">Location (optional)</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 mt-1"
            placeholder="e.g. Ghana, Accra"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Minimum Repo Count */}
        <div>
          <label className="block font-medium">Minimum Repositories (optional)</label>
          <input
            type="number"
            className="w-full border rounded-lg p-2 mt-1"
            placeholder="e.g. 10"
            value={minRepo}
            onChange={(e) => setMinRepo(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 mt-4 text-white py-2 rounded-lg hover:bg-blue-200 transition"
        >
          Search
        </button>
      </form>
      {/* render results if any (uses && and map) */}
      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((r, idx) => (
            <div key={idx} className="p-3 border rounded">
              <p className="font-medium">{r.userName || r.login || 'Result'}</p>
              <p className="text-sm text-gray-600">{r.location || r.html_url || ''}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
