import React, { useState } from "react"
import UserContext from "./UserContext"


// In below the children is a concept which is similar to Outlet, which is used to update the stuff. Anything that is passed in children will get updated.
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        // Here ".Provider" is used for providing the value to the children and the value can be user or setUser as per the requirement.
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;