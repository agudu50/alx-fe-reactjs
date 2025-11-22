import { useState } from 'react'
import Search from './components/Search'
import { fetchUserData } from './services/githubService'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async(userName) => {
    try {
      setLoading(true);
      setError(false);
      setUser(null);

      const data =await fetchUserData(userName);
      setUser(data);

    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
   <div>
    <Search onSearch={handleSearch}/>
    {/* Loading State */}
    {loading && <p>Loading...</p>}
    
    {/* Error State */}
    {error && <p>Looks like we can't find the user</p>}

    {/*Success State */}
    {user && (
      <div>
        <img src={user.avatar_url} alt= "GitHub User Avatar" width="120"/>
        <h2>{user.login}</h2>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
      </div>
    )}
   </div>
  )
}

export default App;
