import axios from "axios";

export const fetchUserData = async (userName, location, minRepos) => {
  // Build the search query dynamically
  let query = "";

  // Username (text search)
  if (userName) {
    query += `${userName} `;
  }

  // Location filter
  if (location) {
    query += `location:${location} `;
  }

  // Minimum repositories
  if (minRepos) {
    query += `repos:>=${minRepos} `;
  }

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query.trim()
  )}`;

  const response = await axios.get(url);

  // Search API returns an array of users inside items[]
  return response.data.items;
};
