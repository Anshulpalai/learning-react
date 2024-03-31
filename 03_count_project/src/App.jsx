import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Function to create a counter:
function App(){
  let [counter, setCount] = useState(0); // setCount is a function that takes a callback that can be used for getting the state information.

  function addCount(){
    setCount(counter + 1);

    // From here an interview question arises if the interviewer says that setCount(counter + 1) is running multiple times as shown below will that be effecting the counter
    // setCount(counter + 1); 
    // setCount(counter + 1); 
    // setCount(counter + 1); 
    // setCount(counter + 1);
    
    // Will the above code will set the counter value as 5 on single click then on the next click will the value be 10?
    // The answer is NO! Because useState() updates the value in batches, so useState sees that each operation is same so rather that passing it multiple time is does only single time. 

    // But i want to increment the value by 5 then what should I do?
    // For that use below code:
    // As the setCount takes a callback then, the parameter name be anything
    // setCount((prevCount => prevCount + 1));
    // setCount((prevCount => prevCount + 1));
    // setCount((prevCount => prevCount + 1));
    // setCount((prevCount => prevCount + 1));


  }

  function removeCount(){
    setCount(counter - 1);
  }





// Function for creating a counter that does not go below 0 and does not go beyond 20
// function App() {

//   let [counter, setCounter] = useState(0);

//   function addCount() {
//     if (counter >= 20) {
//       alert("Cannot perform the operation");
//     } else {
//       setCounter(prevCounter => prevCounter + 1);
//     }
//   }

//   function removeCount() {
//     if (counter <= 0) {
//       alert("Cannot perform the operation");
//     } else {
//       setCounter(prevCounter => prevCounter - 1);
//     }
//   }

  return (
    <>
      <h1>Counter</h1>
      <h3>A Basic React App that counts the click!</h3>
      <div id='buttons'>
        <button id="Btn" onClick={addCount}><img src="/icons8-plus-64.png" alt="Plus" /></button>
        <h2>Clicked: {counter}</h2>
        <button id="Btn" onClick={removeCount}><img src="/icons8-minus-64.png" alt="Minus" /></button>
      </div>
    </>
  )
}

export default App
