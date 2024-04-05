// Creating a user context which means creating a  global variable which can be used by the specific components for which the context has been!

//Context gives you a major thing that is provider, as the context is providing variables to the component. We use context as a wrapper, what does that mean:
{/* <UserContext>
    <Login />
    <Card />
</UserContext> */ }
// Now, in the above code the components have the access to the global variable declared in the UserContext  as it is wrapped in this context. For that pupose we have to create an another file called UserContextProvider.jsx

import React from "react"

const UserContext = React.createContext();

export default UserContext;