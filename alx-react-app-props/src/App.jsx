import { useState } from 'react'
import UserContext from './components/UserContext';

import Footer from './components/Footer';

import './App.css'

import ProfilePage from './components/ProfilePage';

function App() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState({ name: "John Doe", email: "john@example.com" });
  

  return (
    <>
      <UserContext.GestureProvider>
       <ProfilePage userData={{ name, email }} />
      </UserContext.GestureProvider>
       <Footer />
    </>
  )
}

export default App
