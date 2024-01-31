import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import { useState } from 'react'

function Login() {

    // use state to handle username and password
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    //to send  the global user value from state UserContextProvider.jsx 
    const [setUser] = useContext(UserContext);


    const handleLogin = (e)=>{
      e.preventDefault();
      setUser({username, password});
    }
  return (
    <div>
        <h1>Login </h1>
        <input type='text' 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='Enter username ' />
        <input type='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value) }
        placeholder='Enter password' />
        <button onClick={handleLogin}>Submit</button>
    </div>
  )
}

export default Login