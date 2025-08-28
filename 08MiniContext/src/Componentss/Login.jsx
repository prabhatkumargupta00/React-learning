import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const{setUser} = useContext(UserContext)



    const handleClick = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }


  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
        {' '}
        <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}  />
          <button onClick={handleClick}> Login </button>

    </div>
  )
}

export default Login