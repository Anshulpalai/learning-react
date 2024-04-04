import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Home, About, Contact, User, Github} from './components/index.jsx'


// First way to create router
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <App />,
//     children: [
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "github",
//         element: <Github />
//       }
//     ]
//   }
// ])

// Second way to create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='github' element={<Github />}/>
      {/* For any other route using the below code */}
      <Route path='user/:id' element={<User />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* All data router objects are passed to this component to render your app and enable the rest of the data APIs. This component takes only one prop and that is router. This router is then responsible for enabling all the routes.*/}
    {/* There are two ways to initialize router both the ways are explained above */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
