import { useState } from "react"

function App() {
  const [color, setColor] = useState("#54EDf2")
  return (
    <>
      
      <div className="w-full h-screen duration-200 flex flex-wrap justify-center"style={{backgroundColor: color}}>
      <h1 className="w-2/4 h-20 text-4xl font-bold text-white backdrop-sepia-0 bg-white/40 text-center rounded-xl tracking-wider px-4 py-3 m-5 drop-shadow-xl">Welcome to My Background Changer</h1>
      </div>
      
      <div className="fixed flex flex-wrap justify-center bottom-24 inset-x-2/4 drop-shadow-xl">
        <div className="flex flex-wrap gap-5 justify-center shadow-xl bg-white rounded-xl px-4 py-3">
          <button className="bg-red-500 outline-none px-4 py-2 rounded-xl shadow-xl" onClick={()=> setColor("#ef4444")}>Red</button>
          <button className="bg-green-500 outline-none px-4 py-2 rounded-xl shadow-xl" onClick={()=> setColor("#22c55e")}>Green</button>
          <button className="bg-teal-500 outline-none px-4 py-2 rounded-xl shadow-xl" onClick={()=> setColor("#14b8a6")}>Teal</button>
          <button className="bg-yellow-500 outline-none px-4 py-2 rounded-xl shadow-xl" onClick={()=> setColor("#eab308")}>Yellow</button>
          <button className="bg-pink-500 outline-none px-4 py-2 rounded-xl shadow-xl" onClick={()=> setColor("#ec4899")}>Pink</button>
          <button className="bg-purple-500 outline-none px-4 py-2 rounded-xl shadow-xl" onClick={()=> setColor("#a855f7")}>Purple</button>
        </div>
      </div>
    </>
  )
}

export default App
