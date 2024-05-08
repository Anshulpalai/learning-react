// Creating a container component in which the styling will remain same only the content will get updated
import React from 'react'

function Container({ children }) {
    // Children is nothing just a name given to the content that will be changing just like outlet.
    return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;    
}

export default Container;