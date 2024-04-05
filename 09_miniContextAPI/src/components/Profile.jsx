import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    // Using the user to fetch the details in login we used setUser to post the data.
    const {user} = useContext(UserContext)
    if (!user) return <div>Please login</div>

    return <div>Welcome! {user.username}</div>
}

export default Profile