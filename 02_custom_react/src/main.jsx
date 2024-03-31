import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// 1. According to the flow structure, <App /> is just a function that returns the html which is then render by "--- main.jsx ---". Using this theory and writing the function directly in the "--- main.jsx ---".

function App2(){
  return(
    <h2>Hello World in App2 function! Directly from "---- main.jsx -----"</h2>
  )
}

// 2. Now checking that if we are rendering a function which is basically a function call but in jsx variant, now trying to call the function in javascript variant and see that whether it will render or not? For that instead of writing "--- <App2 /> ---" write "--- {App2()} ---". We have to use "{}" because the file format is of jsx. But this not the right convention but yes with this also you can run it.

// 3. If we say that the react element that we want to inject in the web page at the end of day gets converted into an object then can we directly render the  object that we create in the "---- customReact.js -----"? Lets see:

// Above will throw an error
const reactElement = {
  type: "a",
  props: {
      href: "https://google.com",
      target: "_blank"
  },
  children: "Click here to visit Google"
}


// 4. Now creating an another version of element
const anotherElement = (<a href="https://google.com" target='_blank'>Visit Google!</a>)

// 5. The code in 3. is not working because of the wrong syntax as it will not get convert into the tree


// 6. Using "--- React.createElement() ---" to create the element using the react syntax.
const anotherReactEle = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_blank"
  },

  "Click me to visit google"
)

// 7. Using the below way to render the variables in the page.
let username = "Anshul Palai" // To render this we can write this in the curly braces that means any js code can be rendered in the {} braces. 
// But the curly braces can only contain the evaluation expression. Now there will be a question, why we cannot write everything in the {} while rendering. Now, how this varible is passed in the element created using React.createElement():

const injectingVar = React.createElement('span',{}, "Injection Variables in the page ", username)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    {/* 1. Below will also work*/}
    <App2 />

    {/* 2. This will work but no the right to way of convention*/}
    {App2()}

    {/* 3. Throw an error*/}
    {/* {reactElement} */}

    {/* 4. Below will work*/}
    {anotherElement}

    {/* 6. */}
    {anotherReactEle}

    {/* 7. Rendering any javascript in the curly braces */}
    {`Hi! My name is ${username}`}

    {injectingVar}
  </React.StrictMode>,
)
