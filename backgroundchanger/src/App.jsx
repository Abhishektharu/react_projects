import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-100 " style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center  ">
        <button
        onClick={()=> setColor('red')}
        className='outline-none px-4 py-1 text-white'
         style={{backgroundColor: "red"}}>Red</button>

         
        <button
        onClick={()=> setColor('yellow')}
        className='outline-none px-4 py-1 text-white'
         style={{backgroundColor: "yellow"}}>yellow</button>

         
        <button
        onClick={()=> setColor('green')}
        className='outline-none px-4 py-1 text-white'
         style={{backgroundColor: "green"}}>green</button>

         
        <button
        onClick={()=> setColor('blue')}
        className='outline-none px-4 py-1 text-white'
         style={{backgroundColor: "blue"}}>blue</button>

         
        <button
        onClick={()=> setColor('black')}
        className='outline-none px-4 py-1 text-white'
         style={{backgroundColor: "black"}}>black</button>
      </div>
    </div>
  )
}

export default App
