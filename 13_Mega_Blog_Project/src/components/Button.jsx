// Creating a button component so that using this component whereever needed
import React from 'react'

function Button(
    {
        children,
        type = 'button',
        bgColor = 'bg-blue-600',
        textColor = 'text-white',
        className = '', // Here the we can pass the custom style other than the by default then we can do it
        ...props

    }
) {
  return (
    <button className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button