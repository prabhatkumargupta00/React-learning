

import { useState } from "react";
import "./app.css"
function App() {

  // Using simple variables
  // let Counter = 75;
  // const IncValue = ()=>{
  //   console.log("value added", Counter)
  //   Counter += 1;
  // }

  // const DecValue =()=>{
  //   Counter -= 1;
  //   console.log("value removed", Math.random())
  // }

  // Assignment task : Add logic so that the value always lies within the range of 0 to 20.

  // Using useState hook
  const [counter, setCounter] = useState(0);

  const IncValue = () => {
    if (counter == 20) setCounter(20);
    else setCounter(counter+1);
    // console.log("value added", counter)
  }
  const DecValue = () => {
    if(counter == 0) setCounter(0);
    else setCounter(counter-1);
    // console.log("value added", counter)
  }
  
  return(
    <>
      <h1>Counter : mini project</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={IncValue} >Increase value </button>
      <br />
      <br />
      <button onClick={DecValue}>Decrease value</button>
    </>
  )
}

export default App
