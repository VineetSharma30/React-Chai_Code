import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = ()=>{
    console.log(counter)
    // counter++
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)

    /*
    Even after repeating same function setCounter the value of counter will only increase by 1 
    This is 'cause :
    1. React batches state updates
      - Inside the same event (like a button click), React groups all setState calls together for performance.
      - So, all four calls see the same old value of counter.
      - If counter was 15, each call calculates 15 + 1 = 16.
      - React says: “Okay, you want 16. Got it. I won’t apply 15 → 16 → 17 → 18 → 19, I’ll just apply the last one: 16.”

    2. State updates are asynchronous
      - React doesn’t update counter immediately after setCounter.
      - Instead, it schedules an update and applies it after the event handler finishes.
    */

    // If you want each call to work on the latest state, use the function form:
    
    setCounter(prev => prev + 1) // prev = 15 → 16
    setCounter(prev => prev + 1) // prev = 16 → 17
    setCounter(prev => prev + 1) // prev = 17 → 18
    setCounter(prev => prev + 1) // prev = 18 → 19

    // Thus counter will directly becomes 19 from 15 .

  }

  const removeValue = ()=>{
    console.log(counter)
    // counter--
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value </button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
