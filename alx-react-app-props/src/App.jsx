import { useState } from 'react'
import UserContext from './components/UserContext';
import Footer from './components/Footer';
import './App.css'

import ProfilePage from './components/ProfilePage';

function App() {
 
  const [userData, setUserData] = useState({ name: "John Doe", email: "john@example.com" });
  

  return (
    <>
      <UserContext.Provider value={userData}>
       <ProfilePage />
      </UserContext.Provider>
       <Footer />
    </>
  )
}

export default App
