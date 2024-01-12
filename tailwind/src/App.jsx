import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dashboard from './components/dashboard'
import Example from './components/Example'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <dashboard />
    <Example username= "new user "/>
  )
}

export default App
