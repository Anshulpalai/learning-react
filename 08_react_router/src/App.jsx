import './App.css'
import { Outlet } from 'react-router-dom'
import  Header  from "./components/Header/Header.jsx"
import  Footer  from "./components/Foot/Footer.jsx"

function App() {


  return (
    <>
      <Header />
      {/* The Outlet component is very much helpful in changing the content. Wherever it is given that will be changed in the UI as per the need and rest will remain same. In our case Header and Footer will remain same and Outlet that is center content will be changing */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
