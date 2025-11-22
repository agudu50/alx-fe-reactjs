import { useState } from 'react'
import Search from './components/Search'
import { fetchUserData } from './services/githubService'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

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
    <Search onSearch={handleSearch} />
   </div>
  )
}

export default App;
