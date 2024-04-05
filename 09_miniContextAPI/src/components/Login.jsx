import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Now to fetch the values from the userContext and passing it in the component we have a hook called useContext.
    const {setUser} = useContext(UserContext)

    // Method for handling the submit button
    const handleSubmit = (e) =>{
        // Why preventDefault? Because by default on clicking submit the values get to the some url using the post method inorder to prevent that we use preventDefault.
        e.preventDefault()
        // To send the data.
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Username' style={{margin: "4px", padding:"4px"}}/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' style={{margin: "4px", padding:"4px"}}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login