import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
      {/* Here we will pass the components and the components passed here will have the access to the userContextProvider variables or data*/}
      <Login />
      {" "}{" "}
      <Profile />
    </UserContextProvider>
  )
}

export default App
