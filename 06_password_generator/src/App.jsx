import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  // Creating all the states that will be changing or updating in the webPage
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [splCharAllowed, setsplCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  // Now, to enhance the UI or user experience we can take a reference of the input text i.e. password
  const passRef = useRef(null);
  

  // Creating a method using the useCallback() hook to avoid re-rendering of the page by using the memoization concept in which we store the method or function in cache and then uses that function where ever needed by this we do not re-render the function again and again.

  // Now useCallback() takes two parameters first is a function, second are the dependencies.
  // fn: The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the dependencies have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.

  // dependencies: The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison algorithm.
  
  // In short the dependencies are the array of values that forces the function to run.
  // useCallback() dependencies optimizes the operations
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (splCharAllowed) str += "(?=.*[!@#$%^&*]){}"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass)
  }, [length, numberAllowed, splCharAllowed, setPassword]);

  const copyToClipboard = useCallback(()=>{
    passRef.current?.select();
    setCopyButtonText("Copied!")

    // Now, to store copy the password by clicking on the button copy to the clipboard can be done using the window.
    window.navigator.clipboard.writeText(password);
  }, [password])

  // useEffect() is a React Hook that lets you synchronize a component with an external system. useEffect() is used is there is some change in the dependencies provided below then re-run the function call provided in the callback of it.
  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, splCharAllowed, passwordGenerator])

  useEffect(() => {
    setCopyButtonText("Copy");
  }, [length, numberAllowed, splCharAllowed])
  return (
    <>
      <h1 className="text-4xl font-bold text-center m-12">Password Generator</h1>
      <div className='w-2/4 h-auto mx-auto rounded-xl p-8 my-8 text-black text-bold backdrop-sepia-0 bg-white/60 flex flex-wrap justify-center align-center overflow-hidden shadow-xl'>
        <input ref={passRef} type="text" value={password} placeholder="Password" className='p-2 outline-none w-80' readOnly/>
        <button className='bg-orange-400 p-3' onClick={copyToClipboard}>{copyButtonText}</button>
        <div className='flex flex-wrap gap-3 justify-center align-center my-3 py-2'>
        <div className='flex justify-center align-center'>
          <label htmlFor="range">Length({length})</label>
          <input type="range" id="range" min={8} max={32} value={length} className='cursor-pointer p-2' onChange={(e)=>{
            setLength(e.target.value)
          }}/>
        </div>
        <div className='flex flex-wrap justify-center align-center gap-x-1 p-1'>
          <label htmlFor="numCheck">Numbers</label>
          <input type="checkbox" id="numCheck" defaultChecked={numberAllowed} onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}/>
        </div>
        <div className='flex flex-wrap justify-center align-center gap-x-1 p-1'>
          <label htmlFor="splCheck">Special Characters</label>
          <input type="checkbox" id="splCheck" defaultChecked={splCharAllowed} onChange={()=>{
            setsplCharAllowed((prev) => !prev)
          }}/>
        </div>
      </div>
      </div>

      
    </>
  )
}

export default App
