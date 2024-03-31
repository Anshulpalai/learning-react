import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let cardTitle1 = "About Windows";
  let cardTitle2 = "About Mac"
  let arr = [1, 2, 3, 4, 5]

  // To mention classes in the html we use "--- className ---" instead of "--- class ---" because class is a reserved keyword in javascript.

  return (
    <>
     <h1 className="text-3xl font-bold bg-green-600 p-4 rounded-xl mb-5">
      Tailwind CSS And Props in React
    </h1>
    <div className='flex gap-3 flex-wrap'>
    <Card title={cardTitle1} /> {/* We can pass array and objects as well in it as a prop: myArr = {arr} */}
    <Card title={cardTitle2}/>
    </div>
    </>
  )
}

export default App
