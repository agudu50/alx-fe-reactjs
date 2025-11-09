import { useState } from 'react'
import UserContext from './components/UserContext';

import Footer from './components/Footer';

import './App.css'
import { GestureProvider } from './../../alx-react-app-new/node_modules/@types/react/experimental.d';
import ProfilePage from './components/ProfilePage';

function App() {
  const [count, setCount] = useState(0)

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
