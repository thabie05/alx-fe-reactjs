import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Counter from './components/Counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      background: "linear-gradient(red, blue)",
      border: "1px solid gray", 
      borderRadius: "50px"
       }}>
      
      <WelcomeMessage />
      <UserProfile
      name="Alice"
      age="25"
      bio="Loves hiking and photography"
       />
       <Counter />
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;
