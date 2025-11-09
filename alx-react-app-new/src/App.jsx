import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter';


import Footer from './components/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       
      <div className="logos">
        <WelcomeMessage />
      <Counter />
      
       
      
      </div>
       <Footer />
    </>
  )
}

export default App
